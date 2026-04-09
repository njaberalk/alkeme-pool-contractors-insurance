'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useNavScrollBehavior } from '../hooks/useScrollAnimation';
import { usePathname } from 'next/navigation';

const coverageItems = [
  { label: 'Auto Liability', href: '/coverage/auto-liability/' },
  { label: 'Physical Damage', href: '/coverage/physical-damage/' },
  { label: 'Motor Truck Cargo', href: '/coverage/motor-truck-cargo/' },
  { label: 'General Liability', href: '/coverage/general-liability/' },
  { label: 'Non-Trucking Liability', href: '/coverage/non-trucking-liability/' },
  { label: 'Trailer Interchange', href: '/coverage/trailer-interchange/' },
  { label: 'Workers\' Comp', href: '/coverage/workers-compensation/' },
  { label: 'Umbrella / Excess', href: '/coverage/umbrella-excess-liability/' },
  { label: 'Occupational Accident', href: '/coverage/occupational-accident/' },
];

const resourceItems = [
  { label: '— Tools —', href: null, divider: true },
  { label: 'FMCSA Requirements Checker', href: '/tools/fmcsa-checker/' },
  { label: 'State Requirements Lookup', href: '/tools/state-requirements/' },
  { label: '— Guides —', href: null, divider: true },
  { label: 'Trucking Insurance Cost', href: '/resources/trucking-insurance-cost/' },
  { label: 'FMCSA Requirements', href: '/resources/fmcsa-insurance-requirements/' },
  { label: 'New Authority Insurance', href: '/resources/new-authority-insurance/' },
  { label: 'Lower Your Premiums', href: '/resources/lower-trucking-insurance-premiums/' },
  { label: 'Insurance Glossary', href: '/resources/trucking-insurance-glossary/' },
  { label: '— Insights —', href: null, divider: true },
  { label: 'Market Trends 2026', href: '/blog/trucking-insurance-market-trends-2026/' },
  { label: 'Nuclear Verdicts Guide', href: '/blog/nuclear-verdicts-trucking-industry/' },
  { label: 'New Carrier Mistakes', href: '/blog/mistakes-new-carriers-make-insurance/' },
];

const industryItems = [
  { label: 'Owner-Operators', href: '/industries/owner-operators/' },
  { label: 'Small Fleets', href: '/industries/small-fleets/' },
  { label: 'Large Fleets', href: '/industries/large-fleets/' },
  { label: 'Hot Shot', href: '/industries/hot-shot-trucking/' },
  { label: 'LTL / Last Mile', href: '/industries/ltl-last-mile/' },
  { label: 'Intermodal', href: '/industries/intermodal/' },
  { label: 'Refrigerated', href: '/industries/refrigerated/' },
  { label: 'Flatbed', href: '/industries/flatbed/' },
  { label: 'Hazmat', href: '/industries/hazmat/' },
  { label: 'Car Haulers', href: '/industries/car-haulers/' },
];

