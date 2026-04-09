import { resources, getResourceBySlug } from '../../../data/resources';
import ResourcePageContent from './ResourcePageContent';

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: resource.metaTitle,
    description: resource.metaDescription,
    alternates: {
      canonical: `https://alkemeins.com/trucking/resources/${resource.slug}/`,
    },
    openGraph: {
      title: `${resource.metaTitle} | ALKEME Insurance Services`,
      description: resource.metaDescription,
      url: `https://alkemeins.com/trucking/resources/${resource.slug}/`,
      type: 'article',
    },
  };
}

export default async function ResourcePage({ params }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return <div>Resource not found</div>;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: resource.title,
      author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: resource.metaDescription,
      url: `https://alkemeins.com/trucking/resources/${resource.slug}/`,
    },
    ...(resource.faqs?.length ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: resource.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    }] : []),
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <ResourcePageContent resource={resource} />
    </>
  );
}
