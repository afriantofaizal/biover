import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { ProductAdintDataOptimization } from "@/components/ui/products/adint-data-optimization/prodcut-detail"
import { HeroAdintDataOptimization } from "@/components/ui/products/adint-data-optimization/product-hero"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroAdintDataOptimization />
      <ProductAdintDataOptimization />
      <Footer />
    </div>
  )
}