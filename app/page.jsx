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
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
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
            foundingDate: '2003',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
            knowsAbout: ['Commercial Trucking Insurance', 'Fleet Insurance', 'Motor Truck Cargo', 'FMCSA Compliance'],
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'Licensed Insurance Brokerage' },
            serviceType: [
              'Commercial Trucking Insurance',
              'Fleet Insurance',
              'Owner-Operator Insurance',
              'Motor Truck Cargo Insurance',
              'Commercial Auto Liability',
              'Physical Damage Coverage',
              'Transportation Insurance',
            ],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Commercial Trucking Insurance' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What insurance does a trucking company need?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At minimum, most trucking operations require primary auto liability, physical damage, and cargo coverage. Depending on your operation, you may also need general liability, workers\' compensation, non-trucking liability, trailer interchange, and umbrella/excess coverage. We help you identify exactly what your operation requires based on your authority type, cargo, and operating radius.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you insure both owner-operators and fleets?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We work with independent owner-operators running a single unit as well as fleets of all sizes — from small operations with a handful of trucks to large carriers with hundreds of power units. Our coverage programs are scaled and customized to match the size and complexity of each operation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you help with contract and compliance requirements?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. We understand the insurance requirements that shippers, brokers, and regulatory bodies impose on carriers. We can help ensure your certificates of insurance, policy endorsements, and filing requirements align with your contractual obligations and FMCSA standards.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can I get a quote?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In most cases, we can provide an initial quote within 24 hours of receiving your completed information. For more complex accounts or large fleets, the process may take slightly longer to ensure we explore the best options across our carrier network.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer cargo and physical damage coverage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Motor truck cargo coverage protects the goods you haul, while physical damage coverage protects your trucks and trailers. We can tailor both coverages to your specific cargo types, vehicle values, and deductible preferences.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can coverage be customized for my operation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every policy we place is built around your specific operation. We consider your equipment, routes, cargo types, loss history, and business goals to design a program that provides the right coverage at a competitive price — not a generic package.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Commercial Trucking Insurance Solutions',
            datePublished: '2025-06-01',
            dateModified: '2026-04-01',
            author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
