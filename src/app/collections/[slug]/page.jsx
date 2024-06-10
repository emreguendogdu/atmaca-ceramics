import Image from "next/image"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import { getProducts } from "../../../../sanity/lib/client"
import { PRODUCTS_QUERY, urlFor } from "@/utils/sanityUtils"

export async function getStaticPaths() {
  const products = await getProducts({ query: PRODUCTS_QUERY })

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }))

  return {
    paths,
    fallback: false, // This means any paths not returned here will result in a 404 page
  }
}

export async function generateMetadata({ params }) {
  const products = await getProducts({ query: PRODUCTS_QUERY })
  const product = products.find(
    (product) => params.slug === product.slug.current
  )
  return {
    title: product.title,
  }
}

export default async function Page({ params }) {
  const products = await getProducts({ query: PRODUCTS_QUERY })
  const product = products.find(
    (product) => params.slug === product.slug.current
  )
  const { title, description, headerImg, gridImgs, bannerImg } = product

  if (!headerImg || !gridImgs || !bannerImg) {
    return (
      <>
        <Header />
        <section className="py-sectionPadding px-8 flex flex-col gap-12 md:gap-32">
          <div className="flex flex-col gap-2 justify-end max-w-screen-md">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </section>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Header />
      <section className="pt-sectionPadding pb-10 px-8 flex flex-col gap-12 md:gap-20">
        <div className="flex flex-col gap-4 md:flex-row">
          <Image
            src={urlFor(headerImg).url()}
            placeholder="blur"
            blurDataURL={urlFor(headerImg).width(24).height(24).blur(10).url()}
            alt={title}
            className="rounded-img"
            width={400}
            height={500}
          />
          <div className="flex flex-col gap-2 justify-end max-w-screen-md">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 justify-center md:gap-4 [&>li]:w-[calc(50%-8px)] [&>li]:h-[200px] md:[&>li]:w-[calc(33%-16px)] md:[&>li]:h-[400px]">
          {gridImgs?.map((gridImg, index) => (
            <li key={index} className="relative w-full h-full">
              <Image
                src={urlFor(gridImg).url()}
                placeholder="blur"
                blurDataURL={urlFor(gridImg)
                  .width(24)
                  .height(24)
                  .blur(10)
                  .url()}
                alt={title}
                className="rounded-img"
                fill
              />
            </li>
          ))}
        </ul>
        <div className="relative w-full h-[400px]">
          <div className="absolute -top-4 border-[.5px] w-full border-gray-300" />
          <div>
            <Image
              src={urlFor(bannerImg).url()}
              placeholder="blur"
              blurDataURL={urlFor(bannerImg)
                .width(24)
                .height(24)
                .blur(10)
                .url()}
              alt={`${title}`}
              className="rounded-img"
              fill
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
