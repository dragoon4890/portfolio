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
            <span className="fig-label">FIG_000 — Hero Configuration</span>

            <div className="hero-grid">
                <div className="hero-left">
                    <div className="text-pixel text-xl-head" style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }}>
                        HI, I&apos;M HARSH.
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                        <span className="brutal-tag">interests</span>
                        <span className="brutal-tag">@ml</span>
                        <span className="brutal-tag">@backend</span>
                    </div>

                    <p className="text-body-serif" style={{ fontSize: '1rem' }}>
                        Building real-time systems, ML workflows, and backend infrastructure. From scratch.
                    </p>

                    <div style={{ display: 'flex', gap: '0', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                        <Link to="/projects" className="brutal-btn primary">
                            View Projects <span className="text-pixel" style={{ fontSize: '0.5rem' }}>&rarr;</span>
                        </Link>
                        <a href="mailto:harshsks123@gmail.com" className="brutal-btn secondary">Contact</a>
                    </div>

                    <div style={{ marginTop: '1rem', borderTop: '1px solid #000', paddingTop: '0.75rem' }}>
                        <span className="text-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.6 }}>
                            Plate 1 of 3
                        </span>
                    </div>
                </div>

                <div className="hero-right brutal-card" style={{ padding: 0 }}>
                    <div className="terminal-window" style={{ border: 'none' }}>
                        <div className="terminal-titlebar">
                            <span className="terminal-dot red"></span>
                            <span className="terminal-dot yellow"></span>
                            <span className="terminal-dot green"></span>
                            <span className="text-mono" style={{ fontSize: '0.6rem', color: '#888', marginLeft: '8px', letterSpacing: '0.1em' }}>main →</span>
                        </div>
                        <div className="terminal-body">
                            <div className="terminal-line">
                                <span className="terminal-prompt">$&gt; </span><span className="terminal-cmd">whoami</span>
                            </div>
                            <div className="terminal-line terminal-output">harsh</div>
                            <div className="terminal-line">&nbsp;</div>
                            <div className="terminal-line">
                                <span className="terminal-prompt">$&gt; </span><span className="terminal-cmd">ls projects/</span>
                            </div>
                            <div className="terminal-line terminal-output">Siren&nbsp;&nbsp;&nbsp;StatusLog&nbsp;&nbsp;RayTracing&nbsp;&nbsp;BallFight</div>
                            <div className="terminal-line">&nbsp;</div>
                            <div className="terminal-line">
                                <span className="terminal-prompt">$&gt; </span><span className="terminal-cmd">echo "from scratch"</span>
                            </div>
                            <div className="terminal-line terminal-output">from scratch</div>
                            <div className="terminal-line">&nbsp;</div>
                            <div className="terminal-line">
                                <span className="terminal-cursor"></span>
                            </div>
                            <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    <span className="plate-label" style={{ borderTop: '1px solid #000', borderBottom: '1px solid #000', borderLeft: 'none', borderRight: 'none' }}>Plate 2 of 3</span>
                </div>
            </div>

            <span className="fig-label" style={{ marginTop: '2rem' }}>FIG_002 — System Modules</span>

            <div className="hero-grid" style={{ marginTop: '1.5rem' }}>
                <div className="brutal-card" style={{ borderRight: '1px solid #000' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="text-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Currently Building</span>
                        <span className="live-dot"></span>
                    </div>
                    <h3 className="text-mono" style={{ fontSize: '1rem', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>MapBattle</h3>
                    <p className="text-body-serif" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                        GeoGuessr style party game where you have to guess from picture of a shared memory
                    </p>
                    <span className="plate-label" style={{ marginTop: '1rem' }}>Plate 3 of 3</span>
                </div>

                <div className="brutal-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="text-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tech Stack</span>
                        <span className="text-mono" style={{ fontSize: '0.7rem' }}>//</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {['Python', 'FastAPI', 'JavaScript', 'Go', 'React'].map(tech => (
                            <span key={tech} className="brutal-tag" style={{ marginBottom: '0.4rem' }}>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hero-grid" style={{ marginTop: '1.5rem' }}>
                <div className="brutal-card" style={{ borderRight: '1px solid #000' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="text-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Current Focus</span>
                        <span className="text-mono" style={{ fontSize: '0.7rem' }}>//</span>
                    </div>
                    <h3 className="text-mono" style={{ fontSize: '1rem', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>Siren</h3>
                    <p className="text-body-serif" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                        Real-time speech translation that clones the speaker&apos;s voice and preserves emotion.
                    </p>
                </div>

                <div className="brutal-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="text-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Connect</span>
                        <span className="text-mono" style={{ fontSize: '0.7rem' }}>//</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0', marginTop: '0.5rem' }}>
                        {['github', 'linkedin', 'twitter', 'mail'].map((social, i) => (
                            <a
                                key={social}
                                href={social === 'mail' ? 'mailto:harshsks123@gmail.com' : `https://${social}.com/harshsks`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="brutal-btn"
                                style={{
                                    borderRight: i < 3 ? '1px solid #000' : 'none',
                                    borderTop: '1px solid #000',
                                    borderBottom: '1px solid #000',
                                    borderLeft: i === 0 ? '1px solid #000' : 'none',
                                    borderRadius: 0,
                                    background: i === 3 ? 'var(--color-text)' : 'var(--color-surface)',
                                    color: i === 3 ? 'var(--color-surface)' : 'var(--color-text)',
                                    fontSize: '0.6rem',
                                    padding: '0.5rem 0.75rem',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;