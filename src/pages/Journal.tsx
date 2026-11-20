import { Link } from 'react-router-dom';

export default function Journal() {
  return (
    <section className="page-section journal-coming-soon" aria-labelledby="journal-title">
      <p className="eyebrow">JOURNAL</p>
      <h1 id="journal-title" className="page-title">Under <span>construction.</span></h1>
      <p className="page-intro">I'm putting together notes on my projects, experiences, and what I'm learning along the way. Check back soon.</p>
      <Link to="/work" className="personal-link">Explore my projects <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
