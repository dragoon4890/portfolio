import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchPostsIndex } from '../services/blogService';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const fetchedPosts = await fetchPostsIndex();
            if (fetchedPosts.length === 0) setError('No posts found.');
            setPosts(fetchedPosts);
            setLoading(false);
        };
        loadPosts();
    }, []);

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    if (loading) {
        return (
            <div className="page-content">
                <span className="fig-label">FIG_020 — Loading</span>
                <div className="section-heading">Thoughts</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textAlign: 'center', padding: '3rem 0' }}>
                    <span className="terminal-cursor"></span> Loading posts...
                </div>
            </div>
        );
    }

    if (error && posts.length === 0) {
        return (
            <div className="page-content">
                <span className="fig-label">FIG_021 — Empty</span>
                <div className="section-heading">Thoughts</div>
                <p className="text-body-serif" style={{ opacity: 0.6 }}>No posts yet. Check back soon!</p>
            </div>
        );
    }

    return (
        <div className="page-content">
            <span className="fig-label">FIG_020 — Thoughts Index</span>
            <div className="section-heading">Thoughts</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {posts.map((post, index) => (
                    <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="blog-card"
                        style={{ borderTop: index > 0 ? 'none' : '1px solid #000' }}
                    >
                        <Link to={`/blog/${post.slug}`} className="blog-card-link">
                            <span className="blog-date">{formatDate(post.date)}</span>
                            <h3 className="blog-title">{post.title}</h3>
                            {post.description && <p className="blog-desc">{post.description}</p>}
                            <span className="read-more">Read more <span className="text-pixel" style={{ fontSize: '0.4rem' }}>→</span></span>
                        </Link>
                    </motion.article>
                ))}
            </div>
            <span className="plate-label" style={{ marginTop: '1rem' }}>Plate 1 of 1</span>
        </div>
    );
};

export default Blog;