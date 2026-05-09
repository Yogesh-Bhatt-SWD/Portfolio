import { ArrowUpRight } from 'lucide-react';

const POSTS = [
  {
    tag: 'Spring Boot',
    title: 'Layered Architecture in Spring Boot',
    description:
      'How code is structured across Controller, Service, and Repository layers — and why this separation of concerns matters at scale.',
    href: 'https://www.linkedin.com/posts/yogesh-bhatt-swd_in-a-spring-boot-application-code-is-structured-activity-7453441247379357696-KKEt',
  },
  {
    tag: 'Spring Security',
    title: 'Spring Security Internals',
    description:
      'A deep dive into how Spring Security processes requests — filter chains, authentication managers, and the flow under the hood.',
    href: 'https://www.linkedin.com/posts/yogesh-bhatt-swd_springboot-springsecurity-backenddevelopment-activity-7455981154270208000-PraO',
  },
  {
    tag: 'Backend Systems',
    title: 'Understanding Race Conditions in Backend Systems',
    description:
      'What race conditions actually are, why they silently corrupt data in concurrent APIs, and how to reason about them with Spring Boot examples.',
    href: 'https://www.linkedin.com/posts/yogesh-bhatt-swd_backenddevelopment-springboot-apis-activity-7456707500629975040-2dJh',
  },
  {
    tag: 'Databases',
    title: 'Database Transactions Explained',
    description:
      'ACID properties broken down plainly — why transactions exist, what isolation levels mean, and how they protect your data in production.',
    href: 'https://www.linkedin.com/posts/yogesh-bhatt-swd_backenddevelopment-databases-springboot-activity-7457073297025900544-hkFA',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="writing-section">
      <div className="container">
        <span className="section-eyebrow">Technical Writing</span>
        <h2 className="section-heading">Breaking down the backend.</h2>
        <p className="section-subheading">
          I write about the internals of backend systems — explained clearly for
          developers who want to understand the why, not just the how.
        </p>

        <div className="writing-grid">
          {POSTS.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="writing-card"
            >
              <div className="writing-card-top">
                <span className="writing-tag">{post.tag}</span>
                <ArrowUpRight size={15} className="writing-arrow" />
              </div>
              <h3 className="writing-card-title">{post.title}</h3>
              <p className="writing-card-body">{post.description}</p>
              <span className="writing-link">View on LinkedIn</span>
            </a>
          ))}
        </div>

        {/* ── View All Articles CTA ── */}
        <div className="writing-cta">
          <p className="writing-cta-hint">
            More backend architecture and systems articles published regularly on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/yogesh-bhatt-swd"
            target="_blank"
            rel="noreferrer"
            className="writing-cta-btn"
          >
            View All Articles →
          </a>
        </div>
      </div>
    </section>
  );
}
