import Link from "next/link"
import { business } from "@/lib/business"

export default function Footer() {
  return (
    <footer style={{ background: "#080602", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.05em" }}>
            HERITAGE EVENTS LAHORE
          </div>
          <p style={{ color: "#7A6A50", fontSize: "0.9rem", marginTop: "0.75rem", lineHeight: 1.6 }}>
            Lahore's premier marriage hall and event venue. Where every occasion becomes a timeless memory.
          </p>
        </div>

        <div>
          <div style={{ color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Quick Links</div>
          {["/", "/about", "/services", "/gallery", "/contact"].map((href) => {
            const label = href === "/" ? "Home" : href.slice(1).charAt(0).toUpperCase() + href.slice(2)
            return (
              <Link
                key={href}
                href={href}
                style={{ color: "#7A6A50", display: "block", marginBottom: "0.4rem", fontSize: "0.9rem" }}
                className="hover:text-[#C9A84C] transition-colors"
              >
                {label}
              </Link>
            )
          })}
        </div>

        <div>
          <div style={{ color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Contact</div>
          <p style={{ color: "#7A6A50", fontSize: "0.9rem", marginBottom: "0.5rem" }}>📍 {business.address}</p>
          <p style={{ color: "#7A6A50", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            📞{" "}
            <a href={`tel:${business.phone}`} className="hover:text-[#C9A84C] transition-colors">
              {business.phone}
            </a>
          </p>
          <p style={{ color: "#7A6A50", fontSize: "0.9rem" }}>🕐 {business.hours}</p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(201,168,76,0.1)",
          color: "#4A3A24",
          textAlign: "center",
          padding: "1rem",
          fontSize: "0.8rem",
        }}
      >
        © {new Date().getFullYear()} Heritage Events Lahore. All rights reserved.
      </div>
    </footer>
  )
}
