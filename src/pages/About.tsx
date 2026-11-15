
const interests = [
  "Real-time Rendering",
  "Graphics Programming",
  "Shader Programming",
  "Lighting & Visual Effects",
  "Interactive Systems",
  "Simulation",
];

const toolkit = [
  {
    category: "Languages",
    skills: ["C++", "C", "C#", "Python", "JavaScript"],
  },
  {
    category: "Graphics",
    skills: ["OpenGL", "GLSL", "GLFW", "GLM", "ImGui"],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      "React",
      "React Three Fiber",
      "Git",
      "Visual Studio",
    ],
  },
  {
    category: "Design & Hardware",
    skills: ["Fusion 360", "Arduino", "Raspberry Pi"],
  },
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
    detail: "Recognised among the top 10% of the cohort.",
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
          I'm Alyssa, a Computer Science student at SIT–DigiPen
          specialising in Real-Time Interactive Simulation.
          I'm interested in graphics programming, real-time
          rendering, and the systems that bring interactive
          worlds to life.
        </p>

        <p className="about-description">
          Through game development, I've worked with C++,
          OpenGL, and GLSL to explore rendering, camera
          systems, lighting, and visual effects. I'm
          continuing to deepen my understanding of graphics
          through hands-on projects and experimentation.
        </p>
      </header>

      <div className="about-content">
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
