import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { SolutionSection } from "@/components/ui/home/solutions"
import { HeroSolutions } from "@/components/ui/solutions/hero-solutions"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSolutions />
      <SolutionSection />
      <Footer />
    </div>
  )
}