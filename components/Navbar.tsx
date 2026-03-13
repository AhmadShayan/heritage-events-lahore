"use client"

import { useState } from "react"
import Link from "next/link"
import { business } from "@/lib/business"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      style={{ background: "rgba(15,11,4,0.95)", borderBottom: "1px solid rgba(201,168,76,0.2)" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex flex-col leading-tight">
          <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "0.05em" }}>
            HERITAGE EVENTS
          </span>
          <span style={{ color: "#B8A88A", fontSize: "0.7rem", letterSpacing: "0.15em" }}>LAHORE</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ color: "#B8A88A", fontSize: "0.9rem", letterSpacing: "0.05em" }}
              className="hover:text-[#C9A84C] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${business.phone}`}
            className="btn-primary"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
          >
            📞 {business.phone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ color: "#C9A84C", fontSize: "1.5rem" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#0F0B04", borderTop: "1px solid rgba(201,168,76,0.2)" }} className="md:hidden px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ color: "#B8A88A", display: "block", padding: "0.75rem 0", borderBottom: "1px solid rgba(201,168,76,0.1)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${business.phone}`}
            className="btn-primary mt-4"
            style={{ width: "100%", justifyContent: "center" }}
          >
            📞 Call Now
          </a>
        </div>
      )}
    </nav>
  )
}
