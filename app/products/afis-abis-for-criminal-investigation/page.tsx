import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { ProductAfisAbis } from "@/components/ui/products/afis-abis-for-criminal-investigation/prodcut-detail"
import { HeroAfisAbis } from "@/components/ui/products/afis-abis-for-criminal-investigation/product-hero"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroAfisAbis />
      <ProductAfisAbis />
      <Footer />
    </div>
  )
}