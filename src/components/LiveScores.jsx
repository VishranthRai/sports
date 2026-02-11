import React from 'react';

const SPORTS = ['All', 'Football', 'Basketball', 'Tennis', 'Cricket'];

const LiveScores = ({ activeSport, setActiveSport }) => {
    const scores = [
        { id: 1, sport: 'Football', team1: 'Real Madrid', team2: 'Barcelona', score1: 2, score2: 1, status: '85\'', league: 'La Liga' },
        { id: 2, sport: 'Basketball', team1: 'Lakers', team2: 'Warriors', score1: 102, score2: 98, status: 'Q4', league: 'NBA' },
        { id: 3, sport: 'Football', team1: 'Man City', team2: 'Liverpool', score1: 0, score2: 0, status: '12\'', league: 'Premier League' },
        { id: 4, sport: 'Tennis', team1: 'Djokovic', team2: 'Nadal', score1: 6, score2: 4, status: 'Set 2', league: 'ATP Finals' },
    ];

    const filteredScores = activeSport === 'All' ? scores : scores.filter(s => s.sport === activeSport);

    return (
        <div className="glass" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2>Live <span className="gradient-text">Scores</span></h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {SPORTS.map(sport => (
                        <button
                            key={sport}
                            onClick={() => setActiveSport(sport)}
                            style={{
                                background: activeSport === sport ? 'var(--primary)' : 'transparent',
                                border: '1px solid var(--border)',
                                color: activeSport === sport ? 'black' : 'white',
                                padding: '5px 15px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            {sport}
                        </button>
                    ))}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {filteredScores.map(score => (
                    <div key={score.id} className="glass score-card" style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '15px' }}>
                            <span>{score.league}</span>
                            <span style={{ color: 'var(--accent)', fontWeight: 800 }}>• {score.status}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 600 }}>{score.team1}</span>
                                <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{score.score1}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 600 }}>{score.team2}</span>
                                <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{score.score2}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveScores;
