"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-wrap">
        <div>
          <span className="badge">The place where you find quality</span>
          <h1 className="hero-title" style={{ marginTop: ".6rem" }}>
            Building spaces that stand the test of time.
          </h1>
          <p className="hero-sub">
            SS Construction delivers end‑to‑end civil engineering, residential and commercial projects with
            uncompromising quality and on‑time execution.
          </p>
          <div style={{ display: "flex", gap: ".7rem", marginTop: "1rem" }}>
            <a className="button" href="#footer">
              Get a Free Quote
            </a>
            <a
              className="button"
              style={{ background: "#fff", color: "var(--brand-blue)", borderColor: "var(--brand-blue)" }}
              href="#gallery"
            >
              View Our Work
            </a>
          </div>

          <div className="kpis">
            <div className="kpi">
              <strong>12+ yrs</strong>
              <span>Experience</span>
            </div>
            <div className="kpi">
              <strong>150+</strong>
              <span>Projects</span>
            </div>
            <div className="kpi">
              <strong>98%</strong>
              <span>On-time</span>
            </div>
            <div className="kpi">
              <strong>100%</strong>
              <span>Safety focus</span>
            </div>
          </div>
        </div>

        <motion.div
          className="hero-media"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/images/gallery-1.jpg"
            alt="Featured SS Construction project"
            style={{ width: "100%", display: "block" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
