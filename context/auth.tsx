/*import { router } from "expo-router"
import { createContext, ReactNode, useContext, useState } from "react"
import axios from 'axios'*/

/*interface IUserLogin {
    email: string;
    password: string;
    username?: string; // Adicione o username como opcional
}

interface IAuthContext {
    user: IUserLogin
    setUser: (user: IUserLogin) => void
    handleLogin: () => void
}

interface IAuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUserLogin>({ email: '', password: '' })

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:3000/api/auth/login', { //mudar a url 
                email: user.email,
                password: user.password,
            })

            if (response.status === 200) {
                 // Armazena o email como username
                 setUser({ ...user, username: user.email }); // Aqui é onde você define o username
                 router.push('/home');
            }
        } catch (error) {
            alert('Email ou senha inválidos!')
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

*/

import axios from 'axios'; // Certifique-se de importar o Axios
import { router } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";

interface IUserLogin {
    email: string;
    password: string;
    username?: string;
}

interface IAuthContext {
    user: IUserLogin;
    setUser: (user: IUserLogin) => void;
    handleLogin: () => void;
}

interface IAuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUserLogin>({ email: '', password: '' });

    const handleLogin = async () => {
        try {
            console.log("Tentando login com:", {
                email: user.email,
                password: user.password,
            });
    
            const response = await axios.post('http://192.168.56.1:3000/api/auth/login', {
                email: user.email,
                password: user.password,
            });
    
            console.log("Resposta do servidor:", response.data);
    
            localStorage.setItem('token', response.data.token);
            setUser({ ...user, username: response.data.username });
            router.push('/home');
        } catch (error) {
            console.error("Erro durante login:", error.response ? error.response.data : error.message);
            alert('Email ou senha inválidos!');
        }
    };
    

    return (
        <AuthContext.Provider value={{ user, setUser, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
