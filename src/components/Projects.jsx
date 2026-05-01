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
    subtitle: 'AI-Based Civic Issue Reporting Platform',
    description:
      'A backend platform where users report civic issues by uploading images. AI automatically detects problems like potholes, garbage, and water logging — then routes them through a status workflow.',
    bullets: [
      'Built REST APIs using Spring Boot for reporting and managing civic issues with image upload support',
      'Integrated YOLO-based object detection to classify issues (potholes, garbage, water logging)',
      'Implemented geospatial querying using MongoDB 2dsphere indexing for nearby issue detection',
      'Designed duplicate detection logic based on location proximity and issue type',
      'Developed role-based status workflow: OPEN → IN_PROGRESS → RESOLVED',
      'Handled image upload and validation pipeline',
    ],
    tech: ['Java', 'Spring Boot', 'MongoDB', 'YOLO (Python)', 'REST APIs'],
    github: 'https://github.com/Yogesh-Bhatt-SWD',
  },
  {
    id: '02',
    icon: BookOpen,
    name: 'NoteSphere',
    subtitle: 'Personal Journaling Backend System',
    description:
      'A journaling backend where users write, manage, and analyze personal entries with sentiment detection, tagging, and secure JWT-based authentication.',
    bullets: [
      'Developed RESTful APIs using Spring Boot for creating, updating, and retrieving journal entries',
      'Implemented JWT-based authentication for secure user access',
      'Integrated sentiment analysis and tagging features per entry',
      'Designed layered architecture using DTOs and service abstraction',
      'Managed database operations for user-specific, isolated data',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'MongoDB', 'JWT', 'REST APIs'],
    github: 'https://github.com/Yogesh-Bhatt-SWD',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-heading">Selected Work</h2>
        <p className="section-subheading">
          Backend systems I've designed and built — focused on real-world engineering problems.
        </p>

        <div className="projects-grid">
          {PROJECTS.map(project => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.id}>
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
