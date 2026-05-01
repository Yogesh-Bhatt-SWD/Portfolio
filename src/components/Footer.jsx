import { Download } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-brand">yogesh<span>.</span>dev</span>
          <span className="footer-copy">
            © {year} Yogesh Bhatt · Designed &amp; Built with React + Vite
          </span>
          <a href="/resume.pdf" download className="btn-ghost" style={{ fontSize: '12.5px', padding: '6px 14px' }}>
            <Download size={13} /> Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
