export interface CaseStudyItem {
  id: string;
  project: string;
  industry: string;
  projectType:
    | 'Freelance Project'
    | 'Professional Project'
    | 'Personal / Learning Project'
    | 'Creative Client Work'
    | 'Client / Freelance Digital Marketing Work'
    | 'Event / Freelance Service';
  categoryFilter:
    | 'Business Analysis'
    | 'Data Analytics'
    | 'Healthcare Analytics'
    | 'AI & Automation'
    | 'Digital Marketing'
    | 'Poster Design'
    | 'Creative'
    | 'Live Streaming';
  typeFilter: 'Professional Projects' | 'Freelance Projects' | 'Personal Projects';
  clientConfidentiality: string;
  challenge: string;
  responsibilities: string[];
  tools: string[];
  approach: string;
  deliverables: string[];
  outcome: string;
  lessonsLearned: string;
  metricsHighlight?: string;
  metricLabel?: string;
  disclaimer?: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  // 1. FREELANCE HEALTHCARE ANALYTICS
  {
    id: 'healthcare-classification',
    project: 'Real-Time RA-CABG vs CABG Surgery Classification',
    industry: 'Healthcare & Clinical Research Analytics',
    projectType: 'Freelance Project',
    categoryFilter: 'Healthcare Analytics',
    typeFilter: 'Freelance Projects',
    clientConfidentiality: 'Confidential Freelance Client [DETAILS CONFIDENTIAL]',
    challenge:
      'Analyzing and classifying high-dimensional cardiac surgical dataset records (Radial Artery vs Conventional CABG procedures) to evaluate statistical patterns and classification feasibility across patient parameters.',
    responsibilities: [
      'Data cleaning, record reconciliation, and missing value imputation across clinical observation logs',
      'Exploratory Data Analysis (EDA) and univariate/multivariate distribution assessments',
      'Statistical testing using SPSS to evaluate parameter significance between surgical cohorts',
      'Developing classification models in Python and evaluating precision, recall, and ROC-AUC',
      'Structuring technical analytical reports and visualization charts for stakeholder review',
    ],
    tools: [
      'Python',
      'Excel',
      'SPSS',
      'Statistical Analysis',
      'Data Analysis',
      'Machine Learning',
      'Data Visualization',
    ],
    approach:
      'Cleaned and pre-processed the surgery dataset using Excel and Python, conducted rigorous descriptive analysis and statistical hypothesis testing in SPSS, and built classification workflows to evaluate cohort separation metrics.',
    deliverables: [
      'Cleaned & normalized surgical research dataset',
      'SPSS statistical test outputs & hypothesis validation reports',
      'Python classification scripts & confusion matrices',
      'Comprehensive data visualization briefing deck',
    ],
    outcome:
      'Successfully classified RA-CABG vs CABG patient records with evaluated precision metrics, delivering structured statistical findings for academic and technical research evaluation.',
    lessonsLearned:
      'Handling clinical data requires meticulous attention to data preparation, outlier scrutiny, and transparent reporting of statistical limitations.',
    metricsHighlight: 'RA-CABG vs CABG',
    metricLabel: 'Real-Time Classification & Statistical Evaluation',
    disclaimer:
      'Healthcare analytics projects presented on this website are for analytical and technical demonstration purposes and do not constitute medical advice or clinical recommendations.',
  },

