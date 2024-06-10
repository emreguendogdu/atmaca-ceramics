import imageUrlBuilder from "@sanity/image-url"
import { client } from "../../sanity/lib/client"

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export const PRODUCTS_QUERY = `
  *[_type == "product"] {
  slug,
    title,
    description,
    headerImg,
    gridImgs,
    bannerImg
  }
`
