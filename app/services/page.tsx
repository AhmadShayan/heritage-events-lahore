import Link from "next/link"
import { business, photoUrl } from "@/lib/business"

export default function Services() {
  const services = [
    {
      icon: "💍",
      title: "Wedding Ceremonies (Nikah)",
      desc: "A sacred occasion deserves a sacred setting. Our halls are arranged with reverence and elegance to host your Nikah ceremony with dignity.",
    },
    {
      icon: "🥂",
      title: "Walima Receptions",
      desc: "Celebrate the union with family and friends in our grand, newly renovated halls — accommodating up to 350 guests in style and comfort.",
    },
    {
      icon: "💃",
      title: "Mehndi & Dholki Events",
      desc: "Vibrant, festive celebrations with room for music, dance, and joy. Our venue transforms beautifully for pre-wedding festivities.",
    },
    {
      icon: "🎂",
      title: "Birthday & Anniversary Parties",
      desc: "Mark life's milestones in a setting that feels truly special — whether an intimate gathering or a large celebration.",
    },
    {
      icon: "🤝",
      title: "Corporate Events & Conferences",
      desc: "Professional event hosting with the elegance and hospitality that Heritage Events is known for.",
    },
    {
      icon: "🌸",
      title: "Engagement Ceremonies",
      desc: "Start your journey together in a venue that sets the perfect tone for the celebrations ahead.",
    },
  ]

  const inclusions = [
    "Spacious main hall (300–350 guest capacity)",
    "Elegant stage and backdrop setup",
    "Professional lighting throughout the venue",
    "Comfortable seating arrangements",
    "Dedicated event coordination team",
    "Ample car parking",
    "Separate groom and bride suites",
    "Air-conditioned environment",
  ]

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoUrl(business.photos[6], 1400)} alt="Services" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,11,4,0.7)" }} />
        <div style={{ position: "relative", textAlign: "center" }}>
          <p style={{ color: "#C9A84C", letterSpacing: "0.3em", fontSize: "0.8rem" }}>WHAT WE OFFER</p>
          <h1 style={{ color: "#FDF8EE", fontSize: "3rem", fontWeight: 800, marginTop: "0.5rem" }}>Our Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="section-title">Events We Host</h2>
          <div className="divider" style={{ margin: "1rem auto" }} />
        </div>

        <div style={{ display: "grid", gap: "1.5rem" }} className="md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{s.icon}</div>
              <h3 style={{ color: "#C9A84C", fontWeight: 700, marginBottom: "0.5rem", fontSize: "1.05rem" }}>{s.title}</h3>
              <p style={{ color: "#8A7A60", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Inclusions */}
        <div style={{ marginTop: "5rem", display: "grid", gap: "3rem" }} className="md:grid-cols-2 items-center">
          <div>
            <h2 className="section-title">Venue Includes</h2>
            <div className="divider" />
            <ul style={{ marginTop: "1rem" }}>
              {inclusions.map((item) => (
                <li key={item} style={{ color: "#C8B896", padding: "0.6rem 0", borderBottom: "1px solid rgba(201,168,76,0.1)", display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ color: "#C9A84C" }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoUrl(business.photos[8], 800)}
            alt="Venue interior"
            style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(201,168,76,0.2)" }}
          />
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <h3 style={{ color: "#FDF8EE", fontSize: "1.5rem", marginBottom: "1rem" }}>Ready to Host Your Event?</h3>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${business.whatsapp}?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20booking%20Heritage%20Events%20Lahore.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 WhatsApp Us
            </a>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
