export default function Experience({ data }) {
  if (!data) return null

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Education &amp; Career</h2>
          <p className="section-subtitle">
            My academic journey at FAST-NUCES and professional experience in the industry.
          </p>
        </div>

        <div className="timeline">
          {/* Education */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-type">Education</div>
              <h3>{data.education?.degree} — {data.education?.institution}</h3>
              <div className="timeline-period">{data.education?.period} · CGPA {data.education?.cgpa}</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Relevant courses: {data.courses?.slice(0, 6).join(', ')}
              </p>
            </div>
          </div>

          {/* Work Experience */}
          {data.experience?.map((exp, idx) => (
            <div className="timeline-item reveal" key={`exp-${idx}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-type">Internship</div>
                <h3>{exp.title}</h3>
                <ul>
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-type">Certifications</div>
              <h3>Professional Certifications</h3>
              <div className="cert-list">
                {data.certifications?.map((cert, idx) => (
                  <span key={idx}>{cert}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
