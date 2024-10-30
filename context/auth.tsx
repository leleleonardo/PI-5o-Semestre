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

import { router } from "expo-router"
import { createContext, ReactNode, useContext, useState } from "react"

interface IUserLogin {
    email: string;
    password: string;
    username?: string;
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

    const handleLogin = () => {
        

        if (user.email === "admin" && user.password === "admin") {
            
            setUser({ ...user, username: user.email });
            router.push('/home');
        } else {
            
            alert('Email ou senha inválidos!');
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
