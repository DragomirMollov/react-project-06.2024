import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import styles from './Header.module.css';

export default function Header() {
    const { isAuthenticated } = useAuthContext();
    return (
        <div className={styles.headerContainer}>
            <header className={styles.circleNav}>
                <Link className={`${styles.navLink} ${styles.home}`} to="/">Home</Link>
                <Link className={styles.navLink} to="/projects">All projects</Link>
                {isAuthenticated ? (
                    <div id="user" className={styles.authLinks}>
                        <Link className={styles.navLink} to="/main">Main</Link>
                        <Link className={styles.navLink} to="/logout">Logout</Link>
                    </div>
                ) : (
                    <div id="guest" className={styles.authLinks}>
                        <Link className={styles.navLink} to="/login">Login</Link>
                        <Link className={styles.navLink} to="/register">Register</Link>
                    </div>
                )}
            </header>
        </div>
    );
}
