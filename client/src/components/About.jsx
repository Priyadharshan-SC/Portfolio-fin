import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section bg-elephant-grey text-slate-100 py-20 md:py-28 rounded-3xl my-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image with Orbiting Skills */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-lg border-8 border-amber-500">
              <img
                src="/profile.jpg"
                alt="Priyadharshan S Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Orbiting Skills */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div
                className="absolute top-1/2 left-1/2 orbit bg-white text-elephant-grey text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                style={{ animationDelay: '0s' }}
              >
                Python
              </div>
              <div
                className="absolute top-1/2 left-1/2 orbit bg-white text-elephant-grey text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                style={{ animationDelay: '-4s' }}
              >
                React
              </div>
              <div
                className="absolute top-1/2 left-1/2 orbit bg-white text-elephant-grey text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                style={{ animationDelay: '-8s' }}
              >
                PyTorch
              </div>
              <div
                className="absolute top-1/2 left-1/2 orbit bg-white text-elephant-grey text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                style={{ animationDelay: '-12s' }}
              >
                AI/ML
              </div>
              <div
                className="absolute top-1/2 left-1/2 orbit bg-white text-elephant-grey text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                style={{ animationDelay: '-16s' }}
              >
                SQL
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm font-semibold text-slate-400 mb-1">- About Me</p>
          <h2 className="text-4xl font-bold mb-4">
            Engineering with <span className="text-amber-400">{personalInfo.name}</span>
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            I am an undergraduate student pursuing a B.E. in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at KPR Institute of Engineering and Technology, Coimbatore, Tamil Nadu, India.
          </p>
          <p className="text-slate-300 mb-6 leading-relaxed">
            My work centers on developing practical software engineering skills through hands-on project building, academic research, and technical competitions. I have contributed to full-stack platforms, computer vision inspection systems, explainable machine-learning models, and healthcare data interoperability frameworks.
          </p>
          <div className="flex justify-center md:justify-start gap-8 mb-8">
            <div>
              <p className="text-4xl font-bold text-amber-400">6+</p>
              <p className="text-slate-400 text-sm">Featured Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-400">1</p>
              <p className="text-slate-400 text-sm">Published Book Chapter</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-400">24-Hr</p>
              <p className="text-slate-400 text-sm">Hackathon Work</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-8">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 flex items-center gap-2"
            >
              Download Resume
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
                className="bg-amber-600 rounded-full p-1"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
            <p className="signature text-4xl text-slate-300">{personalInfo.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

