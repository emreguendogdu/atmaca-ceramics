import Image from "next/image"
import { collections } from "../../../../contents/collections"
import Header from "@/components/header/header"
import Footer from "@/components/footer"

export function getStaticPaths() {
  const paths = collections.map((product) => ({
    params: { slug: product.slug },
  }))

  return {
    paths,
    fallback: false, // This means any paths not returned here will result in a 404 page
  }
}

export function generateMetadata({ params }) {
  const product = collections.find((product) => params.slug === product.slug)
  return {
    title: product.title,
  }
}

export default function Page({ params }) {
  const product = collections.find((product) => params.slug === product.slug)
  const { title, description, headerImg, gridImgs, bannerImg } = product
  return (
    <>
      <Header />
      <section className="pt-20 px-8 flex flex-col gap-12 md:gap-32">
        <header className="flex flex-col gap-4 md:flex-row">
          <Image
            src={headerImg}
            alt={title}
            className="rounded-img"
            width={400}
            height={500}
          />
          <div className="flex flex-col gap-2 justify-end max-w-screen-md">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </header>
        <ul className="flex flex-wrap gap-4 [&>li]:w-[calc(33%-16px)]">
          {gridImgs?.map((gridImg, index) => (
            <li key={index} className="relative w-40 h-[400px]">
              <Image src={gridImg} alt={title} className="rounded-img" fill />
            </li>
          ))}
        </ul>
        <div className="relative w-full h-[400px]">
          <Image
            src={bannerImg}
            alt={`${title}`}
            className="rounded-img"
            fill
          />
        </div>
      </section>
      <Footer />
    </>
  )
}
