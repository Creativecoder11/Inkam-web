import HeaderBanner from '@/components/layout/headerBanner'
import ScrollAnimatedFeatures from '@/components/ui/timeline'
import React from 'react'

export default function Test() {
  return (
    <div>
        <HeaderBanner title="Test Page" heading={<>Under Construction</>} />
        <ScrollAnimatedFeatures />
    </div>
  )
}
