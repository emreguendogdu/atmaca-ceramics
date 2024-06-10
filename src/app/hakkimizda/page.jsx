import Footer from "@/components/footer"
import Header from "@/components/header/header"

export const metadata = {
  title: "Hakkımızda",
}

export default function page() {
  return (
    <>
      <Header />
      <section
        id="hakkimizda"
        className="min-h-[50vh] flex px-10 pt-20"
      ></section>
      <Footer />
    </>
  )
}
