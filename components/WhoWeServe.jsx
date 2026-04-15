'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const segments = [
  { name: 'Pool Builders', slug: 'pool-builders', desc: 'New pool construction companies' },
  { name: 'Hot Tub Installers', slug: 'hot-tub-installers', desc: 'Spa and hot tub installation' },
  { name: 'Pool Service & Maintenance', slug: 'pool-service-maintenance', desc: 'Ongoing pool care and repairs' },
  { name: 'Pool Remodeling', slug: 'pool-remodeling', desc: 'Renovation and resurfacing' },
  { name: 'Commercial Pools', slug: 'commercial-pools', desc: 'Hotels, HOAs, and municipal pools' },
  { name: 'Water Feature Designers', slug: 'water-feature-designers', desc: 'Fountains, waterfalls, and ponds' },
  { name: 'Pool Equipment Suppliers', slug: 'pool-equipment-suppliers', desc: 'Distribution and supply companies' },
  { name: 'Spa Contractors', slug: 'spa-contractors', desc: 'Day spas and wellness builds' },
  { name: 'Pool Demolition', slug: 'pool-demolition', desc: 'Pool removal and fill services' },
  { name: 'Aquatic Facilities', slug: 'aquatic-facilities', desc: 'Water parks and swim centers' },
];

export default function WhoWeServe() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="who-we-serve" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Industries Served</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Coverage for Every Type of Pool & Hot Tub Operation</h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>We serve pool and spa contractors across all segments — from one-person service routes to large commercial pool builders with multi-million dollar projects.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 stagger-children">
          {segments.map((seg) => (
            <Link key={seg.name} href={`/industries/${seg.slug}/`} className="group border-2 border-ash rounded-[2rem] p-6 text-center bg-white/40 no-underline block" style={{ transition: 'all 0.24s' }}>
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold" style={{ transition: 'all 0.24s' }}>
                <svg className="w-6 h-6 text-stone group-hover:text-brand" style={{ transition: 'color 0.24s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-brand font-bold mb-1" style={{ fontSize: '0.9rem' }}>{seg.name}</h3>
              <p className="text-brand/60" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>{seg.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
