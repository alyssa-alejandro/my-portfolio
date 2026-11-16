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

      <nav className="work-category-nav" aria-label="Project categories"><a href="#game-development">Games</a><a href="#software-development">Software</a><a href="#hardware-iot">Hardware & IoT</a><a href="#entrepreneurship">Entrepreneurship</a><a href="#future-projects">Future</a></nav>

      {[{ title: "Game Development", items: gameProjects }, { title: "Software Development", items: softwareProjects }, { title: "Hardware & IoT", items: hardwareProjects }, { title: "Entrepreneurship", items: entrepreneurshipProjects }, { title: "Future Projects", items: futureProjects }].map((group) => (<section className="work-category" key={group.title} id={group.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}>
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
              <div className={project.coverImage ? `work-project-visual has-cover-image${project.id === "gam150" ? " gam150-cover" : project.id === "ekosafe" ? " ekosafe-cover" : ""}` : "work-project-visual"}>
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
                <span className="visual-caption">
                  {project.title}
                </span>
              </>}
              </div>

              <div className="work-project-body">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <div className="project-card-badges">
                  {project.leadership && <LeadershipBadge />}
                  {project.solo && <SoloBadge />}
                  {project.grade && <span className="project-result-badge">Grade {project.grade}</span>}
                  {project.award && <span className="project-result-badge">★ {project.award}</span>}
                </div>
                <p className="project-card-summary">{project.summary || project.description}</p>
                <div className="project-card-role"><span>My role</span><strong>{project.role}</strong></div>
                <div className="project-card-tools">{project.technologies.split(' · ').map(tool => <span key={tool}>{tool}</span>)}</div>
                <div className="project-card-footer"><span className="project-card-status">{project.status}</span>
                <span className="project-view-link">
                  {project.status === "Planned" ? "View project plan ↗" : "View project ↗"}
                </span>
                </div>
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










