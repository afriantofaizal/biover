import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { CoreMissionSection } from "@/components/ui/home/core-mission"
import { GetInTouchSection } from "@/components/ui/home/get-in-touch"
import { Hero } from "@/components/ui/home/hero"
import { IndustriesSection } from "@/components/ui/home/industry-verticals"
import { ValuesSection } from "@/components/ui/home/key-values"
import ProductSection from "@/components/ui/home/products"
import { SolutionSection } from "@/components/ui/home/solutions"

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ValuesSection />
      <ProductSection />
      <SolutionSection />
      <IndustriesSection />
      <CoreMissionSection />
      <GetInTouchSection />
      <Footer />
    </div>
  )
}
