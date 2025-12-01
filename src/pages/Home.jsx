import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Code, Cpu, Globe, Database, ArrowUpRight, Terminal, Headphones } from 'lucide-react';

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
                    I build <span style={{ opacity: 0.6 }}>interactive web experiences.</span>
                </h1>
                <p className="text-body" style={{ maxWidth: '80%', marginBottom: '2rem' }}>
                    Full-stack developer passionate about creating beautiful, functional, and user-centered digital products.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/projects" className="btn-pill btn-primary">View Projects <ArrowUpRight size={18} style={{ marginLeft: '8px' }} /></Link>
                    <button className="btn-pill btn-secondary">Contact Me</button>
                </div>
            </motion.div>

            {/* Stats/Experience Card - Spans 4 columns */}
            <motion.div
                className="bento-card"
                style={{ gridColumn: 'span 4', background: 'white' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h3 className="text-display text-large">20+</h3>
                        <p className="text-body" style={{ fontSize: '0.9rem' }}>Repositories</p>
                    </div>
                    <div style={{
                        width: '40px', height: '40px',
                        borderRadius: '50%', border: '1px solid black',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'var(--color-accent-yellow)'
                    }}>
                        <Terminal size={20} />
                    </div>
                </div>
                {/* Decorative visual - GitHub Contribution Graph style */}
                <div style={{ marginTop: '2rem', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {Array.from({ length: 28 }).map((_, i) => (
                        <div key={i} style={{
                            width: '12px', height: '12px', borderRadius: '2px',
                            background: Math.random() > 0.5 ? 'var(--color-accent-orange)' : '#eee',
                            opacity: Math.random() > 0.3 ? 1 : 0.3
                        }}></div>
                    ))}
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: 'auto' }}>
                    <div style={{ textAlign: 'center' }}><Globe size={24} /><div style={{ fontSize: '0.7rem', marginTop: '4px' }}>Web</div></div>
                    <div style={{ textAlign: 'center' }}><Database size={24} /><div style={{ fontSize: '0.7rem', marginTop: '4px' }}>Data</div></div>
                    <div style={{ textAlign: 'center' }}><Cpu size={24} /><div style={{ fontSize: '0.7rem', marginTop: '4px' }}>API</div></div>
                    <div style={{ textAlign: 'center' }}><Terminal size={24} /><div style={{ fontSize: '0.7rem', marginTop: '4px' }}>Dev</div></div>
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
                    <h4 className="text-display" style={{ fontSize: '1.5rem' }}>VoiceReader</h4>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>In-browser EPUB reader with read-aloud support.</p>
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
                    <a href="#" aria-label="LinkedIn" className="btn-pill" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%', border: '1px solid black' }}>
                        <Linkedin size={20} />
                    </a>
                    <a href="#" aria-label="Twitter" className="btn-pill" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%', border: '1px solid black' }}>
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:hello@example.com" aria-label="Email" className="btn-pill" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%', border: '1px solid black', background: 'var(--color-accent-dark)', color: 'white' }}>
                        <Mail size={20} />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
