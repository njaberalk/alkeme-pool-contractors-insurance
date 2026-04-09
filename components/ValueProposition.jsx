'use client';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cards = [
  {
    title: 'Transportation Industry Expertise',
    description: 'Deep understanding of the risks facing trucking operations. Our specialists know the regulatory landscape, market conditions, and coverage requirements unique to commercial transportation.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Tailored Coverage Strategies',
    description: 'No two operations are the same. We design coverage programs that align with your fleet size, cargo type, operating radius, and risk profile — not a one-size-fits-all policy.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Responsive Service & Claims Support',
    description: 'When an incident occurs, every hour matters. Our team provides direct access to experienced claims advocates who understand trucking-specific challenges and move quickly on your behalf.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80',
  },
];

export default function ValueProposition() {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation(0.1);

  return (
    <section className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>
            Why We&apos;re Different
          </p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
            Specialized Protection for the Road Ahead
          </h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            We combine deep industry knowledge with a consultative approach to deliver insurance programs that truly protect your operation.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 stagger-children">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-[2rem] group cursor-pointer"
              style={{ height: '18rem' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.39), rgba(0,0,0,0.39))' }} />
              {/* Hover overlay - matches alkeme insurance_tab-box-overlay */}
              <div
                className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-70"
                style={{ transition: 'opacity 0.5s ease' }}
              />
              <div className="relative h-full flex flex-col justify-end p-7 overflow-hidden">
                <h3 className="text-stone font-bold text-xl mb-2 relative z-10" style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>
                  {card.title}
                </h3>
                {/* CTA slide-in matching alkeme insurance_tabs-item-cta */}
                <p
                  className="text-cream font-light text-sm leading-relaxed relative z-10 opacity-0 group-hover:opacity-100"
                  style={{
                    transform: 'translateX(-10px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                  }}
                >
                  <span className="group-hover:translate-x-0 inline-block" style={{ transition: 'transform 0.6s ease' }}>
                    {card.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
