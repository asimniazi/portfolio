import { useState } from 'react'

const API_URL = 'http://localhost:5000'

export default function Contact({ data }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // { type: 'success'|'error', text: '...' }
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: 'Please fill in all fields.' })
      return
    }

    setSending(true)
    setStatus(null)

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const json = await res.json()

      if (res.ok) {
        setStatus({ type: 'success', text: json.message || 'Message sent successfully!' })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', text: json.error || 'Something went wrong.' })
      }
    } catch {
      setStatus({ type: 'error', text: 'Could not connect to server. Please try again later.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-info">
          <span className="section-label">Get In Touch</span>
          <h2>Let&apos;s work <span>together.</span></h2>
          <p>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Feel free to reach out through the form or via my socials.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="detail-icon">📧</div>
              <div className="detail-text">
                <label>Email</label>
                <a href={`mailto:${data?.email || 'asimniazi100@gmail.com'}`}>
                  {data?.email || 'asimniazi100@gmail.com'}
                </a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-icon">📱</div>
              <div className="detail-text">
                <label>Phone</label>
                <span>{data?.phone || '(+92) 300-0281455'}</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-icon">📍</div>
              <div className="detail-text">
                <label>Location</label>
                <span>Pakistan</span>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href={data?.github || 'https://github.com/asimniazi'} target="_blank" rel="noreferrer" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href={data?.linkedin || 'https://www.linkedin.com/in/i-am-asim-khan'} target="_blank" rel="noreferrer" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {status && (
              <div className={`form-message ${status.type}`}>
                {status.text}
              </div>
            )}

            <button className="btn-primary" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
              {!sending && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
