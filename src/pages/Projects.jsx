import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        { id: 1, title: 'Project Alpha', description: 'A sonic exploration of data.' },
        { id: 2, title: 'Beta Wave', description: 'Visualizing frequencies in real-time.' },
        { id: 3, title: 'Gamma Ray', description: 'Synthesizing code and art.' },
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
                            background: 'rgba(255,255,255,0.03)'
                        }}
                    >
                        <h3 className="text-display" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            {project.title}
                        </h3>
                        <p className="text-body" style={{ opacity: 0.8 }}>
                            {project.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
