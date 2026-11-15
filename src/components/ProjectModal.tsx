
import { useEffect } from "react";

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  contributions: string[];
  technologies: string;
  media: string;
  github: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <p className="eyebrow">{project.category}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="project-modal-description">
          {project.description}
        </p>

        <div className="project-modal-section">
          <h3>My Contributions</h3>
          <ul>
            {project.contributions.map((item, index) => (
              <li key={`${project.id}-contribution-${index}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-modal-section">
          <h3>Technologies</h3>
          <p>{project.technologies}</p>
        </div>

        {project.media && (
          <div className="project-modal-section">
            <h3>Project Media</h3>
            <p>{project.media}</p>
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            View source code ↗
          </a>
        )}
      </section>
    </div>
  );
}
