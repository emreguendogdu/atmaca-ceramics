import { DM_Sans, Inter } from "next/font/google"
import "./globals.css"

const DMSans = DM_Sans({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Atmaca Ceramics: İşletmeniz İçin El Yapımı Seramikler",
    template: "%s | Atmaca Ceramics",
  },
  description:
    "El yapımı seramiklerimizle restoran, bar, hotel işletmelerinizi ve müşteri deneyiminizi bambaşka bir seviyeye taşıyın. Daha şık dizaynlar ile marka imajınızı geliştirin.",
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DMSans.className}>{children}</body>
    </html>
  )
}
