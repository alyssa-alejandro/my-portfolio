import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import './index.css'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        ALYSSA NICOLE ALEJANDRO<span>.</span>
        <small>GRAPHICS LAB / 001</small>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/journal">Journal</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <a href="/resume.pdf" className="resume-link">
        Resume ↗
      </a>
    </header>
  );
}

function NotFound() {
  return (
    <section className="page-section">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1 className="page-title">Looks like a wrong turn.</h1>
      <Link to="/" className="primary-button">Back home ↗</Link>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>ALYSSA NICOLE ALEJANDRO · GRAPHICS LAB / 001</p>
          <p>Built with curiosity and code.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;