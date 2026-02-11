import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'url("https://images.unsplash.com/photo-1541252260730-0412e3e2104e?auto=format&fit=crop&w=1920&q=80") center/cover no-repeat',
            position: 'relative',
            marginTop: '-100px',
            paddingTop: '100px'
        }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(5,5,5,0.4), var(--bg))' }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h1 className="red-black-heading">Sports <br />Vision</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto 40px' }}>
                    Experience the thrill of the game with real-time stats, breaking news, and exclusive insights from the world of sports.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button className="btn-primary">Get Started</button>
                    <button className="glass" style={{ padding: '12px 32px', color: 'white', fontWeight: 600, cursor: 'pointer', borderRadius: '50px' }}>Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
