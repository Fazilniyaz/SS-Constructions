import AnimatedSection from "./AnimatedSection.jsx"

const items = [
  {
    title: "On‑time Delivery",
    desc: "Structured schedules and supplier SLAs keep your project moving.",
    icon: ClockIcon,
  },
  { title: "Quality Craftsmanship", desc: "Skilled teams, supervised checklists, and material QA.", icon: ShieldIcon },
  { title: "Transparent Pricing", desc: "Milestone‑based billing with clear BOQs and change control.", icon: BillIcon },
]

export default function WhyChooseUs() {
  return (
    <AnimatedSection id="why" className="section section-muted">
      <div className="container">
        <span className="badge">Why choose us</span>
        <h2 style={{ marginTop: ".4rem", marginBottom: ".8rem" }}>Built for certainty, delivered with care.</h2>
        <div className="features">
          {items.map((it, idx) => (
            <div key={idx} className="card feature">
              <div style={{ display: "flex", gap: ".8rem" }}>
                <span
                  className="center"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--brand-blue-100)",
                    color: "var(--brand-blue-700)",
                  }}
                >
                  <it.icon />
                </span>
                <div>
                  <h3>{it.title}</h3>
                  <p style={{ color: "var(--muted)", margin: 0 }}>{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function BillIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
