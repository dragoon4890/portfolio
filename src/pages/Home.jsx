import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [copied, setCopied] = useState(false);
    const cliContent = `$> whoami\nharsh\n\n$> ls projects/\nSiren   StatusLog   RayTracing   BallFight\n\n$> echo "from scratch"\nfrom scratch`;
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(cliContent).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, [cliContent]);

    return (
        <div>
            <section className="inspo-hero">
                <div className="inspo-pill">
                    <span className="inspo-pill-dot" />
                    Hi, I&apos;m Harsh
                </div>
                <h1 className="inspo-title">
                    Engineer <em>&</em> Builder
                </h1>
                <p className="inspo-sub">
                    Building real-time systems, ML workflows and backend infrastructure — turning ambiguous problems into shipped products, grounded in experimentation, and increasingly built from scratch.
                </p>
                <div className="inspo-meta">
                    <span>Currently building <strong>Siren</strong> & <strong>MapBattle</strong></span>
                    <span style={{ opacity: 0.35, margin: '0 6px' }}>|</span>
                    <span>Previously — <strong>StatusLog</strong> · RayTracing · BallFight</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                    <Link to="/projects" className="brutal-btn primary">View Projects →</Link>
                    <a href="mailto:harshsks123@gmail.com" className="brutal-btn secondary">Contact</a>
                </div>
            </section>

            <div className="hero-grid">
                <div className="brutal-card" style={{ padding: 0, overflow: 'hidden' }}>
                    <div className="terminal-window" style={{ border: 'none', borderRadius: 0 }}>
                        <div className="terminal-titlebar">
                            <span className="terminal-dot red"></span>
                            <span className="terminal-dot yellow"></span>
                            <span className="terminal-dot green"></span>
                            <span className="text-mono" style={{ fontSize: '0.6rem', color: '#888', marginLeft: '8px', letterSpacing: '0.08em' }}>main →</span>
                        </div>
                        <div className="terminal-body">
                            <div className="terminal-line"><span className="terminal-prompt">$&gt; </span><span className="terminal-cmd">whoami</span></div>
                            <div className="terminal-line terminal-output">harsh</div>
                            <div className="terminal-line">&nbsp;</div>
                            <div className="terminal-line"><span className="terminal-prompt">$&gt; </span><span className="terminal-cmd">ls projects/</span></div>
                            <div className="terminal-line terminal-output">Siren&nbsp;&nbsp;&nbsp;StatusLog&nbsp;&nbsp;RayTracing&nbsp;&nbsp;BallFight</div>
                            <div className="terminal-line">&nbsp;</div>
                            <div className="terminal-line"><span className="terminal-prompt">$&gt; </span><span className="terminal-cmd">echo &quot;from scratch&quot;</span></div>
                            <div className="terminal-line terminal-output">from scratch</div>
                            <div className="terminal-line">&nbsp;</div>
                            <div className="terminal-line"><span className="terminal-cursor"></span></div>
                            <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</button>
                        </div>
                    </div>
                </div>

                <div className="brutal-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="text-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-faint)' }}>Currently Building</span>
                        <span className="live-dot"></span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>MapBattle</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        GeoGuessr style party game where you have to guess from picture of a shared memory
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                        {['Python', 'FastAPI', 'JavaScript', 'Go', 'React'].map(tech => (
                            <span key={tech} className="brutal-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hero-grid" style={{ marginTop: '1.25rem' }}>
                <div className="brutal-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="text-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-faint)' }}>Current Focus</span>
                        <span className="text-mono" style={{ fontSize: '0.7rem', color: 'var(--color-text-faint)' }}>//</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Siren</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        Real-time speech translation that clones the speaker&apos;s voice and preserves emotion.
                    </p>
                </div>
                <div className="brutal-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="text-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-faint)' }}>Connect</span>
                        <span className="text-mono" style={{ fontSize: '0.7rem', color: 'var(--color-text-faint)' }}>//</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                        {[
                            { id: 'github', href: 'https://github.com/harshsks' },
                            { id: 'linkedin', href: 'https://linkedin.com/in/harshsks' },
                            { id: 'twitter', href: 'https://twitter.com/harshsks' },
                            { id: 'mail', href: 'mailto:harshsks123@gmail.com' },
                        ].map(s => (
                            <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="brutal-btn secondary" style={{ fontSize: '0.72rem', padding: '0.55rem 1rem' }}>{s.id}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