  // 2. PROFESSIONAL PROJECT: SAAS INVOICE AUTOMATION
  {
    id: 'saas-invoice-automation',
    project: 'Invoice Automation SAAS Application',
    industry: 'Enterprise B2B SaaS & Financial Operations',
    projectType: 'Professional Project',
    categoryFilter: 'Business Analysis',
    typeFilter: 'Professional Projects',
    clientConfidentiality: 'SSINTEK Client Engagement [DETAILS CONFIDENTIAL]',
    challenge:
      'Enterprise clients faced manual invoicing bottlenecks, delayed invoice dispute resolution, and reconciliation discrepancies across multi-tier billing schedules.',
    responsibilities: [
      'Authored comprehensive BRD, FRD, epics, and user stories with clear acceptance criteria',
      'Maintained 100% Requirements Traceability Matrix (RTM) throughout the Agile SDLC',
      'Designed financial validation rules and automated reconciliation logic to prevent billing leaks',
      'Led Jira backlog grooming, sprint planning ceremonies, and cross-functional engineering handoffs',
      'Coordinated User Acceptance Testing (UAT), defect triage sessions, and sign-off governance',
    ],
    tools: [
      'Business Analysis',
      'Data Analysis',
      'Jira Backlog Grooming',
      'UAT Coordination',
      'SDLC',
      'Reconciliation Logic',
      'Excel',
    ],
    approach:
      'Conducted stakeholder interviews to map end-to-end billing lifecycles, mapped BPMN 2.0 invoice workflows, specified automated reconciliation rules, and managed the iterative release through Jira sprints.',
    deliverables: [
      'Business & Functional Requirements Documents (BRD / FRD)',
      'Jira User Stories with Gherkin Acceptance Criteria',
      '100% RTM Matrix & UAT Test Suites',
      'Automated Billing Validation Logic Specifications',
    ],
    outcome:
      'Delivered end-to-end SDLC governance resulting in 35% improvement in billing data accuracy and on-time release reliability.',
    lessonsLearned:
      'Thorough reconciliation logic and stakeholder alignment during early requirement phases prevent costly edge-case defects during UAT.',
    metricsHighlight: '100% RTM Traceability',
    metricLabel: 'Requirements to UAT & Release Governance',
  },

  // 3. PROFESSIONAL PROJECT: FOREX BANKING PAYMENT GATEWAY
  {
    id: 'forex-payment-gateway',
    project: 'Forex Banking Payment Gateway',
    industry: 'FinTech & Cross-Border Banking',
    projectType: 'Professional Project',
    categoryFilter: 'Business Analysis',
    typeFilter: 'Professional Projects',
    clientConfidentiality: 'SSINTEK Client Engagement [DETAILS CONFIDENTIAL]',
    challenge:
      'Cross-border financial transactions suffered from settlement friction, complex multi-currency conversion delays, and stringent compliance/AML data requirements.',
    responsibilities: [
      'Elicited cross-currency gateway requirements and documented end-to-end settlement specifications',
      'Mapped banking partner API integration data flows, KYC/AML checkpoints, and webhook protocols',
      'Designed automated transaction reconciliation algorithms to resolve currency conversion variances',
      'Executed exhaustive UAT test cases, currency edge-case simulations, and defect tracking',
      'Collaborated with compliance and treasury teams to ensure adherence to banking guidelines',
    ],
    tools: [
      'Forex Payment Gateways',
      'API Integration Specifications',
      'Data Reconciliation',
      'Compliance & AML Flows',
      'UAT Testing',
      'Jira',
    ],
    approach:
      'Mapped foreign exchange multi-currency transaction paths from initiation to banking clearing, defined automated reconciliation checkpoints, and governed end-to-end test execution.',
    deliverables: [
      'Forex Payment Gateway BRD/FRD & API Data Schemas',
      'Automated Multi-Currency Reconciliation Workflow',
      'Regulatory KYC/AML Data Verification Mapping',
      'UAT Test Execution & Defect Resolution Log',
    ],
    outcome:
      'Engineered a reliable payment gateway integration specification that eliminated settlement discrepancies and enabled seamless multi-currency transaction clearing.',
    lessonsLearned:
      'FinTech integrations demand absolute precision in currency rounding, timezone handling, and failover exception protocols.',
    metricsHighlight: 'Cross-Border Multi-Currency',
    metricLabel: 'Gateway Settlement & Reconciliation Logic',
  },

