
import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import type { Project } from "../components/ProjectModal";

const projects: Project[] = [
  {
    id: "gam200",
    category: "GAM200 / GRAPHICS PROGRAMMING",
    title: "Out of Memory",
    description:
      "A team-developed game built with C++ and OpenGL, featuring custom rendering systems, shaders, lighting, and visual effects.",
    contributions: [
      "Developed and contributed to graphics and rendering systems.",
      "Worked on shaders, lighting, particles, and visual effects.",
      "Contributed to camera, transformation, texture, and shader management.",
    ],
    technologies: "C++ · OpenGL · GLSL · GLFW · ImGui",
    media: "",
    github: "",
  },
  {
    id: "gam300",
    category: "GAM300 / SIMULATION & VISUALIZATION",
    title: "EV Fleet Simulator",
    description:
      "An EV fleet simulation and visualization project developed with ST Engineering.",
    contributions: [
      "Implemented real-time 2D fleet map visualization.",
      "Worked on vehicle interpolation and playback controls.",
      "Contributed to simulation scrubbing, snapshots, and live updates.",
    ],
    technologies: "React · Three.js · React Three Fiber · Vite",
    media: "",
    github: "",
  },
  {
    id: "gam150",
    category: "GAM150 / GAME DEVELOPMENT",
    title: "Viral Invaders",
    description:
      "A game development project created using C++ and DigiPen's custom Alpha Engine.",
    contributions: [
      "Add your actual gameplay and programming contributions.",
    ],
    technologies: "C++ · Alpha Engine",
    media: "",
    github: "",
  },
  {
    id: "gam100",
    category: "GAM100 / PROJECT LEAD",
    title: "Chai & Chain",
    description:
      "A two-player cooperative cooking game featuring ingredient transfers, time-sensitive recipes, and chain-constrained movement.",
    contributions: [
      "Implemented recipe randomisation.",
      "Created an ingredient list displaying ingredient names and images.",
      "Implemented player movement.",
      "Led team discussions, planning, and brainstorming.",
      "Created the promotional trailer.",
    ],
    technologies: "C · Alpha Engine",
    media: "Gameplay footage and promotional trailer.",
    github: "",
  },
];

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
                <span className="visual-caption">
                  {project.title}
                </span>
              </div>

              <div className="work-project-body">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
