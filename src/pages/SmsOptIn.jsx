import { Link } from 'react-router-dom';
import { BRAND, ROUTES, SAND } from '../theme.js';

const SMS_NUMBER = '+1 833-633-6162';
const SMS_NUMBER_TEL = '+18336336162';
const APP_NAME = 'APPtivity';

function Section({ title, children }) {
  return (
    <section
      style={{
        borderTop: `1px solid rgba(31, 77, 58, 0.15)`,
        paddingTop: '1.75rem',
      }}
    >
      <h2 style={{ margin: '0 0 0.75rem', fontSize: '1.125rem', fontWeight: 600, color: BRAND }}>{title}</h2>
      <div style={{ display: 'grid', gap: '0.75rem', fontSize: '0.9375rem', lineHeight: 1.65, color: 'rgba(31, 77, 58, 0.88)' }}>
        {children}
      </div>
    </section>
  );
}

function SampleMessage({ label, children }) {
  return (
    <div
      style={{
        borderRadius: '0.75rem',
        border: `1px solid rgba(31, 77, 58, 0.2)`,
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        padding: '0.875rem 1rem',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'rgba(31, 77, 58, 0.55)',
        }}
      >
        {label}
      </p>
      <p style={{ margin: '0.5rem 0 0', fontSize: '0.9375rem', whiteSpace: 'pre-line', color: BRAND }}>{children}</p>
    </div>
  );
}

const linkStyle = {
  color: BRAND,
  fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
};

