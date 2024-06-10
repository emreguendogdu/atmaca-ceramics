import Image from "next/image"
import { googleMapsLink } from "../../contents/links"
import CTA from "./cta"

export default function Hours() {
  return (
    <section className="flex flex-col relative md:flex-row">
      <div className="md:w-2/5 w-full h-[400px] md:h-[500px] relative">
        <Image
          fill
          src="/images/hours.webp"
          className="object-cover object-bottom"
          alt="Ceramic objects"
        />
      </div>
      <div className="md:w-3/5 w-full px-8 flex flex-col gap-8 relative bg-gradient bg-cover bg-center py-10 md:px-16">
        <div className="flex flex-col gap-3">
          <h2>Cem Atmaca Sanat Atölyesi</h2>
          <p className="font-light text-sm">
            Alsancak, 1460. Sk. 30/A, 35220 Konak/İzmir
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-6 font-light text-sm">
            <li>Pazartesi: 10.00 - 19.30</li>
            <li>Salı - Çarşamba: 10.00 - 22.30</li>
            <li>Perşembe - Cuma: 10.00 - 18.30</li>
            <li>Cumartesi: 10.00 - 17.30</li>
            <li>Pazar: Kapalı</li>
          </ul>
          <CTA text="Yol tarifi al >" link={googleMapsLink} yeniSayfadaAc />
        </div>
      </div>
    </section>
  )
}
