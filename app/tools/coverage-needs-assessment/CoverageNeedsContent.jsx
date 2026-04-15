'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import QuoteForm from '../../../components/QuoteForm';
import Footer from '../../../components/Footer';

const operationTypes = [
  { id: 'pool-builder', label: 'Pool Builder (New Construction)', coverages: ['general-liability', 'workers-compensation', 'completed-operations', 'inland-marine', 'installation-floater', 'commercial-auto', 'umbrella-excess', 'pollution-liability'] },
  { id: 'hot-tub-installer', label: 'Hot Tub / Spa Installer', coverages: ['general-liability', 'workers-compensation', 'completed-operations', 'installation-floater', 'commercial-auto', 'inland-marine'] },
  { id: 'pool-service', label: 'Pool Service & Maintenance', coverages: ['general-liability', 'workers-compensation', 'commercial-auto', 'pollution-liability', 'inland-marine'] },
  { id: 'pool-remodeler', label: 'Pool Remodeling / Renovation', coverages: ['general-liability', 'workers-compensation', 'completed-operations', 'inland-marine', 'installation-floater', 'commercial-auto'] },
  { id: 'commercial-pool', label: 'Commercial Pool Contractor', coverages: ['general-liability', 'workers-compensation', 'completed-operations', 'umbrella-excess', 'professional-liability', 'pollution-liability', 'installation-floater', 'commercial-auto', 'inland-marine'] },
  { id: 'water-feature', label: 'Water Feature Designer / Builder', coverages: ['general-liability', 'workers-compensation', 'completed-operations', 'professional-liability', 'inland-marine', 'installation-floater'] },
  { id: 'pool-demolition', label: 'Pool Demolition / Removal', coverages: ['general-liability', 'workers-compensation', 'commercial-auto', 'inland-marine', 'umbrella-excess', 'pollution-liability'] },
  { id: 'equipment-supplier', label: 'Pool Equipment Supplier / Distributor', coverages: ['general-liability', 'commercial-property', 'commercial-auto', 'pollution-liability', 'umbrella-excess'] },
];

const coverageDetails = {
  'general-liability': { name: 'General Liability', desc: 'Third-party bodily injury and property damage from your operations', priority: 'Essential', slug: 'general-liability' },
  'workers-compensation': { name: 'Workers\' Compensation', desc: 'Employee injuries including falls, burns, and heat illness', priority: 'Essential', slug: 'workers-compensation' },
  'completed-operations': { name: 'Completed Operations', desc: 'Claims arising after projects are finished and turned over', priority: 'Critical', slug: 'completed-operations' },
  'commercial-auto': { name: 'Commercial Auto', desc: 'Service trucks, trailers, and company vehicles', priority: 'Essential', slug: 'commercial-auto' },
  'inland-marine': { name: 'Inland Marine', desc: 'Tools and equipment at job sites and in transit', priority: 'Recommended', slug: 'inland-marine' },
  'installation-floater': { name: 'Installation Floater', desc: 'Materials during installation before project handover', priority: 'Recommended', slug: 'installation-floater' },
  'pollution-liability': { name: 'Pollution Liability', desc: 'Chemical spills, contamination, and environmental cleanup', priority: 'Recommended', slug: 'pollution-liability' },
  'umbrella-excess': { name: 'Umbrella / Excess', desc: 'Additional limits above primary policies for catastrophic claims', priority: 'Recommended', slug: 'umbrella-excess' },
  'professional-liability': { name: 'Professional Liability', desc: 'Design errors, engineering mistakes, and consulting negligence', priority: 'Recommended', slug: 'professional-liability' },
  'commercial-property': { name: 'Commercial Property', desc: 'Office, warehouse, showroom, and business assets', priority: 'Recommended', slug: 'commercial-property' },
};

export default function CoverageNeedsContent() {
  const [selected, setSelected] = useState(null);
  const result = operationTypes.find(o => o.id === selected);

  return (
    <div className="min-h-screen bg-stone">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'Coverage Needs Assessment' }]} />

      <section className="relative overflow-hidden bg-brand" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0 bg-brand" style={{ opacity: 0.9 }} />
        <div className="relative max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4 text-center">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Free Tool</p>
          <h1 className="text-stone font-extrabold tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
            Pool Contractor Coverage Needs Assessment
          </h1>
          <p className="text-cream font-light mx-auto" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px' }}>
            Select your operation type to see recommended insurance coverages tailored to your pool or hot tub contracting business.
          </p>
        </div>
      </section>

      <section className="bg-stone" style={{ padding: '4rem 0' }}>
        <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <label className="block text-brand font-bold mb-4" style={{ fontSize: '1rem' }}>What type of pool/spa business do you operate?</label>
            <div className="grid sm:grid-cols-2 gap-3">
              {operationTypes.map((op) => (
                <button
                  key={op.id}
                  onClick={() => setSelected(op.id)}
                  className={`rounded-[1.5rem] px-5 py-4 font-bold cursor-pointer text-left ${selected === op.id ? 'bg-gold text-brand border-2 border-gold' : 'bg-white/40 text-brand border-2 border-ash hover:border-blue-dark'}`}
                  style={{ fontSize: '0.85rem', transition: 'all 0.24s' }}
                >
                  {op.label}
                </button>
              ))}
            </div>
          </div>

          {result && (
            <div className="max-w-3xl mx-auto">
              <div className="border-2 border-ash rounded-[2rem] p-8 bg-white/40">
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <p className="text-blue-dark uppercase tracking-[0.12em] font-bold mb-1" style={{ fontSize: '0.7rem' }}>Recommended Coverage</p>
                    <h2 className="text-brand font-extrabold" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>{result.label}</h2>
                  </div>
                  <a href="https://alkemeins.com/form" className="inline-flex items-center border-2 border-gold bg-gold text-brand rounded-[2rem] font-semibold uppercase tracking-[0.12em] hover:border-brand hover:bg-brand hover:text-stone no-underline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.65rem', transition: 'all 0.24s' }}>
                    Get a Quote
                  </a>
                </div>

                <div className="space-y-3">
                  {result.coverages.map((covId) => {
                    const cov = coverageDetails[covId];
                    if (!cov) return null;
                    return (
                      <Link key={covId} href={`/coverage/${cov.slug}/`} className="flex items-center justify-between border border-ash rounded-[1rem] p-4 hover:border-blue-dark no-underline group" style={{ transition: 'all 0.24s' }}>
                        <div>
                          <span className="text-brand font-bold group-hover:text-blue-dark block" style={{ fontSize: '0.95rem', transition: 'color 0.24s' }}>{cov.name}</span>
                          <span className="text-brand/60 block" style={{ fontSize: '0.8rem' }}>{cov.desc}</span>
                        </div>
                        <span className={`shrink-0 ml-4 px-3 py-1 rounded-full font-bold uppercase tracking-[0.1em] ${cov.priority === 'Essential' ? 'bg-brand text-stone' : cov.priority === 'Critical' ? 'bg-gold text-brand' : 'bg-ash text-brand'}`} style={{ fontSize: '0.6rem' }}>
                          {cov.priority}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </div>
  );
}
