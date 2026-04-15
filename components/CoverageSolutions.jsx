'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coverages = [
  { title: 'General Liability', slug: 'general-liability', desc: 'Third-party bodily injury and property damage coverage for pool construction, service calls, and job site operations.' },
  { title: 'Workers\' Compensation', slug: 'workers-compensation', desc: 'Covers employee injuries on job sites including falls, chemical burns, heat exposure, and equipment accidents.' },
  { title: 'Commercial Auto', slug: 'commercial-auto', desc: 'Coverage for service trucks, equipment trailers, company vehicles, and fleet operations.' },
  { title: 'Commercial Property', slug: 'commercial-property', desc: 'Office space, warehouses, showrooms, pool equipment inventory, and business assets.' },
  { title: 'Inland Marine', slug: 'inland-marine', desc: 'Tools, equipment, and materials in transit or stored at job sites away from your premises.' },
  { title: 'Professional Liability', slug: 'professional-liability', desc: 'Errors and omissions coverage for design flaws, engineering miscalculations, and consulting services.' },
  { title: 'Umbrella / Excess', slug: 'umbrella-excess', desc: 'Additional liability limits above your primary policies for catastrophic claims and contract requirements.' },
  { title: 'Completed Operations', slug: 'completed-operations', desc: 'Coverage for claims arising after project completion including leaks, structural failures, and drowning incidents.' },
  { title: 'Installation Floater', slug: 'installation-floater', desc: 'Protects materials and equipment during installation before the project is turned over to the owner.' },
  { title: 'Pollution Liability', slug: 'pollution-liability', desc: 'Chemical spills, water contamination, and environmental cleanup costs from pool chemical handling.' },
];

export default function CoverageSolutions() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="coverage" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Coverage Solutions</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Comprehensive Coverage for Every Pool & Hot Tub Operation</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>From general liability to specialized pollution coverage, we provide the coverage lines that keep your pool contracting business compliant and protected.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {coverages.map((item) => (
            <Link key={item.title} href={`/coverage/${item.slug}/`} className="block border-2 border-ash/30 rounded-[2rem] p-8 group no-underline" style={{ background: 'rgba(255,255,255,0.04)', transition: 'all 0.24s' }}>
              <h3 className="text-stone font-bold mb-3 group-hover:text-gold" style={{ fontSize: '1.25rem', lineHeight: '1.5', transition: 'color 0.24s' }}>{item.title}</h3>
              <p className="text-cream font-light" style={{ fontSize: '0.85rem', lineHeight: '22px' }}>{item.desc}</p>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.16em] mt-4 inline-block opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.24s' }}>Learn More &rarr;</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand no-underline" style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>
            Discuss Your Coverage Needs
          </Link>
        </div>
      </div>
    </section>
  );
}
