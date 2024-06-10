import Footer from "@/components/footer"
import Header from "@/components/header/header"
import Products from "@/components/products"

export const metadata = {
  title: "Koleksiyonlar",
}

export default async function page() {
  return (
    <>
      <Header />
      <Products page="/collections" />
      <Footer />
    </>
  )
}
