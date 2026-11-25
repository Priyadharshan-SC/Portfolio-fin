export const personalInfo = {
  name: 'Priyadharshan S',
  role: 'Software Engineer & AI/ML Developer',
  institution: 'KPR Institute of Engineering and Technology, Coimbatore, Tamil Nadu, India',
  degree: 'B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
  email: 'priyadharshansanthanams@gmail.com',
  phone: '+91 98948 10613',
  location: 'Coimbatore, Tamil Nadu, India',
  github: 'https://github.com/Priyadharshan-SC',
  linkedin: 'https://www.linkedin.com/in/priyadharshansanthanam/',
  instagram: 'https://www.instagram.com/dharshan__08_?igsh=MXNnMDBuZnd0Y3N2aA==',
  resumeUrl: '/resume.pdf',
};

export const educationData = [
  {
    type: 'Undergraduate Degree',
    period: '2024 – 2028',
    degree: 'B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
    institution: 'KPR Institute of Engineering and Technology',
    location: 'Coimbatore, Tamil Nadu, India',
    focus: 'Data Structures & Algorithms, Object-Oriented Programming, Machine Learning, Deep Learning, Database Management Systems, and Software Engineering.',
  },
  {
    type: 'Secondary Education',
    period: 'Foundational Academics',
    schools: [
      {
        level: 'Higher Secondary Certificate (Class XII)',
        institution: 'Nyruthi Vidhya Bhavan Matric Higher Secondary School',
        details: 'Tamil Nadu, India • Score: 92.8% (2023 – 2024)',
      },
      {
        level: 'Secondary School Leaving Certificate (Class X)',
        institution: 'Rotary Matriculation School',
        details: 'Tamil Nadu, India • Score: 94.6% (2021 – 2022)',
      },
    ],
  },
];

export const publicationData = {
  type: 'Published Book Chapter',
  publisherInfo: 'CRC Press • 2025 • First Edition',
  doi: '10.1201/9781003685876-2',
  doiUrl: 'https://doi.org/10.1201/9781003685876-2',
  title: 'Advancing cancer diagnosis: A machine learning approach for early detection and improved outcomes',
  authors: ['G. Kothai', 'S. Suryaprakash', 'K. S. Dharshna Kumar', 'C. Gokulnanthan', 'S. Priyadharshan'],
  book: 'Engineering Science and Technology: Innovations for the Future',
  publisher: 'CRC Press (Taylor & Francis Group)',
  summary: 'This work discusses a supervised machine-learning framework utilizing patient diagnostic data and the XGBoost classification algorithm to predict cancer classifications and stages. The research explores algorithmic feature importance and model evaluation to investigate how structured machine learning can support earlier detection methodologies and contribute to enhanced clinical decision-making.',
  repoUrl: 'https://github.com/Priyadharshan-SC/Cancer-prediction',
};

