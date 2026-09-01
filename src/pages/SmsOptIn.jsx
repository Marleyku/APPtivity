import { Link } from 'react-router-dom';
import { BRAND, ROUTES, SAND } from '../theme.js';

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
          APPtivity SMS Notifications
        </h1>
        <p style={{ margin: '0.75rem 0 0', fontSize: '1rem', lineHeight: 1.6, color: 'rgba(31, 77, 58, 0.8)' }}>
          How we send text messages, how you opt in, and how you can stop them anytime.
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
            <p style={{ margin: 0 }}>
              Users may choose to receive optional SMS notifications related to their APPtivity account and the
              groups and activities they join.
            </p>
          </Section>

          <Section title="How to Opt In">
            <p style={{ margin: 0 }}>Users opt in by:</p>
            <ol style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li>Creating an APPtivity account.</li>
              <li>Providing a mobile phone number during onboarding or in account settings.</li>
              <li>
                Replying <strong>Y</strong> to the consent text message from APPtivity when prompted.
              </li>
            </ol>
            <p style={{ margin: 0 }}>
              By replying Y, users consent to receive transactional text messages regarding account verification,
              activity updates, group invitations, and related APPtivity notices.
            </p>
          </Section>

          <Section title="Messages You May Receive">
            <p style={{ margin: 0 }}>APPtivity may send messages such as:</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li>One-time verification and authentication codes</li>
              <li>Activity and event reminders</li>
              <li>Group and invitation notices</li>
              <li>Schedule changes and important activity updates</li>
              <li>Account and security notifications</li>
            </ul>
            <p style={{ margin: 0 }}>
              APPtivity does <strong>not</strong> send promotional or marketing messages without additional consent.
            </p>
          </Section>

          <Section title="Message Frequency">
            <p style={{ margin: 0 }}>
              Message frequency varies depending on your account activity, group participation, and notification
              settings.
            </p>
          </Section>

          <Section title="Charges">
            <p style={{ margin: 0 }}>Message and data rates may apply.</p>
          </Section>

          <Section title="Help">
            <p style={{ margin: 0 }}>
              Reply <strong>HELP</strong> for assistance, including consent details, STOP instructions, and links to
              these terms.
            </p>
          </Section>

          <Section title="Opt Out">
            <p style={{ margin: 0 }}>
              Reply <strong>STOP</strong> at any time to unsubscribe from all APPtivity SMS notifications.
            </p>
            <p style={{ margin: 0 }}>
              After opting out, one confirmation message will be sent and no further SMS messages will be delivered
              unless you re-enable SMS in your account and reply <strong>Y</strong> again.
            </p>
          </Section>

          <Section title="Sample Consent Message">
            <SampleMessage label="Example">
              APPtivity: Reply Y to consent to receive account and activity notifications. Msg&amp;data rates may
              apply. Reply HELP for help, STOP to cancel. https://goapptivity.com/sms-opt-in
            </SampleMessage>
          </Section>

          <Section title="Sample Notification">
            <SampleMessage label="Example">
              APPtivity: Your group hike starts tomorrow at 9:00 AM. View details in the app. Reply STOP or HELP.
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
              .
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
