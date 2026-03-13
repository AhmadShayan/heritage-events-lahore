import { business, photoUrl } from "@/lib/business"
import Link from "next/link"

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "4rem 1.5rem 2rem", textAlign: "center" }}>
        <p style={{ color: "#C9A84C", letterSpacing: "0.3em", fontSize: "0.8rem" }}>OUR VENUE</p>
        <h1 style={{ color: "#FDF8EE", fontSize: "3rem", fontWeight: 800, marginTop: "0.5rem" }}>Gallery</h1>
        <div className="divider" style={{ margin: "1rem auto" }} />
        <p style={{ color: "#8A7A60", maxWidth: "500px", margin: "0 auto" }}>
          A glimpse into the elegant spaces and memorable celebrations at Heritage Events Lahore.
        </p>
      </section>

      {/* Photo Grid */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1rem" }}>
          {business.photos.map((p, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={photoUrl(p, 800)}
              alt={`Heritage Events Lahore — photo ${i + 1}`}
              style={{
                width: "100%",
                aspectRatio: i % 3 === 0 ? "16/10" : "4/3",
                objectFit: "cover",
                borderRadius: "6px",
                border: "1px solid rgba(201,168,76,0.15)",
                gridColumn: i % 3 === 0 ? "span 2" : "span 1",
              }}
              loading="lazy"
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "#8A7A60", marginBottom: "1.5rem" }}>
            Interested in hosting your event here?
          </p>
          <Link href="/contact" className="btn-primary">Book a Visit</Link>
        </div>
      </section>
    </>
  )
}
