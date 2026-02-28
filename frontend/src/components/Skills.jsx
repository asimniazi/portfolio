const SKILL_ICONS = {
  'Web & Backend Development': '🌐',
  'Databases': '🗄️',
  'Programming Languages': '💻',
  'AI & Automation': '🤖',
  'Tools': '🛠️'
}

export default function Skills({ data }) {
  if (!data?.skills) return null

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Technologies &amp; Tools</h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning web development, AI, and automation — built through real-world projects and continuous learning.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div className="skill-category reveal" key={category}>
              <div className="skill-category-icon">
                {SKILL_ICONS[category] || '📦'}
              </div>
              <h3>{category}</h3>
              <div className="skill-tags">
                {skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
