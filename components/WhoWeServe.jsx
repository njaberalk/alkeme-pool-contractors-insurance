'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const segments = [
  { name: 'Owner-Operators', slug: 'owner-operators', desc: 'Single-truck operations and independent drivers' },
  { name: 'Small Fleets', slug: 'small-fleets', desc: 'Growing operations with 2–15 power units' },
  { name: 'Large Fleets', slug: 'large-fleets', desc: 'Enterprise carriers with complex risk profiles' },
  { name: 'Hot Shot Trucking', slug: 'hot-shot-trucking', desc: 'Time-critical freight and expedited loads' },
  { name: 'LTL / Last Mile', slug: 'ltl-last-mile', desc: 'Less-than-truckload and final delivery operations' },
  { name: 'Intermodal', slug: 'intermodal', desc: 'Container and multi-mode transportation' },
  { name: 'Refrigerated', slug: 'refrigerated', desc: 'Temperature-controlled cargo and reefer units' },
  { name: 'Flatbed', slug: 'flatbed', desc: 'Open-deck and specialized heavy haul carriers' },
  { name: 'Hazmat', slug: 'hazmat', desc: 'Hazardous materials transportation specialists' },
  { name: 'Car Haulers', slug: 'car-haulers', desc: 'Auto transport and vehicle logistics carriers' },
];

export default function WhoWeServe() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="who-we-serve" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Industries Served</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Coverage for Every Type of Operation</h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>We serve trucking and transportation businesses across all segments — from single-truck owner-operators to large enterprise fleets.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 stagger-children">
          {segments.map((seg) => (
            <Link key={seg.name} href={`/industries/${seg.slug}/`} className="group border-2 border-ash rounded-[2rem] p-6 text-center bg-white/40 no-underline block" style={{ transition: 'all 0.24s' }}>
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold" style={{ transition: 'all 0.24s' }}>
                <svg className="w-6 h-6 text-stone group-hover:text-brand" style={{ transition: 'color 0.24s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
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
