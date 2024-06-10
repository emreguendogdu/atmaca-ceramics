"use client"
import { motion } from "framer-motion"
import Body from "./body"
import { useState } from "react"
import Image from "next/image"
import { height } from "./anim"

const links = [
  { title: "Anasayfa", href: "/", src: "/home.png" },
  { title: "Hakkımızda", href: "/hakkimizda", src: "/about_us.png" },
  { title: "KOLEKSİYONLAR", href: "/collections", src: "/lookbook.png" },
  { title: "İLETİŞİM", href: "/iletisim", src: "/contact.png" },
]

export default function Nav() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  })

  return (
    <motion.nav
      className="overflow-hidden"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="mb-20 flex">
        <div>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          {/* <Footer /> */}
        </div>
      </div>
    </motion.nav>
  )
}
