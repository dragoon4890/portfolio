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
            if (fetchedPosts.length === 0) {
                setError('No posts found or failed to load.');
            }
            setPosts(fetchedPosts);
            setLoading(false);
        };
        loadPosts();
    }, []);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="page-content">
                <h2 className="text-display text-large" style={{ marginBottom: '3rem' }}>
                    THOUGHTS
                </h2>
                <div className="blog-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading posts...</p>
                </div>
            </div>
        );
    }

    if (error && posts.length === 0) {
        return (
            <div className="page-content">
                <h2 className="text-display text-large" style={{ marginBottom: '3rem' }}>
                    THOUGHTS
                </h2>
                <div className="blog-empty">
                    <p style={{ opacity: 0.6 }}>No posts yet. Check back soon!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="page-content">
            <h2 className="text-display text-large" style={{ marginBottom: '3rem' }}>
                THOUGHTS
            </h2>
            <div className="blog-list">
                {posts.map((post, index) => (
                    <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="blog-card"
                    >
                        <Link to={`/blog/${post.slug}`} className="blog-card-link">
                            <span className="blog-date">
                                {formatDate(post.date)}
                            </span>
                            <h3 className="blog-title text-display">
                                {post.title}
                            </h3>
                            {post.description && (
                                <p className="blog-description">
                                    {post.description}
                                </p>
                            )}
                            <span className="blog-read-more">
                                Read more →
                            </span>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
