import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="container" style={{ minHeight: '100vh' }}>
            {/* Top Navigation Pill */}
            <nav className="nav-pill">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link to="/" aria-label="Home" className="text-display" style={{ display: 'flex', alignItems: 'center' }}>
                        <Smile size={32} fill="var(--color-accent-dark)" color="var(--color-bg)" strokeWidth={1.5} />
                    </Link>
                    <div style={{ width: '1px', height: '20px', background: 'var(--color-text)', opacity: 0.3 }}></div>
                </div>

                <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <NavItem to="/" label="Home" current={location.pathname === '/'} />
                    <NavItem to="/projects" label="Projects" current={location.pathname === '/projects'} />
                    <NavItem to="/blog" label="Blog" current={location.pathname === '/blog'} />
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '1px', height: '20px', background: 'var(--color-text)', opacity: 0.3 }}></div>
                    <a href="mailto:hello@example.com" className="btn-pill" style={{
                        background: 'var(--color-accent-yellow)',
                        padding: '0.5rem 1.2rem',
                        fontSize: '0.9rem',
                        border: '1px solid black'
                    }}>
                        Contact
                    </a>
                </div>
            </nav>

            {/* Main Content Area */}
            <main>
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <Outlet />
                </motion.div>
            </main>
        </div>
    );
};

const NavItem = ({ to, label, current }) => (
    <li>
        <Link to={to} style={{
            fontSize: '0.95rem',
            fontWeight: current ? 600 : 400,
            opacity: current ? 1 : 0.7,
            transition: 'opacity 0.2s'
        }}>
            {label}
        </Link>
    </li>
);

export default Layout;