export const projectsData = [
  {
    id: 'optiinspect-ai',
    title: 'OptiInspect AI',
    subtitle: 'Dataset-Adaptive Visual Defect Inspection',
    status: 'Prototype / MVP',
    statusBadgeClass: 'bg-blue-100 text-blue-700',
    problem: 'Industrial automated optical inspection (AOI) on PCB Surface-Mount Technology (SMT) and bottle packaging lines requires adaptive defect taxonomies without brittle mock states.',
    contribution: 'Built the React 18/Vite frontend, aiohttp backend API, SQLAlchemy/SQLite persistence layer, live WebSocket telemetry, dynamic Pareto reporting, and 5-stage pipeline monitoring.',
    technologies: ['React 18', 'TypeScript', 'Tailwind', 'SQLAlchemy', 'YOLO11n', 'WebSockets'],
    repoUrl: 'https://github.com/Priyadharshan-SC/final',
    tag: 'CODIENYCH 1.0',
  },
  {
    id: 'tn-healthbridge',
    title: 'TN HealthBridge',
    subtitle: 'Uncertainty-Aware Clinical Interoperability',
    status: 'Research Prototype',
    statusBadgeClass: 'bg-purple-100 text-purple-700',
    problem: 'Inter-institutional clinical data exchange under India\'s ABDM standards faces critical hazards: silent terminology mismatches, unit conflation, and unsafe automated identity merges.',
    contribution: 'Engineered the complete multi-tenant frontend portals (Admin, Patient Consent, and 6 federated hospital nodes) and integrated API workflows backed by 315 passing automated tests.',
    technologies: ['Python 3.11', 'FastAPI', 'React 19', 'Vite', 'FHIR R4', 'ECDSA P-256'],
    repoUrl: 'https://github.com/Priyadharshan-SC/TN-HEALTHBRIDGE',
    tag: 'ABDM Aligned',
  },
  {
    id: 'recover-ai',
    title: 'RecoverAI',
    subtitle: 'Autonomous Revenue Recovery Agent',
    status: 'Prototype / Buildathon',
    statusBadgeClass: 'bg-blue-100 text-blue-700',
    problem: 'Dumb, static retry loops on failed transactions lead to payment failure churn and policy breaches for online merchants.',
    contribution: 'Built for the Razorpay AI Buildathon 2026 (Track 03). Designed multi-agent pipeline: Root Cause Analysis, local ML strategy model, deterministic policy engine, and immutable audit logs.',
    technologies: ['Next.js 16', 'TypeScript', 'Prisma ORM', 'SQLite', 'Machine Learning', 'Tailwind'],
    repoUrl: 'https://github.com/Priyadharshan-SC/RecoverAI',
    tag: 'Razorpay Buildathon',
  },
  {
    id: 'cancer-prediction',
    title: 'Cancer Prediction Model',
    subtitle: 'XGBoost Classification & SHAP Interpretability',
    status: 'Completed Implementation',
    statusBadgeClass: 'bg-emerald-100 text-emerald-700',
    problem: 'Early diagnostic detection of oncological tumor classification using structured patient features requires explainable outputs rather than opaque predictions.',
    contribution: 'Built the end-to-end data pipeline, EDA, and XGBoost classifier on the Wisconsin Breast Cancer dataset; applied SHAP feature attribution to explain key decision metrics. Complements published book chapter research.',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'SHAP', 'Pandas', 'Jupyter'],
    repoUrl: 'https://github.com/Priyadharshan-SC/Cancer-prediction',
    tag: 'CRC Press Linked',
  },
  {
    id: 'weed-detection',
    title: 'Weed Detection Pipeline',
    subtitle: 'Deep Learning Agricultural Computer Vision',
    status: 'Prototype / Vision',
    statusBadgeClass: 'bg-blue-100 text-blue-700',
    problem: 'Automated identification of weeds in crop field imagery to enable targeted spraying and precision agriculture without manual scouting.',
    contribution: 'Engineered a deep learning computer vision pipeline from dataset inspection, cleaning, and augmentation to object localization using Ultralytics YOLO and PyTorch.',
    technologies: ['Python', 'PyTorch', 'Ultralytics YOLO', 'OpenCV', 'Pandas', 'Jupyter'],
    repoUrl: 'https://github.com/Priyadharshan-SC/weed-detection',
    tag: 'Deep Learning CV',
  },
  {
    id: 'ai-bms',
    title: 'AI-Based Battery Management',
    subtitle: 'Lithium-Ion SOH Research & Degradation Audit',
    status: 'Research in Progress',
    statusBadgeClass: 'bg-amber-100 text-amber-700',
    problem: 'Reliable State of Health (SOH) estimation for lithium-ion battery cells requires uncorrupted ground-truth references across complex cycling without data leakage.',
    contribution: 'Completed Stages 1–3 research infrastructure: dataset ingestion, NASA PCoE deep audit across 4 cells (636 discharge cycles), and locked ground-truth formulation with 37 passing unit tests. Predictive modeling ongoing.',
    technologies: ['Python', 'Pandas', 'NumPy', 'NASA PCoE', 'Pytest (37/37)'],
    repoUrl: null,
    tag: 'Stages 1–3 Verified',
  },
];

