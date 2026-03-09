import { useEffect, useState } from 'react';

const studentPhotos = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
];

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="page">
      <header className="header">
        <div>
          <p className="brand">XYZ Classes</p>
          <h1>Professional Training for B.Ed & B.P.Ed Entrance Exams</h1>
          <p className="subtitle">
            We help future teachers and physical education professionals achieve top ranks with
            focused preparation, expert guidance, and personalized mentorship.
          </p>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle light and dark mode"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>

      <section className="photo-strip" aria-label="Our student achievers">
        <div className="photo-track">
          {[...studentPhotos, ...studentPhotos].map((src, index) => (
            <img key={`${src}-${index}`} src={src} alt="XYZ Classes students" />
          ))}
        </div>
      </section>

      <main className="content">
        <section className="card">
          <h2>Why Choose XYZ Classes?</h2>
          <ul>
            <li>Experienced faculty for B.Ed and B.P.Ed entrance preparation.</li>
            <li>Structured study plans, mock tests, and doubt-clearing sessions.</li>
            <li>Result-focused environment with disciplined daily practice.</li>
          </ul>
        </section>

        <section className="card">
          <h2>Programs</h2>
          <p>
            <strong>B.Ed Program:</strong> Teaching aptitude, reasoning, general awareness, and
            pedagogy modules.
          </p>
          <p>
            <strong>B.P.Ed Program:</strong> Physical education fundamentals, sports science,
            aptitude, and interview readiness.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} XYZ Classes • Building Future Educators</p>
      </footer>
    </div>
  );
}
