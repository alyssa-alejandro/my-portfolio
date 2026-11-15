
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            COMPUTER SCIENCE · REAL-TIME GRAPHICS
          </p>

          <h1>
            I build systems,
            <br />
            experiences, and
            <br />
            <span>things worth exploring.</span>
          </h1>

          <p className="hero-description">
            I'm Alyssa, a computer science student exploring graphics
            programming, real-time rendering, and interactive systems.
          </p>

          <div className="hero-actions">
            <Link to="/work" className="primary-button">
              Explore my work <span>↗</span>
            </Link>

            <Link to="/about" className="secondary-button">
              More about me
            </Link>
          </div>

          <div className="hero-status">
            <span className="status-dot" />
            <span>BUILDING THINGS, ONE FRAME AT A TIME</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-topline">
            <span>GRAPHICS LAB / 001</span>
            <span>REAL-TIME EXPERIMENT</span>
          </div>

          <div className="art-scene">
            <div className="scene-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="scene-sphere" />
            <div className="scene-crosshair crosshair-one">+</div>
            <div className="scene-crosshair crosshair-two">+</div>
            <span className="scene-label label-top">X: 0.024</span>
            <span className="scene-label label-bottom">RENDER / 001</span>
          </div>

          <div className="art-bottomline">
            <span>EXPERIMENTAL VISUALS</span>
            <span>01 — 03</span>
          </div>
        </div>

        <div className="hero-index">
          <span>01</span>
          <span className="index-line" />
          <span>HOME</span>
        </div>
      </section>

      <section className="home-featured">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>Ideas made tangible.</h2>
          </div>

          <Link to="/work" className="text-link">
            View all projects ↗
          </Link>
        </div>

        <p className="section-description">
          A selection of projects spanning graphics programming,
          simulation, and interactive systems.
        </p>

        <div className="home-project-grid">
          <Link to="/work" className="home-project-card">
            <div className="project-visual project-visual-game">
              <span className="visual-index">PROJECT / 001</span>
              <div className="game-visual-shape">
                <span />
                <span />
                <span />
              </div>
              <span className="visual-caption">GAME GRAPHICS</span>
            </div>

            <div className="home-project-info">
              <div>
                <h3>Out of Memory</h3>
                <p>Rendering, shaders, lighting, and visual effects.</p>
              </div>
              <span className="project-arrow">↗</span>
            </div>

            <p className="project-tech">C++ · OPENGL · GLSL</p>
          </Link>

          <Link to="/work" className="home-project-card">
            <div className="project-visual project-visual-simulation">
              <span className="visual-index">PROJECT / 002</span>
              <div className="simulation-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <span className="visual-caption">LIVE SIMULATION</span>
            </div>

            <div className="home-project-info">
              <div>
                <h3>EV Fleet Simulator</h3>
                <p>Database-backed login and interactive scenario mapping.</p>
              </div>
              <span className="project-arrow">↗</span>
            </div>

            <p className="project-tech">REACT · LEAFLET · POSTGRESQL</p>
          </Link>

          <Link to="/work" className="home-project-card">
            <div className="project-visual project-visual-vulkan">
              <span className="visual-index">PROJECT / 003</span>
              <div className="vulkan-cube">
                <div />
                <div />
                <div />
              </div>
              <span className="visual-caption">LOW-LEVEL RENDERING</span>
            </div>

            <div className="home-project-info">
              <div>
                <h3>Vulkan Renderer</h3>
                <p>An ongoing exploration of real-time rendering.</p>
              </div>
              <span className="project-arrow">↗</span>
            </div>

            <p className="project-tech">C++ · VULKAN · GRAPHICS</p>
          </Link>
        </div>
      </section>

      <section className="home-about-preview">
        <div>
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
          <h2>
            Curious about
            <br />
            <span>how things work.</span>
          </h2>
        </div>

        <div className="about-preview-copy">
          <p>
            I'm studying Computer Science in Real-Time Interactive
            Simulation at SIT–DigiPen. I enjoy understanding what happens
            beneath the surface — from rendering pipelines and shaders
            to the systems that bring interactive experiences to life.
          </p>

          <Link to="/about" className="text-link">
            Get to know me ↗
          </Link>
        </div>
      </section>

      <section className="home-contact">
        <p className="eyebrow">03 / WHAT'S NEXT?</p>
        <h2>
          Let's build
          <br />
          something <span>interesting.</span>
        </h2>
        <p>
          Always learning, always experimenting. Have a project or
          opportunity in mind?
        </p>
        <Link to="/contact" className="primary-button">
          Get in touch <span>↗</span>
        </Link>
      </section>
    </>
  );
}

