import { notFound } from 'next/navigation';
import RazorCapital from '@/components/sections/insights/details/razor-capital';
import PartnershipMeeting from '@/components/sections/insights/details/partnership-meeting';
import BDjobsFair from '@/components/sections/insights/details/BDjobs-Fair';
import BangladeshAccelerator from '@/components/sections/insights/details/BangladeshAccelerator';


// Define the mapping of slugs to components
const slugToComponent: Record<string, React.ComponentType> = {
    'rising-together-meet-greet-with-razor-capital': RazorCapital,
    'market-presence-and-partnership-meeting': PartnershipMeeting,
    'bdjobs-fair-2024-chittagong': BDjobsFair,
    'selected-for-smart-bangladesh-accelerator-program-gss-c02': BangladeshAccelerator,
};

// Generate static params for all available slugs
export async function generateStaticParams() {
    return Object.keys(slugToComponent).map((slug) => ({
        slug,
    }));
}

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function InsightDetailPage({ params }: PageProps) {
    // Await params in Next.js 15
    const { slug } = await params;

    // Get the component for this slug
    const Component = slugToComponent[slug];

    // If no component found, show 404
    if (!Component) {
        notFound();
    }

    
    return <Component />;
}