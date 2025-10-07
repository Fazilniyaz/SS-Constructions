import AnimatedSection from "./AnimatedSection.jsx"

export default function About() {
  return (
    <AnimatedSection id="about" className="section section-muted">
      <div className="container about-grid">
        <div className="about-img">
          <img
            src="/images/gallery-3.jpg"
            alt="Residential project exterior"
            style={{ width: "100%", display: "block" }}
          />
        </div>
        <div>
          <span className="badge">About Us</span>
          <h2 style={{ marginTop: ".5rem" }}>Quality. Precision. Accountability.</h2>
          <p style={{ color: "var(--muted)" }}>
            From structural design to finishing, we bring engineering discipline to every phase. Our team combines field
            experience with modern methods to deliver cost‑effective, durable, and elegant results.
          </p>
          <ul style={{ margin: "1rem 0", padding: "0 1rem", color: "var(--fg)" }}>
            <li>• Turnkey residential and commercial construction</li>
            <li>• Renovations, interiors, and structural repairs</li>
            <li>• Transparent pricing and milestone tracking</li>
            <li>• Licensed contractors and vetted suppliers</li>
          </ul>
          <a className="button" href="#contact" aria-label="Get in touch">
            Speak to an Engineer
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
