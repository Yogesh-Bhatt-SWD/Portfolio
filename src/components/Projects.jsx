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
      'A full backend platform where citizens report infrastructure problems — potholes, broken streetlights, garbage — by uploading images. The system uses YOLOv8 object detection to classify the issue automatically and routes it through a structured resolution workflow.',
    bullets: [
      'Developed scalable REST APIs for civic issue reporting and management using Spring Boot and layered architecture',
      'Implemented Spring Security with JWT authentication and role-based authorization for secure user workflows',
      'Integrated Redis caching and MongoDB geospatial querying for optimized nearby issue detection and faster retrieval',
      'Built YOLOv8-based object detection pipeline to identify potholes, garbage, and waterlogging from uploaded images',
      'Designed duplicate issue detection and workflow management system with OPEN, IN_PROGRESS, and RESOLVED states',
      'Added Swagger/OpenAPI documentation for API testing and developer usability',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MongoDB', 'Redis', 'YOLOv8'],
    github: 'https://github.com/Yogesh-Bhatt-SWD',
    featured: true,
  },
  {
    id: '02',
    icon: BookOpen,
    name: 'NoteSphere',
    subtitle: 'Intelligent Journaling Backend System',
    description:
      'A journaling backend where users write, manage, and analyze personal entries with sentiment detection, intelligent tagging, and secure multi-layer authentication.',
    bullets: [
      'Built secure journaling REST APIs using Spring Boot with DTO-Service-Repository layered architecture',
      'Implemented JWT authentication, OAuth2 authorization flow, and Spring Security for secure user access management',
      'Integrated Redis caching for optimized journal retrieval and improved backend performance',
      'Developed sentiment analysis and intelligent tagging features for personalized journal management',
      'Added Swagger/OpenAPI integration for API visualization, testing, and documentation',
    ],
    tech: ['Java', 'Spring Boot', 'MongoDB', 'Redis', 'OAuth2', 'JWT'],
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
