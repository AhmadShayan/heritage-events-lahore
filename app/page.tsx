import Link from "next/link"
import { business, photoUrl } from "@/lib/business"

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoUrl(business.photos[0])}
            alt="Heritage Events Lahore"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,11,4,0.6) 0%, rgba(15,11,4,0.85) 100%)" }} />
        </div>

        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto", padding: "2rem", textAlign: "center", width: "100%" }}>
          <p style={{ color: "#C9A84C", letterSpacing: "0.3em", fontSize: "0.8rem", marginBottom: "1rem", textTransform: "uppercase" }}>
            Lahore's Premier Event Venue
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, color: "#FDF8EE", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Heritage Events<br />
            <span style={{ color: "#C9A84C" }}>Lahore</span>
          </h1>
          <p style={{ color: "#C8B896", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            {business.tagline}
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${business.whatsapp}?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20booking%20Heritage%20Events%20Lahore.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 Book on WhatsApp
            </a>
            <Link href="/gallery" className="btn-outline">
              View Gallery
            </Link>
          </div>

          {/* Star rating */}
          <div style={{ marginTop: "3rem", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { value: `${business.rating}★`, label: "Google Rating" },
              { value: `${business.reviewCount}+`, label: "Reviews" },
              { value: business.capacity, label: "Capacity" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ color: "#C9A84C", fontSize: "1.75rem", fontWeight: 700 }}>{s.value}</div>
                <div style={{ color: "#8A7A60", fontSize: "0.8rem", letterSpacing: "0.1em" }}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1100px", margin: "0 auto", display: "grid", gap: "3rem" }}
        className="md:grid-cols-2 items-center">
        <div>
          <p style={{ color: "#C9A84C", letterSpacing: "0.2em", fontSize: "0.8rem" }}>ABOUT THE VENUE</p>
          <h2 className="section-title" style={{ marginTop: "0.5rem" }}>A Legacy of<br />Elegant Occasions</h2>
          <div className="divider" />
          <p style={{ color: "#C8B896", lineHeight: 1.9, fontSize: "1.05rem" }}>
            Nestled in Daroghawala, Lahore, Heritage Events is a newly renovated marquee designed for weddings,
            walimas, and grand celebrations. With a capacity for 300–350 guests and a hall that embodies classic,
            antique elegance — every event held here becomes a story worth telling.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/about" className="btn-outline">Our Story</Link>
            <Link href="/contact" className="btn-primary">Enquire Now</Link>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          {business.photos.slice(1, 5).map((p, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={photoUrl(p, 600)}
              alt={`Heritage Events ${i + 2}`}
              style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "6px", border: "1px solid rgba(201,168,76,0.2)" }}
            />
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: "#0A0702", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title">Why Choose Heritage Events?</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>
          <div style={{ display: "grid", gap: "1.5rem" }} className="md:grid-cols-3">
            {[
              { icon: "🏛️", title: "Classic Antique Decor", desc: "Timeless architecture and interior design that creates an atmosphere of grandeur and elegance." },
              { icon: "👥", title: "300–350 Guest Capacity", desc: "Spacious halls accommodate large weddings and events with comfort and style." },
              { icon: "✨", title: "Newly Renovated", desc: "Recently upgraded interiors, lighting, and facilities to give your event a fresh, premium feel." },
              { icon: "📍", title: "Prime Location", desc: "Conveniently located on Main Rajbah Road, Daroghawala — accessible from all major areas of Lahore." },
              { icon: "🌟", title: "4.4★ Rated", desc: "Over 206 Google reviews praising our peaceful atmosphere and top-class service." },
              { icon: "🕐", title: "Open 7 Days", desc: "Available every day, 11 AM to 10 PM — flexible for any event schedule." },
            ].map((f) => (
              <div key={f.title} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{f.icon}</div>
                <h3 style={{ color: "#C9A84C", fontWeight: 700, marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ color: "#8A7A60", fontSize: "0.9rem", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 className="section-title">Our Venue</h2>
          <div className="divider" style={{ margin: "1rem auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
          {business.photos.slice(5, 10).map((p, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={photoUrl(p, 600)}
              alt={`Heritage Events gallery ${i}`}
              style={{
                width: "100%",
                aspectRatio: i === 0 ? "2/1" : "1",
                objectFit: "cover",
                borderRadius: "6px",
                border: "1px solid rgba(201,168,76,0.15)",
                gridColumn: i === 0 ? "span 2" : "span 1",
              }}
            />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/gallery" className="btn-outline">View Full Gallery</Link>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ background: "#0A0702", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title">What Our Guests Say</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ color: "#8A7A60" }}>{business.rating}★ · {business.reviewCount}+ Reviews on Google</p>
          </div>
          <div style={{ display: "grid", gap: "1.5rem" }} className="md:grid-cols-3">
            {business.reviews.slice(0, 3).map((r) => (
              <div key={r.author} className="card">
                <div style={{ color: "#C9A84C", marginBottom: "0.75rem" }}>{"★".repeat(r.rating)}</div>
                <p style={{ color: "#C8B896", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>"{r.text}"</p>
                <p style={{ color: "#5A4A30", fontSize: "0.85rem" }}>— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "5rem 1.5rem", textAlign: "center" }}>
        <h2 className="section-title">Ready to Book Your Event?</h2>
        <div className="divider" style={{ margin: "1rem auto" }} />
        <p style={{ color: "#8A7A60", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Contact us today to check availability and discuss your requirements. We are available every day.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/${business.whatsapp}?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20book%20Heritage%20Events%20Lahore.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💬 WhatsApp Us
          </a>
          <a href={`tel:${business.phone}`} className="btn-outline">📞 {business.phone}</a>
        </div>
      </section>
    </>
  )
}
