
import { useState } from 'react';

type Category = 'All' | 'Projects' | 'Experiences' | 'Growth';

const entries = [
  {
    id: 1,
    category: 'Projects' as Category,
    icon: '⌘',
    label: 'GRAPHICS PROGRAMMING',
    title: 'Out of Memory',
    description:
      'A team game where I contributed to rendering systems, shaders, lighting, and visual effects.',
    detail:
      'My graphics programming work includes camera and rendering systems, shader development, lighting, particles, transitions, and player visual effects.',
    meta: 'C++ · OPENGL · GLSL',
    date: 'PROJECT ARCHIVE',
  },
  {
    id: 2,
    category: 'Experiences' as Category,
    icon: '✈',
    label: 'EXCHANGE DIARY',
    title: 'Across the Pacific',
    description:
      'Memories and discoveries from spending time in the United States.',
    detail:
      'A collection of moments from Washington and California: new places, hikes, everyday discoveries, and experiences I want to remember.',
    meta: 'WASHINGTON · CALIFORNIA',
    date: '2026',
  },
  {
    id: 3,
    category: 'Projects' as Category,
    icon: '◈',
    label: 'SIMULATION & VISUALISATION',
    title: 'EV Fleet Simulator',
    description:
      'Building an interactive interface for exploring a live fleet simulation.',
    detail:
      'Working on database-backed login and the map scenario layer for a team project with ST Engineering.',
    meta: 'REACT · LEAFLET · POSTGRESQL',
    date: 'IN PROGRESS',
  },
  {
    id: 4,
    category: 'Growth' as Category,
    icon: '✳',
    label: 'PERSONAL REFLECTIONS',
    title: 'Learning as I go',
    description:
      'Notes on university, career ambitions, challenges, and small wins.',
    detail:
      'A space to record what I learned, what challenged me, the progress I made, and what I want to work towards next.',
    meta: 'LESSONS · MILESTONES · GOALS',
    date: 'ONGOING',
  },
  {
    id: 5,
    category: 'Projects' as Category,
    icon: '◇',
    label: 'COMPUTER VISION',
    title: 'Python 3D Vision',
    description:
      'Exploring object detection, relative-depth estimation, and point-cloud visualisation.',
    detail:
      'Combining pretrained YOLO detection with Depth Anything V2 and Open3D. Aligning detections with the reconstructed scene is still in progress.',
    meta: 'PYTHON · OPENCV · OPEN3D',
    date: 'IN PROGRESS',
  },
];

const categories: {
  name: Category;
  icon: string;
  description: string;
}[] = [
  { name: 'All', icon: '✳', description: 'Everything so far' },
  { name: 'Projects', icon: '⌘', description: 'Things I build' },
  { name: 'Experiences', icon: '✈', description: 'Places and memories' },
  { name: 'Growth', icon: '↗', description: 'Lessons and milestones' },
];

export default function Journal() {
  const [activeCategory, setActiveCategory] =
    useState<Category>('All');
  const [expandedEntry, setExpandedEntry] =
    useState<number | null>(null);

  const filteredEntries =
    activeCategory === 'All'
      ? entries
      : entries.filter((entry) => entry.category === activeCategory);

  return (
    <section className="journal-page">
      <header className="journal-heading">
        <p className="eyebrow">03 / JOURNAL & ARCHIVE</p>
        <h1 className="page-title">
          The journey <span>so far.</span>
        </h1>
        <p className="page-intro">
          Things I've built, places I've been, and lessons I've collected
          along the way.
        </p>
      </header>

      <div className="journal-categories">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            className={`journal-category ${
              activeCategory === category.name ? 'selected' : ''
            }`}
            onClick={() => {
              setActiveCategory(category.name);
              setExpandedEntry(null);
            }}
            aria-pressed={activeCategory === category.name}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
            <span className="category-description">
              {category.description}
            </span>
          </button>
        ))}
      </div>

      <div className="journal-timeline">
        <div className="timeline-heading">
          <p className="eyebrow">THE ARCHIVE</p>
          <span>{filteredEntries.length} ENTRIES</span>
        </div>

        {filteredEntries.map((entry) => {
          const isExpanded = expandedEntry === entry.id;

          return (
            <article
              className={`timeline-entry ${
                isExpanded ? 'expanded' : ''
              }`}
              key={entry.id}
            >
              <div
                className={`timeline-marker marker-${entry.category.toLowerCase()}`}
              >
                {entry.icon}
              </div>

              <button
                className="timeline-card"
                type="button"
                onClick={() =>
                  setExpandedEntry(isExpanded ? null : entry.id)
                }
                aria-expanded={isExpanded}
              >
                <div className="timeline-card-top">
                  <span className="timeline-label">{entry.label}</span>
                  <span className="timeline-date">{entry.date}</span>
                </div>

                <h2>{entry.title}</h2>
                <p className="timeline-description">
                  {entry.description}
                </p>

                {isExpanded && (
                  <div className="timeline-details">
                    <p>{entry.detail}</p>
                    <span>{entry.meta}</span>
                  </div>
                )}

                <span className="timeline-open">
                  {isExpanded ? 'CLOSE −' : 'EXPLORE +'}
                </span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
