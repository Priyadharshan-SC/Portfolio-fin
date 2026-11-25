import React from 'react';
import { skillsCategories, favoriteTools } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-slate-500 mb-1">- Technical Capabilities</p>
          <h2 className="text-4xl font-bold text-elephant-grey">
            Skills &amp; <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-slate-600 mt-2 max-w-xl mx-auto text-sm md:text-base">
            Organized into verified engineering domains supported by hands-on codebase implementations.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <h3 className="font-bold text-lg text-elephant-grey">{cat.name}</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-medium bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Preserved Favorite Tools Orbit / Grid */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold text-elephant-grey">
              Primary <span className="gradient-text">Development Stack</span>
            </h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center max-w-6xl mx-auto">
            {favoriteTools.map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="bg-slate-100 rounded-full p-6 w-28 h-28 flex items-center justify-center border-2 border-slate-200 group-hover:border-amber-500 transition-colors">
                  <img
                    src={tool.img}
                    alt={`${tool.name} Logo`}
                    className="rounded-full w-14 h-14 object-contain"
                  />
                </div>
                <h5 className="font-bold mt-3 text-base text-elephant-grey">{tool.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

