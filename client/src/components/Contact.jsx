import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error' | 'info', text: string }

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: 'success',
          text: data.message || 'Your message has been sent successfully!',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.error || 'Server error occurred');
      }
    } catch (err) {
      console.warn('Backend API submission note:', err.message);
      // Construct fallback mailto URL
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      setStatusMessage({
        type: 'info',
        text: 'The server endpoint is in offline mode. Click below to send directly via your email client:',
        mailtoUrl,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="md:w-1/2">
          <p className="text-sm font-semibold text-slate-500 mb-1">- Get in Touch</p>
          <h2 className="text-4xl font-bold text-elephant-grey mb-4">
            Let's Discuss <span className="gradient-text">Engineering &amp; Collaboration</span>
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            I am open to software engineering opportunities, AI/ML research collaborations, and open-source projects. Feel free to connect directly via email or phone.
          </p>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Phone</p>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-lg font-medium text-slate-700 hover:text-amber-500 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg font-medium text-slate-700 hover:text-amber-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Location</p>
                <p className="text-lg font-medium text-slate-700">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Form */}
        <div className="md:w-1/2 w-full">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 space-y-4"
          >
            {statusMessage && statusMessage.type === 'success' && (
              <div className="p-4 text-sm text-green-800 bg-green-100 rounded-lg" role="alert">
                {statusMessage.text}
              </div>
            )}
            {statusMessage && statusMessage.type === 'info' && (
              <div className="p-4 text-sm text-blue-800 bg-blue-50 rounded-lg space-y-2">
                <p>{statusMessage.text}</p>
                {statusMessage.mailtoUrl && (
                  <a
                    href={statusMessage.mailtoUrl}
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs py-2 px-4 rounded-full transition-colors"
                  >
                    Launch Email Client Directly
                  </a>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="font-semibold text-sm text-slate-600">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex. Priyadharshan S"
                  className={`w-full mt-1 p-3 bg-slate-100 rounded-md focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-amber-500'
                  }`}
                />
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="font-semibold text-sm text-slate-600">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  className={`w-full mt-1 p-3 bg-slate-100 rounded-md focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-amber-500'
                  }`}
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="font-semibold text-sm text-slate-600">
                Phone <span className="text-xs text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98948 10613"
                className="w-full mt-1 p-3 bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-semibold text-sm text-slate-600">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, query, or collaboration idea..."
                rows="4"
                className={`w-full mt-1 p-3 bg-slate-100 rounded-md focus:outline-none focus:ring-2 ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'focus:ring-amber-500'
                }`}
              ></textarea>
              {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              id="submit-button"
              disabled={loading}
              className="bg-elephant-grey hover:bg-zinc-900 text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 flex items-center justify-center gap-2 w-full disabled:opacity-50"
            >
              {loading ? (
                <div className="loader"></div>
              ) : (
                <>
                  <span className="button-text">Send Message</span>
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
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

