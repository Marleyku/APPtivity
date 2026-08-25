import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND, BUTTON_TEXT, NOISE_OVERLAY_SVG, ROUTES } from '../theme.js';

const INPUT_BG = '#F7F0E3';
const INPUT_BORDER = 'rgba(31, 77, 58, 0.3)';

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone: emailOrPhone.trim(), password }),
      });
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'user not allowed');
    } catch {
      setError('user not allowed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
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
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '28rem' }}>
        <Link to={ROUTES.HOME} style={{ display: 'block', marginBottom: '1.5rem', textAlign: 'center' }}>
          <img src="/logo.png" alt="APPtivity" style={{ width: '100%', maxWidth: '24rem', mixBlendMode: 'lighten' }} />
        </Link>
        <Link to={ROUTES.HOME} style={{ display: 'inline-block', marginBottom: '1rem', fontSize: '0.875rem', color: BRAND }}>
          ← Back to home
        </Link>
        <h1 style={{ color: BRAND, fontSize: '1.5rem', margin: '0 0 0.5rem' }}>Log in</h1>
        <p style={{ color: BRAND, fontSize: '0.875rem', marginBottom: '1.5rem' }}>Enter your email or phone and password.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {error ? (
            <p
              role="alert"
              style={{
                margin: 0,
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                backgroundColor: 'rgba(185,28,28,0.12)',
                color: '#b91c1c',
                fontSize: '0.875rem',
              }}
            >
              {error}
            </p>
          ) : null}
          <div>
            <label htmlFor="emailOrPhone" style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', color: BRAND }}>
              Email or phone
            </label>
            <input
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              required
              autoComplete="username"
              value={emailOrPhone}
              onChange={(e) => {
                setEmailOrPhone(e.target.value);
                setError('');
              }}
              placeholder="Email or phone number"
              style={{
                width: '100%',
                borderRadius: '0.5rem',
                padding: '0.65rem 1rem',
                border: `1px solid ${INPUT_BORDER}`,
                backgroundColor: INPUT_BG,
                color: BRAND,
              }}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', color: BRAND }}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="••••••••"
              style={{
                width: '100%',
                borderRadius: '0.5rem',
                padding: '0.65rem 1rem',
                border: `1px solid ${INPUT_BORDER}`,
                backgroundColor: INPUT_BG,
                color: BRAND,
              }}
            />
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: BRAND, fontSize: '0.875rem' }}>
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            Remember me for 30 days
          </label>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.7rem 1rem',
              backgroundColor: BRAND,
              color: BUTTON_TEXT,
              fontWeight: 500,
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? 'Signing in…' : 'Log in'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: BRAND }}>
          Don&apos;t have an account?{' '}
          <Link to={ROUTES.CREATE_USER} style={{ fontWeight: 600 }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
