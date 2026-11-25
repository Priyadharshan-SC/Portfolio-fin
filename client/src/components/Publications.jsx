import React from 'react';
import { publicationData } from '../data/portfolioData';

export default function Publications() {
  return (
    <section id="publications" className="section py-16 md:py-24 bg-slate-100/60 rounded-3xl p-6 md:p-12 my-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <p className="text-sm font-semibold text-slate-500 mb-1">- Scholarly Work</p>
          <h2 className="text-4xl font-bold text-elephant-grey">
            Research &amp; <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            Peer-reviewed academic research exploring machine learning applications in oncology, clinical decision support, and predictive modeling.
          </p>
        </div>

        {/* Publication Card */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {publicationData.type}
              </span>
              <span className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                {publicationData.publisherInfo}
              </span>
            </div>
            <a
              href={publicationData.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 px-3.5 py-1.5 rounded-full transition-colors"
            >
              <span>DOI: {publicationData.doi}</span>
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
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-elephant-grey mb-3 leading-snug">
            {publicationData.title}
          </h3>

          <p className="text-sm font-medium text-slate-700 mb-4">
            <strong className="text-slate-900">Authors:</strong>{' '}
            {publicationData.authors.map((author, index) => (
              <React.Fragment key={index}>
                {author === 'S. Priyadharshan' ? (
                  <span className="text-amber-600 font-bold">{author}</span>
                ) : (
                  author
                )}
                {index < publicationData.authors.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </p>

          <p className="text-sm font-medium text-slate-500 mb-5">
            <strong className="text-slate-700">Book:</strong> <em>{publicationData.book}</em> •{' '}
            <strong>Publisher:</strong> {publicationData.publisher}
          </p>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            {publicationData.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
            <a
              href={publicationData.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-elephant-grey hover:bg-zinc-900 text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-transform transform hover:scale-105 inline-flex items-center gap-2"
            >
              <span>View Publisher Chapter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
            {publicationData.repoUrl && (
              <a
                href={publicationData.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-300 hover:border-elephant-grey text-elephant-grey text-sm font-semibold py-2.5 px-6 rounded-full transition-colors inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>Model Code Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

