'use client';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const points = [
  { title: 'Specialized Transportation Knowledge', desc: 'Our team has spent years working exclusively in transportation insurance. We understand DOT requirements, FMCSA compliance, and the risk factors that affect your bottom line.' },
  { title: 'Consultation-Driven Approach', desc: 'We listen before we quote. Every coverage recommendation begins with understanding your operation, exposure areas, and business objectives.' },
  { title: 'Risk Management & Compliance Support', desc: 'Beyond placing coverage, we help you identify and mitigate risk through safety analysis, compliance guidance, and proactive loss prevention strategies.' },
  { title: 'Market Access for Tailored Solutions', desc: 'We work with a wide network of carriers and underwriters specializing in trucking risks, giving you access to competitive options tailored to your specific needs.' },
];

export default function WhyChooseUs() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="why-us" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div ref={leftRef} className="fade-in-view-left">
            <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Why Choose Us</p>
            <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
              Your Operation Deserves an Insurance Partner Who Gets It
            </h2>
            <p className="text-cream font-light mb-10" style={{ lineHeight: '22px', maxWidth: '500px' }}>
              Trucking insurance requires more than a policy — it demands an advisor who understands the nuances of your operation and advocates for the right coverage at the right price.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand"
              style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}
            >
              Get Started Today
            </a>
          </div>

          {/* Right - stat cards */}
          <div ref={rightRef} className="grid grid-cols-2 gap-5 stagger-children">
            {points.map((point) => (
              <div key={point.title} className="border-2 border-ash/30 rounded-[2rem] p-6 text-left">
                <h4 className="text-stone font-bold mb-2" style={{ fontSize: '18px', lineHeight: '24px' }}>{point.title}</h4>
                <p className="text-cream font-light" style={{ fontSize: '0.8rem', lineHeight: '20px' }}>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
