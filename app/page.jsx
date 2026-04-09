import HomeContent from './HomeContent';

export const metadata = {
  title: 'Commercial Trucking Insurance Solutions',
  description: 'ALKEME Insurance Services provides specialized trucking insurance for owner-operators, fleets, and transportation businesses. Coverage for auto liability, cargo, physical damage, and more.',
  openGraph: {
    title: 'Trucking Insurance | ALKEME Insurance Services',
    description: 'Specialized trucking insurance for owner-operators, fleets, and transportation businesses across all 50 states.',
    url: 'https://alkemeins.com/trucking/',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'ALKEME Insurance Services',
            url: 'https://alkemeins.com',
            telephone: '+18559255363',
            email: 'info@alkemeins.com',
            description: 'ALKEME Insurance Services provides specialized commercial trucking insurance solutions for owner-operators, fleets, and transportation businesses across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: {
              '@type': 'Organization',
              name: 'ALKEME Insurance Services',
              url: 'https://alkemeins.com',
            },
            serviceType: [
              'Commercial Trucking Insurance',
              'Fleet Insurance',
              'Owner-Operator Insurance',
              'Motor Truck Cargo Insurance',
              'Commercial Auto Liability',
              'Physical Damage Coverage',
              'Transportation Insurance',
            ],
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
