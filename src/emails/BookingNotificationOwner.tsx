import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface BookingNotificationOwnerProps {
  customerName: string;
  selectedServices: Array<{
    name: string;
    description: string;
    price: string;
    addons?: string[];
  }>;
  times: { [key: string]: { from: string; to: string } };
  totalPrice: number;
  customerInfo: {
    email: string;
    phone: string;
    preferredContactMethod: 'email' | 'phone';
    additionalNotes?: string;
  };
  submittedAt: Date;
}

export const BookingNotificationOwner = ({
  customerName,
  selectedServices,
  times,
  totalPrice,
  customerInfo,
  submittedAt,
}: BookingNotificationOwnerProps) => {
  const previewText = `Neue Terminanfrage von ${customerName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src='https://lk-kosmetik.de/logo.png'
              width='150'
              height='auto'
              alt='LK Kosmetik'
              style={logo}
            />
          </Section>

          <Section style={content}>
            <Heading style={h1}>Neue Terminanfrage erhalten</Heading>

            <Text style={urgentText}>
              Neue Buchungsanfrage eingegangen am{' '}
              {submittedAt.toLocaleDateString('de-DE')} um{' '}
              {submittedAt.toLocaleTimeString('de-DE')}
            </Text>

            <Section style={customerSection}>
              <Heading style={h2}>Kundendaten:</Heading>
              <Text style={customerItem}>
                <strong>Name:</strong> {customerName}
              </Text>
              <Text style={customerItem}>
                <strong>E-Mail:</strong> {customerInfo.email}
              </Text>
              <Text style={customerItem}>
                <strong>Telefon:</strong> {customerInfo.phone}
              </Text>
              <Text style={customerItem}>
                <strong>Bevorzugter Kontakt:</strong>{' '}
                {customerInfo.preferredContactMethod === 'email'
                  ? 'E-Mail'
                  : 'Telefon'}
              </Text>
              {customerInfo.additionalNotes && (
                <Section style={notesSection}>
                  <Text style={notesTitle}>Kundennotizen:</Text>
                  <Text style={notesText}>
                    &#34;{customerInfo.additionalNotes}&#34;
                  </Text>
                </Section>
              )}
            </Section>

            <Section style={serviceSection}>
              <Heading style={h2}>Gewünschte Leistungen:</Heading>
              {selectedServices.map((service, index) => (
                <Section key={index} style={serviceItem}>
                  <Text style={serviceName}>{service.name}</Text>
                  <Text style={serviceDescription}>{service.description}</Text>
                  <Text style={servicePrice}>{service.price}</Text>
                  {service.addons && service.addons.length > 0 && (
                    <Text style={addons}>
                      Zusätzlich: {service.addons.join(', ')}
                    </Text>
                  )}
                </Section>
              ))}
              <Hr style={hr} />
              <Text style={totalPriceStyle}>
                <strong>
                  Geschätzter Gesamtumsatz: {totalPrice.toFixed(2)}€
                </strong>
              </Text>
            </Section>

            <Section style={timeSection}>
              <Heading style={h2}>Verfügbare Zeiten:</Heading>
              {Object.entries(times).map(([day, time]) => (
                <Text key={day} style={timeItem}>
                  <strong>{day}:</strong> {time.from} - {time.to} Uhr
                </Text>
              ))}
            </Section>

            <Section style={quickContactSection}>
              <Heading style={h3}>Schnellkontakt:</Heading>
              <Text style={preferredContactHint}>
                Bevorzugter Kontaktweg:{' '}
                <strong>
                  {customerInfo.preferredContactMethod === 'email'
                    ? 'E-Mail'
                    : 'Telefon'}
                </strong>
              </Text>
              <div style={buttonContainer}>
                <Link
                  href={`mailto:${customerInfo.email}`}
                  style={
                    customerInfo.preferredContactMethod === 'email'
                      ? primaryButton
                      : secondaryButton
                  }
                >
                  E-Mail senden
                </Link>
                <Link
                  href={`tel:${customerInfo.phone}`}
                  style={
                    customerInfo.preferredContactMethod === 'phone'
                      ? primaryButton
                      : secondaryButton
                  }
                >
                  Anrufen: {customerInfo.phone}
                </Link>
              </div>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>LK Kosmetik Buchungssystem</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f9f7f4',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#ffffff',
  padding: '20px',
  textAlign: 'center' as const,
  borderRadius: '8px 8px 0 0',
};

const logo = {
  margin: '0 auto',
};

const content = {
  backgroundColor: '#ffffff',
  padding: '20px 40px',
  borderRadius: '0 0 8px 8px',
};

const h1 = {
  color: '#bb9167',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px',
  textAlign: 'center' as const,
};

const h2 = {
  color: '#bb9167',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '30px 0 15px',
};

const h3 = {
  color: '#bb9167',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '20px 0 10px',
};

const urgentText = {
  color: '#bb9167',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#f7f2ee',
  padding: '15px',
  borderRadius: '8px',
  margin: '0 0 20px',
  textAlign: 'center' as const,
  border: '1px solid #ecdcc7',
};

const customerSection = {
  backgroundColor: '#f7f2ee',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px 0',
  border: '1px solid #ecdcc7',
};

const customerItem = {
  color: '#333333',
  fontSize: '14px',
  margin: '0 0 8px',
};

const notesSection = {
  backgroundColor: '#ffffff',
  padding: '15px',
  borderRadius: '6px',
  margin: '15px 0 0',
  border: '1px solid #ecdcc7',
};

const notesTitle = {
  color: '#bb9167',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 8px',
};

const notesText = {
  color: '#333333',
  fontSize: '14px',
  fontStyle: 'italic',
  margin: '0',
};

const serviceSection = {
  backgroundColor: '#f7f2ee',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px 0',
  border: '1px solid #ecdcc7',
};

const serviceItem = {
  margin: '0 0 15px',
};

const serviceName = {
  color: '#333333',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 5px',
};

const serviceDescription = {
  color: '#666666',
  fontSize: '14px',
  margin: '0 0 5px',
};

const servicePrice = {
  color: '#bb9167',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 5px',
};

const addons = {
  color: '#888888',
  fontSize: '12px',
  fontStyle: 'italic',
  margin: '0',
};

const hr = {
  borderColor: '#ecdcc7',
  margin: '20px 0',
};

const totalPriceStyle = {
  color: '#333333',
  fontSize: '18px',
  textAlign: 'right' as const,
  margin: '10px 0 0',
};

const timeSection = {
  margin: '20px 0',
};

const timeItem = {
  color: '#333333',
  fontSize: '14px',
  margin: '0 0 8px',
};

const quickContactSection = {
  backgroundColor: '#f7f2ee',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px 0',
  border: '1px solid #ecdcc7',
};

const preferredContactHint = {
  color: '#666666',
  fontSize: '14px',
  margin: '0 0 15px',
  fontStyle: 'italic',
};

const buttonContainer = {
  display: 'flex',
  gap: '10px',
  flexDirection: 'column' as const,
};

const primaryButton = {
  display: 'inline-block',
  backgroundColor: '#bb9167',
  color: '#ffffff',
  padding: '12px 20px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '14px',
  textAlign: 'center' as const,
  margin: '5px 0',
  border: 'none',
};

const secondaryButton = {
  display: 'inline-block',
  backgroundColor: '#ffffff',
  color: '#bb9167',
  padding: '12px 20px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '14px',
  textAlign: 'center' as const,
  margin: '5px 0',
  border: '2px solid #bb9167',
};

const footer = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  textAlign: 'center' as const,
  borderRadius: '8px',
  marginTop: '20px',
};

const footerText = {
  color: '#666666',
  fontSize: '12px',
  margin: '0',
};

export default BookingNotificationOwner;
