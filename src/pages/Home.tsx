import { Link } from 'react-router-dom';

// Add images to public/images/home, then fill in the paths below.
const portrait = { src: '/images/home/home.jpg', alt: 'Alyssa Nicole Alejandro', brief: 'A portrait of you, or a candid photo working on a project. Portrait orientation, 4:5.' };

function HomeImage({ src, alt, brief, portrait = false }: { src: string; alt: string; brief: string; portrait?: boolean }) {
  return (
    <div className={portrait ? 'home-image home-image-portrait' : 'home-image'}>
      {src ? <img src={src} alt={alt} /> : <div className="home-image-placeholder"><span>IMAGE TO ADD</span><p>{brief}</p></div>}
    </div>
  );
}

const selectedWork = [
  {
    name: 'Out of Memory', type: 'Team game · Visual effects',
    description: 'Door and player particle effects, plus transitions, for a boss-combat game built with our team’s Caffeine Engine.',
    tools: 'C++ / Caffeine Engine', image: '/images/works/gam250/level1_game.png', alt: 'Out of Memory boss encounter', imageBrief: 'Gameplay screenshot with a boss, lighting, and effects visible. Landscape, 16:9.',
  },
  {
    name: 'EV Fleet Simulator', type: 'Industry collaboration · In progress',
    description: 'Database-backed login and the map scenario layer for a fleet simulation project with Upsight.',
    tools: 'React / Leaflet / PostgreSQL', image: '/images/works/gam300/mapscreen.png', alt: 'EV Fleet Simulator scenario map', imageBrief: 'Scenario map showing vehicles, depots, and controls. Use shareable demo data. Landscape, 16:9.',
  },
  {
    name: 'CPRex', type: 'Startup project · Hardware prototype',
    description: 'A CPR monitoring and feedback practice device I developed during my entrepreneurship immersion programme.',
    tools: 'Arduino UNO / C / Fusion 360', image: '', alt: 'CPRex practice device prototype', imageBrief: 'Photo of the assembled CPRex device in its practice setup. Landscape, 16:9.',
  },
];

export default function Home() {
  return (
    <div className="personal-home">
      <section className="personal-intro" aria-labelledby="home-title">
        <p className="personal-kicker">ALYSSA NICOLE ALEJANDRO</p>
        <h1 id="home-title">Hi, I'm Alyssa.<br /><span>I like figuring out<br className="intro-break" /> how things work.</span></h1>
        <div className="personal-intro-bottom">
          <div className="personal-intro-copy">
            <p>I'm a computer science student at SIT–DigiPen, graduating in 2028. My projects span software development, games, computer vision, and hardware prototyping.</p>
            <p>I've gone from building a CPR practice device to working on a custom game engine. I enjoy the part where an idea becomes something I can test, take apart, and improve.</p>
            <Link to="/work" className="personal-link">See my projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="personal-intro-aside">
          <HomeImage {...portrait} portrait />
          <aside className="personal-now" aria-label="Current projects">
            <h2>On my desk lately</h2>
            <p>An EV fleet simulator with Upsight, and a Python project that turns photographs into estimated 3D point clouds.</p>
            <span>Both are still in progress.</span>
          </aside>
          </div>
        </div>
      </section>

      <section className="personal-work" aria-labelledby="selected-title">
        <div className="personal-section-heading"><h2 id="selected-title">A few projects</h2><Link to="/work" className="personal-link">All projects <span aria-hidden="true">↗</span></Link></div>
        <div className="personal-project-list">
          {selectedWork.map((project) => (
            <Link to="/work" className="personal-project" key={project.name}>
              <HomeImage src={project.image} alt={project.alt} brief={project.imageBrief} />
              <div className="personal-project-name"><p>{project.type}</p><h3>{project.name}</h3></div>
              <div className="personal-project-detail"><p>{project.description}</p><span>{project.tools}</span></div>
              <span className="personal-project-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="personal-background" aria-labelledby="background-title">
        <h2 id="background-title">Before the code</h2>
        <div>
          <p>I studied Engineering Design with Business at Republic Polytechnic, graduating with merit in 2024. There, I led our Smart Community Cabinet FYP and discovered how much I enjoy working across software and physical design.</p>
          <p>Outside projects, I've been involved in Youth Corps and student event publicity. I also read a lot of mystery and thriller novels, and I'm working towards writing a book of my own.</p>
          <Link to="/about" className="personal-link">More about me <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="personal-contact" aria-labelledby="contact-title"><div><h2 id="contact-title">Want to get in touch?</h2><p>I'm happy to talk about projects, opportunities, or something you're working on.</p></div><Link to="/contact" className="personal-link">Say hello <span aria-hidden="true">↗</span></Link></section>
    </div>
  );
}

