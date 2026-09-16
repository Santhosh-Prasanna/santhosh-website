export interface SkillItem {
  name: string;
  category:
    | 'business-data-analytics'
    | 'ai-automation'
    | 'digital-marketing'
    | 'poster-design'
    | 'live-streaming'
    | 'statistical-tools';
  type: string;
  description?: string;
  featured?: boolean;
}

export const SKILLS: SkillItem[] = [
  // ============================================================
  // PRIMARY: BUSINESS & DATA ANALYTICS
  // ============================================================
  { name: 'Business Analysis', category: 'business-data-analytics', type: 'Core BA', featured: true },
  { name: 'Data Analysis', category: 'business-data-analytics', type: 'Core Analytics', featured: true },
  { name: 'SQL', category: 'business-data-analytics', type: 'Database Querying' },
  { name: 'Excel', category: 'business-data-analytics', type: 'Spreadsheets & Modeling', featured: true },
  { name: 'Power BI', category: 'business-data-analytics', type: 'BI Dashboards', featured: true },
  { name: 'Python', category: 'business-data-analytics', type: 'Programming & Analytics' },
  { name: 'SPSS', category: 'business-data-analytics', type: 'Statistical Analysis' },
  { name: 'Statistical Analysis', category: 'business-data-analytics', type: 'Quantitative Methods' },
  { name: 'Dashboard Development', category: 'business-data-analytics', type: 'Executive Reporting' },
  { name: 'Data Cleaning', category: 'business-data-analytics', type: 'Data Engineering' },
  { name: 'Data Validation', category: 'business-data-analytics', type: 'Quality Assurance' },
  { name: 'Reporting', category: 'business-data-analytics', type: 'Stakeholder Briefings' },
  { name: 'Process Improvement', category: 'business-data-analytics', type: 'BPMN & Optimization' },

  // ============================================================
  // SECONDARY: AI & AUTOMATION (Supporting Tools)
  // ============================================================
  {
    name: 'ChatGPT',
    category: 'ai-automation',
    type: 'AI Tool',
    description: 'AI-assisted research • analysis • documentation • ideation',
    featured: true,
  },
  {
    name: 'Claude',
    category: 'ai-automation',
    type: 'AI Tool',
    description: 'AI-assisted research • writing • analysis • documentation',
    featured: true,
  },
  {
    name: 'Gemini',
    category: 'ai-automation',
    type: 'AI Tool',
    description: 'AI-assisted research • productivity • analysis • ideation',
    featured: true,
  },
  { name: 'Generative AI', category: 'ai-automation', type: 'Emerging Tech' },
  { name: 'Prompt Engineering', category: 'ai-automation', type: 'Methodology' },
  { name: 'AI-assisted Research', category: 'ai-automation', type: 'Workflow' },
  { name: 'AI-assisted Data Analysis', category: 'ai-automation', type: 'Workflow' },
  { name: 'AI Automation', category: 'ai-automation', type: 'Workflow' },
  { name: 'AI-assisted Documentation', category: 'ai-automation', type: 'Workflow' },

  // ============================================================
  // ADDITIONAL: DIGITAL MARKETING
  // ============================================================
  { name: 'Digital Marketing', category: 'digital-marketing', type: 'Marketing' },
  { name: 'Social Media Marketing', category: 'digital-marketing', type: 'Audience Growth' },
  { name: 'Content Planning', category: 'digital-marketing', type: 'Content Strategy' },
  { name: 'Audience Engagement', category: 'digital-marketing', type: 'Community' },
  { name: 'Marketing Research', category: 'digital-marketing', type: 'Market Analysis' },
  { name: 'Marketing Analytics', category: 'digital-marketing', type: 'Performance Tracking' },
  { name: 'Social Media Strategy', category: 'digital-marketing', type: 'Channel Strategy' },

  // ============================================================
  // CREATIVE: POSTER DESIGN & CREATIVE
  // ============================================================
  { name: 'Poster Design', category: 'poster-design', type: 'Graphic Design' },
  { name: 'Canva', category: 'poster-design', type: 'Design Tool' },
  { name: 'Creative Design', category: 'poster-design', type: 'Visual Identity' },
  { name: 'Social Media Creatives', category: 'poster-design', type: 'Social Formats' },
  { name: 'Promotional Design', category: 'poster-design', type: 'Commercial Print' },
  { name: 'Visual Content', category: 'poster-design', type: 'Content Creation' },
  { name: 'AI-assisted Design', category: 'poster-design', type: 'Generative Assets' },

  // ============================================================
  // EVENT: WEDDING LIVE STREAMING
  // ============================================================
  { name: 'Wedding Live Streaming', category: 'live-streaming', type: 'Live Event Production' },
  { name: 'Event Streaming', category: 'live-streaming', type: 'Remote Broadcast' },
  { name: 'Live Production', category: 'live-streaming', type: 'AV Hardware' },
  { name: 'Streaming Setup', category: 'live-streaming', type: 'RTMP & Encoders' },
  { name: 'Broadcast Support', category: 'live-streaming', type: 'Technical Support' },
  { name: 'Event Technology', category: 'live-streaming', type: 'Operations' },
  { name: 'Photography/Videography Collaboration', category: 'live-streaming', type: 'Team Coordination' },
];

