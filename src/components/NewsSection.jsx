import React from 'react';

const NewsSection = () => {
    const news = [
        { id: 1, title: "The Rise of Next-Gen Superstars in Football", category: "Football", time: "2h ago", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&q=80" },
        { id: 2, title: "Grand Slam 2026: Who are the Favourites?", category: "Tennis", time: "4h ago", img: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&w=400&q=80" },
        { id: 3, title: "NBA Trade Rumors: Big Moves Expected", category: "Basketball", time: "6h ago", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=400&q=80" },
    ];

    return (
        <section id="news" className="container" style={{ marginTop: '80px' }}>
            <h2 style={{ marginBottom: '40px' }}>Breaking <span className="gradient-text">News</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                {news.map(item => (
                    <div key={item.id} style={{ cursor: 'pointer', overflow: 'hidden' }}>
                        <div style={{
                            borderRadius: '20px',
                            height: '240px',
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginBottom: '20px',
                            transition: 'transform 0.5s ease',
                            border: '1px solid var(--border)'
                        }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem' }}>{item.category} • {item.time}</span>
                        <h3 style={{ marginTop: '10px', fontSize: '1.4rem' }}>{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
