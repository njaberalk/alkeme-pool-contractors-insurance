// Cross-linking maps for dense internal linking
// Coverage → which industries commonly need this coverage
export const coverageToIndustries = {
  'general-liability': ['pool-builders', 'hot-tub-installers', 'pool-service-maintenance', 'pool-remodeling'],
  'workers-compensation': ['pool-builders', 'pool-demolition', 'pool-remodeling', 'commercial-pools'],
  'commercial-auto': ['pool-service-maintenance', 'pool-equipment-suppliers', 'pool-builders'],
  'commercial-property': ['pool-equipment-suppliers', 'aquatic-facilities', 'spa-contractors'],
  'inland-marine': ['pool-builders', 'pool-remodeling', 'water-feature-designers', 'hot-tub-installers'],
  'professional-liability': ['water-feature-designers', 'commercial-pools', 'pool-builders'],
  'umbrella-excess': ['pool-builders', 'commercial-pools', 'aquatic-facilities', 'pool-demolition'],
  'completed-operations': ['pool-builders', 'hot-tub-installers', 'pool-remodeling', 'water-feature-designers'],
  'installation-floater': ['pool-builders', 'hot-tub-installers', 'spa-contractors', 'water-feature-designers'],
  'pollution-liability': ['pool-service-maintenance', 'pool-builders', 'pool-remodeling', 'commercial-pools'],
};

// Coverage → which resources are most relevant
export const coverageToResources = {
  'general-liability': ['pool-contractor-insurance-cost', 'pool-contractor-liability-guide', 'coi-guide'],
  'workers-compensation': ['pool-contractor-insurance-cost', 'pool-safety-compliance-guide'],
  'commercial-auto': ['pool-contractor-insurance-cost', 'pool-contractor-insurance-glossary'],
  'commercial-property': ['pool-contractor-insurance-cost', 'pool-contractor-insurance-glossary'],
  'inland-marine': ['pool-contractor-insurance-cost', 'pool-contractor-insurance-glossary'],
  'professional-liability': ['pool-contractor-liability-guide', 'pool-contractor-insurance-cost'],
  'umbrella-excess': ['pool-contractor-insurance-cost', 'pool-contractor-claims-guide'],
  'completed-operations': ['completed-operations-guide', 'pool-contractor-liability-guide', 'drowning-liability-guide'],
  'installation-floater': ['pool-contractor-insurance-cost', 'pool-contractor-insurance-glossary'],
  'pollution-liability': ['chemical-handling-pollution-guide', 'pool-safety-compliance-guide'],
};

// Industry → top states for that industry
export const industryToStates = {
  'pool-builders': ['california', 'florida', 'texas', 'arizona', 'nevada'],
  'hot-tub-installers': ['california', 'colorado', 'florida', 'texas', 'new-york'],
  'pool-service-maintenance': ['florida', 'california', 'texas', 'arizona', 'georgia'],
  'pool-remodeling': ['california', 'florida', 'texas', 'arizona', 'nevada'],
  'commercial-pools': ['florida', 'california', 'texas', 'new-york', 'georgia'],
  'water-feature-designers': ['california', 'florida', 'texas', 'arizona', 'colorado'],
  'pool-equipment-suppliers': ['florida', 'california', 'texas', 'arizona', 'georgia'],
  'spa-contractors': ['california', 'florida', 'colorado', 'texas', 'nevada'],
  'pool-demolition': ['california', 'florida', 'texas', 'arizona', 'georgia'],
  'aquatic-facilities': ['florida', 'california', 'texas', 'new-york', 'north-carolina'],
};

// Industry → relevant resources
export const industryToResources = {
  'pool-builders': ['completed-operations-guide', 'pool-contractor-liability-guide', 'pool-contractor-insurance-cost'],
  'hot-tub-installers': ['pool-contractor-insurance-cost', 'completed-operations-guide', 'coi-guide'],
  'pool-service-maintenance': ['chemical-handling-pollution-guide', 'pool-contractor-insurance-cost', 'pool-contractor-claims-guide'],
  'pool-remodeling': ['completed-operations-guide', 'pool-contractor-liability-guide', 'pool-contractor-insurance-cost'],
  'commercial-pools': ['pool-safety-compliance-guide', 'drowning-liability-guide', 'pool-contractor-insurance-cost'],
  'water-feature-designers': ['pool-contractor-liability-guide', 'pool-contractor-insurance-cost'],
  'pool-equipment-suppliers': ['pool-contractor-insurance-cost', 'pool-contractor-insurance-glossary'],
  'spa-contractors': ['pool-contractor-insurance-cost', 'completed-operations-guide'],
  'pool-demolition': ['pool-contractor-insurance-cost', 'pool-contractor-liability-guide'],
  'aquatic-facilities': ['drowning-liability-guide', 'pool-safety-compliance-guide', 'pool-contractor-insurance-cost'],
};
