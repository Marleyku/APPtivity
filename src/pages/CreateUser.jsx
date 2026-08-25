import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND, BUTTON_TEXT, NOISE_OVERLAY_SVG, ROUTES } from '../theme.js';

const INPUT_BG = '#F7F0E3';
const INPUT_BORDER = 'rgba(31, 77, 58, 0.3)';

export default function CreateUser() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
      setError('First name, last name, and email are required.');
      return;
    }
    if (!form.password.trim()) {
      setError('Password is required.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup-onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'user not allowed');
    } catch {
      setError('user not allowed');
    } finally {
      setLoading(false);
    }
  };

  const field = (name, label, type = 'text', autoComplete) => (
    <div key={name}>
      <label htmlFor={name} style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', color: BRAND }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        value={form[name]}
        onChange={handleChange}
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
  );

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
        <h1 style={{ color: BRAND, fontSize: '1.5rem', margin: '0 0 0.5rem' }}>Create your account</h1>
        <p style={{ color: BRAND, fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          Enter your name, email, and a password to get started.
        </p>

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
          {field('firstName', 'First name', 'text', 'given-name')}
          {field('lastName', 'Last name', 'text', 'family-name')}
          {field('email', 'Email', 'email', 'email')}
          {field('password', 'Password', 'password', 'new-password')}
          {field('confirmPassword', 'Confirm password', 'password', 'new-password')}
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
            {loading ? 'Creating…' : 'Create account'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: BRAND }}>
          Already have an account?{' '}
          <Link to={ROUTES.LOGIN} style={{ fontWeight: 600 }}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
