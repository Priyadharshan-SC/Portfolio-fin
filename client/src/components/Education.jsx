import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const [degree, schooling] = educationData;

  return (
    <section id="education" className="section py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <p className="text-sm font-semibold text-slate-500 mb-1">- Academic Background</p>
          <h2 className="text-4xl font-bold text-elephant-grey">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Degree Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 text-amber-600 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                  {degree.type}
                </span>
                <p className="text-sm text-slate-500 mt-1">{degree.period}</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-elephant-grey mb-2">
              {degree.degree}
            </h3>
            <p className="text-amber-600 font-semibold mb-3">{degree.institution}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{degree.location}</p>
            <div className="border-t border-slate-100 pt-3">
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong className="text-slate-700">Core Focus:</strong> {degree.focus}
              </p>
            </div>
          </div>

          {/* Schooling / Pre-Engineering Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 text-amber-600 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                  {schooling.type}
                </span>
                <p className="text-sm text-slate-500 mt-1">{schooling.period}</p>
              </div>
            </div>
            <div className="space-y-4">
              {schooling.schools.map((item, idx) => (
                <div key={idx} className={idx > 0 ? 'border-t border-slate-100 pt-3' : ''}>
                  <h4 className="text-lg font-bold text-elephant-grey">{item.level}</h4>
                  <p className="text-sm font-semibold text-slate-700">{item.institution}</p>
                  <p className="text-xs text-slate-500">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

