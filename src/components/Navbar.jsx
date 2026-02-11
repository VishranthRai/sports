import React from 'react';

const Navbar = () => {
    return (
        <nav className="glass" style={{ margin: '20px', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '20px', zIndex: 1000 }}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                SPORTS<span className="gradient-text">VISION</span><span style={{ color: 'var(--primary)', marginLeft: '5px' }}>+</span>
            </div>
            <div className="nav-links" style={{ display: 'flex', gap: '30px' }}>
                <a href="#home" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>Home</a>
                <a href="#legends" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 800, border: '1px solid var(--primary)', padding: '4px 12px', borderRadius: '10px' }}>Legends</a>
                <a href="#scores" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>Live Scores</a>
                <a href="#news" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>News</a>
                <a href="#stats" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>Stats</a>
            </div>
            <button className="btn-primary" style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: '5px' }} onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>
                Join Plus <span style={{ fontWeight: 900 }}>+</span>
            </button>
        </nav>
    );
};

export default Navbar;
