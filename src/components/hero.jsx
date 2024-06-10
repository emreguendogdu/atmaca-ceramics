"use client"

import { ClashDisplay } from "@/utils/fonts"
import CTA from "./cta"
import Image from "next/image"
import { motion } from "framer-motion"

const parentVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const childVariants = {
  initial: { y: 300 },
  animate: {
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.35, 0, 0.35, 1],
    },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className={`h-screen relative ${ClashDisplay.variable} font-clashdisplay mt-10 md:mt-0`}
    >
      <div className="absolute inset-0 -z-10 brightness-90">
        <Image
          src="/images/hero7.png"
          alt="Hero image with ceramic objects on the sides"
          className="md:object-bottom object-cover"
          fill
        />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <motion.div
          className="md:ml-10 flex flex-col text-center items-center gap-6 max-w-screen-sm"
          variants={parentVariants}
          initial="initial"
          animate="animate"
        >
          <h1 className="relative text-6xl md:text-8xl [&>span]:inline-block overflow-hidden">
            <motion.span variants={childVariants}>İşletmeniz için</motion.span>
            <br />
            <motion.span variants={childVariants}> El Yapımı</motion.span>
            <br />
            <motion.span variants={childVariants}>Seramikler</motion.span>
          </h1>
          <div className="overflow-hidden">
            <motion.p className="text-balance" variants={childVariants}>
              İşletmenizi ve müşteri deneyiminizi bambaşka bir seviyeye
              taşıyacak el yapımı seramikleri iki asırlık tutkuyla
              müşterilerinizin en iyi tercihi olmanız için dizayn ediyor ve
              üretiyoruz.
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.div id="cta" variants={childVariants}>
              <CTA />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
