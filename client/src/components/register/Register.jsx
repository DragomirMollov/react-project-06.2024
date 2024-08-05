import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import styles from './Register.module.css';

const initialValues = { email: '', password: '', 'confirm-password': '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values['confirm-password']) {
            return setError('Password mismatch!');
        };

        try {
            await register(values.email, values.password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        };
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);

    return (
        <section className={styles.registerSection}>
            <form id="register" onSubmit={submitHandler} className={styles.registerForm}>
                <h1>Register</h1>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    placeholder="maria@email.com"
                    className={styles.inputField}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="register-password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    className={styles.inputField}
                />

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    value={values['confirm-password']}
                    onChange={changeHandler}
                    className={styles.inputField}
                />

                {error && (
                    <p className={styles.error}>
                        <span>{error}</span>
                    </p>
                )}

                <input className={`${styles.btn} ${styles.submit}`} type="submit" value="Register" />

                <p className={styles.field}>
                    <span>If you already have a profile click <Link to="/login">here</Link></span>
                </p>
            </form>
        </section>
    );
};
