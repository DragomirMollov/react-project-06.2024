/* eslint-disable antfu/top-level-function */
/* eslint-disable style/indent */
import { login, logout, register } from '../api/auth-api';
import { useAuthContext } from '../contexts/AuthContext.jsx';

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
            const { password: _, ...authData } = await login(email, password);

           changeAuthState(authData);

           return authData;
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);

        changeAuthState(authData);

        return authData;
    };

    return registerHandler;
};

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext();

    const logoutHandler = async () => {
        localLogout();
        await logout();
        // localStorage.clear();
    };

    return logoutHandler;
};
