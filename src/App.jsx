import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveScores from './components/LiveScores';
import NewsSection from './components/NewsSection';
import Pricing from './components/Pricing';
import Legends from './components/Legends';
import JordanReel from './components/JordanReel';

function App() {
  const [activeSport, setActiveSport] = useState('All');
  const [showMJReel, setShowMJReel] = useState(false);
  const scrollRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <div ref={addToRefs} className="reveal-init">
          <Hero />
        </div>

        <section
          id="scores"
          ref={addToRefs}
          className="container reveal-init"
          style={{ marginTop: '-80px', position: 'relative', zIndex: 10, padding: 0 }}
        >
          <LiveScores activeSport={activeSport} setActiveSport={setActiveSport} />
        </section>

        <section ref={addToRefs} className="reveal-init">
          <NewsSection />
        </section>

        <section id="pricing" ref={addToRefs} className="reveal-init">
          <Pricing />
        </section>

        <section ref={addToRefs} className="reveal-init">
          <Legends onMJClick={() => setShowMJReel(true)} />
        </section>
      </main>

      {showMJReel && <JordanReel onClose={() => setShowMJReel(false)} />}

      <footer style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '100px', background: 'var(--glass)', backdropFilter: 'blur(10px)' }}>
        <p style={{ color: 'var(--text-dim)' }}>© 2026 Sports Vision. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
