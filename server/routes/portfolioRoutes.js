const express = require('express');
const router = express.Router();
const { getDbStatus } = require('../config/db');

// Verified static data served through Express API
const projectsData = [
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
    order: 1,
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
    order: 2,
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
    order: 3,
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
    order: 4,
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
    order: 5,
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
    order: 6,
  },
];

const publicationData = {
  title: 'Advancing cancer diagnosis: A machine learning approach for early detection and improved outcomes',
  authors: [
    'G. Kothai',
    'S. Suryaprakash',
    'K. S. Dharshna Kumar',
    'C. Gokulnanthan',
    'S. Priyadharshan',
  ],
  book: 'Engineering Science and Technology: Innovations for the Future',
  publisher: 'CRC Press (Taylor & Francis Group)',
  year: 2025,
  edition: 'First edition',
  type: 'Published Book Chapter',
  doi: '10.1201/9781003685876-2',
  doiUrl: 'https://doi.org/10.1201/9781003685876-2',
  summary: 'This work discusses a supervised machine-learning framework utilizing patient diagnostic data and the XGBoost classification algorithm to predict cancer classifications and stages. The research explores algorithmic feature importance and model evaluation to investigate how structured machine learning can support earlier detection methodologies and contribute to enhanced clinical decision-making.',
  repoUrl: 'https://github.com/Priyadharshan-SC/Cancer-prediction',
};

// GET /api/projects
router.get('/projects', (req, res) => {
  res.json({ success: true, count: projectsData.length, data: projectsData });
});

// GET /api/publications
router.get('/publications', (req, res) => {
  res.json({ success: true, data: publicationData });
});

// GET /api/status - Health & DB telemetry
router.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    database: getDbStatus() ? 'connected (MongoDB)' : 'in-memory / awaiting MongoDB',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;

