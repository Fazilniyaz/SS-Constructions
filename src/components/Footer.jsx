export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ background: "#fff", borderTop: "1px solid var(--border)" }}
    >
      <div className="container" style={{ padding: "36px 0" }}>
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "1fr",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".6rem",
                color: "var(--brand-blue)",
                fontWeight: 800,
                fontFamily: "Poppins, Inter",
                fontSize: "1.1rem",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M5 20c5-2 7-6 7-10V4h4v6c0 6-4 10-11 12z"
                  fill="currentColor"
                />
              </svg>
              SS Construction
            </div>

            <div
              className="card"
              style={{
                padding: "1rem",
                display: "grid",
                gap: ".5rem",
                borderRadius: "12px",
              }}
            >
              <div style={{ display: "grid", gap: ".35rem" }}>
                <div style={{ fontWeight: 700, color: "var(--fg)" }}>
                  Owner:{" "}
                  <span style={{ color: "var(--brand-blue)" }}>Abuthahir</span>
                </div>
                <div>
                  <strong style={{ color: "var(--fg)" }}>Number:</strong>{" "}
                  <a
                    href="tel:+918778171557"
                    style={{
                      color: "var(--brand-blue)",
                      textDecoration: "none",
                    }}
                  >
                    8778171557
                  </a>
                </div>
                <div>
                  <strong style={{ color: "var(--fg)" }}>Mail:</strong>{" "}
                  <a
                    href="mailto:ssconstructionscbe@gmail.com"
                    style={{
                      color: "var(--brand-blue)",
                      textDecoration: "none",
                    }}
                  >
                    ssconstructionscbe@gmail.com
                  </a>
                </div>
                <div style={{ color: "var(--muted)" }}>
                  <strong style={{ color: "var(--fg)" }}>Address:</strong> Hot
                  Chips opposite, Podanur Main Road, Coimbatore - 23
                </div>
              </div>

              <div
                style={{ display: "flex", gap: ".6rem", marginTop: ".4rem" }}
              >
                <a
                  className="button"
                  href="tel:+918778171557"
                  aria-label="Call SS Construction"
                >
                  Call Now
                </a>
                <a
                  className="button"
                  style={{
                    background: "#fff",
                    color: "var(--brand-blue)",
                    border: "1px solid var(--brand-blue)",
                  }}
                  href="mailto:ssconstructionscbe@gmail.com"
                  aria-label="Email SS Construction"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            color: "var(--muted)",
          }}
        >
          <small>© {new Date().getFullYear()} Developed by SoloCompiler</small>
          <nav
            aria-label="Footer navigation"
            className="hidden-mobile"
            style={{ display: "flex", gap: ".75rem" }}
          >
            <a
              href="#home"
              style={{ color: "var(--muted)", textDecoration: "none" }}
            >
              Home
            </a>
            <a
              href="#about"
              style={{ color: "var(--muted)", textDecoration: "none" }}
            >
              About
            </a>
            <a
              href="#gallery"
              style={{ color: "var(--muted)", textDecoration: "none" }}
            >
              Gallery
            </a>
            <a
              href="#why"
              style={{ color: "var(--muted)", textDecoration: "none" }}
            >
              Why Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
