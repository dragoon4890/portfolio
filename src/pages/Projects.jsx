import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        { id: 1, title: 'Siren', description: 'Real-time audio translation pipeline that clones the speaker\'s voice and preserves emotional nuance across languages. Built under Samsung PRISM.', lang: 'Python', url: 'https://github.com/dragoon4890/Siren' },
        { id: 2, title: 'StatusLog', description: 'Polls the OpenAI (and other providers\') Atom status feed every 60s and logs incidents to console and a hosted GET / endpoint. Deployed on Render.', lang: 'Python', url: 'https://github.com/dragoon4890/StatusLog' },
        { id: 3, title: 'RayTracing', description: 'Ray tracer written in Go — built as a learning exercise for the language. Covers structs, interfaces, and Go\'s package system from scratch.', lang: 'Go', url: 'https://github.com/dragoon4890/RayTracing' },
        { id: 4, title: 'BallFight', description: 'A physics-based multiplayer brawler built in Godot. Players control balls and fight on a shared stage with collision and knockback mechanics.', lang: 'GDScript', url: 'https://github.com/dragoon4890/BallFight' },
    ];

    return (
        <div className="page-content">
            <span className="fig-label">FIG_010 — Project Roster</span>
            <div className="section-heading">Projects</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="project-card"
                        style={{ borderTop: index > 0 ? 'none' : '1px solid #000' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h3 className="project-title">{project.title}</h3>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                                github <span className="text-pixel" style={{ fontSize: '0.4rem' }}>→</span>
                            </a>
                        </div>
                        <p className="text-body-serif" style={{ fontSize: '0.9rem', opacity: 0.8 }}>{project.description}</p>
                        <span className="project-lang">{project.lang}</span>
                    </motion.div>
                ))}
            </div>
            <span className="plate-label" style={{ marginTop: '1rem' }}>Plate 1 of 1</span>
        </div>
    );
};

export default Projects;