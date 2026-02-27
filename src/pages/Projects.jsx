import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Siren',
            description: 'Real-time audio translation pipeline that clones the speaker\'s voice and preserves emotional nuance across languages. Built under Samsung PRISM.',
            lang: 'Python',
            url: 'https://github.com/dragoon4890/Siren',
        },
        {
            id: 2,
            title: 'StatusLog',
            description: 'Polls the OpenAI (and other providers\') Atom status feed every 60s and logs incidents to console and a hosted GET / endpoint. Deployed on Render.',
            lang: 'Python',
            url: 'https://github.com/dragoon4890/StatusLog',
        },
        {
            id: 3,
            title: 'RayTracing',
            description: 'Ray tracer written in Go — built as a learning exercise for the language. Covers structs, interfaces, and Go\'s package system from scratch.',
            lang: 'Go',
            url: 'https://github.com/dragoon4890/RayTracing',
        },
        {
            id: 4,
            title: 'BallFight',
            description: 'A physics-based multiplayer brawler built in Godot. Players control balls and fight on a shared stage with collision and knockback mechanics.',
            lang: 'GDScript',
            url: 'https://github.com/dragoon4890/BallFight',
        },
    ];

    return (
        <div className="page-content">
            <h2 className="text-display text-large" style={{ marginBottom: '3rem' }}>
                PROJECTS
            </h2>
            <div className="grid-projects" style={{ display: 'grid', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card"
                        style={{
                            border: 'var(--border-thin)',
                            padding: '1.5rem',
                            background: 'rgba(255,255,255,0.03)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h3 className="text-display" style={{ fontSize: '1.5rem' }}>
                                {project.title}
                            </h3>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.6, fontSize: '0.8rem', textDecoration: 'none', color: 'inherit' }}
                            >
                                GitHub <ArrowUpRight size={14} />
                            </a>
                        </div>
                        <p className="text-body" style={{ opacity: 0.8 }}>
                            {project.description}
                        </p>
                        <span style={{
                            alignSelf: 'flex-start',
                            fontSize: '0.7rem', fontWeight: 600,
                            padding: '2px 8px', borderRadius: '12px',
                            border: '1px solid rgba(0,0,0,0.2)',
                            opacity: 0.6
                        }}>{project.lang}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

