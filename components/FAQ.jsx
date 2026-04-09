'use client';
import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  { q: 'What insurance does a trucking company need?', a: 'At minimum, most trucking operations require primary auto liability, physical damage, and cargo coverage. Depending on your operation, you may also need general liability, workers\' compensation, non-trucking liability, trailer interchange, and umbrella/excess coverage. We help you identify exactly what your operation requires based on your authority type, cargo, and operating radius.' },
  { q: 'Do you insure both owner-operators and fleets?', a: 'Yes. We work with independent owner-operators running a single unit as well as fleets of all sizes — from small operations with a handful of trucks to large carriers with hundreds of power units. Our coverage programs are scaled and customized to match the size and complexity of each operation.' },
  { q: 'Can you help with contract and compliance requirements?', a: 'Absolutely. We understand the insurance requirements that shippers, brokers, and regulatory bodies impose on carriers. We can help ensure your certificates of insurance, policy endorsements, and filing requirements align with your contractual obligations and FMCSA standards.' },
  { q: 'How quickly can I get a quote?', a: 'In most cases, we can provide an initial quote within 24 hours of receiving your completed information. For more complex accounts or large fleets, the process may take slightly longer to ensure we explore the best options across our carrier network.' },
  { q: 'Do you offer cargo and physical damage coverage?', a: 'Yes. Motor truck cargo coverage protects the goods you haul, while physical damage coverage protects your trucks and trailers. We can tailor both coverages to your specific cargo types, vehicle values, and deductible preferences.' },
  { q: 'Can coverage be customized for my operation?', a: 'Every policy we place is built around your specific operation. We consider your equipment, routes, cargo types, loss history, and business goals to design a program that provides the right coverage at a competitive price — not a generic package.' },
];

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-2 border-ash rounded-[2rem] overflow-hidden" style={{ background: isOpen ? 'rgba(255,255,255,0.5)' : 'transparent', transition: 'background 0.5s ease' }}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left group cursor-pointer">
        <span className="text-brand font-bold pr-8 group-hover:text-blue-dark" style={{ fontSize: '1rem', transition: 'color 0.2s' }}>{faq.q}</span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: isOpen ? '#ffbf3b' : '#25475e',
            transition: 'all 0.5s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          }}
        >
          <svg className="w-4 h-4" style={{ color: isOpen ? '#25475e' : '#f4f4ec' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {/* Animated content - height 0 to auto matching alkeme faq_content-wrap */}
      <div
        ref={contentRef}
        style={{
          height: isOpen ? height + 'px' : '0px',
          overflow: 'hidden',
          transition: 'height 0.5s ease',
        }}
      >
        <p className="text-brand/70 px-6 pb-6" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation(0.05);

  return (
    <section id="faq" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[900px] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center mb-14 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Frequently Asked Questions</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
            Common Questions About Trucking Insurance
          </h2>
        </div>

        <div ref={listRef} className="space-y-4 stagger-children">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
