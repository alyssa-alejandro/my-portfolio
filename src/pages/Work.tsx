
import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { projects, type Project } from "../data/projects/index.ts";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="page-section work-page">
      <header className="work-heading">
        <p className="eyebrow">01 / SELECTED WORK</p>
        <h1 className="page-title">
          Things I've <span>built.</span>
        </h1>
        <p className="page-intro">
          A selection of projects exploring graphics programming,
          game development, and interactive simulation.
        </p>
      </header>

      <section className="work-category">
        <div className="work-category-heading">
          <h2>Software & Game Development</h2>
          <span>04 PROJECTS</span>
        </div>

        <div className="work-project-grid">
          {projects.map((project, index) => (
            <button
              type="button"
              className="work-project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className="work-project-visual">
                <span className="visual-index">
                  {project.category.split(" / ")[0]}
                  {" / "}
                  {String(index + 1).padStart(3, "0")}
                </span>
                <div className="work-series-mark">
                  {index === 0 ? "OOM" :
                   index === 1 ? "EV" :
                   "GAM"}
                </div>
                <span className="card-media-brief">Image placeholder · {project.cover}</span><span className="visual-caption">
                  {project.title}
                </span>
              </div>

              <div className="work-project-body">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p><p className="project-role">{project.role} · {project.status}</p>
                <div className="project-tech">
                  {project.technologies}
                </div>
                <span className="project-view-link">
                  View project ↗
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}


