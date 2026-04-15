import HomeContent from './HomeContent';

export const metadata = {
  title: 'Pool & Hot Tub Contractor Insurance Solutions',
  description: 'ALKEME Insurance Services provides specialized insurance for pool builders, hot tub installers, pool service companies, and aquatic contractors. Coverage for general liability, completed operations, pollution liability, and more.',
  openGraph: {
    title: 'Pool & Hot Tub Contractor Insurance | ALKEME Insurance Services',
    description: 'Specialized insurance for pool builders, hot tub installers, pool service companies, and aquatic contractors across all 50 states.',
    url: 'https://alkemeins.com/pool-contractors/',
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
            description: 'ALKEME Insurance Services provides specialized pool and hot tub contractor insurance solutions for pool builders, service companies, hot tub installers, and aquatic contractors across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            foundingDate: '2003',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
            knowsAbout: ['Pool Contractor Insurance', 'Hot Tub Installer Insurance', 'Completed Operations', 'Pollution Liability'],
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'Licensed Insurance Brokerage' },
            serviceType: ['Pool Contractor Insurance', 'Hot Tub Insurance', 'General Liability', 'Completed Operations', 'Pollution Liability', 'Workers Compensation'],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Pool Contractor Insurance' },
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
              { '@type': 'Question', name: 'What insurance does a pool contractor need?', acceptedAnswer: { '@type': 'Answer', text: 'At minimum, most pool contractors need general liability, workers\u0027 compensation, and commercial auto. Pool builders also need completed operations coverage, inland marine for tools and equipment, and pollution liability for chemical handling. We help you identify exactly what your operation requires.' } },
              { '@type': 'Question', name: 'Do you insure both pool builders and service companies?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with new pool construction companies, pool service and maintenance routes, hot tub installers, remodelers, commercial pool contractors, water feature designers, and pool demolition firms. Our coverage programs are tailored to the specific risk profile of each operation.' } },
              { '@type': 'Question', name: 'Why is completed operations coverage so important for pool contractors?', acceptedAnswer: { '@type': 'Answer', text: 'Completed operations covers claims that arise after you finish a project. A pool that develops a structural crack, a heater that malfunctions, or a drowning incident can generate lawsuits years after the work was completed. This coverage is critical for any contractor who builds or installs aquatic structures.' } },
              { '@type': 'Question', name: 'How quickly can I get a quote?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, we can provide an initial quote within 24 hours of receiving your completed information. For more complex accounts, the process may take slightly longer to ensure we explore the best options across our carrier network.' } },
              { '@type': 'Question', name: 'Do you offer pollution liability for pool chemical handling?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pollution liability covers chemical spills, toxic releases, and environmental cleanup costs that standard general liability excludes. This is essential for any pool contractor who handles chlorine, muriatic acid, or other treatment chemicals.' } },
              { '@type': 'Question', name: 'Can coverage be customized for my operation?', acceptedAnswer: { '@type': 'Answer', text: 'Every policy we place is built around your specific operation. We consider your services, crew size, project types, state licensing requirements, and risk profile to design a program that provides the right coverage at a competitive price.' } },
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
            headline: 'Pool & Hot Tub Contractor Insurance Solutions',
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