  // 4. PERSONAL / LEARNING PROJECT: ADVENTURE WORKS
  {
    id: 'adventure-works-bi',
    project: 'Adventure Works Financial Dashboard',
    industry: 'Executive Business Intelligence & Profitability',
    projectType: 'Personal / Learning Project',
    categoryFilter: 'Data Analytics',
    typeFilter: 'Personal Projects',
    clientConfidentiality: 'Public Benchmark Dataset ($24.9M / 25,000+ Records)',
    challenge:
      'Synthesizing a multi-million dollar enterprise sales and operational dataset across disparate regional tables to diagnose margin leaks and executive performance blind spots.',
    responsibilities: [
      'Cleaned, transformed, and modeled 25,000+ transactional records using Power Query & SQL',
      'Engineered complex DAX measures for Year-Over-Year growth, margin ratios, and territory rankings',
      'Architected executive KPI dashboards with drill-through views for product and regional analysis',
      'Conducted profitability scenario modeling to identify cost reduction opportunities',
    ],
    tools: [
      'Power BI',
      'Advanced Excel',
      'DAX Modeling',
      'Financial Analytics',
      'SQL',
      'KPI Cockpits',
    ],
    approach:
      'Designed a Star Schema data model, established relationships between sales, products, and customer dimensions, and built intuitive executive cockpits focused on commercial profitability.',
    deliverables: [
      'Production-grade Power BI Financial Report (.pbix)',
      'Star Schema Data Model & DAX Measure Library',
      'Executive Summary Presentation with Profitability Recommendations',
    ],
    outcome:
      'Demonstrated data modeling mastery by uncovering specific margin leaks and modeling revenue optimization opportunities across a $24.9M dataset.',
    lessonsLearned:
      'Clean data architecture and optimized DAX modeling are critical to achieving sub-second dashboard refresh rates on large datasets.',
    metricsHighlight: '$24.9M / 25K+ Records',
    metricLabel: 'Dataset Modeled & Profitability Analyzed',
  },

  // 5. DIGITAL MARKETING WORK: INFLUENCER MARKETING
  {
    id: 'influencer-social-media',
    project: 'Social Media Marketing for Influencer',
    industry: 'Digital Media & Creator Economy',
    projectType: 'Client / Freelance Digital Marketing Work',
    categoryFilter: 'Digital Marketing',
    typeFilter: 'Freelance Projects',
    clientConfidentiality: 'Creator Client Engagement [DETAILS CONFIDENTIAL]',
    challenge:
      'The influencer needed structured content planning, consistent post scheduling, and audience engagement strategies to overcome plateauing channel visibility.',
    responsibilities: [
      'Developed structured weekly content calendars and theme roadmaps across social platforms',
      'Leveraged AI-assisted content workflows for ideation, caption framing, and trend research',
      'Analyzed engagement metrics (reach, saves, shares, comments) to identify high-performing formats',
      'Supported audience engagement protocols and community interaction workflows',
      'Iterated content pacing based on real-time audience performance observation',
    ],
    tools: [
      'Social Media Marketing',
      'Content Support',
      'Audience Engagement',
      'Content Planning',
      'AI-assisted Content Workflows',
      'Performance Observation',
      'Canva',
    ],
    approach:
      'Analyzed past engagement patterns, introduced a disciplined multi-format weekly posting rhythm, and used practical AI prompts to rapidly generate contextual content drafts for influencer review.',
    deliverables: [
      'Structured 30-day content calendar & publishing schedule',
      'High-engagement caption & visual concept templates',
      'Bi-weekly reach & follower engagement observation memos',
    ],
    outcome:
      'Contributed to an approximately 20% increase in social media visibility and follower engagement during the engagement.',
    lessonsLearned:
      'Consistency in release schedules combined with data-backed topic selection drives compounding audience reach more reliably than random viral attempts.',
    metricsHighlight: '~20% Visibility Gain',
    metricLabel: 'Reported Increase in Follower Engagement',
    disclaimer:
      'Reported project outcome; measurement methodology available on request where appropriate.',
  },

