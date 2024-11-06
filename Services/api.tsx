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
          // Recupera o token de forma assíncrona
          const token = await AsyncStorage.getItem('token');
          
          // Verifica se o token existe
          if (!token) {
            throw new Error('Token não encontrado');
          }
      
          // Envia a requisição com o token no cabeçalho
          const response = await axiosInstance.get('/api/user', {
            headers: { Authorization: `Bearer ${token}` }
          });
      
          // Retorna os dados do usuário
          return response.data;
        } catch (error) {
          console.error('Erro ao obter usuário:', error);
          throw error;  // Repassa o erro para ser tratado por quem chamou a função
        }
      },

    async getQueues(consoleName: string): Promise<any> {
        try {
            // Obtém o token de forma assíncrona
            const token = await AsyncStorage.getItem('token');
    
            // Constrói a URL para buscar as filas com base no consoleName
            const response = await axiosInstance.get(`/api/queues/console/${consoleName}`, { // Remover '/console/'
                headers: { Authorization: `Bearer ${token}` } // Usa o token obtido
            });
    
            return response.data;
        } catch (error) {
            console.error('Erro ao obter filas:', error);
            throw error;
        }
    },
    
    async getQueuesUser(username: string): Promise<any> {
        try {
            // Obtém o token de forma assíncrona
            const token = await AsyncStorage.getItem('token');
    
            // Constrói a URL para buscar as filas com base no username
            const response = await axiosInstance.get(`/api/queues/user/${username}`, { // Remover '/user/'
                headers: { Authorization: `Bearer ${token}` } // Usa o token obtido
            });
    
            return response.data;
        } catch (error) {
            console.error('Erro ao obter filas por usuário:', error);
            throw error;
        }
    },
    
    async createQueue(data: any) {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axiosInstance.post('/api/queues', data, {
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

    async addCredits(amount: number) {
        try {
          // Obtém o token armazenado no AsyncStorage
          const token = await AsyncStorage.getItem('token');
          
          // Verifica se o token existe
          if (!token) {
            throw new Error('Token de autenticação não encontrado');
          }
      
          // Faz a requisição para a API com o valor de `amount` e o token no cabeçalho
          const response = await axiosInstance.post('/api/credits/add', // Endpoint da API
            { amount }, // Corpo da requisição com o valor de `amount`
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                } // Adiciona o token no cabeçalho da requisição
            }
          );
      
          // Retorna os créditos atualizados
          return response.data.credits;
        } catch (error) {
          console.error('Erro ao adicionar créditos:', error);
          throw error; // Lança o erro para ser tratado no componente chamador
        }
      },

      async leaveQueue(consoleName: string, positionFila: number) {
        try {
            // Obtém o token de autenticação do AsyncStorage
            const token = await AsyncStorage.getItem('token');

            if (!token) {
                throw new Error('Token de autenticação não encontrado');
            }

            // Envia a requisição POST para remover o item da fila com a posição especificada
            const response = await axiosInstance.post(
                `/api/queues/${consoleName}/leave`,
                { positionFila }, // Corpo da requisição com a posição na fila
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                }
            );

            // Retorna a resposta da API (mensagem de sucesso ou erro)
            return response.data;
        } catch (error) {
            console.error('Erro ao sair da fila:', error);
            throw error;
        }
    },

};

export default api;
