import { Link } from 'react-router-dom';

const interests = [
  'Software Development', 'Game Development', 'Computer Vision', 'Graphics Programming',
  'Simulation & Visualisation', 'Embedded Systems & IoT', 'Product Design',
];

const toolkit = [
  { category: 'Languages', skills: ['C++', 'C', 'C#', 'Python', 'JavaScript'] },
  { category: 'Graphics & Games', skills: ['OpenGL', 'GLSL', 'GLFW', 'GLM', 'ImGui', 'DigiPen Game Frameworks'] },
  { category: 'Web & Data', skills: ['React', 'Leaflet', 'Node.js', 'PostgreSQL', 'Vite'] },
  { category: 'Computer Vision', skills: ['OpenCV', 'YOLO', 'OpenVINO', 'Depth Anything V2', 'Open3D', 'NumPy'] },
  { category: 'Build & Development', skills: ['CMake', 'vcpkg', 'Git', 'Visual Studio'] },
  { category: 'Design & Hardware', skills: ['Fusion 360', 'Arduino UNO', 'Raspberry Pi', 'ThingSpeak'] },
];

const experience = [
  { title: 'Games and real-time graphics', text: 'My game projects have taken me from C gameplay programming and project leadership in Chai & Chain to animation systems and health bars in Viral Invaders. For Caffeine Engine, our custom C++ and OpenGL engine, I contributed to rendering, camera systems, and lighting. I also helped coordinate team progress, milestone submissions, and responses to broken builds. In the game Out of Memory, I implemented door and player particle effects, plus transitions.' },
  { title: 'Simulation and connected applications', text: 'For the ongoing EV Fleet Simulator with ST Engineering, I work on database-backed login and the map scenario layer. This connects React interfaces with account data, scenario state, and a map-based view of fleet operations.' },
  { title: 'Computer vision and algorithm analysis', text: 'My ongoing Python project explores pretrained object detection, relative-depth estimation, and point-cloud visualisation. For a group seam-carving project, I divided tasks and established the CMake and OpenCV setup supporting the team’s algorithm comparisons.' },
  { title: 'Hardware with a practical purpose', text: 'During the Entrepreneurship Immersion Programme, I developed CPRex, a CPR monitoring and feedback practice prototype for a startup, using Arduino UNO, C, and Fusion 360. For my Smart Community Cabinet FYP, I led a five-member team and contributed to the database, hardware, and electronic lock for an IoT food-sharing prototype.' },
];

const education = [
  {
    number: "01",
    title: "BSc Computer Science in Real-Time Interactive Simulation",
    school: "SIT–DigiPen",
    period: "Aug 2024 – Apr 2028",
    detail: "Expected graduation",
  },
  {
    number: "02",
    title: "Diploma in Engineering Design with Business",
    school: "Republic Polytechnic",
    period: "Apr 2021 – May 2024",
    detail: "Graduated with Merit",
  },
];

const awards = [
  {
    year: "4 SEMESTERS",
    title: "Director's Roll of Honour",
    detail: "Awarded for four consecutive semesters at Republic Polytechnic.",
  },
  {
    year: "AY2022",
    title: "Module Prize — Innovation & Design Thinking",
  },
  {
    year: "AY2022",
    title: "Entrepreneurship Bootcamp — Best Pitch",
  },
  {
    year: "AY2022",
    title: "Republic Award",
  },
  {
    year: "AY2023",
    title: "M.A.D. Service-Learning Leader Award",
  },
  { year: 'RP', title: 'Engineering in Community Award' },
  { year: 'TOP 10', title: 'iDare Competition Finalist', detail: 'Republic Polytechnic entrepreneurship competition.' },
];

