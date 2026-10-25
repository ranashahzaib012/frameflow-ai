import Link from "next/link";

export default function MediaPage() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-badge">F</div>
          <div>
            <strong>FrameFlow</strong>
          </div>
        </div>

        <nav className="nav-list">
          <Link href="/dashboard" className="nav-item">Dashboard</Link>
          <Link href="/studio" className="nav-item">Studio</Link>
          <Link href="/templates" className="nav-item">Templates</Link>
          <Link href="/characters" className="nav-item">Characters</Link>
          <Link href="/media" className="nav-item active">Media</Link>
          <Link href="/settings" className="nav-item">Settings</Link>
        </nav>
      </aside>

      <main className="workspace-main">
        <header className="main-header">
          <div>
            <span className="muted-label">Asset Center</span>
            <h1>Media</h1>
          </div>
        </header>

        <section className="media-panel-box glass-card">
          <div className="media-switcher">
            <button className="tab active">Asset</button>
            <button className="tab">Audio</button>
          </div>

          <div className="media-message">
            <h2>It’s a Blank Canvas!</h2>
            <p>Your project needs assets to generate them with AI or upload your custom files to begin.</p>
            <div className="upload-row">
              <button className="primary-btn">Upload</button>
              <button className="secondary-btn">Generate</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
