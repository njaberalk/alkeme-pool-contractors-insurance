'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const featuredPosts = [
  { slug: 'pool-industry-trends-2026', title: 'Pool Contractor Insurance Trends: What to Know in 2026', category: 'Industry Insights' },
  { slug: 'common-insurance-mistakes-pool-contractors', title: '5 Insurance Mistakes Pool Contractors Make', category: 'Tips & Advice' },
  { slug: 'drowning-liability-what-contractors-must-know', title: 'Drowning Liability: What Pool Contractors Must Know', category: 'Risk Management' },
  { slug: 'chemical-safety-pool-contractors', title: 'Chemical Safety and Insurance for Pool Contractors', category: 'Safety & Compliance' },
  { slug: 'pool-code-compliance-insurance', title: 'Pool Building Code Compliance and Insurance', category: 'Compliance Guide' },
  { slug: 'hot-tub-installation-risks-insurance', title: 'Hot Tub Installation Risks and Insurance Coverage', category: 'Coverage Guide' },
];

export default function BlogSection() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="blog" className="bg-brand" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Insights</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Pool Contractor Insurance Insights & Advice</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>Expert perspectives on coverage, compliance, and cost management for pool and hot tub contractors.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="block border-2 border-ash/20 rounded-[2rem] p-7 group no-underline hover:border-gold/30" style={{ transition: 'all 0.24s' }}>
              <span className="text-blue uppercase tracking-[0.12em] font-bold mb-3 block" style={{ fontSize: '0.65rem' }}>{post.category}</span>
              <h3 className="text-stone font-bold group-hover:text-gold" style={{ fontSize: '1.05rem', lineHeight: '1.4', transition: 'color 0.24s' }}>{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
