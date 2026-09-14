import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { ProductBiometricIdentification } from "@/components/ui/products/biometric-identification-kit/prodcut-detail"
import { HeroBiometricIdentification } from "@/components/ui/products/biometric-identification-kit/product-hero"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroBiometricIdentification />
      <ProductBiometricIdentification />
      <Footer />
    </div>
  )
}