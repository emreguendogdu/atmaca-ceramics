"use client"

import { ClashDisplay } from "@/utils/fonts"
import CTA from "./cta"
import Image from "next/image"
import { useAnimate } from "framer-motion"
import { useEffect } from "react"
import { M_PLUS_1 } from "next/font/google"

const description =
  "İşletmenizi ve müşteri deneyiminizi bambaşka bir seviyeye taşıyacak el yapımı seramikleri iki asırlık tutkuyla sizin için dizayn ediyor ve üretiyoruz."

const animationStyles = {
  duration: 1.25,
  ease: [0.35, 0, 0.35, 1],
}

export default function Hero() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("h1", { transform: "translateY(0)" }, { ...animationStyles })
    animate(
      "p",
      { transform: "translateY(0)" },
      { ...animationStyles, delay: 0.25 }
    )
    animate(
      "#cta",
      { transform: "translateY(0)" },
      { ...animationStyles, delay: 0.5 }
    )
  })
  return (
    <section
      id="hero"
      className={`h-screen relative ${ClashDisplay.variable} font-clashdisplay`}
    >
      <div className="absolute inset-0 -z-10 brightness-90">
        <Image
          src="/images/hero7.png"
          alt="Hero image with ceramic objects on the sides"
          className="object-bottom object-cover bg-no-repeat"
          fill
        />
      </div>
      <div className="h-full flex justify-center items-center">
        <div
          className="ml-10 flex flex-col text-center items-center gap-6 max-w-screen-sm"
          ref={scope}
        >
          <div className="overflow-hidden">
            <h1
              className="relative text-8xl"
              style={{ transform: "translateY(300px)" }}
            >
              İşletmeniz için <br /> El Yapımı <br /> Seramikler
            </h1>
          </div>
          <div className="overflow-hidden">
            <p
              className="text-balance"
              style={{ transform: "translateY(300px)" }}
            >
              İşletmenizi ve müşteri deneyiminizi bambaşka bir seviyeye
              taşıyacak el yapımı seramikleri iki asırlık tutkuyla
              müşterilerinizin en iyi tercihi olmanız için dizayn ediyor ve
              üretiyoruz.
            </p>
          </div>
          <div className="overflow-hidden">
            <div id="cta" style={{ transform: "translateY(300px)" }}>
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
