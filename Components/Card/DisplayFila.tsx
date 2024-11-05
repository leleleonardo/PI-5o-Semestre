import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { BotaoFila } from '../Button/Button';

interface Queue {
    ID: string;
    console: string;
    positionFila: number;
}

interface DisplayFilaProps {
    filas: Queue[];
}

const DisplayFila: React.FC<DisplayFilaProps> = ({ filas }) => {
    // Agrupa filas por console e encontra a menor positionFila
    const groupedQueues = filas.reduce((acc, fila) => {
        if (!acc[fila.console]) {
            acc[fila.console] = fila; // Adiciona a fila se o console ainda não estiver no acumulador
        } else {
            // Se o console já estiver no acumulador, verifica se a posição é menor
            if (fila.positionFila < acc[fila.console].positionFila) {
                acc[fila.console] = fila; // Atualiza para a fila com a menor positionFila
            }
        }
        return acc;
    }, {} as Record<string, Queue>); // Utiliza um Record para garantir a tipagem correta

    // Converte o objeto em um array de mensagens
    const messages = Object.entries(groupedQueues).map(([console, fila]) => {
        return { console, positionFila: fila.positionFila };
    });

    return (
        <View style={styles.container}>
            {messages.length === 0 ? (
                <Text style={styles.message}>Você não está em nenhuma fila. Clique para acessar uma fila.</Text>
            ) : (
                messages.map((item, index) => (
                    <Card key={index} style={styles.card}>
                        <Card.Content>
                            <Text style={styles.message}>{item.console} - Posição: {item.positionFila}</Text>
                        </Card.Content>
                    </Card>
                ))
            )}
            <View style={styles.botaoContainer}>
                <BotaoFila />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
    },
    card: {
        backgroundColor: '#28224A',
        width: '90%',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        marginBottom: 20,
        borderColor: "white",
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    botaoContainer: {
        alignItems: 'center',
        width: '100%',
    },
});

export default DisplayFila;
