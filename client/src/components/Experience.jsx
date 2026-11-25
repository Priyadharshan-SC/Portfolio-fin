import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section py-16 md:py-24 bg-slate-50 rounded-3xl p-6 md:p-12 my-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <p className="text-sm font-semibold text-slate-500 mb-1">- Hands-on Milestones</p>
          <h2 className="text-4xl font-bold text-elephant-grey">
            Experience &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Verified internships, hackathons, and certifications reflecting applied technical contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${item.badgeClass}`}
                >
                  {item.badge}
                </span>
                <span className="text-xs text-slate-500">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-elephant-grey mb-1">{item.title}</h3>
              <p className="text-amber-600 font-semibold text-sm mb-3">{item.organization}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{item.footerTag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

