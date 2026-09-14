import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { ProductBioverAbis } from "@/components/ui/products/biover-abis/prodcut-detail"
import { HeroBioverAbis } from "@/components/ui/products/biover-abis/product-hero"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroBioverAbis />
      <ProductBioverAbis />
      <Footer />
    </div>
  )
}