import { defineField, defineType } from "sanity"

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "headerImg",
      title: "Header Image",
      type: "image",
    }),
    defineField({
      name: "gridImgs",
      title: "Grid Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "bannerImg",
      title: "Banner Image",
      type: "image",
    }),
  ],
})
