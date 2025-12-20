import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { fetchPost } from '../services/blogService';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            setError(null);
            const fetchedPost = await fetchPost(slug);
            if (!fetchedPost) {
                setError('Post not found.');
            } else {
                setPost(fetchedPost);
            }
            setLoading(false);
        };
        loadPost();
    }, [slug]);

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
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
                <div className="blog-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading post...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-content">
                <div className="blog-error">
                    <h2 className="text-display text-large">Post Not Found</h2>
                    <p style={{ marginTop: '1rem', opacity: 0.6 }}>{error}</p>
                    <Link to="/blog" className="btn-pill btn-secondary" style={{ marginTop: '2rem' }}>
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Link to="/blog" className="blog-back-link">
                ← Back to Blog
            </Link>

            <article className="blog-post">
                <header className="blog-post-header">
                    <span className="blog-date">
                        {formatDate(post.metadata.date)}
                    </span>
                    <h1 className="blog-post-title text-display">
                        {post.metadata.title || 'Untitled'}
                    </h1>
                    {post.metadata.description && (
                        <p className="blog-post-description">
                            {post.metadata.description}
                        </p>
                    )}
                </header>

                <div className="blog-post-content">
                    <ReactMarkdown>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>
        </motion.div>
    );
};

export default BlogPost;
