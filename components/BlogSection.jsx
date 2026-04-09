'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const featuredPosts = [
  { slug: 'trucking-insurance-market-trends-2026', title: 'Trucking Insurance Market Trends: What Carriers Need to Know', category: 'Industry Insights' },
  { slug: 'mistakes-new-carriers-make-insurance', title: '5 Insurance Mistakes New Trucking Companies Make', category: 'Tips & Advice' },
  { slug: 'nuclear-verdicts-trucking-industry', title: 'Nuclear Verdicts and the Trucking Industry', category: 'Industry Insights' },
  { slug: 'fleet-safety-programs-lower-premiums', title: 'How Fleet Safety Programs Can Lower Your Premiums', category: 'Tips & Advice' },
  { slug: 'what-to-do-after-trucking-accident', title: 'What to Do After a Trucking Accident', category: 'Claims Guide' },
  { slug: 'choosing-right-trucking-insurance-agent', title: 'How to Choose the Right Trucking Insurance Agent', category: 'Tips & Advice' },
];

export default function BlogSection() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="blog" className="bg-brand" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>
            Insights
          </p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
            Trucking Insurance Insights & Advice
          </h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>
            Expert perspectives on coverage, compliance, and cost management for trucking operations.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="block border-2 border-ash/20 rounded-[2rem] p-7 group no-underline hover:border-gold/30"
              style={{ transition: 'all 0.24s' }}
            >
              <span className="text-blue uppercase tracking-[0.12em] font-bold mb-3 block" style={{ fontSize: '0.65rem' }}>
                {post.category}
              </span>
              <h3 className="text-stone font-bold group-hover:text-gold" style={{ fontSize: '1.05rem', lineHeight: '1.4', transition: 'color 0.24s' }}>
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
