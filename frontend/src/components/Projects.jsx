export default function Projects({ data }) {
  if (!data) return null

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            From AI-powered healthcare platforms to production-grade backends — here are the projects I&apos;ve built.
          </p>
        </div>

        {/* Featured FYP */}
        {data.finalYearProject && (
          <div className="featured-project reveal">
            <span className="featured-badge">⭐ Final Year Project</span>
            <h3>{data.finalYearProject.title}</h3>
            <p className="project-problem">
              <strong>Problem:</strong> {data.finalYearProject.problem}
            </p>
            <p className="project-solution">
              <strong>Solution:</strong> {data.finalYearProject.solution}
            </p>
            <div className="project-tech">
              {data.finalYearProject.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Other projects grid */}
        <div className="projects-grid">
          {/* Paid Projects */}
          {data.paidProjects?.map((project, idx) => (
            <div className="project-card reveal" key={`paid-${idx}`}>
              <div className="project-card-type">Paid Project</div>
              <h3>{project.title}</h3>
              <ul>
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Academic Projects */}
          {data.academicProjects?.map((project, idx) => (
            <div className="project-card reveal" key={`academic-${idx}`}>
              <div className="project-card-type">Academic · {project.tech}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
