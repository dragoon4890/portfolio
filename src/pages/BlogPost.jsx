import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { fetchPost, BASE_URL } from '../services/blogService';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true); setError(null);
            const fetchedPost = await fetchPost(slug);
            setPost(fetchedPost);
            setLoading(false);
        };
        loadPost();
    }, [slug]);

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    if (loading) {
        return (
            <div className="page-content">
                <span className="fig-label">FIG_030 — Loading</span>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textAlign: 'center', padding: '3rem 0' }}>
                    <span className="terminal-cursor"></span> Loading post...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-content">
                <span className="fig-label">FIG_031 — Error</span>
                <h2 className="text-mono" style={{ fontSize: '1rem', letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Post Not Found</h2>
                <p className="text-body-serif" style={{ marginTop: '1rem', opacity: 0.6 }}>{error}</p>
                <Link to="/blog" className="back-link">← Back to Blog</Link>
            </div>
        );
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <span className="fig-label">FIG_030 — {post.metadata.title || 'Untitled'}</span>
            <Link to="/blog" className="back-link">← Back to Blog</Link>
            <article className="blog-post">
                <header className="blog-post-header" style={{ borderBottom: '1px solid #000', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                    <span className="blog-date">{formatDate(post.metadata.date)}</span>
                    <h1 className="text-mono" style={{ fontSize: '1.2rem', letterSpacing: '0.04em', textTransform: 'uppercase', border: 'none', padding: 0, marginBottom: '1rem' }}>
                        {post.metadata.title || 'Untitled'}
                    </h1>
                    {post.metadata.description && (
                        <p className="text-body-serif" style={{ fontSize: '1.05rem', color: '#333' }}>{post.metadata.description}</p>
                    )}
                </header>
                <div className="blog-post-content">
                    <ReactMarkdown urlTransform={(src) => src.startsWith('http') ? src : `${BASE_URL}/posts/${src}`}>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>
            <span className="plate-label" style={{ marginTop: '2rem' }}>Plate 1 of 1</span>
        </motion.div>
    );
};

export default BlogPost;