import Footer from "@/components/footer"
import Header from "@/components/header/header"
import Hours from "@/components/hours"
import Socials from "@/components/socials"
import { mail, phoneNumber } from "../../../contents/links"
import Link from "next/link"

export const metadata = {
  title: "İletişim",
}

export default function page() {
  return (
    <>
      <Header />
      <section
        id="iletisim"
        className="min-h-screen pt-32 px-12 text-center flex flex-col md:flex-row gap-4"
      >
        <div className="w-3/5 flex flex-col gap-4 flex-1">
          <h1>İletişim</h1>
          <p>
            Formu doldur ya da diğer iletişim kanallarından bize ulaş, 48 saat
            içerisinde seninle iletişime geçelim.
          </p>
          <form action="" className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Ad"
              className="bg-gray-100 p-4 rounded-lg w-[calc(50%-8px)]"
            />
            <input
              type="email"
              placeholder="E-posta"
              className="bg-gray-100 p-4 rounded-lg w-[calc(50%-8px)]"
            />
            <textarea
              type="text"
              placeholder="Mesaj"
              className="bg-gray-100 p-4 rounded-lg w-full h-[400px]"
            />
            <button className="w-full bg-black text-white rounded-lg py-4">
              Gönder
            </button>
          </form>
        </div>
        <ul className="w-2/5 flex flex-col gap-4 text-center items-center [&>li]:flex [&>li]:flex-col [&>li]:gap-3">
          <li>
            <h2>Mail</h2>
            <Link
              href={`mailto
            :${mail}`}
            >
              {mail}
            </Link>
          </li>
          <li>
            <h2>Telefon</h2>
            <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
          </li>
          <li>
            <h2>Sosyal Medya</h2>
            <Socials />
          </li>
        </ul>
      </section>
      <Hours />
      <Footer />
    </>
  )
}
