"use client";

import { useState } from "react";

const sidebarItems = [
  "Character",
  "Media",
  "Templates",
  "AI",
  "Image Gen",
  "Video Gen",
  "AI Voice",
  "AI Thumbnail",
  "AI Character",
  "Anim IK",
  "Text",
];

const templateCards = [
  { title: "Dream Style", premium: true },
  { title: "Rural", premium: true },
  { title: "Horror 2", premium: true },
  { title: "Anime", premium: false },
  { title: "Realistic", premium: false },
  { title: "3D", premium: false },
  { title: "Village Style", premium: false },
  { title: "Kids Animal", premium: false },
];

const sceneNames = ["Scene 1", "Scene 2", "Scene 3", "Scene 4", "Scene 5", "Scene 6", "Scene 7", "Scene 8"];

export default function StudioPage() {
  const [templateModalOpen, setTemplateModalOpen] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState("Dream Style");

  return (
    <div className="studio-root">
      <aside className="studio-sidebar">
        <div className="studio-brand">
          <div className="brand-badge">F</div>
        </div>

        <nav className="tool-list">
          {sidebarItems.map((item, index) => (
            <button key={item} className={`tool-item ${index === 0 ? "active" : ""}`}>
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <div className="studio-main">
        <header className="studio-header">
          <div className="header-left">
            <button className="tiny-btn">←</button>
            <span className="project-page-title">testNew Project</span>
            <span className="project-meta-sep">|</span>
            <span className="meta-small">ID: 4996033</span>
            <span className="meta-small">Report</span>
            <span className="meta-small">US</span>
          </div>

          <div className="header-right">
            <button className="ghost-btn">History</button>
            <button className="ghost-btn">Save</button>
            <button className="ghost-btn">Frame</button>
            <button className="ghost-btn">Download</button>
            <button className="ghost-btn">Settings</button>
            <button className="primary-btn">Upgrade</button>
          </div>
        </header>

        <div className="studio-content">
          <aside className="panel-left">
            <div className="panel-topbar">
              <h3>Characters</h3>
              <button className="ghost-btn small">Create</button>
            </div>

            <div className="search-box">Search Characters</div>

            <div className="chip-row">
              <span>Birds</span>
              <span>Animals</span>
              <span>Vehicles</span>
              <span>Religious</span>
              <span>Kids</span>
              <span>Horror</span>
            </div>

            <div className="character-grid">
              <div className="character-card">
                <div className="avatar avatar-a" />
                <div className="card-actions"><button>Edit</button></div>
              </div>
              <div className="character-card">
                <div className="avatar avatar-b" />
                <div className="card-actions"><button>Edit</button></div>
              </div>
              <div className="character-card">
                <div className="avatar avatar-c" />
                <div className="card-actions"><button>Edit</button></div>
              </div>
              <div className="character-card">
                <div className="avatar avatar-d" />
                <div className="card-actions"><button>Edit</button></div>
              </div>
            </div>
          </aside>

          <div className="stage-wrap">
            <div className="stage-panel">
              <div className="floating-bubble">✦</div>
            </div>

            <div className="timeline-row">
              <div className="timeline-controls">
                <button>⏮</button>
                <button>◀</button>
                <button>▶</button>
                <button>⏩</button>
                <button>◉</button>
              </div>
              <div className="timecode">00:00</div>
              <div className="timeline-tools">
                <button>⟡</button>
                <button>⌂</button>
                <button>✧</button>
                <button>◌</button>
              </div>
            </div>

            <div className="frame-strip">
              {sceneNames.map((scene, index) => (
                <div key={scene} className={`frame-cell ${index === 0 ? "active" : ""}`}>
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          <aside className="panel-right">
            <div className="right-rail-icons">
              <button>✦</button>
              <button>◍</button>
              <button>◐</button>
              <button>◫</button>
              <button>◌</button>
              <button>✎</button>
              <button>⚙</button>
            </div>
          </aside>
        </div>
      </div>

      {templateModalOpen && (
        <div className="modal-backdrop">
          <div className="template-modal">
            <div className="modal-header">
              <h2>Use Templates To Create Project Faster</h2>
              <button onClick={() => setTemplateModalOpen(false)}>✕</button>
            </div>

            <div className="modal-tabs">
              <button className="tab active">All Templates</button>
              <button className="tab">Search Scenes</button>
            </div>

            <div className="genre-list">
              {[
                "Village",
                "City",
                "Horror",
                "Rural",
                "Rhythm",
                "Animal",
                "Bird",
                "Fairy Tales",
                "Image interior",
                "Village exterior",
                "Intro",
                "Opening scene",
                "Seasonal",
              ].map((genre) => (
                <button key={genre} className={`genre ${genre === "Horror" ? "selected" : ""}`}>
                  {genre}
                </button>
              ))}
            </div>

            <div className="template-gallery">
              <div className="placeholder-scene">
                <div className="placeholder-circle">＋</div>
                <span>Blank Scene</span>
              </div>

              {templateCards.map((template) => (
                <div
                  key={template.title}
                  className={`gallery-item ${selectedTemplate === template.title ? "active" : ""}`}
                  onClick={() => setSelectedTemplate(template.title)}
                >
                  <div className="gallery-thumb" />
                  {template.premium && <span className="premium-tag">Premium</span>}
                  <span className="tile-label">{template.title}</span>
                </div>
              ))}
            </div>

            <button className="apply-btn">Apply Scene</button>
          </div>
        </div>
      )}
    </div>
  );
}
