import Link from "next/link"
import InstagramIcon from "./icons/instagram"
import FacebookIcon from "./icons/facebook"
import { WhatsappIcon } from "./icons/whatsapp"
import { facebookLink, instagramLink, whatsappLink } from "../../contents/links"

const iconStyle = { width: 36, height: 36 }

export default function Socials() {
  return (
    <ul className="flex gap-4">
      <Link href={whatsappLink}>
        <li>
          <WhatsappIcon style={iconStyle} />
        </li>
      </Link>
      <Link href={instagramLink}>
        <li>
          <InstagramIcon style={iconStyle} />
        </li>
      </Link>
      <Link href={facebookLink}>
        <li>
          <FacebookIcon style={iconStyle} />
        </li>
      </Link>
    </ul>
  )
}
