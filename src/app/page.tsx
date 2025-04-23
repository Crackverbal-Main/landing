import HeroSection from '@/components/HeroSection'
import SchoolLogos from '@/components/SchoolLogos'
import TailoredPlans from '@/components/TailoredPlans'
import WhyCrackVerbal from '@/components/WhyCrackVerbal'
import SuccessStories from '@/components/SuccessStories'
import SmartTools from '@/components/SmartTools'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SchoolLogos />
      <TailoredPlans />
      <WhyCrackVerbal />
      <SuccessStories />
      <SmartTools />
      <FAQ />
    </div>
  )
}
