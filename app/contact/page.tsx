import { business } from "@/lib/business"

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "4rem 1.5rem 2rem", textAlign: "center" }}>
        <p style={{ color: "#C9A84C", letterSpacing: "0.3em", fontSize: "0.8rem" }}>GET IN TOUCH</p>
        <h1 style={{ color: "#FDF8EE", fontSize: "3rem", fontWeight: 800, marginTop: "0.5rem" }}>Contact Us</h1>
        <div className="divider" style={{ margin: "1rem auto" }} />
        <p style={{ color: "#8A7A60", maxWidth: "500px", margin: "0 auto" }}>
          We'd love to host your event. Reach out to check availability or ask any questions.
        </p>
      </section>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>
        <div style={{ display: "grid", gap: "3rem" }} className="md:grid-cols-2">

          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { icon: "📍", label: "Address", value: business.address, href: `https://maps.google.com/?q=Heritage+Events+Lahore` },
              { icon: "📞", label: "Phone", value: business.phone, href: `tel:${business.phone}` },
              { icon: "💬", label: "WhatsApp", value: "Chat with us directly", href: `https://wa.me/${business.whatsapp}?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20Heritage%20Events%20Lahore.` },
              { icon: "🕐", label: "Hours", value: business.hours, href: null },
            ].map((c) => (
              <div key={c.label} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                <div>
                  <div style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.1em" }}>{c.label.toUpperCase()}</div>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      style={{ color: "#C8B896", marginTop: "0.25rem", display: "block", lineHeight: 1.5 }}
                      className="hover:text-[#C9A84C] transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p style={{ color: "#C8B896", marginTop: "0.25rem" }}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={`https://wa.me/${business.whatsapp}?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20book%20Heritage%20Events%20Lahore.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ justifyContent: "center", marginTop: "0.5rem", background: "#25D366" }}
            >
              💬 Book via WhatsApp
            </a>

            <a
              href={`tel:${business.phone}`}
              className="btn-outline"
              style={{ justifyContent: "center" }}
            >
              📞 Call {business.phone}
            </a>
          </div>

          {/* Map */}
          <div>
            <iframe
              src={business.googleMapsEmbed}
              width="100%"
              height="450"
              style={{ borderRadius: "8px", border: "1px solid rgba(201,168,76,0.2)", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Heritage Events Lahore Location"
            />
          </div>
        </div>
      </section>
    </>
  )
}
