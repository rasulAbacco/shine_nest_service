import './aboutPage.css';

export default function About() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">ShineNest</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#" className="active">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>About ShineNest</h1>
        <p>
          We are dedicated to providing the best home cleaning services with a touch of professionalism and care. Our team ensures that every corner sparkles, leaving your space refreshed and renewed.
        </p>
      </section>

      <section className="content">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To deliver top-quality home and commercial cleaning services that exceed expectations and build trust with every client.
          </p>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>
            A world where cleanliness brings peace of mind and contributes to well-being and productivity.
          </p>
        </div>
        <div className="card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced professionals</li>
            <li>Eco-friendly products</li>
            <li>Reliable and punctual</li>
          </ul>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 ShineNest Services. All rights reserved.</p>
      </footer>
    </>
  );
}
