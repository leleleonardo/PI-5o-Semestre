import axiosInstance from './axios';

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
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao obter usuário:', error);
            throw error;
        }
    },
};

export default api;
