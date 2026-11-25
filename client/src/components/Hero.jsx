import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-8 pb-16">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="inline-block border-2 border-dashed border-slate-400 px-3 py-1 mb-4 text-sm font-semibold text-slate-600">
            {personalInfo.role}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-elephant-grey mb-4 leading-tight">
            I'm <span className="gradient-text">{personalInfo.name}</span>, Building Intelligent Systems &amp; Practical Applications.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl">
            Computer Science and Engineering undergraduate specializing in Artificial Intelligence &amp; Machine Learning at KPR Institute of Engineering and Technology. I engineer full-stack software solutions and machine learning pipelines focused on real-world reliability, performance, and practical problem-solving.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <a
              href="#projects"
              className="bg-elephant-grey hover:bg-zinc-900 text-white font-semibold py-3 px-7 rounded-full transition-transform transform hover:scale-105 flex items-center gap-2"
            >
              View Projects
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
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-slate-300 hover:border-elephant-grey text-elephant-grey font-semibold py-3 px-7 rounded-full transition-colors transform"
            >
              Download Resume
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-elephant-grey p-3 rounded-full transition-colors"
              title="GitHub Profile"
            >
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
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-elephant-grey p-3 rounded-full transition-colors"
              title="LinkedIn Profile"
            >
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
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-200 rounded-full z-0"></div>
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-lg">
              <img
                src="/profile.jpg"
                alt="Priyadharshan S Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

