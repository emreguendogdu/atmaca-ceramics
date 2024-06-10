import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Header from "@/components/header/header"
import Products from "@/components/products"
import About from "@/components/about"
import Hours from "@/components/hours"
import Process from "@/components/process"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <About />
      <Process />
      <Hours />
      <Footer />
    </>
  )
}
