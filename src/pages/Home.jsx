import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND, BUTTON_TEXT, NOISE_OVERLAY_SVG, ROUTES, SAND } from '../theme.js';

export default function Home() {
  const [joinPopoverOpen, setJoinPopoverOpen] = useState(false);

  return (
    <div
      className="page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(/misty-forest.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.06,
          backgroundImage: NOISE_OVERLAY_SVG,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 'min(85vw, 24rem)',
          padding: '2rem 1.5rem 3rem',
        }}
      >
        <div
          style={{
            width: '100%',
            borderRadius: '1rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(247, 240, 227, 0.25)',
            backdropFilter: 'blur(1px)',
          }}
        >
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <img
              src="/logo.png"
              alt="APPtivity"
              style={{ width: '100%', height: 'auto', mixBlendMode: 'lighten' }}
            />
          </div>
          <div className="bottom-half-bold">
            <p style={{ textAlign: 'center', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', color: BRAND }}>
              APPtivity is the premier activity planner that helps you discover meaningful activities, plan with
              confidence, act together, and reflect on every event so every experience strengthens people, families,
              and communities.
              <br />
              Adventure. Shared.
              <br />
              Social media inspired. AI perfected.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Link
                to={ROUTES.LOGIN}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: BRAND,
                  color: BUTTON_TEXT,
                  fontWeight: 500,
                }}
              >
                Sign In
              </Link>
              <button
                type="button"
                onClick={() => setJoinPopoverOpen(true)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  backgroundColor: BRAND,
                  color: BUTTON_TEXT,
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Join with a Code
              </button>
              <Link
                to={ROUTES.CREATE_USER}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: BRAND,
                  color: BUTTON_TEXT,
                  fontWeight: 500,
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          padding: '1rem 1.5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <Link
          to={ROUTES.SMS_OPT_IN}
          style={{
            color: BUTTON_TEXT,
            fontSize: '0.8125rem',
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
            textShadow: '0 1px 2px rgba(0,0,0,0.35)',
          }}
        >
          SMS Opt-In
        </Link>
      </footer>

      {joinPopoverOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: 'rgba(0,0,0,0.35)',
          }}
          onClick={() => setJoinPopoverOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 'min(90vw, 360px)',
              maxHeight: '80vh',
              overflowY: 'auto',
              borderRadius: '1rem',
              padding: '1.25rem',
              backgroundColor: SAND,
              color: BRAND,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p style={{ marginTop: 0, fontWeight: 600 }}>Join with a Code</p>
            <p style={{ fontSize: '0.95rem' }}>
              Sign in or create an account first, then use your join code from there.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              <Link
                to={ROUTES.LOGIN}
                onClick={() => setJoinPopoverOpen(false)}
                style={{
                  textAlign: 'center',
                  textDecoration: 'none',
                  padding: '0.65rem 1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: BRAND,
                  color: BUTTON_TEXT,
                }}
              >
                Sign In
              </Link>
              <Link
                to={ROUTES.CREATE_USER}
                onClick={() => setJoinPopoverOpen(false)}
                style={{
                  textAlign: 'center',
                  textDecoration: 'none',
                  padding: '0.65rem 1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: BRAND,
                  color: BUTTON_TEXT,
                }}
              >
                Sign Up
              </Link>
              <button
                type="button"
                onClick={() => setJoinPopoverOpen(false)}
                style={{
                  padding: '0.65rem 1rem',
                  borderRadius: '0.75rem',
                  border: `1px solid ${BRAND}`,
                  background: 'transparent',
                  color: BRAND,
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}