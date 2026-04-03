'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      website: String(formData.get('website') ?? '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setError(data.error ?? 'Something went wrong.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setError('Unable to submit your request right now.');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" required />
        </label>
      </div>
      <label>
        <span>Company</span>
        <input type="text" name="company" />
      </label>
      <label>
        <span>How can we help?</span>
        <textarea name="message" rows={6} required />
      </label>
      <button className="button button-primary" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Request a consultation'}
      </button>
      {status === 'success' ? (
        <p className="form-success">Thanks — your request has been sent successfully.</p>
      ) : null}
      {status === 'error' ? <p className="form-error">{error}</p> : null}
    </form>
  );
}
