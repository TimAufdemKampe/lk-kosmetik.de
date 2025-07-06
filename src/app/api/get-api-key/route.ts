import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Sichere Session-basierte API-Key-Verwaltung
const sessionTokens = new Map<string, { apiKey: string; expires: number }>();

// Cleanup abgelaufener Tokens (alle 10 Minuten)
setInterval(
  () => {
    const now = Date.now();
    for (const [token, data] of sessionTokens.entries()) {
      if (now > data.expires) {
        sessionTokens.delete(token);
      }
    }
  },
  10 * 60 * 1000
);

export async function POST() {
  try {
    // Strenge Origin-Prüfung
    const headersList = await headers();
    const origin = headersList.get('origin');
    const referer = headersList.get('referer');
    const userAgent = headersList.get('user-agent');

    const allowedOrigins = [
      'http://localhost:3000',
      'https://lk-kosmetik.de',
      'https://www.lk-kosmetik.de',
    ];

    // Prüfe Origin
    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid Origin' },
        { status: 403 }
      );
    }

    // Prüfe Referer als zusätzliche Sicherheit
    if (
      !referer ||
      !allowedOrigins.some((allowed) => referer.startsWith(allowed))
    ) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid Referer' },
        { status: 403 }
      );
    }

    // Bot-Schutz
    if (
      !userAgent ||
      userAgent.includes('bot') ||
      userAgent.includes('crawler')
    ) {
      return NextResponse.json(
        { error: 'Unauthorized - Bot detected' },
        { status: 403 }
      );
    }

    const apiKey = process.env.INTERNAL_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API Key nicht konfiguriert' },
        { status: 500 }
      );
    }

    // Generiere ein sicheres Session-Token
    const sessionToken = crypto.randomUUID();
    const expires = Date.now() + 5 * 60 * 1000; // 5 Minuten gültig

    sessionTokens.set(sessionToken, { apiKey, expires });

    return NextResponse.json({
      sessionToken,
      expiresIn: 5 * 60 * 1000, // 5 Minuten in Millisekunden
    });
  } catch (error) {
    console.error('Fehler beim Erstellen des Session-Tokens:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const sessionToken = url.searchParams.get('token');

    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Session Token fehlt' },
        { status: 400 }
      );
    }

    const sessionData = sessionTokens.get(sessionToken);
    if (!sessionData) {
      return NextResponse.json(
        { error: 'Ungültiges Session Token' },
        { status: 401 }
      );
    }

    if (Date.now() > sessionData.expires) {
      sessionTokens.delete(sessionToken);
      return NextResponse.json(
        { error: 'Session Token abgelaufen' },
        { status: 401 }
      );
    }

    // Token nach Verwendung löschen (One-Time-Use)
    sessionTokens.delete(sessionToken);

    return NextResponse.json({ apiKey: sessionData.apiKey });
  } catch (error) {
    console.error('Fehler beim Abrufen des API-Keys:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}
