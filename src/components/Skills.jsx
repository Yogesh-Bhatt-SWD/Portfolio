import {
  Coffee,       // Java
  Layers,       // Spring Boot
  Globe,        // REST APIs
  Database,     // MongoDB
  Table2,       // MySQL
  GitBranch,    // Git
  BrainCircuit, // DSA
  Network,      // System Design
} from 'lucide-react';

const CATEGORIES = [
  {
    label: 'Backend',
    skills: [
      { name: 'Java',        icon: Coffee },
      { name: 'Spring Boot', icon: Layers },
      { name: 'REST APIs',   icon: Globe },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB',     icon: Database },
      { name: 'MySQL',       icon: Table2 },
    ],
  },
  {
    label: 'Concepts & Tools',
    skills: [
      { name: 'Data Structures & Algorithms', icon: BrainCircuit },
      { name: 'System Design',                icon: Network },
      { name: 'Git',                          icon: GitBranch },
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
          Core technologies I work with day-to-day to build backend systems.
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
