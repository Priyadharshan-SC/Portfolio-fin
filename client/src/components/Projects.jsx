import React, { useState, useEffect } from 'react';
import { projectsData as defaultProjects, personalInfo } from '../data/portfolioData';

export default function Projects() {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    // Optionally fetch dynamic project updates from Express backend
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
          setProjects(data.data);
        }
      })
      .catch(() => {
        // Fallback silently to client data if server is offline
      });
  }, []);

  return (
    <section id="projects" className="section py-16 md:py-24">
      {/* Scrolling Marquee Banner */}
      <div className="relative overflow-hidden mb-12 border-y-2 border-slate-200">
        <div className="flex animate-marquee whitespace-nowrap py-4 text-slate-700">
          <span className="text-lg font-semibold mx-4">Computer Vision</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Full-Stack Development</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Machine Learning</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Industrial Automation</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Healthcare Interoperability</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Multi-Agent Systems</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Database Architecture</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Computer Vision</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Full-Stack Development</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Machine Learning</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Industrial Automation</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Healthcare Interoperability</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Multi-Agent Systems</span>
          <span className="text-amber-500 mx-4">•</span>
          <span className="text-lg font-semibold mx-4">Database Architecture</span>
          <span className="text-amber-500 mx-4">•</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
        <div>
          <p className="text-sm font-semibold text-slate-500 mb-1">- Featured Work</p>
          <h2 className="text-4xl font-bold text-elephant-grey">
            Engineering <span className="gradient-text">Projects</span>
          </h2>
        </div>
        <a
          href={`${personalInfo.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-elephant-grey hover:bg-zinc-900 text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 flex items-center gap-2"
        >
          View All on GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bg-amber-500 rounded-full p-1"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
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
                    <path d="M2 12h20M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"></path>
                  </svg>
                </div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    proj.statusBadgeClass || 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {proj.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-elephant-grey">{proj.title}</h3>
              <p className="text-xs font-semibold text-amber-600 mb-3">{proj.subtitle}</p>
              <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                <strong>Problem:</strong> {proj.problem}
              </p>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                <strong>Contribution:</strong> {proj.contribution}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              {proj.repoUrl ? (
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm text-slate-700 hover:text-amber-500 transition-colors inline-flex items-center gap-1"
                >
                  GitHub Repository &rarr;
                </a>
              ) : (
                <span className="font-semibold text-sm text-slate-500">
                  Academic Research Track
                </span>
              )}
              {proj.tag && (
                <span className="text-xs text-slate-400 font-medium">{proj.tag}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

