import Link from "next/link"
import { business, photoUrl } from "@/lib/business"

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={photoUrl(business.photos[2], 1400)} alt="About" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,11,4,0.7)" }} />
        <div style={{ position: "relative", textAlign: "center" }}>
          <p style={{ color: "#C9A84C", letterSpacing: "0.3em", fontSize: "0.8rem" }}>ABOUT US</p>
          <h1 style={{ color: "#FDF8EE", fontSize: "3rem", fontWeight: 800, marginTop: "0.5rem" }}>Our Story</h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "grid", gap: "4rem" }} className="md:grid-cols-2">
          <div>
            <h2 className="section-title">Heritage Events Lahore</h2>
            <div className="divider" />
            <p style={{ color: "#C8B896", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Situated at the heart of Daroghawala on Main Rajbah Road, Heritage Events Lahore stands as one of the
              area's most celebrated wedding and event venues. With a legacy of hosting countless weddings, walimas,
              and corporate gatherings, we have earned the trust of families across Lahore.
            </p>
            <p style={{ color: "#C8B896", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Our newly renovated halls combine classic architectural elements with modern amenities. The interiors
              reflect a timeless aesthetic — antique accents, grand chandeliers, and spacious layouts — creating
              a setting that complements every type of celebration.
            </p>
            <p style={{ color: "#C8B896", lineHeight: 1.9 }}>
              With a capacity of 300–350 guests and a dedicated team focused on service, Heritage Events ensures
              every moment of your event is handled with care and professionalism.
            </p>
          </div>

          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoUrl(business.photos[3], 800)}
              alt="Heritage Events interior"
              style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(201,168,76,0.2)" }}
            />
          </div>
        </div>

        {/* Stats */}
        <div style={{ marginTop: "5rem", display: "grid", gap: "1.5rem", textAlign: "center" }} className="md:grid-cols-4">
          {[
            { value: `${business.rating}★`, label: "Google Rating" },
            { value: `${business.reviewCount}+`, label: "Happy Clients" },
            { value: "300–350", label: "Guest Capacity" },
            { value: "7 Days", label: "Available Weekly" },
          ].map((s) => (
            <div key={s.label} className="card">
              <div style={{ color: "#C9A84C", fontSize: "2rem", fontWeight: 700 }}>{s.value}</div>
              <div style={{ color: "#8A7A60", fontSize: "0.85rem", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div style={{ marginTop: "5rem" }}>
          <h2 className="section-title" style={{ textAlign: "center" }}>What We Stand For</h2>
          <div className="divider" style={{ margin: "1rem auto" }} />
          <div style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }} className="md:grid-cols-3">
            {[
              { icon: "🤝", title: "Genuine Hospitality", desc: "Every guest is welcomed with warmth. Our team is committed to making each event feel personal and special." },
              { icon: "✨", title: "Attention to Detail", desc: "From setup to service, we handle every aspect of your event with precision and care." },
              { icon: "🏛️", title: "Premium Setting", desc: "A venue that speaks for itself — classic, grand, and newly renovated to the highest standard." },
            ].map((v) => (
              <div key={v.title} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{v.icon}</div>
                <h3 style={{ color: "#C9A84C", fontWeight: 700, marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ color: "#8A7A60", fontSize: "0.9rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/contact" className="btn-primary">Contact Us to Book</Link>
        </div>
      </section>
    </>
  )
}
