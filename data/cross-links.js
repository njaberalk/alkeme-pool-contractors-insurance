// Cross-linking maps for dense internal linking
// Coverage → which industries commonly need this coverage
export const coverageToIndustries = {
  'auto-liability': ['owner-operators', 'small-fleets', 'large-fleets', 'hot-shot-trucking'],
  'physical-damage': ['owner-operators', 'small-fleets', 'large-fleets', 'flatbed'],
  'motor-truck-cargo': ['owner-operators', 'refrigerated', 'flatbed', 'hazmat'],
  'general-liability': ['large-fleets', 'ltl-last-mile', 'intermodal'],
  'non-trucking-liability': ['owner-operators', 'hot-shot-trucking'],
  'trailer-interchange': ['intermodal', 'ltl-last-mile', 'large-fleets'],
  'workers-compensation': ['small-fleets', 'large-fleets', 'ltl-last-mile'],
  'umbrella-excess-liability': ['large-fleets', 'hazmat', 'car-haulers'],
  'occupational-accident': ['owner-operators', 'hot-shot-trucking', 'small-fleets'],
};

// Coverage → which resources are most relevant
export const coverageToResources = {
  'auto-liability': ['fmcsa-insurance-requirements', 'trucking-insurance-cost', 'new-authority-insurance'],
  'physical-damage': ['trucking-insurance-cost', 'lower-trucking-insurance-premiums'],
  'motor-truck-cargo': ['fmcsa-insurance-requirements', 'trucking-insurance-cost'],
  'general-liability': ['commercial-auto-vs-trucking-insurance', 'trucking-insurance-glossary'],
  'non-trucking-liability': ['primary-vs-non-trucking-liability', 'trucking-insurance-glossary'],
  'trailer-interchange': ['fmcsa-insurance-requirements', 'trucking-insurance-glossary'],
  'workers-compensation': ['occupational-accident-vs-workers-comp', 'trucking-insurance-cost'],
  'umbrella-excess-liability': ['trucking-insurance-cost', 'trucking-insurance-claims-guide'],
  'occupational-accident': ['occupational-accident-vs-workers-comp', 'new-authority-insurance'],
};

// Industry → top states for that industry
export const industryToStates = {
  'owner-operators': ['texas', 'california', 'florida', 'georgia', 'ohio'],
  'small-fleets': ['texas', 'illinois', 'california', 'pennsylvania', 'ohio'],
  'large-fleets': ['texas', 'california', 'illinois', 'indiana', 'tennessee'],
  'hot-shot-trucking': ['texas', 'oklahoma', 'louisiana', 'north-dakota', 'colorado'],
  'ltl-last-mile': ['california', 'texas', 'new-york', 'illinois', 'florida'],
  'intermodal': ['illinois', 'california', 'new-jersey', 'georgia', 'texas'],
  'refrigerated': ['california', 'florida', 'texas', 'washington', 'arizona'],
  'flatbed': ['texas', 'pennsylvania', 'ohio', 'indiana', 'north-carolina'],
  'hazmat': ['texas', 'louisiana', 'new-jersey', 'ohio', 'california'],
  'car-haulers': ['michigan', 'texas', 'georgia', 'california', 'indiana'],
};

// Industry → relevant resources
export const industryToResources = {
  'owner-operators': ['trucking-insurance-cost', 'new-authority-insurance', 'occupational-accident-vs-workers-comp'],
  'small-fleets': ['trucking-insurance-cost', 'lower-trucking-insurance-premiums', 'fmcsa-insurance-requirements'],
  'large-fleets': ['lower-trucking-insurance-premiums', 'trucking-insurance-claims-guide', 'fmcsa-insurance-requirements'],
  'hot-shot-trucking': ['new-authority-insurance', 'trucking-insurance-cost', 'fmcsa-insurance-requirements'],
  'ltl-last-mile': ['trucking-insurance-cost', 'commercial-auto-vs-trucking-insurance'],
  'intermodal': ['fmcsa-insurance-requirements', 'trucking-insurance-glossary'],
  'refrigerated': ['trucking-insurance-cost', 'trucking-insurance-claims-guide'],
  'flatbed': ['trucking-insurance-cost', 'lower-trucking-insurance-premiums'],
  'hazmat': ['fmcsa-insurance-requirements', 'trucking-insurance-cost'],
  'car-haulers': ['trucking-insurance-cost', 'lower-trucking-insurance-premiums'],
};
