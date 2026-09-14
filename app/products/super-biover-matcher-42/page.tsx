import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { ProductSuperBioverMatcher42 } from "@/components/ui/products/super-biover-matcher-42/prodcut-detail"
import { HeroSuperBioverMatcher42 } from "@/components/ui/products/super-biover-matcher-42/product-hero"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSuperBioverMatcher42 />
      <ProductSuperBioverMatcher42 />
      <Footer />
    </div>
  )
}