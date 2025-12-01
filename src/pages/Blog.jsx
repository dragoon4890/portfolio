import { motion } from 'framer-motion';

const Blog = () => {
    const posts = [
        { id: 1, title: 'The Sound of Code', date: '2024-03-15' },
        { id: 2, title: 'Rhythm in Design', date: '2024-03-10' },
    ];

    return (
        <div className="page-content">
            <h2 className="text-display text-large" style={{ marginBottom: '3rem' }}>
                THOUGHTS
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            borderBottom: 'var(--border-thin)',
                            paddingBottom: '2rem'
                        }}
                    >
                        <span style={{ fontFamily: 'monospace', opacity: 0.6, display: 'block', marginBottom: '0.5rem' }}>
                            {post.date}
                        </span>
                        <h3 className="text-display" style={{ fontSize: '2rem' }}>
                            {post.title}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
