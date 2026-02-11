import React, { useState, useEffect } from 'react';

const MJ_STAGES = [
    {
        id: 'rookie',
        title: "1984: The Beginning",
        desc: "A legend takes flight. The rookie who changed the game forever.",
        img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
        duration: 8000
    },
    {
        id: 'glory',
        title: "The Champion",
        desc: "First of many. The tears, the sweat, and the first taste of NBA gold.",
        img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80",
        duration: 10000
    },
    {
        id: 'last_shot',
        title: "1998: The Last Shot",
        desc: "The perfect ending. A silhouette in time. 6 rings. 1 GOAT.",
        img: "https://images.unsplash.com/photo-1518063311540-06891974af47?auto=format&fit=crop&w=1200&q=80",
        duration: 12000
    }
];

const JordanReel = ({ onClose }) => {
    const [stage, setStage] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    if (stage < MJ_STAGES.length - 1) {
                        setStage(s => s + 1);
                        return 0;
                    } else {
                        clearInterval(timer);
                        return 100;
                    }
                }
                return prev + (100 / (MJ_STAGES[stage].duration / 100));
            });
        }, 100);

        return () => clearInterval(timer);
    }, [stage]);

    const current = MJ_STAGES[stage];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#000',
            zIndex: 20000,
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Search Bar / Progress */}
            <div style={{ display: 'flex', gap: '5px', padding: '20px' }}>
                {MJ_STAGES.map((_, i) => (
                    <div key={i} style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{
                            height: '100%',
                            background: '#ff0000',
                            width: i === stage ? `${progress}%` : (i < stage ? '100%' : '0%'),
                            transition: 'width 0.1s linear'
                        }}></div>
                    </div>
                ))}
            </div>

            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img
                    key={current.id}
                    src={current.img}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        animation: 'kenBurns 30s infinite alternate',
                        filter: 'brightness(0.7)'
                    }}
                    alt={current.title}
                />

                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    width: '80%',
                    animation: 'fadeInUp 1s ease-out'
                }}>
                    <h2 style={{ fontSize: '3rem', color: '#ff0000', textShadow: '2px 2px #000' }}>{current.title}</h2>
                    <p style={{ fontSize: '1.2rem', color: '#fff', marginTop: '10px', maxWidth: '600px', margin: '10px auto' }}>{current.desc}</p>
                </div>

                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '30px',
                        right: '30px',
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)'
                    }}
                >✕ Close Reel</button>
            </div>

            <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
        </div>
    );
};

export default JordanReel;
