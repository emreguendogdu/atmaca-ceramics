"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { blur, translate } from "./anim"

const getChars = (title) => {
  let chars = []

  title.split("").forEach((char, i) => {
    chars.push(
      <motion.span
        variants={translate}
        custom={[i * 0.02, (title.length - i) * 0.01]}
        initial="initial"
        animate="enter"
        exit="exit"
        key={`c__${i}`}
      >
        {char}
      </motion.span>
    )
  })
  return chars
}

export default function Body({ links, selectedLink, setSelectedLink }) {
  return (
    <div className="flex flex-col md:flex-row flex-wrap [&_a]:text-black [&_a]:text-3xl [&_a]:font-light [&_a]:pl-2 [&_a]:pt-8 [&_a]:uppercase [&_a]:overflow-hidden [&_p]:flex max-w-screen-xl gap-4">
      {links.map((link, index) => {
        const { title, href } = link
        return (
          <Link
            key={index}
            href={href}
            onMouseOver={() => setSelectedLink({ isActive: true, index })}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
          >
            <motion.p
              variants={blur}
              initial="initial"
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "nothovered"
                  : "hovered"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        )
      })}
    </div>
  )
}
