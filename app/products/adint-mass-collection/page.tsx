import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { ProductAdintMassCollection } from "@/components/ui/products/adint-mass-collection/prodcut-detail"
import { HeroAdintMassCollection } from "@/components/ui/products/adint-mass-collection/product-hero"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroAdintMassCollection />
      <ProductAdintMassCollection />
      <Footer />
    </div>
  )
}