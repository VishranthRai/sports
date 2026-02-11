import React, { useState } from 'react';
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

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <section id="scores" className="container" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
          <LiveScores activeSport={activeSport} setActiveSport={setActiveSport} />
        </section>
        <NewsSection />
        <Pricing />
        <Legends onMJClick={() => setShowMJReel(true)} />
      </main>
      {showMJReel && <JordanReel onClose={() => setShowMJReel(false)} />}
      <footer style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid var(--border)', marginTop: '100px' }}>
        <p style={{ color: 'var(--text-dim)' }}>© 2026 Sports Vision. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
