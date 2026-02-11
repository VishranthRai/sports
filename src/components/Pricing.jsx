import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$9.99",
            period: "/month",
            features: ["HD Streaming", "2 Concurrent Screens", "Live Stats Feed", "Ad-supported"],
            featured: false
        },
        {
            name: "Pro",
            price: "$19.99",
            period: "/month",
            features: ["4K Ultra HD", "4 Concurrent Screens", "Real-time AI Insights", "No Ads", "Exclusive Interviews"],
            featured: true
        },
        {
            name: "Elite",
            price: "$29.99",
            period: "/month",
            features: ["8K Master Quality", "Unlimited Screens", "VIP Multi-view Mode", "Priority Access", "Merchandise Discounts"],
            featured: false
        }
    ];

    return (
        <section id="plans" className="container" style={{ marginTop: '120px', paddingBottom: '60px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Choose Your <span className="gradient-text">Plan</span></h2>
                <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>Elevate your game with premium sports streaming</p>
            </div>
            <div className="pricing-grid">
                {plans.map(plan => (
                    <div key={plan.name} className={`glass pricing-card ${plan.featured ? 'featured' : ''}`} style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', color: plan.featured ? 'var(--primary)' : 'white' }}>{plan.name}</h3>
                            <div style={{ marginTop: '20px' }}>
                                <span style={{ fontSize: '3rem', fontWeight: 800 }}>{plan.price}</span>
                                <span style={{ color: 'var(--text-dim)' }}>{plan.period}</span>
                            </div>
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {plan.features.map(feature => (
                                <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--primary)' }}>✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={plan.featured ? 'btn-primary' : 'glass'} style={{
                            marginTop: 'auto',
                            padding: '15px',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            border: plan.featured ? 'none' : '1px solid var(--border)',
                            color: 'white',
                            background: plan.featured ? '' : 'rgba(255,255,255,0.05)'
                        }}>
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
