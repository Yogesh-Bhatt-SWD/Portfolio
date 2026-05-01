import { Server, Database, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-heading">Building backends that scale.</h2>

        <div className="about-grid">
          {/* ── Left: Bio ── */}
          <div className="about-main">
            <p>
              I'm a <strong>Backend Developer</strong> with hands-on experience building
              production-grade <strong>RESTful APIs</strong> using Java and Spring Boot.
            </p>
            <p>
              My work spans geospatial querying with MongoDB, AI service integration,
              JWT-secured auth flows, and layered service architecture. I care about writing
              backend code that is clean, maintainable, and built to handle real-world load.
            </p>
            <p>
              Currently pursuing <strong>B.Tech in Computer Science (AI &amp; ML)</strong>,
              while actively sharpening my foundations in <strong>Data Structures</strong> and
              <strong> System Design</strong>.
            </p>
          </div>

          {/* ── Right: Highlights ── */}
          <div className="about-highlights">
            <div className="about-card">
              <div className="about-card-icon">
                <Server />
              </div>
              <h4>What I Do</h4>
              <p>
                Design and build scalable REST APIs, implement business logic, integrate
                databases, and connect external services — all in Java &amp; Spring Boot.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Database />
              </div>
              <h4>What I Focus On</h4>
              <p>
                Clean architecture, proper data modeling, geospatial queries, secure
                authentication, and writing code that is easy to maintain and extend.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <GraduationCap />
              </div>
              <h4>Currently Learning</h4>
              <p>
                Advanced System Design concepts, DSA problem solving (LeetCode), and
                deepening understanding of distributed systems fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
