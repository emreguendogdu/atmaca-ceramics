import Image from "next/image"
import { collections } from "../../contents/collections"
import Link from "next/link"

export default function Products() {
  return (
    <section id="products" className="relative py-10">
      <div className="absolute w-full h-full inset-0 bg-gradient bg-cover bg-center brightness-50 -z-10" />
      <div className="px-6 pb-4">
        <h2 className="text-white drop-shadow-text">Markana neler katabilirsin?</h2>
      </div>
      <ul className="px-3 md:px-6 flex flex-wrap gap-4 relative">
        {collections.map((collection) => (
          <Link
            href={`/collections/${collection.slug}`}
            className="relative w-[calc(50%-16px)] h-[400px]"
            key={collection.slug}
          >
            <li className="relative w-full h-full overflow-hidden">
              <div className="absolute bottom-[8px] left-[8px] text-white drop-shadow-text z-10">
                <h2>{collection.title}</h2>
              </div>
              <Image
                src={collection.headerImg}
                alt={collection.title}
                className="rounded-img bg-gray-500 hover:scale-105 hover:brightness-95 transition-transform"
                fill
              />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
