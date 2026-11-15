
export default function Contact() {
  return (
    <section className="page-section contact-page">
      <p className="eyebrow">04 / CONTACT</p>

      <h1 className="page-title">
        Let's connect.
      </h1>

      <p className="page-intro">
        Interested in software engineering, computer graphics,
        or real-time rendering. I'm always open to connecting
        with people working on interesting projects and ideas.
      </p>

      <div className="contact-links">
        <a href="mailto:alyssa.alejandro@gmail.com">
          Email <span aria-hidden="true">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/alyssanicolealejandro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>

        <a
          href="https://github.com/alyssa-alejandro"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>

      <p className="contact-note">
        Based in Singapore · Open to opportunities worldwide
      </p>
    </section>
  );
}
