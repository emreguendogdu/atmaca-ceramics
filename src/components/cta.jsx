import Link from "next/link"

export default function CTA({
  style = "cta",
  text = "Ücretsiz İlk Görüşme >",
  link = "/iletisim",
  type = "solid",
  yeniSayfadaAc = false,
}) {
  if (type === "outline") {
    return (
      <Link href={link}>
        <div className="py-1 px-4 md:px-8 md:py-2 border border-black bg-transparent rounded-3xl w-fit hover:bg-primary hover:text-black hover:tracking-wide transition-all">
          <span className="text-sm capitalize">{text}</span>
        </div>
      </Link>
    )
  }
  return (
    <Link href={link} target={yeniSayfadaAc ? "_blank" : "_self"}>
      <div className="px-8 py-2 border border-gray-400 bg-primary rounded-3xl w-fit hover:tracking-wider hover:brightness-105 transition-all">
        <span className="text-sm capitalize">{text}</span>
      </div>
    </Link>
  )
}