export default function About() {
  return (
    <section className="page-section about-page">
      {/* Introduction */}
      <header className="about-heading">
        <p className="eyebrow">02 / ABOUT</p>

        <h1 className="page-title">
          A little about <span>me.</span>
        </h1>

        <p className="page-intro">
          Hello, I'm Alyssa, a Computer Science student in Real-Time
          Interactive Simulation at SIT–DigiPen, graduating in 2028.
          I enjoy understanding how systems work and building experiences
          that connect code, visuals, and the physical world.
        </p>
        <p className="about-description">
          My background is in Engineering Design with Business at Republic
          Polytechnic, where I graduated with merit in 2024. Working on
          hardware prototypes and community projects introduced me to
          product design, entrepreneurship, and team leadership. Today,
          I'm building on that foundation through software development,
          games, simulation, and computer vision.
        </p>
      </header>

      <div className="about-content">
        <article className="about-block">
          <p className="eyebrow">EXPERIENCE / FROM SOFTWARE TO HARDWARE</p>
          <h2>What I've been building.</h2>
          <div className="about-experience-list">
            {experience.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p className="about-description">{item.text}</p>
              </div>
            ))}
          </div>
          <Link to="/work" className="text-link">Explore the projects ↗</Link>
        </article>

        {/* Interests */}
        <article className="about-block">
          <p className="eyebrow">01 / INTERESTS</p>
          <h2>What I'm interested in.</h2>

          <div className="interest-list">
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </article>

        {/* Technical Toolkit */}
        <article className="about-block">
          <p className="eyebrow">02 / TOOLKIT</p>
          <h2>Tools of the trade.</h2>

          <div className="toolkit-list">
            {toolkit.map((group) => (
              <div
                className="toolkit-item"
                key={group.category}
              >
                <h3>{group.category}</h3>

                <div className="toolkit-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Education */}
        <article className="about-block">
          <p className="eyebrow">03 / EDUCATION</p>
          <h2>Where I'm learning.</h2>

          <div className="education-list">
            {education.map((item) => (
              <div
                className="education-item"
                key={item.number}
              >
                <span className="education-number">
                  {item.number}
                </span>

                <div className="education-details">
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                  <p className="education-period">
                    {item.period}
                  </p>
                  <p className="education-note">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Awards and Recognition */}
        <article className="about-block about-awards">
          <p className="eyebrow">04 / RECOGNITION</p>
          <h2>A few things I'm proud of.</h2>

          <div className="award-list">
            {awards.map((award) => (
              <div className="award-item" key={award.title}>
                <span className="award-year">
                  {award.year}
                </span>

                <div>
                  <h3>{award.title}</h3>

                  {award.detail && <p>{award.detail}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="distinction-note">
            <p className="eyebrow">
              DISTINCTION COURSEWORK
            </p>

            <p>
              Engineering Mathematics · Innovation & Design Thinking
            </p>
          </div>
        </article>

        {/* Leadership and Community */}
        <article className="about-block about-beyond">
          <p className="eyebrow">
            05 / LEADERSHIP & COMMUNITY
          </p>

          <h2>More than the work I build.</h2>

          <p className="about-description">
            Beyond programming, I value creating meaningful
            experiences for others through leadership,
            collaboration, and community involvement. These
            experiences have taught me to coordinate with
            teams, plan initiatives, and turn ideas into
            experiences that bring people together.
          </p>

          <p className="about-description">
            I participated in the Entrepreneurship Immersion Programme and
            Youth Corps Leaders Programme in 2024. I've also managed and
            created social media content for IGNITE 2022, orientation
            programmes, and student leadership camps. Leading project teams
            and supporting these events has taught me to communicate ideas,
            coordinate work, and keep the people using a product in mind.
          </p>
          <div className="leadership-list">
            {/* Youth Corps Singapore */}
            <div className="leadership-card">
              <p className="eyebrow">
                COMMUNITY LEADERSHIP
              </p>

              <h3>Youth Corps Singapore</h3>

              <p className="leadership-role">
                Leadership Programme · Co-Lead
              </p>

              <p>
                Co-led a year-long leadership programme focused
                on engaging seniors through meaningful
                activities and community experiences.
              </p>

              <ul className="leadership-details">
                <li>
                  Planned and organised activities for seniors
                  across five programme sessions.
                </li>

                <li>
                  Planned volunteer training sessions to
                  prepare volunteers for their roles.
                </li>

                <li>
                  Collaborated with fellow programme members
                  to coordinate activities and support
                  programme delivery.
                </li>
              </ul>
            </div>

            {/* SEG Club */}
            <div className="leadership-card">
              <p className="eyebrow">
                STUDENT LEADERSHIP
              </p>

              <h3>SEG Club</h3>

              <p className="leadership-role">
                Deputy Head of Publicity
              </p>

              <p>
                Supported student engagement and event
                publicity through social media management,
                content coordination, and orientation planning.
              </p>

              <ul className="leadership-details">
                <li>
                  Managed social media platforms and
                  consolidated posts created by club members
                  for publication.
                </li>

                <li>
                  Edited videos and contributed to publicity
                  content and event decorations.
                </li>

                <li>
                  Guided junior members and served on the
                  organising committee for school orientation.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
