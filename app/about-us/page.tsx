import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { HeroAbout } from "@/components/ui/about-us/hero-about"
import { AboutCompany } from "@/components/ui/about-us/about-company"
import { VisionMission } from "@/components/ui/about-us/vision-mission"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <AboutCompany />
      <VisionMission />
      <Footer />
    </div>
  )
}