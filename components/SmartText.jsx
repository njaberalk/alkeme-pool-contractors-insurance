'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// All linkable terms → their page URLs
// Order matters: longer phrases first to avoid partial matches
const LINK_MAP = [
  // Coverages
  ['primary auto liability', '/coverage/auto-liability/'],
  ['auto liability', '/coverage/auto-liability/'],
  ['physical damage', '/coverage/physical-damage/'],
  ['motor truck cargo', '/coverage/motor-truck-cargo/'],
  ['cargo coverage', '/coverage/motor-truck-cargo/'],
  ['cargo insurance', '/coverage/motor-truck-cargo/'],
  ['general liability', '/coverage/general-liability/'],
  ['non-trucking liability', '/coverage/non-trucking-liability/'],
  ['bobtail coverage', '/coverage/non-trucking-liability/'],
  ['bobtail insurance', '/coverage/non-trucking-liability/'],
  ['trailer interchange', '/coverage/trailer-interchange/'],
  ['workers\' compensation', '/coverage/workers-compensation/'],
  ['workers compensation', '/coverage/workers-compensation/'],
  ['workers\' comp', '/coverage/workers-compensation/'],
  ['workers comp', '/coverage/workers-compensation/'],
  ['umbrella coverage', '/coverage/umbrella-excess-liability/'],
  ['umbrella liability', '/coverage/umbrella-excess-liability/'],
  ['excess liability', '/coverage/umbrella-excess-liability/'],
  ['occupational accident', '/coverage/occupational-accident/'],

  // Industries
  ['owner-operators', '/industries/owner-operators/'],
  ['owner operators', '/industries/owner-operators/'],
  ['small fleets', '/industries/small-fleets/'],
  ['large fleets', '/industries/large-fleets/'],
  ['hot shot trucking', '/industries/hot-shot-trucking/'],
  ['hot shot', '/industries/hot-shot-trucking/'],
  ['LTL', '/industries/ltl-last-mile/'],
  ['last mile', '/industries/ltl-last-mile/'],
  ['intermodal', '/industries/intermodal/'],
  ['refrigerated', '/industries/refrigerated/'],
  ['flatbed', '/industries/flatbed/'],
  ['hazmat', '/industries/hazmat/'],
  ['car haulers', '/industries/car-haulers/'],

  // States (only match when followed by common context words to avoid over-linking)
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

  // Resources
  ['FMCSA requirements', '/resources/fmcsa-insurance-requirements/'],
  ['FMCSA', '/resources/fmcsa-insurance-requirements/'],
  ['MCS-90', '/resources/fmcsa-insurance-requirements/'],

  // Tools
  ['requirements checker', '/tools/fmcsa-checker/'],
  ['state requirements', '/tools/state-requirements/'],
];

// Convert plain text to text with auto-linked terms
export default function SmartText({ text, className, style }) {
  const pathname = usePathname();
  if (!text) return null;

  // Get current page path to avoid self-linking
  const currentPath = pathname?.replace(/\/trucking/, '') || '';
  const parts = autoLink(text, currentPath);

  return (
    <span className={className} style={style}>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          part
        ) : (
          <Link
            key={i}
            href={part.href}
            className="text-blue-dark font-semibold hover:text-brand underline decoration-blue-dark/30 underline-offset-2 hover:decoration-brand/50"
            style={{ transition: 'color 0.2s' }}
          >
            {part.text}
          </Link>
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
      // Skip if this link points to the current page
      if (currentPath && href === currentPath) continue;
      if (currentPath && currentPath.endsWith('/') && href === currentPath) continue;
      if (currentPath && href.replace(/\/$/, '') === currentPath.replace(/\/$/, '')) continue;

      const lowerRemaining = remaining.toLowerCase();
      const index = lowerRemaining.indexOf(term.toLowerCase());

      if (index !== -1 && index < earliestIndex) {
        earliestMatch = { href, length: term.length };
        earliestIndex = index;
        matchedTerm = term;
      }
    }

    if (earliestMatch) {
      // Add text before the match
      if (earliestIndex > 0) {
        parts.push(remaining.substring(0, earliestIndex));
      }
      // Add the link
      const matchedText = remaining.substring(earliestIndex, earliestIndex + earliestMatch.length);
      parts.push({ text: matchedText, href: earliestMatch.href });
      linked.add(matchedTerm);
      remaining = remaining.substring(earliestIndex + earliestMatch.length);
    } else {
      parts.push(remaining);
      remaining = '';
    }
  }

  return parts;
}
