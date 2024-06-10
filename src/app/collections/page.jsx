import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { collections } from "../../../contents/collections"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Koleksiyonlar",
}

export default function page() {
  return (
    <>
      <Header />
      <section id="collections" className="pt-20 px-12">
        <h1>Koleksiyonlar</h1>
        <p>Sizi neler bekliyor?</p>
        <ul className="flex flex-wrap gap-8 [&>a]:flex-1">
          {collections.map((collection) => (
            <Link
              href={`/collections/${collection.slug}`}
              key={collection.slug}
            >
              <li className="relative w-[400px] h-[400px]">
                <div className="absolute bottom-[8px] left-[8px] text-white drop-shadow-text z-10">
                  <h2>{collection.title}</h2>
                </div>
                <Image
                  src={collection.headerImg}
                  alt={collection.title}
                  className="rounded-img"
                  fill
                />
              </li>
            </Link>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  )
}
