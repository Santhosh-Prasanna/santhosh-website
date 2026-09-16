export interface ResumeMetadata {
  version: string;
  lastUpdated: string;
  pdfFile: string;
  pdfAvailable: boolean;
  statusNotice: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyStatus: 'Previous Employer' | 'Current Practice' | 'Internship';
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface FreelanceWorkItem {
  area: string;
  category: 'Direct Analytics Work' | 'Independent Creative & Digital Services';
  description: string;
  scope: string;
  tools: string[];
  keyHighlights: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  category: string;
  note: string;
}

export interface SelectedProjectItem {
  id: string;
  title: string;
  slug: string;
  industry: string;
  category: string;
  technologies: string[];
  description: string;
  portfolioUrl: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  credentialType:
    | 'Certification'
    | 'Course'
    | 'Internship'
    | 'Job Simulation'
    | 'Learning Experience'
    | 'Skill Assessment';
  yearOrPeriod?: string;
  credentialNote?: string;
}

export interface PublicationItem {
  title: string;
  year?: string;
  topic: string;
  summary: string;
  readUrl?: string;
}

export interface ResumeData {
  metadata: ResumeMetadata;
  identity: {
    fullName: string;
    brandName: string;
    primaryTitle: string;
    experienceYears: string;
    currentPositioning: string;
    availability: string;
    location: string;
    email: string;
    linkedIn: string;
    linkedInDisplay: string;
  };
  summary: string;
  keyMetrics: MetricItem[];
  professionalExperience: ExperienceItem[];
  freelanceWork: FreelanceWorkItem[];
  coreSkills: string[];
  aiSkills: string[];
  additionalCapabilities: string[];
  selectedProjects: SelectedProjectItem[];
  certificationsAndLearning: CertificationItem[];
  education: {
    degree: string;
    field: string;
    institution: string;
    period: string;
    location: string;
    details: string[];
  };
  selectedPublications: PublicationItem[];
}

export const RESUME_DATA: ResumeData = {
  metadata: {
    version: '2026.1',
    lastUpdated: 'September 2026',
    pdfFile: '/resume/Santhosh-Prasanna-Resume.pdf',
    pdfAvailable: true,
    statusNotice:
      'Official verified resume is ready for direct download. You can also view it in your browser or print/save anytime.',
  },

  identity: {
    fullName: 'Santhosh Prasanna',
    brandName: 'Sandy',
    primaryTitle: 'Freelance Business & Data Analyst',
    experienceYears: '2+ Years in Business & Data Analytics',
    currentPositioning: 'Building an Independent Freelance Practice',
    availability: 'Available for New Freelance Projects',
    location: 'Tamil Nadu, India (Available Globally for Remote & Contract Work)',
    email: 'santhoshfreelancer25@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/santhoshprasannaanalyst/',
    linkedInDisplay: 'linkedin.com/in/santhoshprasannaanalyst',
  },

  summary:
    'Business & Data Analyst with 2+ years of professional experience across business analysis, data analytics, SQL, Power BI, Excel and Python. Experienced in requirements gathering, data validation, reporting, dashboard development, workflow analysis and process improvement. Also apply practical AI tools such as ChatGPT, Claude and Gemini to support research, analysis, documentation and productivity. Currently building an independent freelance practice with additional experience across healthcare analytics, digital marketing, creative design and live event streaming.',

  keyMetrics: [
    {
      value: '2+ Years',
      label: 'Professional Experience',
      category: 'Analytics Career',
      note: 'Dedicated industry experience in Business & Data Analytics',
    },
    {
      value: '1 Direct',
      label: 'Freelance Analytics Client',
      category: 'Freelance Analytics',
      note: 'Direct client engagement delivering analytics & modeling',
    },
    {
      value: '3–4',
      label: 'Professional Engagements',
      category: 'Industry Engagements',
      note: 'Professional engagements across SaaS & financial workflows',
    },
    {
      value: '1 Project',
      label: 'Healthcare Research Project',
      category: 'Specialized Domain',
      note: 'RA-CABG vs CABG surgery classification & SPSS analysis',
    },
    {
      value: '1 Client',
      label: 'Digital Marketing Client',
      category: 'Digital Growth',
      note: 'Social media growth strategy for active content creator',
    },
    {
      value: 'Multiple',
      label: 'Creative & Poster Projects',
      category: 'Design & Visuals',
      note: 'Brand posters and commercial visual assets for local businesses',
    },
    {
      value: '20+',
      label: 'Live-Streaming Engagements',
      category: 'Live Broadcast',
      note: 'Wedding and event streaming operations executed across Tamil Nadu',
    },
  ],

  professionalExperience: [
    {
      role: 'Business & Data Analyst',
      company: 'SSINTEK',
      companyStatus: 'Previous Employer',
      period: 'September 2023 – April 2025',
      location: 'Trichy, Tamil Nadu',
      summary:
        'Led business analysis, functional specifications, and data analytics across SaaS Invoice Automation applications and Forex Banking Payment Gateway integrations.',
      highlights: [
        'Elicited business requirements (BRD/FRD, user stories, acceptance criteria) for SaaS Invoice Automation and Forex Banking Payment Gateway modules with 100% RTM traceability.',
        'Engineered multi-currency reconciliation logic and data validation rules for cross-border banking payment gateway settlements.',
        'Decreased executive reporting turnaround by 40% through automated Power BI and Excel interactive dashboards.',
        'Improved software delivery quality by 35% via structured UAT test design, defect logging, and rigorous data cleansing.',
        'Facilitated Agile ceremonies, managed Jira product backlogs, and coordinated sprint deliverables with cross-functional engineering teams.',
        'Executed Root Cause Analysis (RCA) and workflow optimization, applying AI-assisted documentation tools to eliminate operational bottlenecks.',
      ],
      technologies: [
        'Business Analysis',
        'Data Analytics',
        'Power BI',
        'Excel Dashboards',
        'SQL',
        'Jira',
        'Agile / Scrum',
        'BRD / FRD',
        'UAT Testing',
        'RCA',
      ],
    },
    {
      role: 'Data Analytics and Business Analytics Intern',
      company: 'The Sparks Foundation',
      companyStatus: 'Internship',
      period: 'March 2022 – June 2022',
      location: 'Remote',
      summary:
        'Conducted exploratory data analysis (EDA), data cleansing, and automated KPI dashboard reporting to support operational decision-making.',
      highlights: [
        'Executed Exploratory Data Analysis (EDA) and data mining across complex business datasets using SQL, Excel, and Power BI.',
        'Designed and published automated stakeholder KPI dashboards for operational performance tracking.',
        'Conducted rigorous data cleaning, missing value imputation, and validation to ensure reporting integrity.',
        'Translated raw quantitative patterns into actionable executive summaries and presentation briefing decks.',
      ],
      technologies: ['SQL', 'Exploratory Data Analysis', 'Power BI', 'Excel', 'Data Cleansing', 'KPI Dashboards'],
    },
  ],

  freelanceWork: [
    {
      area: 'Freelance Business & Data Analysis',
      category: 'Direct Analytics Work',
      description:
        'Direct freelance consulting providing business requirements structuring, workflow modeling, data validation, and automated executive reporting for independent clients and growing businesses.',
      scope: 'Independent Freelance Engagements',
      tools: ['Business Analysis', 'Data Analysis', 'SQL', 'Power BI', 'Excel', 'Process Mapping'],
      keyHighlights: [
        'Requirement elicitation and functional workflow specification for business automation.',
        'Database query optimization, data normalization, and audit reconciliation.',
        'Executive KPI reporting dashboards with actionable drill-down views.',
      ],
    },
    {
      area: 'Healthcare Analytics & Statistical Modeling',
      category: 'Direct Analytics Work',
      description:
        'Specialized freelance analytics project analyzing high-dimensional clinical surgery datasets (RA-CABG vs Conventional CABG procedures) for statistical parameter significance and predictive cohort classification.',
      scope: 'Freelance Healthcare Research Project',
      tools: ['Python', 'SPSS', 'Statistical Analysis', 'Excel', 'Machine Learning', 'Data Visualization'],
      keyHighlights: [
        'Reconciled clinical observation logs and conducted missing value imputation across cardiac surgical records.',
        'Conducted hypothesis testing and multivariate statistical analysis using SPSS.',
        'Trained and evaluated classification models in Python with precision, recall, and ROC-AUC benchmarking.',
        'Formatted structured analytical summaries and clinical visualization briefing decks.',
      ],
    },
    {
      area: 'AI-assisted Research, Analysis & Documentation',
      category: 'Direct Analytics Work',
      description:
        'Applying modern generative AI platforms (ChatGPT, Claude, Gemini) to accelerate exploratory data research, prompt-driven data transformation, documentation drafting, and workflow automation.',
      scope: 'Analytical & Productivity Practice',
      tools: ['ChatGPT', 'Claude', 'Gemini', 'Generative AI', 'Prompt Engineering', 'AI Automation'],
      keyHighlights: [
        'Structured prompt engineering protocols for rapid data synthesis and market intelligence.',
        'Accelerated requirements documentation, BRD/FRD drafting, and test case ideation.',
        'Automated repetitive data restructuring and workflow reporting tasks.',
      ],
    },
    {
      area: 'Digital Marketing & Social Media Strategy',
      category: 'Independent Creative & Digital Services',
      description:
        'Provided strategic digital marketing and audience growth consulting for an active content creator/influencer, optimizing content calendars, engagement metrics, and social reach.',
      scope: 'Independent Marketing Engagement',
      tools: ['Digital Marketing', 'Social Media Marketing', 'Audience Analytics', 'Content Planning'],
      keyHighlights: [
        'Analyzed post reach, engagement rates, and viewer retention trends to refine publishing schedules.',
        'Curated thematic content strategies that expanded organic audience interaction.',
      ],
    },
    {
      area: 'Poster Design & Creative Branding',
      category: 'Independent Creative & Digital Services',
      description:
        'Delivered commercial poster design, promotional marketing creatives, and digital brand collateral for local businesses, community organizations, and promotional campaigns.',
      scope: 'Multiple Client Projects',
      tools: ['Canva', 'Creative Design', 'Visual Branding', 'Promotional Print', 'AI-assisted Design'],
      keyHighlights: [
        'Crafted print-ready commercial flyers, event banners, and high-impact social media creatives.',
        'Integrated AI-assisted creative workflows to generate custom visual concepts rapidly.',
      ],
    },
    {
      area: 'Wedding & Event Live Streaming Broadcast Support',
      category: 'Independent Creative & Digital Services',
      description:
        'Managed on-site live streaming broadcasts, RTMP encoders, and AV technology setups for weddings and large-scale cultural events across Tamil Nadu in coordination with photography and videography crews.',
      scope: '20+ Live Broadcast Engagements',
      tools: ['Live Production', 'RTMP Streaming', 'Streaming Hardware', 'AV Collaboration', 'Event Tech'],
      keyHighlights: [
        'Successfully engineered stable, low-latency live streaming broadcasts across 20+ wedding events.',
        'Collaborated closely with professional camera operators, audio technicians, and event coordinators.',
      ],
    },
  ],

  coreSkills: [
    'Business Analysis',
    'Data Analysis',
    'SQL',
    'Power BI',
    'Excel',
    'Python',
    'SPSS',
    'Statistical Analysis',
    'Dashboard Development',
    'Data Visualization',
    'Data Cleaning',
    'Data Validation',
    'Reporting & Automation',
    'Requirements Gathering',
    'Stakeholder Management',
    'Workflow Analysis',
    'Process Improvement',
  ],

  aiSkills: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Generative AI',
    'Prompt Engineering',
    'AI-assisted Research',
    'AI-assisted Data Analysis',
    'AI-assisted Documentation',
    'AI-assisted Content Creation',
    'AI Workflow Automation',
  ],

  additionalCapabilities: [
    'Digital Marketing',
    'Poster Design & Creative',
    'Canva',
    'AI-assisted Creative Workflows',
    'Wedding Live Streaming',
    'Event Streaming',
    'Photography & Videography Collaboration',
  ],

  selectedProjects: [
    {
      id: 'proj-1',
      title: 'Invoice Management Application',
      slug: 'invoice-automation',
      industry: 'Enterprise SaaS / Operations',
      category: 'Business Analysis',
      technologies: ['Business Analysis', 'BRD/FRD', 'Power BI', 'Excel', 'UAT Testing'],
      description:
        'SaaS invoice workflow management system with automated reconciliation, approval workflows, and executive analytics.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-2',
      title: 'RA-CABG vs CABG Healthcare Analytics',
      slug: 'ra-cabg-vs-cabg',
      industry: 'Healthcare & Clinical Research',
      category: 'Healthcare Analytics',
      technologies: ['Python', 'SPSS', 'Statistical Modeling', 'Excel', 'Clinical Data'],
      description:
        'Real-time cardiac surgical record classification and statistical cohort analysis between Radial Artery and Conventional CABG cohorts.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-3',
      title: 'Forex Banking Application',
      slug: 'forex-banking',
      industry: 'FinTech / Banking Gateways',
      category: 'Business Analysis',
      technologies: ['Business Analysis', 'Forex Gateways', 'SQL', 'Data Validation', 'Compliance'],
      description:
        'Cross-border Forex payment processing platform featuring automated multi-currency settlement and reconciliation rules.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-4',
      title: 'Banking Application',
      slug: 'banking-application',
      industry: 'Banking & Financial Services',
      category: 'Business Analysis',
      technologies: ['Requirements Gathering', 'Process Mapping', 'SQL', 'Data Quality'],
      description:
        'End-to-end functional requirements elicitation, workflow mapping, and account ledger data validation for banking operations.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-5',
      title: 'Customer Churn Prediction',
      slug: 'customer-churn-prediction',
      industry: 'Telecom / Subscription Commerce',
      category: 'Data Analytics',
      technologies: ['Python', 'Machine Learning', 'Data Cleansing', 'Predictive Modeling'],
      description:
        'Predictive customer attrition analysis isolating high-risk churn indicators to power proactive retention campaigns.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-6',
      title: 'Medical Insurance Cost Prediction',
      slug: 'medical-insurance-cost-prediction',
      industry: 'Insurance / Health Actuarial',
      category: 'Data Analytics',
      technologies: ['Python', 'Regression Analysis', 'EDA', 'Statistical Testing'],
      description:
        'Multi-variable regression modeling to evaluate individual demographic, lifestyle, and clinical factors driving healthcare premium costs.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-7',
      title: 'RFM Customer Segmentation',
      slug: 'rfm-customer-segmentation',
      industry: 'Retail & E-commerce',
      category: 'Data Analytics',
      technologies: ['Python', 'SQL', 'RFM Modeling', 'Customer Clustering'],
      description:
        'Recency, Frequency, and Monetary segmentation dividing customer bases into actionable tiers for targeted marketing campaigns.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-8',
      title: 'Adventure Works Financial Dashboard',
      slug: 'adventure-works-financial-dashboard',
      industry: 'Manufacturing & Global Retail',
      category: 'Data Analytics',
      technologies: ['Power BI', 'DAX', 'SQL', 'Financial Modeling'],
      description:
        'Interactive executive financial dashboard modeling gross margin, profitability by territory, and regional revenue growth.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-9',
      title: 'International Debt Statistics',
      slug: 'international-debt-statistics',
      industry: 'Global Economics / Public Policy',
      category: 'Data Analytics',
      technologies: ['SQL', 'World Bank Data', 'Aggregations', 'Economic Analysis'],
      description:
        'SQL-driven analytical investigation of World Bank national debt statistics across emerging and developing economies.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-10',
      title: 'Marketing Campaign Performance EDA',
      slug: 'marketing-campaign-performance-eda',
      industry: 'Marketing Tech / Growth',
      category: 'Data Analytics',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Exploratory Data Analysis'],
      description:
        'Comprehensive EDA evaluating omni-channel marketing campaigns, conversion rates, cost per acquisition (CPA), and channel ROI.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-11',
      title: 'HR Data Analysis',
      slug: 'hr-data-analysis',
      industry: 'Human Resources / Workforce',
      category: 'Data Analytics',
      technologies: ['Excel Dashboards', 'Power BI', 'Workforce Analytics', 'KPI Tracking'],
      description:
        'Workforce analytics dashboard evaluating employee attrition patterns, performance ratings, department turnover, and tenure.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-12',
      title: 'Modern Sales Analysis',
      slug: 'modern-sales-analysis',
      industry: 'Consumer Goods & Retail',
      category: 'Data Analytics',
      technologies: ['Power BI', 'Excel Modeling', 'Sales Funnel', 'DAX'],
      description:
        'End-to-end sales intelligence dashboard displaying real-time revenue velocity, product performance, and quarterly targets.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-13',
      title: 'Netflix Stock Price Prediction',
      slug: 'netflix-stock-price-prediction',
      industry: 'Financial Markets / Media',
      category: 'Data Analytics',
      technologies: ['Python', 'Time Series Analysis', 'Machine Learning', 'Visualization'],
      description:
        'Time-series analysis and forecasting modeling historical equity trends, price volatility, and volume movements.',
      portfolioUrl: '/#case-studies',
    },
    {
      id: 'proj-14',
      title: 'TTFM Study Data Project',
      slug: 'ttfm-study-data-project',
      industry: 'Clinical & Biomedical Research',
      category: 'Healthcare Analytics',
      technologies: ['SPSS', 'Statistical Testing', 'Excel', 'Data Validation'],
      description:
        'Transit-Time Flow Measurement (TTFM) surgical observational dataset analysis evaluating graft patency parameters.',
      portfolioUrl: '/#case-studies',
    },
  ],

  certificationsAndLearning: [
    {
      title: 'Google Advanced Data Analytics',
      issuer: 'Coursera (Google Professional Certificate)',
      credentialType: 'Certification',
      yearOrPeriod: 'Verified Credential',
      credentialNote: 'Comprehensive professional certification covering Python, statistical analysis, predictive modeling, and data storytelling.',
    },
    {
      title: 'Data Analytics Internship',
      issuer: 'The Sparks Foundation',
      credentialType: 'Internship',
      yearOrPeriod: 'Mar 2022 – Jun 2022',
      credentialNote: 'Hands-on practical analytics internship focusing on SQL querying, exploratory data analysis, and Power BI dashboards.',
    },
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      credentialType: 'Course',
      yearOrPeriod: 'Academic & Professional Course',
      credentialNote: 'Rigorous coursework covering numerical computing, hypothesis testing, data wrangling, and statistical computation in Python.',
    },
    {
      title: 'Project Management',
      issuer: 'Great Learning',
      credentialType: 'Course',
      yearOrPeriod: 'Professional Course',
      credentialNote: 'Core principles of project lifecycle, sprint execution, resource scheduling, risk mitigation, and stakeholder management.',
    },
    {
      title: 'SQL Projects for Beginners',
      issuer: 'Great Learning',
      credentialType: 'Course',
      yearOrPeriod: 'Hands-on Course',
      credentialNote: 'Applied relational database design, complex joins, nested subqueries, and operational reporting aggregation.',
    },
    {
      title: 'Research through Statistical Package R and SPSS',
      issuer: 'Academic Research & Statistical Training',
      credentialType: 'Learning Experience',
      yearOrPeriod: 'Applied Research Experience',
      credentialNote: 'Advanced statistical hypothesis testing, parametric/non-parametric tests, ANOVA, regression, and cohort modeling using SPSS and R.',
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Forage',
      credentialType: 'Job Simulation',
      yearOrPeriod: 'Virtual Job Simulation',
      credentialNote: 'Simulation covering real-world client data challenges, prompt engineering for analytics, and AI-assisted executive recommendations.',
    },
  ],

  education: {
    degree: 'Bachelor of Science (B.Sc.)',
    field: 'Statistics',
    institution: 'Bharathidasan University',
    period: '2018 – 2021',
    location: 'Tamil Nadu, India',
    details: [
      'Comprehensive coursework in Probability Theory, Mathematical Statistics, and Sampling Distributions.',
      'Extensive training in Descriptive and Inferential Statistics, Regression Analysis, and Design of Experiments.',
      'Practical computer laboratory applications in Statistical Quality Control, Data Handling, and Tabulation.',
    ],
  },

  selectedPublications: [
    {
      title: 'The Role of Artificial Intelligence in Analytics',
      year: '2025',
      topic: 'AI & Analytics Strategy',
      summary:
        'Examining how modern generative AI tools augment business analysts, automate repetitive pipeline tasks, and elevate strategic decision speed without sacrificing data governance.',
    },
    {
      title: 'How Data & Actuarial Science Are Powering the Future of Insurance',
      topic: 'InsurTech & Predictive Analytics',
      summary:
        'Deep-dive into multi-variable risk pricing, predictive medical modeling, and the transformation of traditional underwriting via real-time telemetry and actuarial algorithms.',
    },
    {
      title: 'Business Analysts vs Data Analysts: Synergy & Scope',
      topic: 'Organizational Architecture',
      summary:
        'A comprehensive guide clarifying the functional boundaries, shared competencies, and collaborative power when bridging technical pipelines with executive business requirements.',
    },
    {
      title: 'Unlocking Netflix Insights Dashboard Through Data Visualization',
      topic: 'Streaming Intelligence & BI',
      summary:
        'Case study detailing the transformation of content metadata, release cadence, and international catalog distributions into high-impact executive dashboards.',
    },
  ],
};
