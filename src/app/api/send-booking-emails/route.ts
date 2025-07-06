import { NextRequest, NextResponse } from 'next/server';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { BookingConfirmationCustomer } from '@/emails/BookingConfirmationCustomer';
import { BookingNotificationOwner } from '@/emails/BookingNotificationOwner';

const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@lk-kosmetik.de';
const OWNER_EMAIL = process.env.OWNER_EMAIL || '';
const INTERNAL_ACCESS_TOKEN =
  process.env.INTERNAL_ACCESS_TOKEN || 'your-secure-token-here';

interface BookingData {
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    preferredContactMethod: 'email' | 'phone';
    additionalNotes?: string;
  };
  selectedServices: Array<{
    name: string;
    description: string;
    price: string;
    addons?: string[];
  }>;
  times: { [key: string]: { from: string; to: string } };
  totalPrice: number;
}

export async function POST(request: NextRequest) {
  try {
    // Authorization check
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization header fehlt' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    if (token !== INTERNAL_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'Ungültiger Access Token' },
        { status: 401 }
      );
    }

    const bookingData: BookingData = await request.json();

    if (!bookingData.customerInfo?.email || !bookingData.customerInfo?.name) {
      return NextResponse.json(
        { error: 'Unvollständige Kundendaten' },
        { status: 400 }
      );
    }

    if (!bookingData.selectedServices?.length) {
      return NextResponse.json(
        { error: 'Keine Services ausgewählt' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const submittedAt = new Date();

    const customerEmailHtml = await render(
      BookingConfirmationCustomer({
        customerName: bookingData.customerInfo.name,
        selectedServices: bookingData.selectedServices,
        times: bookingData.times,
        totalPrice: bookingData.totalPrice,
        customerInfo: bookingData.customerInfo,
      })
    );

    const ownerEmailHtml = await render(
      BookingNotificationOwner({
        customerName: bookingData.customerInfo.name,
        selectedServices: bookingData.selectedServices,
        times: bookingData.times,
        totalPrice: bookingData.totalPrice,
        customerInfo: bookingData.customerInfo,
        submittedAt,
      })
    );

    const emailPromises = [
      transporter.sendMail({
        from: FROM_EMAIL,
        to: bookingData.customerInfo.email,
        subject: 'Ihre Terminanfrage bei LK Kosmetik - Bestätigung erhalten',
        html: customerEmailHtml,
      }),
      transporter.sendMail({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        subject: `Neue Terminanfrage von ${bookingData.customerInfo.name}`,
        html: ownerEmailHtml,
        headers: {
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          Importance: 'high',
        },
      }),
    ];

    await Promise.all(emailPromises);

    return NextResponse.json(
      {
        message: 'E-Mails erfolgreich versendet',
        customerEmail: bookingData.customerInfo.email,
        timestamp: submittedAt.toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Versenden der E-Mails:', error);

    return NextResponse.json(
      {
        error: 'Fehler beim Versenden der E-Mails',
        details: error instanceof Error ? error.message : 'Unbekannter Fehler',
      },
      { status: 500 }
    );
  }
}
