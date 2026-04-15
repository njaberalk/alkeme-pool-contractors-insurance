import StateRequirementsContent from './StateRequirementsContent';

export const metadata = {
  title: 'State Pool Contractor Insurance Requirements Lookup',
  description: 'Look up pool contractor insurance requirements by state. See minimum liability limits, workers comp rules, contractor licensing, and state-specific regulations for all 50 states.',
  alternates: {
    canonical: 'https://alkemeins.com/pool-contractors/tools/state-requirements/',
  },
  openGraph: {
    title: 'State Pool Contractor Insurance Requirements Lookup | ALKEME Insurance Services',
    description: 'Interactive tool to look up pool contractor insurance requirements for any US state.',
    url: 'https://alkemeins.com/pool-contractors/tools/state-requirements/',
    type: 'website',
  },
};

export default function StateRequirementsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'State Pool Contractor Insurance Requirements Lookup',
    url: 'https://alkemeins.com/pool-contractors/tools/state-requirements/',
    applicationCategory: 'BusinessApplication',
    provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
    description: 'Look up pool contractor insurance requirements for any US state including licensing, workers comp, and coverage minimums.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StateRequirementsContent />
    </>
  );
}