export default function SmsOptIn() {
  const year = new Date().getFullYear();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: SAND, color: BRAND }}>
      <header
        style={{
          borderBottom: `1px solid rgba(31, 77, 58, 0.12)`,
          padding: '1rem 1.25rem',
        }}
      >
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Link to={ROUTES.HOME} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', color: BRAND }}>
            <img src="/logo.png" alt="APPtivity" style={{ height: '2rem', width: 'auto' }} />
            <span style={{ fontWeight: 600 }}>APPtivity</span>
          </Link>
          <Link to={ROUTES.HOME} style={{ ...linkStyle, fontWeight: 500, fontSize: '0.9375rem' }}>
            Back to home
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '48rem', margin: '0 auto', padding: '2.5rem 1.25rem 3rem' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(1.5rem, 4vw, 1.875rem)', fontWeight: 700, color: BRAND }}>
          {APP_NAME} SMS Notifications
        </h1>
        <p style={{ margin: '0.75rem 0 0', fontSize: '1rem', lineHeight: 1.6, color: 'rgba(31, 77, 58, 0.8)' }}>
          {APP_NAME} only sends optional <strong>transactional/service</strong> texts after you opt
          in by texting <strong>START</strong> or <strong>Y</strong>. Consent happens from your phone
          — not through a website form.
        </p>

        <div
          style={{
            marginTop: '2rem',
            display: 'grid',
            gap: '1.75rem',
            borderRadius: '1rem',
            border: `1px solid rgba(31, 77, 58, 0.15)`,
            backgroundColor: 'rgba(255, 255, 255, 0.35)',
            padding: '1.5rem',
          }}
        >
          <Section title="About APPtivity">
            <p style={{ margin: 0 }}>
              APPtivity is an activity planning application that helps individuals, families, and groups discover
              meaningful activities, plan together, and stay connected around shared experiences.
            </p>
          </Section>

          <Section title="How to Opt In (by text)">
            <p style={{ margin: 0 }}>Opt in by text — not by a website form:</p>
            <ol style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li>
                Send <strong>START</strong> or <strong>Y</strong> to{' '}
                <a href={`sms:${SMS_NUMBER_TEL}?body=START`} style={linkStyle}>
                  {SMS_NUMBER}
                </a>
                .
              </li>
              <li>
                Or reply <strong>Y</strong> to the consent text from APPtivity when prompted after adding your number.
              </li>
            </ol>
            <p style={{ margin: 0 }}>
              <a
                href={`sms:${SMS_NUMBER_TEL}?body=START`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '2.75rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '0.75rem',
                  backgroundColor: BRAND,
                  color: '#fff',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Open Messages with START
              </a>
            </p>
            <p style={{ margin: 0 }}>
              By texting START or Y, you agree to receive transactional/service SMS from APPtivity
              Labs, LLC / {APP_NAME} for: verification and two-factor authentication codes; account
              notifications; customer care and support replies; delivery and fulfillment notices;
              event, schedule, and reminder notices; and security alerts. These are not marketing or
              promotional messages. Consent is not a condition of purchase.
            </p>
          </Section>

          <Section title="Messages You May Receive">
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li>Verification and two-factor authentication codes</li>
              <li>Account notifications (group invites, account activity)</li>
              <li>Customer care and support replies</li>
              <li>Delivery and fulfillment notices</li>
              <li>Event, schedule, and reminder notices (activities and group plans)</li>
              <li>Security alerts</li>
            </ul>
            <p style={{ margin: 0 }}>
              APPtivity does <strong>not</strong> send promotional or marketing messages under this consent.
            </p>
          </Section>

          <Section title="Message Frequency">
            <p style={{ margin: 0 }}>
              Message frequency varies depending on your account activity, group participation, and notification
              settings. Message and data rates may apply.
            </p>
          </Section>

          <Section title="Help">
            <p style={{ margin: 0 }}>
              Reply <strong>HELP</strong> for assistance, including consent details, STOP instructions, and links to
              these terms.
            </p>
            <SampleMessage label="HELP reply example">
              {APP_NAME} Support: Transactional SMS for verification, account notices, customer care, delivery
              notices, events/reminders, and security alerts. Msg&amp;data rates may apply. Reply STOP to cancel.
              Help: hello@apptivity.online · https://goapptivity.com/sms-opt-in
            </SampleMessage>
          </Section>

          <Section title="Opt Out">
            <p style={{ margin: 0 }}>
              Reply <strong>STOP</strong> at any time to unsubscribe from all APPtivity SMS notifications.
            </p>
            <p style={{ margin: 0 }}>
              After opting out, one confirmation message will be sent and no further SMS messages will be delivered
              unless you text <strong>START</strong> or <strong>Y</strong> again.
            </p>
          </Section>

          <Section title="Confirmation after START or Y">
            <SampleMessage label="Example">
              {APP_NAME}: You’re subscribed to transactional SMS for verification codes, account notifications,
              customer care, delivery notices, event/schedule reminders, and security alerts. Msg&amp;data rates may
              apply. Reply HELP for help, STOP to cancel. https://goapptivity.com/sms-opt-in
            </SampleMessage>
          </Section>

          <Section title="Sample messages (by type)">
            <SampleMessage label="Verification">
              {APP_NAME}: Your verification code is 123456. Do not share this code. Reply STOP to cancel.
            </SampleMessage>
            <SampleMessage label="Account">
              {APP_NAME}: Account notice — you were invited to a group. Reply STOP or HELP.
            </SampleMessage>
            <SampleMessage label="Customer care">
              {APP_NAME}: Support update — we received your request. Reply STOP or HELP.
            </SampleMessage>
            <SampleMessage label="Delivery">
              {APP_NAME}: Delivery/fulfillment update — your request status changed. Reply STOP or HELP.
            </SampleMessage>
            <SampleMessage label="Events / reminders">
              {APP_NAME}: Reminder — your group hike starts tomorrow at 9:00 AM. Reply STOP or HELP.
            </SampleMessage>
            <SampleMessage label="Security">
              {APP_NAME}: Security alert — new sign-in detected. Contact hello@apptivity.online if this wasn’t you.
            </SampleMessage>
          </Section>

          <Section title="Terms & Privacy">
            <p style={{ margin: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="https://www.apptivity.online/terms" style={linkStyle} rel="noopener noreferrer">
                Terms of Service
              </a>
              <a href="https://www.apptivity.online/privacy" style={linkStyle} rel="noopener noreferrer">
                Privacy Policy
              </a>
            </p>
            <p style={{ margin: 0 }}>
              Questions? Email{' '}
              <a href="mailto:hello@apptivity.online" style={linkStyle}>
                hello@apptivity.online
              </a>
              . APPtivity Labs, LLC.
            </p>
          </Section>
        </div>
      </main>

      <footer
        style={{
          borderTop: `1px solid rgba(31, 77, 58, 0.12)`,
          padding: '1.25rem',
          textAlign: 'center',
          fontSize: '0.8125rem',
          color: 'rgba(31, 77, 58, 0.65)',
        }}
      >
        <p style={{ margin: 0 }}>© {year} APPtivity Labs, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
