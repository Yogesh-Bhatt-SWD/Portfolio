import {
  Coffee,       // Java
  Terminal,     // Python
  Cpu,          // C
  Database,     // SQL / Databases
  Layers,       // Spring Boot
  Shield,       // Spring Security
  Globe,        // REST APIs
  KeyRound,     // JWT
  Lock,         // OAuth2
  Zap,          // Redis
  FileCode,     // Swagger/OpenAPI
  Layout,       // HTML
  Palette,      // CSS
  Braces,       // JavaScript
  Table2,       // MySQL
  GitBranch,    // Git
  GitFork,      // GitHub
  Package,      // Maven
  Send,         // Postman
} from 'lucide-react';

const CATEGORIES = [
  {
    label: 'Languages',
    skills: [
      { name: 'Java',   icon: Coffee },
      { name: 'Python', icon: Terminal },
      { name: 'C',      icon: Cpu },
      { name: 'SQL',    icon: Database },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Spring Boot',     icon: Layers },
      { name: 'Spring Security', icon: Shield },
      { name: 'REST APIs',       icon: Globe },
      { name: 'JWT',             icon: KeyRound },
      { name: 'OAuth2',          icon: Lock },
      { name: 'Redis',           icon: Zap },
      { name: 'Swagger/OpenAPI', icon: FileCode },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML',       icon: Layout },
      { name: 'CSS',        icon: Palette },
      { name: 'JavaScript', icon: Braces },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MySQL',   icon: Table2 },
      { name: 'MongoDB', icon: Database },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git',     icon: GitBranch },
      { name: 'GitHub',  icon: GitFork },
      { name: 'Maven',   icon: Package },
      { name: 'Postman', icon: Send },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-1)' }}>
      <div className="container">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-heading">Technical Proficiency</h2>
        <p className="section-subheading">
          Core technologies I work with to design and build backend systems.
        </p>

        <div className="skills-categories">
          {CATEGORIES.map(cat => (
            <div key={cat.label}>
              <div className="skill-category-label">{cat.label}</div>
              <div className="skills-row">
                {cat.skills.map(({ name, icon: Icon }) => (
                  <div className="skill-card" key={name}>
                    <Icon size={16} color="var(--accent)" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
