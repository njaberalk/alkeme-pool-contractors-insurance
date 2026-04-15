'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function RelatedIndustries({ slugs, title = 'Industries That Need This Coverage' }) {
  const ref = useScrollAnimation();
  if (!slugs?.length) return null;
  const industryNames = {
    'pool-builders': 'Pool Builders', 'hot-tub-installers': 'Hot Tub Installers', 'pool-service-maintenance': 'Pool Service & Maintenance',
    'pool-remodeling': 'Pool Remodeling', 'commercial-pools': 'Commercial Pools', 'water-feature-designers': 'Water Feature Designers',
    'pool-equipment-suppliers': 'Pool Equipment Suppliers', 'spa-contractors': 'Spa Contractors', 'pool-demolition': 'Pool Demolition',
    'aquatic-facilities': 'Aquatic Facilities',
  };
  return (
    <div ref={ref} className="bg-stone fade-in-view" style={{ padding: '5rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)' }}>{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slugs.map(slug => (
            <Link key={slug} href={`/industries/${slug}/`} className="block border-2 border-ash rounded-[2rem] p-5 group no-underline hover:border-blue-dark text-center" style={{ transition: 'all 0.24s' }}>
              <h3 className="text-brand font-bold group-hover:text-blue-dark" style={{ fontSize: '1rem', transition: 'color 0.24s' }}>{industryNames[slug] || slug}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RelatedResourceLinks({ slugs, title = 'Helpful Resources' }) {
  const ref = useScrollAnimation();
  if (!slugs?.length) return null;
  const resourceNames = {
    'pool-contractor-insurance-cost': 'How Much Does Pool Contractor Insurance Cost?',
    'pool-contractor-liability-guide': 'Pool Contractor Liability Guide',
    'completed-operations-guide': 'Completed Operations Coverage Guide',
    'drowning-liability-guide': 'Drowning Liability for Pool Contractors',
    'chemical-handling-pollution-guide': 'Chemical Handling & Pollution Guide',
    'pool-safety-compliance-guide': 'Pool Safety & Compliance Guide',
    'coi-guide': 'Certificate of Insurance Guide',
    'pool-contractor-claims-guide': 'Insurance Claims Guide',
    'pool-contractor-insurance-glossary': 'Insurance Glossary',
  };
  return (
    <div ref={ref} className="bg-brand fade-in-view" style={{ padding: '4rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-stone font-bold mb-6" style={{ fontSize: '1.3rem' }}>{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {slugs.map(slug => (
            <Link key={slug} href={`/resources/${slug}/`} className="block border border-ash/20 rounded-[2rem] p-5 group no-underline hover:border-gold/30" style={{ transition: 'all 0.24s' }}>
              <span className="text-blue uppercase tracking-[0.12em] font-bold block mb-1" style={{ fontSize: '0.6rem' }}>Guide</span>
              <span className="text-stone font-bold group-hover:text-gold block" style={{ fontSize: '0.9rem', transition: 'color 0.24s' }}>{resourceNames[slug] || slug} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TopStates({ slugs, title = 'Top States' }) {
  const ref = useScrollAnimation();
  if (!slugs?.length) return null;
  const stateNames = {
    'texas': 'Texas', 'california': 'California', 'florida': 'Florida', 'georgia': 'Georgia',
    'illinois': 'Illinois', 'ohio': 'Ohio', 'pennsylvania': 'Pennsylvania', 'new-york': 'New York',
    'new-jersey': 'New Jersey', 'virginia': 'Virginia', 'nevada': 'Nevada', 'colorado': 'Colorado',
    'north-carolina': 'North Carolina', 'michigan': 'Michigan', 'arizona': 'Arizona',
    'washington': 'Washington', 'indiana': 'Indiana', 'tennessee': 'Tennessee',
    'south-carolina': 'South Carolina',
  };
  return (
    <div ref={ref} className="bg-stone fade-in-view" style={{ padding: '4rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-brand font-bold mb-6" style={{ fontSize: '1.3rem' }}>{title}</h2>
        <div className="flex flex-wrap gap-3">
          {slugs.map(slug => (
            <Link key={slug} href={`/states/${slug}/`} className="border-2 border-ash rounded-[2rem] px-5 py-2 text-brand font-semibold hover:border-blue-dark hover:text-blue-dark no-underline" style={{ fontSize: '0.85rem', transition: 'all 0.24s' }}>
              {stateNames[slug] || slug}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CitiesInState({ stateSlug, stateName }) {
  const ref = useScrollAnimation();
  return null;
}
