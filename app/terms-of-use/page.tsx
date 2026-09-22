import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { TermsOfUse } from "@/components/ui/global/terms-of-use"

export default function Page() {
  return (
    <div>
      <Navbar />
      <TermsOfUse />
      <Footer />
    </div>
  )
}