  // 6. CREATIVE CLIENT WORK: POSTER DESIGN
  {
    id: 'poster-design-creative',
    project: 'Poster Design & Creative Work for Local Businesses',
    industry: 'Local Retail, Food & Sports Events',
    projectType: 'Creative Client Work',
    categoryFilter: 'Poster Design',
    typeFilter: 'Freelance Projects',
    clientConfidentiality: 'Multiple Local Business Clients [DETAILS CONFIDENTIAL]',
    challenge:
      'Local retail businesses and event organizers needed eye-catching, professionally formatted promotional posters under tight delivery schedules and modest print/social budgets.',
    responsibilities: [
      'Created promotional and event-oriented poster designs for local businesses, restaurants, garments, interior design, and local sports tournaments',
      'Applied Canva and AI-assisted creative workflows to generate vibrant layouts and crisp typography',
      'Prepared print-ready and mobile-optimized aspect ratios for offline banners and WhatsApp/Instagram marketing',
      'Gathered business requirements, brand colors, and promotional offers from local business owners',
    ],
    tools: [
      'Canva',
      'AI Tools',
      'Generative AI',
      'Image Editing Tools',
      'Creative Design Workflows',
    ],
    approach:
      'Understood each business owner’s promotional goal, crafted focused visual hierarchies that highlighted discounts, venue details, or match dates, and delivered both print and digital assets.',
    deliverables: [
      '1. Chicken Stall Promotional Poster (Local food business promotion)',
      '2. Restaurant Creative Design (Local restaurant promotional materials)',
      '3. Interior Design Promotional Creative (Interior design showcase collateral)',
      '4. Garments Promotional Creative (Garments & fashion-related promotional creative)',
      '5. Local Cricket Tournament Poster (Sports event tournament announcement poster)',
    ],
    outcome:
      'Successfully produced and handed over promotional posters across diverse local sectors, helping clients promote their events and offers with professional visual clarity.',
    lessonsLearned:
      'Local business design succeeds on visual clarity, bold pricing/offer readability, and immediate emotional relevance to the community.',
    metricsHighlight: '5+ Diverse Sectors',
    metricLabel: 'Local Businesses, Food, Retail & Sports Events',
  },

  // 7. EVENT SERVICE: WEDDING LIVE STREAMING
  {
    id: 'wedding-live-streaming',
    project: 'Wedding Live Streaming Across Tamil Nadu',
    industry: 'Event Technology & Live Production',
    projectType: 'Event / Freelance Service',
    categoryFilter: 'Live Streaming',
    typeFilter: 'Freelance Projects',
    clientConfidentiality: '20+ Family & Wedding Clients Across Tamil Nadu [DETAILS CONFIDENTIAL]',
    challenge:
      'Ensuring reliable, low-latency live broadcast feeds for wedding ceremonies across varying venue network environments so remote family and global guests could attend in real time.',
    responsibilities: [
      'Configured multi-camera capture cards, RTMP encoders, and bonded cellular internet streaming setups',
      'Collaborated with photography and videography teams to synchronize live production feeds',
      'Monitored live bitrate, audio level balancing, and stream health throughout multi-hour wedding rituals',
      'Provided secure, branded private viewing links and remote audience technical support',
      'Fulfilled 100% on-site attendance across 20+ scheduled wedding and event engagements',
    ],
    tools: [
      'Wedding Live Streaming',
      'Event Live Streaming',
      'Live Broadcast Support',
      'Streaming Setup & Encoders',
      'Event Technology',
      'Camera / Video Coordination',
      'Remote Audience Access',
    ],
    approach:
      'Arrived well ahead of schedule, performed rigorous venue network and audio line checks, coordinated seamlessly with on-site photography/videography teams, and broadcasted stable high-definition feeds.',
    deliverables: [
      'End-to-end live broadcast deployment for 20+ wedding ceremonies',
      'Low-latency private broadcast links for global remote relatives',
      'Master digital video recording handover post-event',
    ],
    outcome:
      'Successfully supported live-streaming requirements for 20+ wedding and event engagements across Tamil Nadu, with a 100% attendance / fulfilment record based on my engagement history.',
    lessonsLearned:
      'Live event streaming demands redundant connectivity (multi-SIM bonding) and close collaborative rapport with the main photography and videography crews.',
    metricsHighlight: '20+ Engagements',
    metricLabel: '100% Attendance / Fulfilment Record across Tamil Nadu',
  },
];
