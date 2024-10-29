import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { router, useRouter } from 'expo-router';
import axios from 'axios';
import React from 'react';
import { API_URL } from './config';
import { useAuth } from '../../context/auth';


const BotãoFila = () => {
    return (
        <Button style={styles.button}
            mode="contained"
            contentStyle={{ height: 55 }}
            onPress={() => router.push('/selecao_console')}>
            JOGAR
        </Button>
    )
};

const BotãoJogar = () => { // Passando username como prop
    const { user } = useAuth(); // Obtendo o usuário do contexto
    const username = user.username; // Acessando o username
  
    const handlePress = async () => {
        const dateTime = new Date().toISOString(); // Obtém a data e hora atual

        try {
            // Primeiro, busque a quantidade atual de filas para definir a posição
            const queueResponse = await axios.get(`${API_URL}/queues`);
            const positionFila = queueResponse.data.length + 1; // Incrementa o total atual

            // Cria um ID único
            const generateUniqueId = () => {
                return `id_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
            };

            const response = await axios.post(`${API_URL}/queues`, {
                id: generateUniqueId(),  // ID gerado
                user: username, // Nome do usuário
                dateTime: dateTime, // Data e hora da inserção
                positionFila: positionFila, // Posição na fila
                console: 'Nome do Console', // Dado fixo do console
            });

            if (response.status === 201) {
                router.push('/selecao_console');
            } else {
                console.error('Erro ao inclusão a fila:', response.statusText);
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };
  
    return (
        <Button style={styles.button}
            mode="contained"
            contentStyle={{ height: 55 }}
            onPress={handlePress}>
            JOGAR
        </Button>
    );
  };

const BotãoComprar = () => (
    <Button style={styles.button}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        COMPRAR
    </Button>
);

const BotãoEditarConta = () => (
    <Button style={styles.botaoPfl}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        EDITAR CONTA
    </Button>
);

const BotãoEditarPgto = () => (
    <Button style={styles.botaoPfl}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        EDITAR PAGAMENTO
    </Button>
);

const BotãoHist = () => (
    <Button style={styles.botaoPfl}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        HISTÓRICO
    </Button>
);

const BotãoSair = () => (
    <Button style={styles.button}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        SAIR
    </Button>
);

const BotãoCreditos = () => (
    <Button style={styles.botaoText}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        5 créditos/min
    </Button>
);

const styles = StyleSheet.create({
    button: {
        height: 55,
        width: 230,
        backgroundColor: '#6A28D9',
        marginVertical: 10,
        fontSize: 24,
        alignContent: "center",
        borderRadius: 30
    },
    botaoText: {
        height: 35,
        width: 230,
        color: '#000000',
        backgroundColor: '#000000',
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    botaoPfl: {
        height: 55,
        width: 230,
        backgroundColor: '#3A3560',
        marginVertical: 10,
        borderRadius: 30,
        alignContent: "center",
    }
})

export { BotãoFila, BotãoCreditos, BotãoComprar, BotãoEditarConta, BotãoEditarPgto, BotãoHist, BotãoSair, BotãoJogar };