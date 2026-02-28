import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleConnect = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      {/* Decorative floating shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      <div className="floating-shape shape-4"></div>
      <div className="floating-shape shape-5"></div>
      <div className="floating-shape shape-6"></div>
      <div className="floating-shape shape-7"></div>

      <div className="container">
        <div className="hero-content">
          <h1>
            Building digital products, brands &amp;{' '}
            <span className="highlight">experience.</span>
          </h1>
          <p className="hero-subtitle">
            a <strong>Web Developer</strong> and <strong>AI Enthusiast</strong> from Pakistan.
            <br />
            I specialize in Backend Development, AI-Powered Systems,
            <br />and Automation.
          </p>
          <div className="hero-cta">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn-primary" onClick={handleConnect}>
              Connect With Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="/Asim-Profile.jpeg" alt="Asim Khan Niazi" />
          </div>
        </div>
      </div>
    </section>
  )
}
