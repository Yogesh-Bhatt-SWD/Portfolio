import { FileText, Download } from 'lucide-react';

export default function Essay() {
  return (
    <section id="essay" className="essay-section">
      <div className="container">
        <span className="section-eyebrow">Essay</span>
        <h2 className="section-heading">Remote Work</h2>
        <p className="section-subheading">
          A handwritten essay submitted as part of coursework.
        </p>

        <div className="essay-wrapper">
          {/* Card header */}
          <div className="essay-card-header">
            <div className="essay-card-icon">
              <FileText size={18} />
            </div>
            <div>
              <p className="essay-card-title">Essay — Remote Work</p>
              <p className="essay-card-sub">Handwritten submission</p>
            </div>
            <a
              href="/essay.pdf"
              download
              className="btn-ghost"
              style={{ marginLeft: 'auto', fontSize: '12.5px', padding: '6px 14px' }}
            >
              <Download size={13} /> Download
            </a>
          </div>

          {/* PDF embed */}
          <div className="essay-embed-wrap">
            <iframe
              src="/essay.pdf"
              title="Essay — Remote Work"
              style={{ width: '100%', minHeight: '700px', border: 'none', display: 'block' }}
            />
          </div>

          {/* Fallback link */}
          <div className="essay-fallback">
            <p>
              Can't see the PDF?{' '}
              <a href="/essay.pdf" target="_blank" rel="noreferrer" className="essay-fallback-link">
                Open in new tab
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
