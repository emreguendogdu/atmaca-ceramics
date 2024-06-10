import Image from "next/image"
import Link from "next/link"
import { getProducts } from "../../sanity/lib/client"
import { PRODUCTS_QUERY, urlFor } from "@/utils/sanityUtils"

export default async function Products({ page = "/" }) {
  const products = await getProducts({ query: PRODUCTS_QUERY })

  if (page === "/collections") {
    return (
      <section id="collections" className="py-sectionPadding px-2 md:px-12">
        <div className="mb-8">
          <h1 className="mb-2">Koleksiyonlar</h1>
          <p>Sizi neler bekliyor?</p>
        </div>
        <ul className="flex flex-wrap gap-2 md:gap-4 relative">
          {products.map((product) => (
            <Link
              href={`/collections/${product.slug.current}`}
              className="relative w-[calc(50%-8px)] md:w-[calc(33%-16px)] h-[200px] md:h-[300px]"
              key={product.slug.current}
            >
              <li className="relative w-full h-full overflow-hidden">
                <div className="absolute bottom-[8px] left-[8px] text-white drop-shadow-text z-10">
                  <h2>{product.title}</h2>
                </div>
                <Image
                  src={urlFor(product.headerImg).url()}
                  placeholder="blur"
                  blurDataURL={urlFor(product.headerImg)
                    .width(24)
                    .height(24)
                    .blur(10)
                    .url()}
                  alt={product.title}
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
  return (
    <section id="products" className="relative pt-10 pb-20">
      <div className="absolute w-full h-full inset-0 bg-gray-800 bg-cover bg-center -z-10" />
      <div className="px-6 pb-4">
        <h2 className="text-white drop-shadow-text">
          Markana neler katabilirsin?
        </h2>
      </div>
      <ul className="px-3 md:px-6 flex justify-center flex-wrap gap-2 md:gap-4 relative">
        {products.map((product) => (
          <Link
            href={`/collections/${product.slug.current}`}
            className="relative w-[calc(50%-8px)] md:w-[calc(33%-16px)] h-[200px] md:h-[350px]"
            key={product.slug.current}
          >
            <li className="relative w-full h-full overflow-hidden">
              <div className="absolute bottom-[8px] left-[8px] text-white drop-shadow-text z-10">
                <h2>{product.title}</h2>
              </div>
              <Image
                src={urlFor(product.headerImg).url()}
                placeholder="blur"
                blurDataURL={urlFor(product.headerImg)
                  .width(24)
                  .height(24)
                  .blur(10)
                  .url()}
                alt={product.title}
                className="rounded-img bg-gray-500 hover:scale-105 hover:brightness-95 transition-transform duration-500"
                fill
              />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
