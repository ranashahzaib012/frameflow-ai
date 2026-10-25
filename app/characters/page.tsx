import Link from "next/link";

const characters = [
  { name: "Aditi", type: "Hero" },
  { name: "Rahul", type: "Guide" },
  { name: "Priya", type: "Heroine" },
  { name: "Mohan", type: "Narrator" },
];

export default function CharactersPage() {
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
          <Link href="/characters" className="nav-item active">Characters</Link>
          <Link href="/media" className="nav-item">Media</Link>
          <Link href="/settings" className="nav-item">Settings</Link>
        </nav>
      </aside>

      <main className="workspace-main">
        <header className="main-header">
          <div>
            <span className="muted-label">Creative Catalog</span>
            <h1>Characters</h1>
          </div>
        </header>

        <section className="template-list characters-list">
          {characters.map((character) => (
            <div key={character.name} className="project-card glass-card template-card-large">
              <div className="character-portrait" />
              <h3>{character.name}</h3>
              <p>{character.type}</p>
              <Link href="/studio" className="secondary-btn block-btn">Edit Profile</Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
