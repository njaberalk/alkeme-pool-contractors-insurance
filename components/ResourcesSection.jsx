'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const featuredResources = [
  { slug: 'pool-contractor-insurance-cost', title: 'How Much Does Pool Contractor Insurance Cost?', category: 'Guide', desc: 'Average costs by company size, project type, and strategies to reduce your premiums.' },
  { slug: 'pool-contractor-liability-guide', title: 'Pool Contractor Liability Guide', category: 'Guide', desc: 'Key liability exposures including drowning claims, property damage, and completed operations.' },
  { slug: 'completed-operations-guide', title: 'Completed Operations Coverage Explained', category: 'Guide', desc: 'Why post-completion coverage is critical for pool builders and how claims arise years after the job.' },
  { slug: 'drowning-liability-guide', title: 'Drowning Liability for Pool Contractors', category: 'Guide', desc: 'Legal exposure, insurance coverage, and risk management strategies for drowning claims.' },
  { slug: 'chemical-handling-pollution-guide', title: 'Chemical Handling & Pollution Liability', category: 'Guide', desc: 'Pollution risks from pool chemicals, environmental cleanup, and coverage solutions.' },
  { slug: 'pool-contractor-insurance-glossary', title: 'Pool Contractor Insurance Glossary', category: 'Reference', desc: '40+ key terms every pool and spa contractor should know, explained clearly.' },
];

export default function ResourcesSection() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="resources" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Resources</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Pool Contractor Insurance Guides & Tools</h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>Expert resources to help you understand your coverage options, reduce costs, and protect your pool business.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {featuredResources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}/`} className="block border-2 border-ash rounded-[2rem] p-7 group no-underline hover:border-blue-dark" style={{ transition: 'all 0.24s' }}>
              <span className="text-blue-dark uppercase tracking-[0.12em] font-bold mb-3 block" style={{ fontSize: '0.65rem' }}>{resource.category}</span>
              <h3 className="text-brand font-bold mb-2 group-hover:text-blue-dark" style={{ fontSize: '1.05rem', lineHeight: '1.4', transition: 'color 0.24s' }}>{resource.title}</h3>
              <p className="text-brand/60" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>{resource.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