// Explicit Excel & SPSS breakdown
export const STATISTICAL_TOOLS = {
  excel: {
    name: 'Excel',
    capabilities: [
      'Data Cleaning',
      'Data Analysis',
      'Reporting',
      'Pivot Tables',
      'Data Validation',
      'Visualization',
    ],
  },
  spss: {
    name: 'SPSS',
    capabilities: [
      'Statistical Analysis',
      'Data Preparation',
      'Descriptive Analysis',
      'Statistical Testing',
      'Research Analysis',
    ],
  },
  positioning:
    'Practical experience with Excel and SPSS for data analysis, statistical analysis and reporting.',
};

// Website Service Hierarchy Structure
export const SERVICE_HIERARCHY = [
  {
    tier: 'PRIMARY SERVICE',
    title: 'Business & Data Analytics',
    badge: 'Core Identity',
    services: [
      'Business Analysis',
      'Data Analysis',
      'SQL',
      'Excel',
      'Power BI',
      'Python',
      'SPSS',
      'Dashboard Development',
      'Reporting',
      'Data Cleaning',
      'Statistical Analysis',
      'Process Improvement',
    ],
  },
  {
    tier: 'SECONDARY SERVICE',
    title: 'AI & Automation',
    badge: 'Supporting Capability',
    services: [
      'ChatGPT',
      'Claude',
      'Gemini',
      'Generative AI',
      'AI-assisted Research',
      'AI-assisted Data Analysis',
      'AI Automation',
      'AI-assisted Documentation',
    ],
  },
  {
    tier: 'ADDITIONAL SERVICE',
    title: 'Digital Marketing',
    badge: 'Supporting Capability',
    services: [
      'Social Media Marketing',
      'Content Planning',
      'Audience Engagement',
      'Digital Marketing',
      'Marketing Analytics',
    ],
  },
  {
    tier: 'CREATIVE SERVICE',
    title: 'Poster Design & Creative',
    badge: 'Supporting Capability',
    services: [
      'Poster Design',
      'Canva',
      'AI-assisted Design',
      'Social Media Creatives',
      'Promotional Design',
      'Visual Content',
    ],
  },
  {
    tier: 'EVENT SERVICE',
    title: 'Wedding Live Streaming',
    badge: 'Supporting Capability',
    services: [
      'Wedding Live Streaming',
      'Event Streaming',
      'Live Broadcast Support',
      'Streaming Setup',
      'Event Technology',
      'Photography/Videography Collaboration',
    ],
  },
];

// Honest Experience Counts
export const HONEST_EXPERIENCE_COUNTS = [
  {
    count: '2+ Years',
    label: 'Professional Business & Data Analytics Experience',
    category: 'Full-Time Industry Track Record',
  },
  {
    count: '1',
    label: 'Direct Freelance Business/Data Analytics Client Engagement',
    category: 'Direct Client Engagement',
  },
  {
    count: '3–4',
    label: 'Approximate Professional Client Engagements',
    category: 'Enterprise Solutions / SSINTEK Work',
  },
  {
    count: '20+',
    label: 'Wedding / Event Live-Streaming Engagements',
    category: 'Event Service (100% Attendance Record)',
  },
  {
    count: '1',
    label: 'Healthcare Freelance Analytics Project',
    category: 'RA-CABG vs CABG Classification',
  },
  {
    count: '1',
    label: 'Influencer Digital Marketing Engagement',
    category: 'Social Media Growth & Content Support',
  },
  {
    count: 'Multiple',
    label: 'Poster Design & Creative Projects',
    category: 'Local Food, Retail & Sports Events',
  },
];

export const AI_SERVICES = [
  {
    title: 'AI-assisted Business Research',
    desc: 'Synthesizing market patterns, industry benchmarks, and qualitative data with human review.',
  },
  {
    title: 'AI-assisted Data Analysis',
    desc: 'Accelerating pattern identification and hypothesis testing with analytical validation.',
  },
  {
    title: 'AI-powered Documentation',
    desc: 'Drafting structured business requirements, technical specs, and process guides efficiently.',
  },
  {
    title: 'AI-assisted Reporting',
    desc: 'Structuring executive summaries and stakeholder briefing memos with speed and clarity.',
  },
  {
    title: 'AI Content Workflows',
    desc: 'Generating clean briefing decks, process documentation, and communication drafts.',
  },
  {
    title: 'AI Workflow Automation',
    desc: 'Integrating practical AI triggers into daily operations to eliminate repetitive manual steps.',
  },
  {
    title: 'Prompt Engineering',
    desc: 'Crafting structured, deterministic prompts to produce repeatable, high-quality business outputs.',
  },
  {
    title: 'AI Productivity Workflows',
    desc: 'Equipping operational teams with AI tool best practices to safely amplify individual output.',
  },
];
