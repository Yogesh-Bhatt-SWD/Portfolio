import { Download, FileText } from 'lucide-react';

export default function Essay() {
  return (
    <section id="essay" className="essay-section">
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="section-eyebrow">My Work</span>
          <h2 className="section-heading">Handwritten Essay</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
            A personal essay written by hand — sharing my thoughts, experiences, and journey as a developer.
          </p>
        </div>

        {/* PDF Card */}
        <div className="essay-wrapper">

          {/* Card header */}
          <div className="essay-card-header">
            <div className="essay-card-icon">
              <FileText size={18} />
            </div>
            <div>
              <p className="essay-card-title">essay.pdf</p>
              <p className="essay-card-sub">Handwritten · Personal</p>
            </div>
            <a
              href="/essay.pdf"
              download
              className="btn-outline"
              style={{ marginLeft: 'auto', fontSize: '13px', padding: '7px 16px' }}
            >
              <Download size={14} />
              Download
            </a>
          </div>

          {/* PDF embed */}
          <div className="essay-embed-wrap">
            <iframe
              src="/essay.pdf"
              title="Handwritten Essay"
              width="100%"
              height="600px"
              style={{ border: 'none', display: 'block' }}
            />
          </div>

          {/* Fallback message (shown if iframe is unsupported) */}
          <div className="essay-fallback">
            <p>
              Can&apos;t view the PDF?{' '}
              <a href="/essay.pdf" download className="essay-fallback-link">
                Download it here
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
