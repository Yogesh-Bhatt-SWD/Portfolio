import { Server, PenLine } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-heading">A little about me.</h2>

        <div className="about-grid">
          {/* ── Left: Bio ── */}
          <div className="about-main">
            <p>
              I'm a backend developer who loves turning complex problems into clean,
              efficient systems. Currently, I'm pursuing my{' '}
              <strong>B.Tech in Computer Science (AI &amp; ML)</strong> at{' '}
              <strong>Graphic Era Hill University</strong> in Dehradun.
            </p>
            <p>
              My focus goes beyond standard coursework to tackle real-world
              architecture. Whether I'm building APIs with{' '}
              <strong>Java and Spring Boot</strong>, optimizing geospatial queries in{' '}
              <strong>MongoDB</strong>, or integrating AI object detection, I care
              deeply about writing code that is maintainable and scalable.
            </p>
            <p>
              When I'm not building systems or sharpening my foundations in{' '}
              <strong>Data Structures and System Design</strong>, I enjoy breaking
              down complex backend flows to share with the developer community.
            </p>
          </div>

          {/* ── Right: Highlights ── */}
          <div className="about-highlights">
            <div className="about-card">
              <div className="about-card-icon">
                <Server />
              </div>
              <h4>System Architecture</h4>
              <p>
                Clean data modeling, JWT auth flows, external AI service integration,
                and geospatial querying with MongoDB's 2dsphere index.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <PenLine />
              </div>
              <h4>Technical Communication</h4>
              <p>
                Breaking down backend internals — OAuth 2.0 flows, Spring Boot
                request lifecycles, and API versioning — into clear visual explanations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
