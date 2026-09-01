import { MapPin, BookOpen } from 'lucide-react';

function GitHubBrandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.295 2.747-1.025 2.747-1.025.547 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

const PROJECTS = [
  {
    id: '01',
    icon: MapPin,
    name: 'CIVICA',
    subtitle: 'AI-Powered Civic Infrastructure Management Platform',
    description:
      'An AI-powered civic issue reporting platform with role-based backend workflows for citizens and authorities, supporting full issue lifecycle tracking (OPEN → IN PROGRESS → RESOLVED).',
    bullets: [
      'Built role-based backend workflows for citizens and authorities with full issue lifecycle tracking (OPEN → IN PROGRESS → RESOLVED) using Spring Boot and layered architecture',
      'Implemented Spring Security with JWT authentication and role-based authorization securing all backend endpoints for both citizen and authority operations',
      'Integrated a YOLOv8 object detection pipeline for automated civic issue classification, achieving ~85% detection accuracy with confidence-score filtering; trained on 10,000+ images across five categories: potholes, road cracks, garbage, fallen trees, and falling electric poles',
      'Implemented MongoDB geospatial querying, issue prioritization, and workflow tracking features supporting efficient bug triage and issue resolution',
      'Integrated Redis caching with duplicate issue detection, reducing redundant submissions by ~35%',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MongoDB', 'Redis', 'YOLOv8', 'React 19', 'Vite 8', 'Vanilla CSS'],
    github: 'https://github.com/Yogesh-Bhatt-SWD',
    featured: true,
  },
  {
    id: '02',
    icon: BookOpen,
    name: 'NoteSphere',
    subtitle: 'Intelligent Journal Management Platform',
    description:
      'A secure journaling backend enabling users to create, organize, and analyze personal entries with role-based access control, sentiment analysis, and user-specific workflow isolation.',
    bullets: [
      'Built a secure journaling backend with role-based access control and user-specific workflow isolation using Spring Boot DTO-Service-Repository layered architecture',
      'Implemented Spring Security with JWT and OAuth2 supporting both password-based and third-party login flows',
      'Developed sentiment analysis using VADER and rule-based NLP auto-tagging to identify emotional patterns and improve journal discoverability',
      'Designed, tested, and debugged REST APIs while validating application workflows and resolving integration issues throughout the software development lifecycle',
      'Integrated Redis caching reducing average MongoDB read latency by ~40% during high-frequency journal access operations',
      'Documented all backend APIs using Swagger/OpenAPI with comprehensive Postman collections for testing',
    ],
    tech: ['Java', 'Spring Boot', 'MongoDB', 'Redis', 'OAuth2', 'JWT', 'Swagger/OpenAPI'],
    github: 'https://github.com/Yogesh-Bhatt-SWD',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-heading">Selected Work</h2>
        <p className="section-subheading">
          Backend systems I've designed and built — focused on real engineering problems.
        </p>

        <div className="projects-list">
          {PROJECTS.map(project => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className={`project-card${project.featured ? ' project-card--featured' : ''}`}
              >
                <div className="project-card-header">
                  <div className="project-icon">
                    <Icon />
                  </div>
                  <span className="project-num">{project.id}</span>
                </div>

                <h3 className="project-title">{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>

                <ul className="project-bullets">
                  {project.bullets.map((b, i) => (
                    <li className="project-bullet" key={i}>
                      <span className="project-bullet-dot" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-footer">
                  <div className="tech-stack">
                    {project.tech.map(t => (
                      <span className="tech-badge" key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <GitHubBrandIcon /> GitHub
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
