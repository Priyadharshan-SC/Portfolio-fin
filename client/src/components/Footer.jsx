import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Let's Connect Banner */}
      <div className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-elephant-grey">
              Let's <span className="gradient-text">Connect</span> &amp; Collaborate
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Open for software engineering roles, AI research, and impactful projects.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-elephant-grey hover:bg-zinc-900 text-white font-semibold py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              Send Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="bg-amber-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full">
                P
              </span>
              <span className="font-bold text-2xl text-elephant-grey">Priyadharshan S</span>
            </a>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Software Engineer &amp; AI/ML Developer. Building intelligent systems, full-stack web applications, and reproducible machine learning workflows.
            </p>
            <div className="flex space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                title="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                title="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-lg text-elephant-grey mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-slate-600 hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-600 hover:text-amber-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-600 hover:text-amber-500 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#publications" className="text-slate-600 hover:text-amber-500 transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-600 hover:text-amber-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-600 hover:text-amber-500 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-600 hover:text-amber-500 transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-bold text-lg text-elephant-grey mb-4">Contact Details</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <strong className="text-slate-700">Phone:</strong>{' '}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="hover:text-amber-500 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <strong className="text-slate-700">Email:</strong>{' '}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-amber-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <strong className="text-slate-700">Location:</strong> {personalInfo.location}
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Affiliation */}
          <div>
            <h4 className="font-bold text-lg text-elephant-grey mb-4">Institutional Affiliation</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              B.E. Computer Science and Engineering (AI &amp; ML) • KPR Institute of Engineering and Technology, Coimbatore.
            </p>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full transition-colors"
            >
              <span>View Curriculum Vitae (PDF)</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-slate-500 text-sm mt-12 border-t border-slate-200 pt-6">
          &copy; {currentYear} Priyadharshan S. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

