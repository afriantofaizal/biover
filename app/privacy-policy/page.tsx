import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { PrivacyPolicy } from "@/components/ui/global/privacy-policy"

export default function Page() {
  return (
    <div>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  )
}