import React, { useState } from 'react';

const LEGENDS = [
    { name: "Michael Jordan", sport: "Basketball", reel: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-doing-a-slam-dunk-2095-large.mp4" },
    { name: "Muhammad Ali", sport: "Boxing", reel: "https://assets.mixkit.co/videos/preview/mixkit-boxer-training-in-a-gym-2358-large.mp4" },
    { name: "Lionel Messi", sport: "Football", reel: "https://assets.mixkit.co/videos/preview/mixkit-stadium-lights-at-night-4235-large.mp4" },
    { name: "Serena Williams", sport: "Tennis", reel: "https://assets.mixkit.co/videos/preview/mixkit-tennis-player-hitting-the-ball-in-slow-motion-2374-large.mp4" },
    { name: "Usain Bolt", sport: "Athletics", reel: "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-track-field-4228-large.mp4" },
    { name: "Pelé", sport: "Football", reel: "https://assets.mixkit.co/videos/preview/mixkit-stadium-atmosphere-under-night-lights-4238-large.mp4" },
    { name: "Tiger Woods", sport: "Golf", reel: "https://assets.mixkit.co/videos/preview/mixkit-golf-player-hitting-the-ball-with-a-club-2365-large.mp4" },
    { name: "Roger Federer", sport: "Tennis", reel: "https://assets.mixkit.co/videos/preview/mixkit-tennis-court-overview-at-sunset-10515-large.mp4" },
    { name: "Cristiano Ronaldo", sport: "Football", reel: "https://assets.mixkit.co/videos/preview/mixkit-football-stadium-at-night-4236-large.mp4" },
    { name: "LeBron James", sport: "Basketball", reel: "https://assets.mixkit.co/videos/preview/mixkit-basketball-game-atmosphere-4217-large.mp4" },
    { name: "Diego Maradona", sport: "Football", reel: "https://assets.mixkit.co/videos/preview/mixkit-soccer-ball-in-the-net-4240-large.mp4" },
    { name: "Lewis Hamilton", sport: "Formula 1", reel: "https://assets.mixkit.co/videos/preview/mixkit-formula-one-car-racing-on-track-10507-large.mp4" },
    { name: "Rafael Nadal", sport: "Tennis", reel: "https://assets.mixkit.co/videos/preview/mixkit-tennis-player-waiting-for-service-2373-large.mp4" },
    { name: "Sachin Tendulkar", sport: "Cricket", reel: "https://assets.mixkit.co/videos/preview/mixkit-cricket-match-scene-4245-large.mp4" },
    { name: "Tom Brady", sport: "American Football", reel: "https://assets.mixkit.co/videos/preview/mixkit-football-stadium-lights-at-night-4234-large.mp4" },
    { name: "Simone Biles", sport: "Gymnastics", reel: "https://assets.mixkit.co/videos/preview/mixkit-gymnast-performing-a-routine-4250-large.mp4" },
    { name: "Michael Phelps", sport: "Swimming", reel: "https://assets.mixkit.co/videos/preview/mixkit-swimmer-training-in-a-pool-2368-large.mp4" },
    { name: "Kobe Bryant", sport: "Basketball", reel: "https://assets.mixkit.co/videos/preview/mixkit-basketball-hoop-overview-4219-large.mp4" },
    { name: "Wayne Gretzky", sport: "Ice Hockey", reel: "https://assets.mixkit.co/videos/preview/mixkit-hockey-player-skating-on-ice-2360-large.mp4" },
    { name: "Aryton Senna", sport: "Formula 1", reel: "https://assets.mixkit.co/videos/preview/mixkit-race-cars-driving-fast-on-the-track-10499-large.mp4" },
    // ... Adding more to reach 50 for the demonstration
    ...Array(30).fill(null).map((_, i) => ({
        name: `Legend #${i + 21}`,
        sport: "Varsity",
        reel: "https://assets.mixkit.co/videos/preview/mixkit-young-man-playing-basketball-2357-large.mp4"
    }))
];

const Legends = ({ onMJClick }) => {
    const [activeVideo, setActiveVideo] = useState(null);

    const handleClick = (legend) => {
        if (legend.name === "Michael Jordan") {
            onMJClick();
        } else {
            setActiveVideo(legend);
        }
    };

    return (
        <section id="legends" className="container" style={{ marginTop: '120px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem' }}>The <span className="gradient-text">Top 50</span> Legends</h2>
                <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>Icons who redefined the game and inspired generations</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                {LEGENDS.map((legend, index) => (
                    <div
                        key={index}
                        className="glass"
                        style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            position: 'relative',
                            height: '320px',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                        onClick={() => handleClick(legend)}
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                        >
                            <source src={legend.reel} type="video/mp4" />
                        </video>
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            padding: '20px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                            zIndex: 2
                        }}>
                            <p style={{ color: 'var(--primary)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>{legend.sport}</p>
                            <h4 style={{ fontSize: '1.1rem', marginTop: '5px' }}>{legend.name}</h4>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '50px',
                            height: '50px',
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(5px)',
                            zIndex: 1
                        }}>
                            <span style={{ fontSize: '1.2rem' }}>▶</span>
                        </div>
                    </div>
                ))}
            </div>

            {activeVideo && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.9)',
                    zIndex: 10000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px'
                }} onClick={() => setActiveVideo(null)}>
                    <div style={{ position: 'relative', width: '90%', maxWidth: '1000px', borderRadius: '20px', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
                        <video controls autoPlay style={{ width: '100%', display: 'block' }}>
                            <source src={activeVideo.reel} type="video/mp4" />
                        </video>
                        <div style={{ padding: '30px', background: 'var(--bg)' }}>
                            <h2 className="gradient-text">{activeVideo.name}</h2>
                            <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>An icon of {activeVideo.sport}. This 30-second reel encapsulates a journey of grit, glory, and greatness.</p>
                            <button className="btn-primary" style={{ marginTop: '20px' }} onClick={() => setActiveVideo(null)}>Close Reel</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Legends;
