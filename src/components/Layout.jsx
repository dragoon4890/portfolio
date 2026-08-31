import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="container" style={{ minHeight: '100vh' }}>
            <nav className="brutal-nav">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Link to="/" className="text-pixel" style={{ fontSize: '0.6rem', letterSpacing: '0.05em', border: '1px solid #000', padding: '4px 8px' }}>
                        HARSH
                    </Link>
                    <span className="text-mono" style={{ fontSize: '0.6rem', opacity: 0.4 }}>v2.0</span>
                </div>

                <ul className="nav-links">
                    <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                    <li><Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link></li>
                    <li><Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link></li>
                </ul>

                <a href="mailto:hello@example.com" className="nav-contact">Contact</a>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;