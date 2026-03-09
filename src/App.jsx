import React, { useState } from 'react';

const outcomes = [
  { label: 'Selection Rate', value: '92%' },
  { label: 'Average Rank Boost', value: '41%' },
  { label: 'Years of Mentoring', value: '12+' },
  { label: 'Students Trained', value: '8,500+' },
];

const programs = [
  {
    title: 'B.Ed Entrance Mastery',
    detail:
      'Complete coverage of pedagogy, teaching aptitude, reasoning, and current affairs with weekly benchmark tests.',
  },
  {
    title: 'B.P.Ed Performance Track',
    detail:
      'Focused prep for sports science, physical education theory, interview readiness, and practical assessment strategy.',
  },
  {
    title: 'Personal Mentorship',
    detail:
      'Individual study plans, progress analytics, and one-on-one doubt sessions to remove preparation bottlenecks early.',
  },
];

const highlights = [
  'Structured 16-week preparation roadmaps',
  'Daily practice sets with faculty feedback',
  'Weekly live problem-solving marathons',
  'Interview and counseling support till admission',
];

const testimonials = [
  {
    quote:
      'The mock tests and review sessions changed how I prepared. I improved my rank significantly in just three months.',
    name: 'Aarav S.',
    role: 'B.Ed Aspirant',
  },
  {
    quote:
      'Their mentorship was practical and data-driven. I always knew what to fix every week.',
    name: 'Nidhi P.',
    role: 'B.P.Ed Aspirant',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80',
];

const videoResources = [
  {
    id: 'M7lc1UVf-VE',
    title: 'Entrance Exam Strategy Session',
  },
  {
    id: 'ysz5S6PUM-U',
    title: 'Teaching Aptitude Quick Revision',
  },
  {
    id: 'aqz-KE-bpKQ',
    title: 'Interview and Counseling Guidance',
  },
];

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <p className="logo">XYZ Classes</p>
        <nav aria-label="Primary Navigation">
          <a href="#programs">Programs</a>
          <a href="#results">Results</a>
          <a href="#gallery">Gallery</a>
          <a href="#youtube">YouTube</a>
          <a href="#register">Register</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero-kicker">Career-Focused Entrance Coaching</p>
          <h1>Professional coaching for B.Ed and B.P.Ed entrance success.</h1>
          <p className="hero-copy">
            Build exam confidence with expert-led classes, measurable study plans, and
            personalized mentorship designed for consistent rank improvement.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#register">
              Register Now
            </a>
            <a className="btn btn-secondary" href="#programs">
              Explore Programs
            </a>
          </div>
        </section>

        <section className="metrics" id="results" aria-label="Results and Outcomes">
          {outcomes.map((item) => (
            <article className="metric-card" key={item.label}>
              <p className="metric-value">{item.value}</p>
              <p className="metric-label">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="panel" id="programs">
          <div className="panel-head">
            <p className="section-tag">Programs</p>
            <h2>Designed for clarity, discipline, and measurable progress.</h2>
          </div>
          <div className="program-grid">
            {programs.map((item) => (
              <article className="program-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-panel">
          <article className="panel">
            <p className="section-tag">Why Students Choose Us</p>
            <h2>Execution support from day one to final admission.</h2>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <p className="section-tag">Student Reviews</p>
            <h2>Real outcomes backed by consistent mentoring.</h2>
            <div className="testimonial-list">
              {testimonials.map((item) => (
                <blockquote key={item.name}>
                  <p>"{item.quote}"</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </article>
        </section>

        <section className="panel" id="gallery">
          <div className="panel-head">
            <p className="section-tag">Student Gallery</p>
            <h2>Classroom snapshots, achievers, and mentorship moments.</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <article className="gallery-card" key={image}>
                <img src={image} alt={`XYZ Classes student activity ${index + 1}`} loading="lazy" />
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="youtube">
          <div className="panel-head">
            <p className="section-tag">YouTube Learning Hub</p>
            <h2>Watch strategy videos, topic explainers, and exam guidance.</h2>
          </div>
          <div className="video-grid">
            {videoResources.map((video) => (
              <article className="video-card" key={video.id}>
                <div className="video-frame">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="panel register-section" id="register">
          <div className="panel-head">
            <p className="section-tag">Registration Form</p>
            <h2>Book your counseling slot and start with a clear plan.</h2>
          </div>
          <form className="registration-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input type="text" name="fullName" required placeholder="Enter your full name" />
            </label>
            <label>
              Mobile Number
              <input type="tel" name="mobile" required placeholder="Enter your phone number" />
            </label>
            <label>
              Email Address
              <input type="email" name="email" required placeholder="Enter your email" />
            </label>
            <label>
              Program Interest
              <select name="program" required defaultValue="">
                <option value="" disabled>
                  Select a program
                </option>
                <option value="bed">B.Ed Entrance Program</option>
                <option value="bped">B.P.Ed Entrance Program</option>
                <option value="both">Both Programs</option>
              </select>
            </label>
            <label className="full-width">
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your exam timeline and current preparation status"
              />
            </label>
            <button className="btn btn-submit" type="submit">
              Submit Registration
            </button>
          </form>
          {submitted ? (
            <p className="submit-note">Thank you. Your registration request has been received.</p>
          ) : null}
        </section>
      </main>

      <footer className="footer" id="contact">
        <h2>Start your preparation with a focused strategy session.</h2>
        <p>Call +91 98765 43210 or email admissions@xyzclasses.in</p>
        <small>© {new Date().getFullYear()} XYZ Classes. All rights reserved.</small>
      </footer>
    </div>
  );
}
