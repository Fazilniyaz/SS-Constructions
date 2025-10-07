const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Our Gallery" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#footer", label: "Contact" },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="SS Construction home">
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 20c5-2 7-6 7-10V4h4v6c0 6-4 10-11 12z" fill="currentColor" />
          </svg>
          <span>SS Construction</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
