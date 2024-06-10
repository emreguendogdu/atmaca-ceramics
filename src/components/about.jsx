import { brandName } from "../../contents/links"
import CTA from "./cta"

export default function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row md:[&>div]:flex-1 gap-8 pb-10 md:py-sectionPadding">
      <div className="flex flex-col gap-8 px-8">
        <span className="section-info">Hakkımızda</span>
        <h2 className="font-bold">
          80&apos;den fazla işletmenin daha iyi bir marka imajı oluşturmasını
          sağladık.
        </h2>
        <p>
          {brandName} olarak her işletmenin hikaye anlatan ve misafirler
          üzerinde kalıcı bir etki bırakan benzersiz, etkileyici bir kimliğe
          sahip olması gerektiğine inanıyoruz. Yirmi yıllık profesyonel
          deneyimimiz ile otel, restoran ve bar işletmelerinizi akıllarda
          kalacak markalara dönüştürdük.{" "}
        </p>
        <CTA text="Hikayemiz >" link="/hakkimizda" />
      </div>
      <div className="h-[400px] bg-[url('/images/about.webp')] bg-center bg-cover"></div>
    </section>
  )
}
