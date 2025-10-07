import AnimatedSection from "./AnimatedSection.jsx"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const slides = [
  { src: "/images/gallery-1.jpg", alt: "Commercial building exterior" },
  { src: "/images/gallery-2.jpg", alt: "Active construction site with cranes" },
  { src: "/images/gallery-3.jpg", alt: "Contemporary residence" },
  { src: "/images/gallery-4.jpg", alt: "Corporate lobby interior" },
  { src: "/images/gallery-5.jpg", alt: "Bridge construction project" },
]

export default function Gallery() {
  return (
    <AnimatedSection id="gallery" className="section">
      <div className="container gallery">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div>
            <span className="badge">Our Gallery</span>
            <h2 style={{ marginTop: ".4rem" }}>Selected Projects & Clients</h2>
          </div>
          <div className="hidden-mobile" style={{ color: "var(--muted)" }}>
            Swipe to explore
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            700: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <figure className="card" style={{ overflow: "hidden" }}>
                <img
                  src={s.src || "/placeholder.svg"}
                  alt={s.alt}
                  style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }}
                />
                <figcaption style={{ padding: "10px 12px", fontWeight: 600 }}>{s.alt}</figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AnimatedSection>
  )
}
