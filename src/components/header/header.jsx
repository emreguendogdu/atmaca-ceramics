"use client"

import Link from "next/link"
import CTA from "../cta"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Nav from "./nav"
import Image from "next/image"
import { background } from "./anim"

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-8 z-30 bg-background">
      <section id="bar" className="flex w-full justify-between">
        <Link href="/">
          <div id="logo" className="h-full w-20 relative">
            <Image
              src="/images/logo-black.png"
              alt="Logo, fancy text of Atmaca Ceramics"
              className="object-scale-down"
              fill
            />
          </div>
        </Link>
        <div className="flex gap-4">
          <CTA type="outline" />
          <div
            onMouseDown={() => setIsActive(!isActive)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div
              className={`w-6 after:burger after:-top-1 before:burger before:top-1 ${
                isActive
                  ? "after:-top-[1px] after:rotate-45 before:top-[1px] before:-rotate-45"
                  : ""
              }`}
            />
          </div>
        </div>
      </section>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="h-full w-full bg-black absolute left-0 opacity-50 top-full"
      />
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </header>
  )
}
