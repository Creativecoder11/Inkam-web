import HeaderBanner from '@/components/layout/headerBanner'
import AgenctWoks from '@/components/sections/agent/AgenctWoks'
import AgentBenefits from '@/components/sections/agent/AgentBenefits'
import AgentCTA from '@/components/sections/agent/AgentCta'
import AgentInventory from '@/components/sections/agent/AgentInventory'
import AgentPartners from '@/components/sections/agent/AgentPartners'
import AgentStory from '@/components/sections/agent/AgentStory'
import { Agent } from 'http'
import React from 'react'

export default function page() {
  return (
    <div>
        <HeaderBanner
            title="AGENTS"
            heading={
                <>
                    Follow our journey to <br/> digitalize distribution
                </>
            }/>
        <AgentStory/>
        <AgentBenefits/>
        <AgentInventory />
        <AgenctWoks />
        <AgentPartners/>
        <AgentCTA/>
        
    </div>
  )
}
