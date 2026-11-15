import { useState } from 'react';
import { Link } from 'react-router-dom';

const email = 'alyssa.alejandro@gmail.com';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Email address copied.');
    } catch {
      setCopyStatus('Select the email address above to copy it, or use the email link.');
    }
  }
  return (
    <section className="page-section contact-page">
      <header className="contact-heading">
        <p className="eyebrow">CONTACT</p>
        <h1 className="page-title">Say <span>hello.</span></h1>
        <p className="page-intro">Have a project in mind, a question about my work, or an opportunity to share? I'd be glad to hear from you.</p>
      </header>

      <div className="contact-layout">
        <div className="contact-main">
          <section className="contact-email-panel" aria-labelledby="contact-email-title">
            <p className="eyebrow">THE BEST WAY TO REACH ME</p>
            <h2 id="contact-email-title">Start with an email.</h2>
            <a className="contact-email-address" href={`mailto:${email}`}>{email}</a>
            <p>Tell me a little about yourself and what you'd like to discuss. If it's about a project, a few details or a link are a helpful start.</p>
            <div className="contact-email-actions">
              <a href={`mailto:${email}`} className="primary-button">Write an email <span aria-hidden="true">↗</span></a>
              <button type="button" className="contact-copy" onClick={copyEmail}>Copy address</button>
            </div>
            <p className="contact-copy-status" role="status">{copyStatus}</p>
          </section>

          <section className="contact-socials" aria-labelledby="contact-social-title">
            <h2 id="contact-social-title">Elsewhere</h2>
            <a href="https://www.linkedin.com/in/alyssanicolealejandro/" target="_blank" rel="noopener noreferrer">
              <div><h3>LinkedIn</h3><p>My background, experience, and a place to connect.</p></div><span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/alyssa-alejandro" target="_blank" rel="noopener noreferrer">
              <div><h3>GitHub</h3><p>Code and projects I've been working on.</p></div><span aria-hidden="true">↗</span>
            </a>
          </section>
        </div>

        <aside className="contact-context" aria-labelledby="contact-context-title">
          <h2 id="contact-context-title">A little context</h2>
          <dl><div><dt>Based in</dt><dd>Singapore · UTC+8</dd></div><div><dt>Currently</dt><dd>Studying Computer Science at SIT–DigiPen<br />Graduating in 2028</dd></div></dl>
          <h3>I'd enjoy talking about</h3>
          <ul><li>Internships and opportunities to learn</li><li>Games, computer vision, and simulation</li><li>Software, hardware, and product ideas</li><li>Collaborations and community projects</li></ul>
          <Link to="/work" className="personal-link">Take a look at my work <span aria-hidden="true">↗</span></Link>
        </aside>
      </div>
    </section>
  );
}
