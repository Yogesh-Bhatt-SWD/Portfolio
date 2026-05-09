import { useEffect, useRef, useState, useCallback } from 'react';
import { Upload, X, CheckCircle, FileText, AlertCircle } from 'lucide-react';

const SECRET_KEY = { ctrl: true, shift: true, key: 'R' };

export default function ResumeUploader() {
  const [open, setOpen]         = useState(false);
  const [dragging, setDragging] = useState(false);
  const [status, setStatus]     = useState(null); // null | 'success' | 'error'
  const [fileName, setFileName] = useState('');
  const [msg, setMsg]           = useState('');
  const inputRef                = useRef(null);

  /* ── Secret shortcut listener ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === SECRET_KEY.key) {
        e.preventDefault();
        setOpen(prev => !prev);
        setStatus(null);
        setFileName('');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* ── Close on Escape ── */
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open]);

  const handleFile = useCallback(async (file) => {
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setStatus('error');
      setMsg('Only PDF files are supported.');
      return;
    }

    setFileName(file.name);
    setStatus(null);

    try {
      /* ── Vite dev: POST to the local write-resume endpoint ── */
      const formData = new FormData();
      formData.append('resume', file);

      const res = await fetch('/__resume_upload__', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        setMsg(`"${file.name}" uploaded successfully. The download link is now live.`);
      } else {
        throw new Error('Server returned ' + res.status);
      }
    } catch {
      /* ── Fallback: create an object-URL and patch the <a> tags ── */
      const blobUrl = URL.createObjectURL(file);
      document.querySelectorAll('a[href="/resume.pdf"], a[href*="resume.pdf"]').forEach(a => {
        a.href      = blobUrl;
        a.download  = 'Yogesh_Resume.pdf';
      });
      setStatus('success');
      setMsg(`"${file.name}" is ready for download this session. To make it permanent, replace public/resume.pdf in your project.`);
    }
  }, []);

  /* ── Drag handlers ── */
  const onDragOver  = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = ()  => setDragging(false);
  const onDrop      = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };
  const onInputChange = (e) => handleFile(e.target.files[0]);

  if (!open) return null;

  return (
    <div className="ru-overlay" onClick={() => setOpen(false)}>
      <div className="ru-panel" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="ru-header">
          <span className="ru-badge">Admin</span>
          <h2 className="ru-title">Update Resume</h2>
          <p className="ru-sub">Drag &amp; drop a new PDF to replace the resume download.</p>
          <button className="ru-close" onClick={() => setOpen(false)} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Drop Zone */}
        <div
          className={`ru-dropzone ${dragging ? 'dragging' : ''} ${status === 'success' ? 'success' : ''}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,application/pdf"
            style={{ display: 'none' }}
            onChange={onInputChange}
          />

          {status === 'success' ? (
            <div className="ru-result success">
              <CheckCircle size={40} />
              <p>{fileName}</p>
              <span>{msg}</span>
            </div>
          ) : status === 'error' ? (
            <div className="ru-result error">
              <AlertCircle size={40} />
              <span>{msg}</span>
            </div>
          ) : (
            <div className="ru-idle">
              {dragging ? <Upload size={44} className="ru-icon bounce" /> : <FileText size={44} className="ru-icon" />}
              <p className="ru-drop-text">
                {dragging ? 'Drop it!' : 'Click or drag your PDF here'}
              </p>
              <span className="ru-drop-hint">Only .pdf files · replaces public/resume.pdf</span>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <p className="ru-footer-hint">
          Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> to toggle · <kbd>Esc</kbd> to close
        </p>
      </div>
    </div>
  );
}
