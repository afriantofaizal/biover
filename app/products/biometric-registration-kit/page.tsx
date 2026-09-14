import { Footer } from "@/components/ui/global/footer"
import { Navbar } from "@/components/ui/global/navbar"
import { ProductBiometricRegistration } from "@/components/ui/products/biometric-registration-kit/prodcut-detail"
import { HeroBiometricRegistration } from "@/components/ui/products/biometric-registration-kit/product-hero"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroBiometricRegistration />
      <ProductBiometricRegistration />
      <Footer />
    </div>
  )
}