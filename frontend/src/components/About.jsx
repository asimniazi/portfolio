export default function About({ data }) {
  if (!data) return null

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-image">
          <div className="about-image-card">
            <img src="/Asim-Profile.jpeg" alt="Asim Khan Niazi" />
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3.1</div>
              <div className="stat-label">CGPA</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Certificates</div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate Developer &amp; AI Enthusiast</h2>
          <p>{data.summary}</p>

          <div className="about-info-grid">
            <div className="about-info-item">
              <div className="info-icon">🎓</div>
              <div className="info-text">
                <label>Education</label>
                <span>{data.education?.degree}</span>
              </div>
            </div>
            <div className="about-info-item">
              <div className="info-icon">🏫</div>
              <div className="info-text">
                <label>University</label>
                <span>{data.education?.institution}</span>
              </div>
            </div>
            <div className="about-info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <label>Email</label>
                <span>{data.email}</span>
              </div>
            </div>
            <div className="about-info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <label>Location</label>
                <span>Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
