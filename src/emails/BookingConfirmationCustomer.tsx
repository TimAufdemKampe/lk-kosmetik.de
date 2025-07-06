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

interface BookingConfirmationCustomerProps {
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
}

export const BookingConfirmationCustomer = ({
  customerName,
  selectedServices,
  times,
  totalPrice,
  customerInfo,
}: BookingConfirmationCustomerProps) => {
  const previewText = `Terminanfrage erhalten - Wir melden uns bald bei dir!`;

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
            <Heading style={h1}>Vielen Dank für deine Terminanfrage!</Heading>

            <Text style={text}>Liebe/r {customerName},</Text>

            <Text style={text}>
              vielen Dank für dein Vertrauen und deine Terminanfrage bei LK
              Kosmetik! Ich habe deine Anfrage erhalten und freue mich schon
              darauf, dich bei mir im Studio begrüßen zu dürfen.
            </Text>

            <Text style={text}>
              Ich werde mich in den nächsten Stunden bei dir melden, um
              gemeinsam den perfekten Termin für dich zu finden. Dabei schauen
              wir, dass alles optimal zu deinen Wünschen und Zeitvorstellungen
              passt.
            </Text>

            <Section style={serviceSection}>
              <Heading style={h2}>Ihre gewünschten Leistungen:</Heading>
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
                  Geschätzter Gesamtpreis: {totalPrice.toFixed(2)}€
                </strong>
              </Text>
            </Section>

            <Section style={timeSection}>
              <Heading style={h2}>Ihre verfügbaren Zeiten:</Heading>
              {Object.entries(times).map(([day, time]) => (
                <Text key={day} style={timeItem}>
                  <strong>{day}:</strong> {time.from} - {time.to} Uhr
                </Text>
              ))}
            </Section>

            <Section style={contactSection}>
              <Heading style={h2}>Ihre Kontaktdaten:</Heading>
              <Text style={contactItem}>
                <strong>E-Mail:</strong> {customerInfo.email}
              </Text>
              <Text style={contactItem}>
                <strong>Telefon:</strong> {customerInfo.phone}
              </Text>
              <Text style={contactItem}>
                <strong>Bevorzugte Kontaktmethode:</strong>{' '}
                {customerInfo.preferredContactMethod === 'email'
                  ? 'E-Mail'
                  : 'Telefon'}
              </Text>
              {customerInfo.additionalNotes && (
                <Text style={contactItem}>
                  <strong>Ihre Notizen:</strong> {customerInfo.additionalNotes}
                </Text>
              )}
            </Section>

            <Text style={text}>
              Ich werde mich über deine bevorzugte Kontaktmethode (
              {customerInfo.preferredContactMethod === 'email'
                ? 'E-Mail'
                : 'Telefon'}
              ) bei dir melden.
            </Text>

            <Text style={text}>
              Falls du bis dahin noch Fragen hast oder dir etwas einfällt, melde
              dich gerne jederzeit bei mir!
            </Text>

            <Text style={signature}>
              Ich freue mich auf dich!
              <br />
              Herzliche Grüße,
              <br />
              Lea von LK Kosmetik
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              LK Kosmetik |{' '}
              <Link href='https://lk-kosmetik.de' style={link}>
                lk-kosmetik.de
              </Link>
            </Text>
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

const text = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
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

const contactSection = {
  margin: '20px 0',
};

const contactItem = {
  color: '#333333',
  fontSize: '14px',
  margin: '0 0 8px',
};

const signature = {
  color: '#333333',
  fontSize: '16px',
  margin: '30px 0 0',
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

const link = {
  color: '#bb9167',
  textDecoration: 'underline',
};

export default BookingConfirmationCustomer;
