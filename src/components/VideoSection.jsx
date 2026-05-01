/**
 * VideoSection — Intro / Demo
 *
 * HOW TO ADD YOUR VIDEO:
 * ──────────────────────
 * Option A – YouTube (preferred):
 *   1. Set USE_YOUTUBE = true
 *   2. Set YOUTUBE_ID  = 'your_video_id'  (the part after ?v= in the URL)
 *
 * Option B – Local MP4:
 *   1. Place your file at  d:\Portfolio\public\demo.mp4
 *   2. Set USE_YOUTUBE = false
 */

const USE_YOUTUBE = false;
const YOUTUBE_ID  = 'YOUR_VIDEO_ID'; // e.g. 'dQw4w9WgXcQ'

export default function VideoSection() {
  return (
    <section id="intro" className="video-section">
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="section-eyebrow">Intro</span>
          <h2 className="section-heading">Quick Introduction</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', maxWidth: '440px', margin: '0 auto', lineHeight: '1.7' }}>
            A brief walkthrough of who I am and the projects I&apos;ve built.
          </p>
        </div>

        {/* Video Card */}
        <div className="video-wrapper">

          {/* Browser-chrome top bar */}
          <div className="video-header">
            <span className="video-header-dot" style={{ background: '#ff5f57' }} />
            <span className="video-header-dot" style={{ background: '#febc2e' }} />
            <span className="video-header-dot" style={{ background: '#28c840' }} />
            <span className="video-header-title">yogesh-bhatt &mdash; intro</span>
          </div>

          {/* Video body */}
          <div className="video-body">
            {USE_YOUTUBE ? (
              /* ── Option A: YouTube embed ── */
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
                title="Yogesh Bhatt — Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* ── Option B: Local /public/demo.mp4 ── */
              <video
                controls
                poster="/avatar.png"
                style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#000' }}
              >
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
