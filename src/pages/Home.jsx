import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Code, ArrowUpRight, Headphones } from 'lucide-react';

const Home = () => {
    return (
        <div className="bento-grid">
            {/* Hero Section - Spans 8 columns */}
            <motion.div
                className="bento-card"
                style={{ gridColumn: 'span 8', gridRow: 'span 2', justifyContent: 'center' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h1 className="text-display text-huge" style={{ marginBottom: '1.5rem' }}>
                    Hi, I'm <span style={{ color: 'var(--color-accent-orange)' }}>Harsh</span>.
                    <br />
                    I build <span style={{ opacity: 0.6 }}>things that actually work.</span>
                </h1>
                <p className="text-body" style={{ maxWidth: '80%', marginBottom: '2rem' }}>
                    Backend-leaning full-stack developer. I like building real tools — web apps, APIs, CLI utilities, and side projects that go too far.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/projects" className="btn-pill btn-primary">View Projects <ArrowUpRight size={18} style={{ marginLeft: '8px' }} /></Link>
                    <button className="btn-pill btn-secondary">Contact Me</button>
                </div>
            </motion.div>

            {/* Currently Building Card - Spans 4 columns */}
            <motion.div
                className="bento-card"
                style={{ gridColumn: 'span 4', background: 'white' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.5 }}>Currently Building</span>
                    <div style={{
                        width: '10px', height: '10px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        boxShadow: '0 0 0 3px rgba(34,197,94,0.25)'
                    }} />
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                    <h3 className="text-display text-large" style={{ marginBottom: '0.4rem' }}>MapBattle</h3>
                    <p className="text-body" style={{ fontSize: '0.9rem', opacity: 0.7 }}>GeoGuessr style party game where you have to guess from picture of a shared memory</p>
                </div>
            </motion.div>

            {/* Tech Stack Card - Spans 4 columns */}
            <motion.div
                className="bento-card"
                style={{ gridColumn: 'span 4', background: '#EAE6DD' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <h4 className="text-display">Tech Stack</h4>
                    <Code size={20} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem', marginTop: 'auto' }}>
                    {['Python', 'FastAPI', 'JavaScript', 'Go', 'React'].map((tech) => (
                        <div key={tech} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.04em',
                                padding: '6px 4px', borderRadius: '6px',
                                border: '1px solid rgba(0,0,0,0.15)', background: 'rgba(255,255,255,0.6)'
                            }}>{tech}</div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Current Focus Card - Spans 4 columns */}
            <motion.div
                className="bento-card"
                style={{ gridColumn: 'span 4', background: 'var(--color-accent-orange)', color: 'white' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.8rem', border: '1px solid white', padding: '2px 8px', borderRadius: '12px' }}>Current Focus</span>
                    <Headphones size={18} />
                </div>
                <div style={{ marginTop: 'auto' }}>
                    <h4 className="text-display" style={{ fontSize: '1.5rem' }}>Siren</h4>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Real-time speech translation that clones the speaker's voice and preserves emotion.</p>
                </div>
            </motion.div>

            {/* Connect Card - Spans 8 columns */}
            <motion.div
                className="bento-card"
                style={{ gridColumn: 'span 8', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div>
                    <h3 className="text-display text-large">Let's Connect</h3>
                    <p className="text-body">Open for collaborations and opportunities.</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="https://github.com/dragoon4890" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-pill" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%', border: '1px solid black' }}>
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/harshsks" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-pill" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%', border: '1px solid black' }}>
                        <Linkedin size={20} />
                    </a>
                    <a href="https://x.com/harshsks789" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="btn-pill" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%', border: '1px solid black' }}>
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:harshsks123@gmail.com" aria-label="Email" className="btn-pill" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%', border: '1px solid black', background: 'var(--color-accent-dark)', color: 'white' }}>
                        <Mail size={20} />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
