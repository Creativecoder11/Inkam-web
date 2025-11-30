
import HeaderBanner from '@/components/layout/headerBanner'
import CoreValuesSection from '@/components/sections/about/CoreValueSection'
import ImpactStatsSection from '@/components/sections/about/impact-section'
import OurStory from '@/components/sections/about/our-story'

export default function About() {
  return (
    <div>
      <HeaderBanner/>
      <OurStory/>
      <ImpactStatsSection/> 
      <CoreValuesSection/>
    </div>
  )
}
