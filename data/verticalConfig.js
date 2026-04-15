export const verticalConfig = {
  id: 'pool-contractors', label: 'Pool Contractor Insurance',
  heading: 'Get a Pool Contractor Insurance Quote',
  subtext: 'Answer a few quick questions and our pool contractor specialists will design coverage for your business.',
  businessTypes: [
    { value: 'pool-builder', label: 'Pool Builder' },
    { value: 'hot-tub', label: 'Hot Tub Installer' },
    { value: 'service', label: 'Service & Maintenance' },
    { value: 'remodel', label: 'Pool Remodeling' },
    { value: 'commercial', label: 'Commercial Pools' },
    { value: 'equipment', label: 'Equipment Supplier' },
  ],
  customQuestions: [
    { id: 'services', label: 'What services do you provide?', type: 'select', options: ['New Construction', 'Remodeling', 'Service & Maintenance', 'All'] },
    { id: 'projects_year', label: 'How many projects per year?', type: 'select', options: ['Under 10', '10-25', '26-50', '50+'] },
    { id: 'commercial', label: 'Do you work on commercial pools?', type: 'select', options: ['Yes', 'No'] },
  ],
  coverageOptions: ['General Liability', 'Workers\' Compensation', 'Commercial Auto', 'Commercial Property', 'Inland Marine', 'Professional Liability', 'Umbrella / Excess', 'Completed Operations', 'Installation Floater', 'Pollution Liability'],
};