function Dropdown({ label, items, isOpen, onToggle, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
    if (isOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        onMouseEnter={onToggle}
        className="text-brand hover:text-blue-dark uppercase tracking-[0.16em] px-5 py-2 font-bold flex items-center gap-1"
        style={{ fontSize: '0.75rem', transition: 'all 0.2s' }}
      >
        {label}
        <svg className="w-3 h-3" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 bg-stone rounded-[1rem] border border-ash py-3 min-w-[240px]"
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.2)', animation: 'fadeIn 0.15s ease' }}
          onMouseLeave={onClose}
        >
          {items.map((item) => (
            item.divider ? (
              <div key={item.label} className="px-5 pt-3 pb-1 text-blue-dark/50 uppercase tracking-[0.12em] font-bold border-t border-ash first:border-0 first:pt-0 mt-1 first:mt-0" style={{ fontSize: '0.6rem' }}>
                {item.label.replace(/—/g, '').trim()}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="block px-5 py-2 text-brand hover:text-blue-dark hover:bg-ash/30 uppercase tracking-[0.12em] font-semibold no-underline"
                style={{ fontSize: '0.7rem', transition: 'all 0.2s' }}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useNavScrollBehavior();
  const pathname = usePathname();
  const isHome = pathname === '/trucking' || pathname === '/trucking/' || pathname === '/';

  return (
    <>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[999] bg-stone"
        style={{
          padding: '1.25rem 0',
          boxShadow: '0 2px 7px rgba(0,0,0,0.2)',
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
          <div className="flex items-center justify-between">
            {/* ALKEME Logo */}
            <a href="https://alkemeins.com" className="shrink-0 no-underline">
              <img
                src="https://cdn.prod.website-files.com/686d7240ee8f0fdd31648b80/68ae3aa829e8b536f770d83d_ALKEME_Logo_Color.png"
                alt="ALKEME Insurance Services"
                className="h-auto"
                style={{ width: '9rem' }}
              />
            </a>

            {/* Desktop Nav - matching alkemeins.com structure */}
            <nav className="hidden lg:flex items-center gap-0">
              <Dropdown
                label="Coverage"
                items={coverageItems}
                isOpen={openDropdown === 'coverage'}
                onToggle={() => setOpenDropdown(openDropdown === 'coverage' ? null : 'coverage')}
                onClose={() => setOpenDropdown(null)}
              />
              <Dropdown
                label="Industries"
                items={industryItems}
                isOpen={openDropdown === 'industries'}
                onToggle={() => setOpenDropdown(openDropdown === 'industries' ? null : 'industries')}
                onClose={() => setOpenDropdown(null)}
              />
              <Link
                href={isHome ? '#states' : '/#states'}
                className="text-brand hover:text-blue-dark uppercase tracking-[0.16em] px-4 py-2 font-bold no-underline"
                style={{ fontSize: '0.7rem', transition: 'all 0.2s' }}
              >
                States
              </Link>
              <Dropdown
                label="Resources"
                items={resourceItems}
                isOpen={openDropdown === 'resources'}
                onToggle={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
                onClose={() => setOpenDropdown(null)}
              />
              <a
                href="https://alkemeins.com/form"
                className="border-[1.5px] border-blue text-blue hover:border-gold hover:bg-gold hover:text-brand uppercase tracking-[0.16em] px-5 py-2 font-bold rounded-[20px] ml-3 no-underline"
                style={{ fontSize: '0.65rem', transition: 'all 0.24s' }}
              >
                Get Your Quote
              </a>
            </nav>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 flex flex-col items-center justify-center gap-[5px] w-10 h-10"
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-[2px] bg-brand origin-center" style={{ transition: 'all 0.5s', transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span className="block w-5 h-[2px] bg-brand" style={{ transition: 'opacity 0.5s', opacity: mobileOpen ? 0 : 1 }} />
              <span className="block w-5 h-[2px] bg-brand origin-center" style={{ transition: 'all 0.5s', transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden bg-stone overflow-hidden" style={{ maxHeight: mobileOpen ? '90vh' : '0', transition: 'max-height 0.4s ease', borderTop: mobileOpen ? '1px solid #e3e3d8' : 'none' }}>
          <div className="px-6 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
            <p className="text-blue-dark uppercase tracking-[0.12em] font-bold pb-2 border-b border-ash mb-3" style={{ fontSize: '0.65rem' }}>Coverage</p>
            {coverageItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block text-brand hover:text-blue-dark uppercase tracking-[0.12em] font-semibold py-2 no-underline" style={{ fontSize: '0.7rem', transition: 'all 0.2s' }}>
                {item.label}
              </Link>
            ))}

            <p className="text-blue-dark uppercase tracking-[0.12em] font-bold pb-2 border-b border-ash mb-3 mt-6" style={{ fontSize: '0.65rem' }}>Industries</p>
            {industryItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block text-brand hover:text-blue-dark uppercase tracking-[0.12em] font-semibold py-2 no-underline" style={{ fontSize: '0.7rem', transition: 'all 0.2s' }}>
                {item.label}
              </Link>
            ))}

            <div className="border-t border-ash pt-4 mt-4 space-y-3">
              <Link href={isHome ? '#states' : '/#states'} onClick={() => setMobileOpen(false)} className="block text-brand hover:text-blue-dark uppercase tracking-[0.16em] font-bold py-2 no-underline" style={{ fontSize: '0.75rem' }}>States & Cities</Link>

              <p className="text-blue-dark uppercase tracking-[0.12em] font-bold pb-2 border-b border-ash mb-3 mt-4" style={{ fontSize: '0.65rem' }}>Tools & Resources</p>
              <Link href="/tools/fmcsa-checker/" onClick={() => setMobileOpen(false)} className="block text-brand hover:text-blue-dark uppercase tracking-[0.12em] font-semibold py-2 no-underline" style={{ fontSize: '0.7rem' }}>FMCSA Requirements Checker</Link>
              <Link href="/tools/state-requirements/" onClick={() => setMobileOpen(false)} className="block text-brand hover:text-blue-dark uppercase tracking-[0.12em] font-semibold py-2 no-underline" style={{ fontSize: '0.7rem' }}>State Requirements Lookup</Link>
              <Link href="/resources/trucking-insurance-cost/" onClick={() => setMobileOpen(false)} className="block text-brand hover:text-blue-dark uppercase tracking-[0.12em] font-semibold py-2 no-underline" style={{ fontSize: '0.7rem' }}>Trucking Insurance Cost</Link>
              <Link href="/resources/fmcsa-insurance-requirements/" onClick={() => setMobileOpen(false)} className="block text-brand hover:text-blue-dark uppercase tracking-[0.12em] font-semibold py-2 no-underline" style={{ fontSize: '0.7rem' }}>FMCSA Requirements Guide</Link>
              <Link href="/blog/trucking-insurance-market-trends-2026/" onClick={() => setMobileOpen(false)} className="block text-brand hover:text-blue-dark uppercase tracking-[0.12em] font-semibold py-2 no-underline" style={{ fontSize: '0.7rem' }}>Market Trends 2026</Link>
              <a href="https://alkemeins.com" onClick={() => setMobileOpen(false)} className="block text-blue-dark hover:text-brand uppercase tracking-[0.12em] font-bold py-2 no-underline" style={{ fontSize: '0.65rem' }}>← Back to ALKEME</a>
            </div>

            <a href="https://alkemeins.com/form" className="inline-block border-2 border-gold bg-gold text-brand uppercase tracking-[0.16em] px-6 py-3 font-bold rounded-[20px] mt-4 no-underline text-center w-full" style={{ fontSize: '0.75rem', transition: 'all 0.24s' }}>
              Get Your Quote
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
