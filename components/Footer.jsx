import Link from 'next/link';

const alkemeLinks = [
  { label: 'Business Insurance', href: 'https://alkemeins.com/business-insurance' },
  { label: 'Personal Insurance', href: 'https://alkemeins.com/personal-insurance' },
  { label: 'Employee Benefits', href: 'https://alkemeins.com/employee-benefits' },
  { label: 'Financial Services', href: 'https://alkemeins.com/financial-services' },
  { label: 'About ALKEME', href: 'https://alkemeins.com/about' },
  { label: 'Contact Us', href: 'https://alkemeins.com/contact' },
];

const coverageLinks = [
  { label: 'Auto Liability', href: '/coverage/auto-liability/' },
  { label: 'Physical Damage', href: '/coverage/physical-damage/' },
  { label: 'Motor Truck Cargo', href: '/coverage/motor-truck-cargo/' },
  { label: 'General Liability', href: '/coverage/general-liability/' },
  { label: 'Workers\' Comp', href: '/coverage/workers-compensation/' },
  { label: 'Umbrella / Excess', href: '/coverage/umbrella-excess-liability/' },
];

const industryLinks = [
  { label: 'Owner-Operators', href: '/industries/owner-operators/' },
  { label: 'Small Fleets', href: '/industries/small-fleets/' },
  { label: 'Large Fleets', href: '/industries/large-fleets/' },
  { label: 'Flatbed', href: '/industries/flatbed/' },
  { label: 'Refrigerated', href: '/industries/refrigerated/' },
  { label: 'Hazmat', href: '/industries/hazmat/' },
];

const truckingLinks = [
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Our Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Get a Quote', href: 'https://alkemeins.com/form', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-stone">
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="https://alkemeins.com" className="flex items-center gap-2 mb-5 no-underline">
              <img
                src="https://cdn.prod.website-files.com/686d7240ee8f0fdd31648b80/68ae3aa829e8b536f770d83d_ALKEME_Logo_Color.png"
                alt="ALKEME Insurance Services"
                className="h-auto"
                style={{ width: '8rem' }}
              />
            </a>
            <p className="text-brand/60 mb-6" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              ALKEME Insurance Services is a nationally recognized insurance brokerage providing specialized transportation and trucking insurance solutions across all 50 states.
            </p>
            <div className="space-y-2">
              <a href="tel:+18559255363" className="block text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.95rem', lineHeight: '1.5', transition: 'all 0.2s' }}>
                (855) 925-5363
              </a>
              <a href="mailto:info@alkemeins.com" className="block text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.95rem', lineHeight: '1.5', transition: 'all 0.2s' }}>
                info@alkemeins.com
              </a>
            </div>
          </div>

          {/* ALKEME Links - cross-link to main site */}
          <div>
            <h4 className="text-brand font-bold mb-5 text-right max-lg:text-left" style={{ fontSize: '1rem' }}>ALKEME</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {alkemeLinks.map((link) => (
                <li key={link.label} className="text-right max-lg:text-left">
                  <a href={link.href} className="text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.9rem', lineHeight: '1.5', transition: 'all 0.2s' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trucking Coverage */}
          <div>
            <h4 className="text-brand font-bold mb-5 text-right max-lg:text-left" style={{ fontSize: '1rem' }}>Coverage</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {coverageLinks.map((link) => (
                <li key={link.label} className="text-right max-lg:text-left">
                  <Link href={link.href} className="text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.9rem', lineHeight: '1.5', transition: 'all 0.2s' }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-brand font-bold mb-5 text-right max-lg:text-left" style={{ fontSize: '1rem' }}>Industries</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {industryLinks.map((link) => (
                <li key={link.label} className="text-right max-lg:text-left">
                  <Link href={link.href} className="text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.9rem', lineHeight: '1.5', transition: 'all 0.2s' }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trucking Hub */}
          <div>
            <h4 className="text-brand font-bold mb-5 text-right max-lg:text-left" style={{ fontSize: '1rem' }}>Trucking</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {truckingLinks.map((link) => (
                <li key={link.label} className="text-right max-lg:text-left">
                  <Link href={link.href} className="text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.9rem', lineHeight: '1.5', transition: 'all 0.2s' }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ash">
        <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-brand/50 text-center" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              &copy; {new Date().getFullYear()} ALKEME Insurance Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://alkemeins.com/terms" className="text-brand/50 hover:text-blue-dark no-underline" style={{ fontSize: '0.85rem', transition: 'all 0.2s' }}>Terms</a>
              <a href="https://alkemeins.com/privacy" className="text-brand/50 hover:text-blue-dark no-underline" style={{ fontSize: '0.85rem', transition: 'all 0.2s' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
