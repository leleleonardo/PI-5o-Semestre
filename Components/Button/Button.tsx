import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { router, useRouter } from 'expo-router';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../../context/auth';
import { View, Text, TextInput } from 'react-native';
import api from "../../Services/api";



interface BotaoJogarProps {
    consoleName: string; 
}

interface BotaoSairProps {
    onLogout: () => Promise<void>; 
}

const BotaoFila = () => {
    return (
        <Button style={styles.button}
            mode="contained"
            contentStyle={{ height: 55 }}
            onPress={() => router.push('/selecao_console')}>
            JOGAR
        </Button>
    )
};


const BotaoJogar: React.FC<{ consoleName: string }> = ({ consoleName }) => {
    const router = useRouter();

    const handlePress = () => {
        // Passa o consoleName como um parâmetro de consulta para a URL
        router.push(`/confirmation?consoleName=${consoleName}`);
    };

    return (
        <Button
            style={styles.button}
            mode="contained"
            contentStyle={{ height: 55 }}
            onPress={handlePress}
        >
            JOGAR
        </Button>
    );
};

interface BotaoComprarProps {
    creditsAmount: number; // Valor inserido para os créditos
  }
  
  const BotaoComprar: React.FC<BotaoComprarProps> = ({ creditsAmount }) => {
    const { user } = useAuth(); // Obtém o usuário do contexto
  
    const handlePress = async () => {
      // Verifica se o valor é válido
      if (!user || isNaN(creditsAmount) || creditsAmount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
      }
  
      try {
        // Envia o valor de créditos para a API
        const updatedCredits = await api.addCredits(creditsAmount); // API retorna os créditos atualizados após a adição
        console.log('Créditos atualizados no banco de dados:', updatedCredits);
        router.push('/payment');
  
        // Aqui, você pode atualizar os créditos localmente no contexto ou estado, se necessário
        // Atualizar os créditos no estado global ou contexto
        // Exemplo: onCreditUpdate(updatedCredits); // Se você tiver um método para atualizar o estado
      } catch (error) {
        console.error('Erro ao adicionar créditos:', error);
      }
    };
  
    return (
      <Button
        style={styles.botaoText}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={handlePress}>
       <Text>COMPRAR</Text>
      </Button>
    );
  };
  
  

  const BotaoConfirmar: React.FC<BotaoJogarProps> = ({ consoleName }) => {
    const { user } = useAuth(); // Usuário autenticado
    const username = user.username;
    const router = useRouter();

    const handlePress = async () => {
        const dateTime = new Date().toISOString();

        try {
            // Obtém a lista de filas usando a api.getQueues
            const queueResponse = await api.getQueues(consoleName);
            const positionFila = queueResponse.length; // Posição atual na fila

            const data = {
                ID: `id_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
                user: username,
                dateTime: dateTime,
                positionFila: positionFila,
                console: consoleName,
            };

            console.log('Dados enviados para criar a fila:', JSON.stringify(data, null, 2));

            // Envia a requisição para criar a fila
            const response = await api.createQueue(data);
            console.log('Resposta do servidor:', response);

            if (response) {
                console.log('Fila criada com sucesso:', response);

                // Subtrai 30 créditos do usuário
                try {
                    const updatedCredits = await api.addCredits(-30); // Subtração de 30 créditos
                    console.log('Créditos atualizados após subtração:', updatedCredits);

                } catch (creditError) {
                    console.error('Erro ao atualizar créditos:', creditError);
                  
                }

                router.push('/home'); // Redireciona após sucesso
            } else {
                console.error('Erro ao incluir na fila: Resposta vazia');
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            if (axios.isAxiosError(error) && error.response) {
                console.error('Dados da resposta de erro:', error.response.data);
                console.error('Status da resposta de erro:', error.response.status);
            } else {
                console.error('Erro não relacionado ao Axios:', error);
            }
        }
    };

    return (
        <Button
            style={styles.button}
            mode="contained"
            contentStyle={{ height: 55 }}
            onPress={handlePress}
        >
            CONFIRMAR
        </Button>
    );
};


const BotaoEditarConta = () => (
    <Button style={styles.botaoPfl}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        EDITAR CONTA
    </Button>
);

const BotaoEditarPgto = () => (
    <Button style={styles.botaoPfl}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        EDITAR PAGAMENTO
    </Button>
);

const BotaoHist = () => (
    <Button style={styles.botaoPfl}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        HISTÓRICO
    </Button>
);

const BotaoSair: React.FC<BotaoSairProps> = ({ onLogout }) => (
    <Button style={styles.button}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={onLogout}>
        SAIR
    </Button>
);

interface BotaoCancelarProps {
    consoleName: string;
}

const BotaoCancelar: React.FC<BotaoCancelarProps> = ({ consoleName }) => {
    const handlePress = async () => {
        try {
            // Obtém a lista atual de filas para encontrar a maior positionFila
            const queueResponse = await api.getQueues(consoleName);
            if (queueResponse.length === 0) {
                console.log("A fila está vazia. Nada para cancelar.");
                return;
            }
            
            // Encontra a maior positionFila na coleção
            const highestPositionFila = Math.max(...queueResponse.map((item: any) => item.positionFila));
            
            // Chama o método leaveQueue para deletar a posição mais alta
            await api.leaveQueue(consoleName, highestPositionFila);
            console.log(`Fila na posição ${highestPositionFila} foi removida com sucesso do console ${consoleName}`);
        } catch (error) {
            console.error("Erro ao cancelar a fila:", error);
        }
    };

    return (
        <Button 
            mode="text"
            contentStyle={{ height: 55 }}
            onPress={handlePress}
        >
            CANCELAR
        </Button>
    );
};

const BotaoCreditos: React.FC<{ creditsAmount: string; setCreditsAmount: (value: string) => void }> = ({ creditsAmount, setCreditsAmount }) => (
    <View>
      <TextInput
        style={[styles.input, { backgroundColor: '#000000', color: '#ffffff', textAlign: 'center' }]} // Campo preto com texto branco e texto centralizado
        placeholder="Insira um valor"
        placeholderTextColor="#cccccc" // Cor do texto do placeholder
        value={creditsAmount}
        onChangeText={setCreditsAmount}
        keyboardType="numeric" // Define o teclado numérico
      />
      <View style={{ alignItems: 'center', marginTop: 1 }}>
        <Text style={{ textAlign: 'center', marginTop: 1, color: '#ffffff' }}>créditos</Text>
      </View>
    </View>
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
    },
    input: {
        height: 35,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
    },
})

export { BotaoFila, BotaoCreditos, BotaoComprar, BotaoConfirmar, BotaoEditarConta, BotaoEditarPgto, BotaoHist, BotaoSair, BotaoJogar, BotaoCancelar };