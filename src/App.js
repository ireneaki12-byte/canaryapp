import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Chemelil Sugar Primary School logo" />
        <h1>Chemelil Sugar Primary School</h1>
        <p className="App-subtitle">P.O. Box 177, Muhoroni</p>

        <section className="App-intro">
          <p>
            Welcome to <strong>Chemelil Sugar Primary School</strong> — nurturing
            character, curiosity, and community through quality education in a
            safe, supportive environment.
          </p>
          <p>
            We are a community-based public school dedicated to academic
            excellence, integrity, and holistic development of every learner.
          </p>
        </section>

        <a
          className="App-link"
          href="mailto:info@chemelilprimary.ac.ke"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>

      <main className="App-content">
        <section>
          <h2>Our Vision</h2>
          <p>
            To be a center of excellence in providing accessible and holistic
            primary education that empowers learners to reach their full
            potential.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            To provide quality, inclusive, and values-based education that
            develops learners intellectually, morally, and socially to serve
            the community and the nation.
          </p>
        </section>

        <section>
          <h2>Core Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Teamwork</li>
            <li>Respect</li>
            <li>Hard Work</li>
            <li>Excellence</li>
          </ul>
        </section>
      </main>

      <footer className="App-footer">
        <p>
          © {new Date().getFullYear()} Chemelil Sugar Primary School ·
          Muhoroni · All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
