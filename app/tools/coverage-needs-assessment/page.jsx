import CoverageNeedsContent from './CoverageNeedsContent';

export const metadata = {
  title: 'Pool Contractor Coverage Needs Assessment',
  description: 'Free tool to assess your pool contractor insurance needs. Answer a few questions about your operation and get personalized coverage recommendations.',
  alternates: {
    canonical: 'https://alkemeins.com/pool-contractors/tools/coverage-needs-assessment/',
  },
  openGraph: {
    title: 'Pool Contractor Coverage Needs Assessment | ALKEME Insurance Services',
    description: 'Interactive tool to assess your pool contractor insurance needs based on your operation type and services.',
    url: 'https://alkemeins.com/pool-contractors/tools/coverage-needs-assessment/',
    type: 'website',
  },
};

export default function CoverageNeedsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pool Contractor Coverage Needs Assessment',
    url: 'https://alkemeins.com/pool-contractors/tools/coverage-needs-assessment/',
    applicationCategory: 'BusinessApplication',
    provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
    description: 'Assess your pool contractor insurance needs based on your operation type, services, and risk profile.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CoverageNeedsContent />
    </>
  );
}
