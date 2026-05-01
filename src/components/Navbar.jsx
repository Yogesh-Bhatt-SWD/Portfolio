import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <span className="navbar-brand">
            yogesh<span className="dot">.</span>dev
          </span>

          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#intro">Intro</a>
            <a href="#essay">Essay</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="/resume.pdf" download className="navbar-resume-btn">
            <Download size={14} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
