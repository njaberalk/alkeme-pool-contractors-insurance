import { blogPosts, getBlogPostBySlug } from '../../../data/blog';
import BlogPageContent from './BlogPageContent';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://alkemeins.com/trucking/blog/${post.slug}/`,
    },
    openGraph: {
      title: `${post.metaTitle} | ALKEME Insurance Services`,
      description: post.metaDescription,
      url: `https://alkemeins.com/trucking/blog/${post.slug}/`,
      type: 'article',
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return <div>Article not found</div>;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      datePublished: post.publishDate,
      author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: post.metaDescription,
      url: `https://alkemeins.com/trucking/blog/${post.slug}/`,
      mainEntityOfPage: `https://alkemeins.com/trucking/blog/${post.slug}/`,
    },
    ...(post.faqs?.length ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
    }] : []),
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <BlogPageContent post={post} />
    </>
  );
}
