import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
})

export async function getProducts({ query, params = {}, tags }) {
  const sortedQuery = `${query} | order(dateAdded asc)`

  return client.fetch(sortedQuery, params, {
    next: {
      revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
      tags,
    },
  })
}
