import Link from "next/link";

export default function SettingsPage() {
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
          <Link href="/media" className="nav-item">Media</Link>
          <Link href="/settings" className="nav-item active">Settings</Link>
        </nav>
      </aside>

      <main className="workspace-main">
        <header className="main-header">
          <div>
            <span className="muted-label">Account</span>
            <h1>Settings</h1>
          </div>
        </header>

        <section className="settings-card glass-card">
          <div className="setting-row">
            <span>Workspace name</span>
            <strong>FrameFlow AI</strong>
          </div>
          <div className="setting-row">
            <span>Plan</span>
            <strong>Pro</strong>
          </div>
          <div className="setting-row">
            <span>Storage</span>
            <strong>2.4 GB / 10 GB</strong>
          </div>
        </section>
      </main>
    </div>
  );
}
