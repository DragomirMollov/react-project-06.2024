import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import styles from './Login.module.css';

const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler);

    return (
        <section className={styles.loginSection}>
            <form id="login" onSubmit={submitHandler} className={styles.loginForm}>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    placeholder="Sokka@gmail.com"
                    className={styles.inputField}
                />
                <label htmlFor="login-password">Password:</label>
                <input
                    type="password"
                    id="login-password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    className={styles.inputField}
                />
                <input type="submit" className={`${styles.btn} ${styles.submit}`} value="Login" />
                <p className={styles.field}>
                    <span>If you don't have a profile, click <a href="#">here</a></span>
                </p>
            </form>
        </section>
    );
}
