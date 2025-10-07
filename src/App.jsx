import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Gallery from "./components/Gallery.jsx"
import WhyChooseUs from "./components/WhyChooseUs.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}
