"use client"
import { motion } from "framer-motion"

export default function AnimatedSection({ children, delay = 0, as: Tag = "section", className = "" }) {
  return (
    <Tag className={className}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    </Tag>
  )
}
