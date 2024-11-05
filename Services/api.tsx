import axiosInstance from './axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = {
    async register(username: string, email: string, password: string) {
        try {
            const response = await axiosInstance.post('/api/auth/register', {
                username,
                email,
                password,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            throw error;
        }
    },

    async login(username: string, password: string) {
        try {
            const response = await axiosInstance.post('/api/auth/login', { username, password });
            console.log("Resposta do login:", response.data); // Adicione este log
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            throw error;
        }
    },

    async getUser() {
        try {
            const response = await axiosInstance.get('/api/user', {
                headers: { Authorization: `Bearer ${AsyncStorage.getItem('token')}` }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao obter usuário:', error);
            throw error;
        }
    },

    async getQueues(consoleName: string): Promise<any> {
        try {
            // Obtém o token de forma assíncrona
            const token = await AsyncStorage.getItem('token');
    
            // Constrói a URL para buscar as filas com base no consoleName
            const response = await axiosInstance.get(`/api/queues/${consoleName}`, {
                headers: { Authorization: `Bearer ${token}` } // Usa o token obtido
            });
    
            return response.data;
        } catch (error) {
            console.error('Erro ao obter filas:', error);
            throw error;
        }
    },
    
    async createQueue(data: any) {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axiosInstance.post('https://api-5sem-r2ds.onrender.com/api/queues', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao criar a fila:', error);
            throw error;
        }
    },
};

export default api;
