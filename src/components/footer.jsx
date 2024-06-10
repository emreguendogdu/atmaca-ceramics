import Image from "next/image"
import Link from "next/link"
import Socials from "./socials"
import { collections } from "../../contents/collections"
import { brandName } from "../../contents/links"

export default function Footer() {
  return (
    <footer className="relative md:pt-10 p-3 md:p-10">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-[40%]">
          <div id="logo" className="h-[150px] relative">
            <Image
              src="/images/logo-black.png"
              alt="Logo, fancy text of Atmaca Ceramics"
              className="object-scale-down"
              fill
            />
          </div>
        </div>
        <ul className="w-full flex flex-wrap flex-col gap-2 max-h-40 [&>li]:font-light">
          <li>
            <Link href="/">Anasayfa</Link>
          </li>
          <li>
            <Link href="/hakkimizda">Hakkımızda</Link>
          </li>
          <li>
            <Link href="/collections">Koleksiyonlar</Link>
          </li>
          <li>
            <Link href="/iletisim">İletişim</Link>
          </li>
          {collections.map((collection) => (
            <li key={collection.slug}>
              <Link href={`/collections/${collection.slug}`}>
                {collection.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/policies/privacy-policy"
              className="max-w-20 inline-block md:max-w-max"
            >
              Gizlilik Politikası
            </Link>
          </li>
          <li>
            <Link
              href="/policies/terms-of-service"
              className="max-w-20 inline-block md:max-w-max"
            >
              Hükümler ve Koşullar
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex border-t border-t-gray-500 mt-8 pt-4">
        <div className="w-[40%]">
          <Socials />
        </div>
        <div className="w-[60%] flex justify-end items-center">
          <span className="text-sm text-end">® 2024 {brandName}</span>
        </div>
      </div>
    </footer>
  )
}
