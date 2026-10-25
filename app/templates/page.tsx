import Link from "next/link";

const templates = [
  { name: "Product Intro", style: "Brand Story" },
  { name: "Story Pitch", style: "Narrative" },
  { name: "Explainer", style: "Business" },
  { name: "E-commerce Ad", style: "Marketing" },
  { name: "Travel Reel", style: "Lifestyle" },
];

export default function TemplatesPage() {
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
          <Link href="/templates" className="nav-item active">Templates</Link>
          <Link href="/characters" className="nav-item">Characters</Link>
          <Link href="/media" className="nav-item">Media</Link>
          <Link href="/settings" className="nav-item">Settings</Link>
        </nav>
      </aside>

      <main className="workspace-main">
        <header className="main-header">
          <div>
            <span className="muted-label">Creative Library</span>
            <h1>Templates</h1>
          </div>
        </header>

        <section className="template-list">
          {templates.map((template) => (
            <div key={template.name} className="project-card glass-card template-card-large">
              <div className="template-thumb" />
              <h3>{template.name}</h3>
              <p>{template.style}</p>
              <Link href="/studio" className="secondary-btn block-btn">Use Template</Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
