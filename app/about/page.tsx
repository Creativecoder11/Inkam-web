
import HeaderBanner from '@/components/layout/headerBanner'
import CircularCarousel from '@/components/sections/about/AboutTimline'
import CoreValuesSection from '@/components/sections/about/CoreValueSection'
import ImpactStatsSection from '@/components/sections/about/impact-section'
import OurStory from '@/components/sections/about/our-story'
import TeamSection from '@/components/sections/about/TeamSection'
import Faq from '@/components/sections/home/faq'

export default function About() {
  return (
    <div>
      <HeaderBanner title="About Us" heading="Who We Are" />
      <OurStory />
      <ImpactStatsSection />
      <CoreValuesSection />
      <TeamSection />
      <Faq />
      {/* <CircularCarousel /> */}
    </div>
  )
}
