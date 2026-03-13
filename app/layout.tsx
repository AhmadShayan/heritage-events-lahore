import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Heritage Events Lahore — Premium Marriage Hall & Event Venue",
  description:
    "Heritage Events Lahore — a newly renovated, classically designed marriage hall in Daroghawala, Lahore. Capacity 300–350 guests. Rated 4.4★ with 200+ reviews. Book your event today.",
  keywords: "marriage hall lahore, events complex lahore, wedding venue lahore, daroghawala marriage hall",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ background: "#0F0B04" }}>
        <Navbar />
        <main style={{ paddingTop: "64px" }}>{children}</main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/923226182626?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20booking%20Heritage%20Events%20Lahore."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            background: "#25D366",
            color: "white",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.75rem",
            boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
            zIndex: 100,
            transition: "transform 0.2s",
          }}
          title="Chat on WhatsApp"
        >
          💬
        </a>
      </body>
    </html>
  )
}
