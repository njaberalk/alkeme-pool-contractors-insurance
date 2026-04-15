'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINK_MAP = [
  ['general liability', '/coverage/general-liability/'],
  ['professional liability', '/coverage/professional-liability/'],
  ['errors and omissions', '/coverage/professional-liability/'],
  ['workers\' compensation', '/coverage/workers-compensation/'],
  ['workers compensation', '/coverage/workers-compensation/'],
  ['workers\' comp', '/coverage/workers-compensation/'],
  ['workers comp', '/coverage/workers-compensation/'],
  ['commercial auto', '/coverage/commercial-auto/'],
  ['commercial property', '/coverage/commercial-property/'],
  ['inland marine', '/coverage/inland-marine/'],
  ['umbrella coverage', '/coverage/umbrella-excess/'],
  ['umbrella liability', '/coverage/umbrella-excess/'],
  ['excess liability', '/coverage/umbrella-excess/'],
  ['completed operations', '/coverage/completed-operations/'],
  ['installation floater', '/coverage/installation-floater/'],
  ['pollution liability', '/coverage/pollution-liability/'],
  ['pool builders', '/industries/pool-builders/'],
  ['hot tub installers', '/industries/hot-tub-installers/'],
  ['pool service', '/industries/pool-service-maintenance/'],
  ['pool remodeling', '/industries/pool-remodeling/'],
  ['commercial pools', '/industries/commercial-pools/'],
  ['water feature designers', '/industries/water-feature-designers/'],
  ['pool equipment suppliers', '/industries/pool-equipment-suppliers/'],
  ['spa contractors', '/industries/spa-contractors/'],
  ['pool demolition', '/industries/pool-demolition/'],
  ['aquatic facilities', '/industries/aquatic-facilities/'],
  ['Alabama', '/states/alabama/'], ['Alaska', '/states/alaska/'], ['Arizona', '/states/arizona/'],
  ['Arkansas', '/states/arkansas/'], ['California', '/states/california/'], ['Colorado', '/states/colorado/'],
  ['Connecticut', '/states/connecticut/'], ['Delaware', '/states/delaware/'], ['Florida', '/states/florida/'],
  ['Georgia', '/states/georgia/'], ['Idaho', '/states/idaho/'], ['Illinois', '/states/illinois/'],
  ['Indiana', '/states/indiana/'], ['Iowa', '/states/iowa/'], ['Kansas', '/states/kansas/'],
  ['Kentucky', '/states/kentucky/'], ['Louisiana', '/states/louisiana/'], ['Maine', '/states/maine/'],
  ['Maryland', '/states/maryland/'], ['Massachusetts', '/states/massachusetts/'], ['Michigan', '/states/michigan/'],
  ['Minnesota', '/states/minnesota/'], ['Mississippi', '/states/mississippi/'], ['Missouri', '/states/missouri/'],
  ['Montana', '/states/montana/'], ['Nebraska', '/states/nebraska/'], ['Nevada', '/states/nevada/'],
  ['New Hampshire', '/states/new-hampshire/'], ['New Jersey', '/states/new-jersey/'],
  ['New Mexico', '/states/new-mexico/'], ['New York', '/states/new-york/'],
  ['North Carolina', '/states/north-carolina/'], ['North Dakota', '/states/north-dakota/'],
  ['Ohio', '/states/ohio/'], ['Oklahoma', '/states/oklahoma/'], ['Oregon', '/states/oregon/'],
  ['Pennsylvania', '/states/pennsylvania/'], ['Rhode Island', '/states/rhode-island/'],
  ['South Carolina', '/states/south-carolina/'], ['South Dakota', '/states/south-dakota/'],
  ['Tennessee', '/states/tennessee/'], ['Texas', '/states/texas/'], ['Utah', '/states/utah/'],
  ['Vermont', '/states/vermont/'], ['Virginia', '/states/virginia/'], ['Washington', '/states/washington/'],
  ['West Virginia', '/states/west-virginia/'], ['Wisconsin', '/states/wisconsin/'], ['Wyoming', '/states/wyoming/'],
  ['contractor licensing', '/resources/pool-safety-compliance-guide/'],
  ['pool safety codes', '/resources/pool-safety-compliance-guide/'],
  ['state requirements', '/tools/state-requirements/'],
];

export default function SmartText({ text, className, style }) {
  const pathname = usePathname();
  if (!text) return null;
  const currentPath = pathname?.replace(/\/pool-contractors/, '') || '';
  const parts = autoLink(text, currentPath);
  return (
    <span className={className} style={style}>
      {parts.map((part, i) =>
        typeof part === 'string' ? part : (
          <Link key={i} href={part.href} className="text-blue-dark font-semibold hover:text-brand underline decoration-blue-dark/30 underline-offset-2 hover:decoration-brand/50" style={{ transition: 'color 0.2s' }}>{part.text}</Link>
        )
      )}
    </span>
  );
}

function autoLink(text, currentPath = '') {
  const parts = [];
  let remaining = text;
  const linked = new Set();
  while (remaining.length > 0) {
    let earliestMatch = null;
    let earliestIndex = remaining.length;
    let matchedTerm = null;
    for (const [term, href] of LINK_MAP) {
      if (linked.has(term)) continue;
      if (currentPath && href.replace(/\/$/, '') === currentPath.replace(/\/$/, '')) continue;
      const index = remaining.toLowerCase().indexOf(term.toLowerCase());
      if (index !== -1 && index < earliestIndex) {
        earliestMatch = { href, length: term.length };
        earliestIndex = index;
        matchedTerm = term;
      }
    }
    if (earliestMatch) {
      if (earliestIndex > 0) parts.push(remaining.substring(0, earliestIndex));
      parts.push({ text: remaining.substring(earliestIndex, earliestIndex + earliestMatch.length), href: earliestMatch.href });
      linked.add(matchedTerm);
      remaining = remaining.substring(earliestIndex + earliestMatch.length);
    } else {
      parts.push(remaining);
      remaining = '';
    }
  }
  return parts;
}
