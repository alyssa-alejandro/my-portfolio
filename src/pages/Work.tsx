import type { Project } from '../data/projects/types.ts';
import SoloBadge from '../components/SoloBadge';
import LeadershipBadge from '../components/LeadershipBadge';

import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { gameProjects, softwareProjects, hardwareProjects, entrepreneurshipProjects, futureProjects } from "../data/projects/catalog.ts";

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
          Projects in software and game development, hardware,
          product design, and entrepreneurship.
        </p>
      </header>

      {[{ title: "Game Development", items: gameProjects }, { title: "Software Development", items: softwareProjects }, { title: "Hardware & IoT", items: hardwareProjects }, { title: "Entrepreneurship", items: entrepreneurshipProjects }, { title: "Future Projects", items: futureProjects }].map((group) => (<section className="work-category" key={group.title}>
        <div className="work-category-heading">
          <h2>{group.title}</h2>
          <span>{String(group.items.length).padStart(2, "0")} PROJECTS</span>
        </div>

        <div className="work-project-grid">
          {group.items.map((project, index) => (
            <button
              type="button"
              className="work-project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className={project.coverImage ? `work-project-visual has-cover-image${project.id === "gam150" ? " gam150-cover" : ""}` : "work-project-visual"}>
                {project.coverImage ? <img className="work-cover-image" src={project.coverImage} alt={project.coverAlt || project.title} /> : <>
                <span className="visual-index">
                  {project.category.split(" / ")[0]}
                  {" / "}
                  {String(index + 1).padStart(3, "0")}
                </span>
                <div className="work-series-mark">
                  {project.id === "gam250" ? "OOM" : project.id === "caffeine-engine" ? "CE" :
                   project.id === "gam300" ? "EV" : project.id === "seam-carving" ? "SC" : project.id === "python-3d-vision" ? "CV" :
                   project.id === "cprex" ? "CPR" : project.id === "community-cabinet" ? "IoT" : project.id === "folding-cabinet-table" ? "E262" : project.id === "quiknom" ? "QN" : project.id === "ekosafe" ? "EKO" : project.id === "vulkan-renderer" ? "VK" : "GAM"}
                </div>
                <span className="card-media-brief">Image placeholder · {project.cover}</span><span className="visual-caption">
                  {project.title}
                </span>
              </>}
              </div>

              <div className="work-project-body">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                {project.leadership && <LeadershipBadge />}
        {project.solo && <SoloBadge />}
                <p>{project.description}</p><p className="project-role">{project.role} · {project.status}{project.grade && ` · Grade ${project.grade}`}{project.award && ` · ${project.award}`}</p>
                <div className="project-tech">
                  {project.technologies}
                </div>
                <span className="project-view-link">
                  {project.status === "Planned" ? "View project plan ↗" : "View project ↗"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>))}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}