export const experienceData = [
  {
    badge: '24-Hour Hackathon',
    badgeClass: 'text-amber-700 bg-amber-100',
    date: 'October 8–9, 2026',
    title: 'CODIENYCH 1.0',
    organization: 'Erode Sengunthar Engineering College (ESEC)',
    description: 'Participated in the 24-hour national hackathon as part of Team Innoventures. Architected and demonstrated OptiInspect AI, an industrial dataset-adaptive visual defect inspection system with full-stack telemetry and anomaly detection.',
    footerTag: 'Team: Innoventures • Project: OptiInspect AI',
  },
  {
    badge: 'Internship',
    badgeClass: 'text-blue-700 bg-blue-100',
    date: 'Feb 2026 – Apr 2026',
    title: 'Angular Full Stack Intern',
    organization: 'Infosys Springboard',
    description: 'Built and shipped 10+ reusable, responsive UI components (forms, dashboards, tables) for an enterprise web platform, tested and debugged 15+ REST API endpoints, designed MongoDB schemas for core collections, and collaborated within a 6-member Agile team.',
    footerTag: 'Angular, REST APIs, MongoDB, Agile Workflow',
  },
  {
    badge: 'National Buildathon',
    badgeClass: 'text-purple-700 bg-purple-100',
    date: 'September 2026',
    title: 'Razorpay AI Buildathon 2026',
    organization: 'Track 03 — AI Revenue Recovery',
    description: 'Developed RecoverAI, an intelligent multi-agent pipeline replacing blind payment retries with machine learning strategy evaluation, root-cause diagnosis, and merchant safety policy gates.',
    footerTag: 'Next.js 16, Prisma ORM, Local ML Model, Audit Trail',
  },
  {
    badge: 'Elite Certification',
    badgeClass: 'text-emerald-700 bg-emerald-100',
    date: 'Jul – Oct 2025',
    title: 'Industry 4.0 and Industrial IoT',
    organization: 'IIT Kharagpur (via SWAYAM NPTEL)',
    description: 'Successfully completed rigorous 12-week certification on smart factories, industrial IoT architectures, sensor networks, cyber-physical systems, and data analytics in modern manufacturing (Score: 64%, Elite Certification).',
    footerTag: 'IIT Kharagpur • Industrial Internet of Things • Elite',
  },
];

export const skillsCategories = [
  {
    name: 'Programming Languages',
    description: 'Core languages used in application development and systems engineering.',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'Java'],
  },
  {
    name: 'AI / Machine Learning',
    description: 'Computer vision, deep learning, classification, and model interpretability.',
    skills: ['PyTorch', 'Ultralytics YOLO', 'XGBoost', 'Scikit-learn', 'OpenCV', 'SHAP (Interpretability)'],
  },
  {
    name: 'Frontend Development',
    description: 'Responsive single-page applications, UI state management, and modern component design.',
    skills: ['React.js', 'Next.js (App Router)', 'Vite', 'Tailwind CSS', 'HTML5 / CSS3', 'Recharts'],
  },
  {
    name: 'Backend Development',
    description: 'REST APIs, asynchronous server handlers, WebSocket streaming, and middleware.',
    skills: ['FastAPI', 'Python aiohttp', 'Node.js', 'Express', 'REST APIs', 'WebSockets'],
  },
  {
    name: 'Databases & Data Processing',
    description: 'Relational ORMs, schema design, exploratory data analysis, and numerical processing.',
    skills: ['MongoDB', 'SQLAlchemy', 'SQLite', 'Prisma ORM', 'Pandas • NumPy'],
  },
  {
    name: 'Developer Tools & Platforms',
    description: 'Version control, development environments, API testing, and research tooling.',
    skills: ['Git • GitHub', 'VS Code', 'Jupyter Notebook', 'Postman', 'Linux / Bash'],
  },
];

export const favoriteTools = [
  { name: 'VS Code', img: '/vs_code.png' },
  { name: 'Python', img: '/python.jpeg' },
  { name: 'Firebase', img: '/firebase.png' },
  { name: 'Automation', img: '/n8n.png' },
  { name: 'GitHub', img: '/git.png' },
  { name: 'Figma', img: '/figma.jpeg' },
];

