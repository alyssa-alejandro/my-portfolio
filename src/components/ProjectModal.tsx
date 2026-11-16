import SoloBadge from './SoloBadge';
import LeadershipBadge from './LeadershipBadge';
import { useEffect, useRef } from 'react';
import type { Project } from '../data/projects/types.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialog = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const elements = dialog.current?.querySelectorAll<HTMLElement>('button, a[href], iframe');
      if (!elements?.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog.current)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialog.current)) {
        event.preventDefault(); first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <div className="project-modal-overlay" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section ref={dialog} tabIndex={-1} className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button type="button" className="project-modal-close" onClick={onClose} aria-label="Close project details">×</button>
        <p className="eyebrow">{project.category}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        {project.leadership && <LeadershipBadge />}
        {project.solo && <SoloBadge />}
        <p className="project-modal-description">{project.description}</p>
        <dl className="project-facts">
          <div><dt>My role</dt><dd>{project.role}</dd></div>
          <div><dt>Team</dt><dd>{project.team}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>{project.grade && <div><dt>Assignment grade</dt><dd>{project.grade}</dd></div>}
          {project.award && <div><dt>Team recognition</dt><dd>{project.award}</dd></div>}{project.period && <div><dt>Project period</dt><dd>{project.period}</dd></div>}
        </dl>
        <figure className={project.coverImage ? "project-image project-cover" : "media-placeholder cover-placeholder"}>
          {project.coverImage ? <a href={project.coverImage} target="_blank" rel="noopener noreferrer"><img src={project.coverImage} alt={project.coverAlt || project.title} /></a> :
          <span className="eyebrow">Image placeholder / project cover</span>}
          <figcaption>{project.cover}</figcaption>
        </figure>
        <div className="project-modal-section"><h3>Project overview</h3><p>{project.overview}</p></div>
        <div className="project-modal-section"><h3>{project.status === "Planned" ? "Planned scope" : "My contributions"}</h3>
          <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="project-modal-section"><p className="eyebrow">TECHNICAL FOCUS</p><h3>{project.spotlight.title}</h3><p>{project.spotlight.approach}</p></div>
        <div className="project-modal-section"><h3>{project.status === "Planned" ? "Learning goals" : "What I learned"}</h3><p>{project.spotlight.takeaway}</p></div>
        <div className="project-modal-section"><h3>Tools & technologies</h3><p>{project.technologies}</p></div>
        <div className="project-modal-section"><h3>Project media</h3>
          <div className="project-media-grid">{project.media.map((media, index) => (
            <figure className={media.youtubeId ? 'project-video' : media.src ? 'project-image' : 'media-placeholder'} key={media.title}>
              {media.youtubeId ? (
                <>
                  <h4>{media.title}</h4>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${media.youtubeId}`}
                    title={`${project.title} — ${media.title}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <figcaption>{media.brief} <a href={`https://youtu.be/${media.youtubeId}`} target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></figcaption>
                </>
              ) : media.src ? (
                <>
                  <h4>{media.title}</h4>
                  <a href={media.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${media.title}`}><img src={media.src} alt={media.alt || media.title} loading="lazy" /></a>
                  <figcaption>{media.brief}</figcaption>
                </>
              ) : (
                <>
                  <span className="eyebrow">{media.kind} placeholder / {String(index + 1).padStart(2, '0')}</span>
                  <h4>{media.title}</h4><figcaption>{media.brief}</figcaption>
                </>
              )}
            </figure>
          ))}</div>
        </div>
        {project.github && <a href={project.github} target="_blank" rel="noreferrer">View source code ↗</a>}
      </section>
    </div>
  );
}



