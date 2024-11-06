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
    // Agrupa filas por console e encontra a maior positionFila
    const groupedQueues = filas.reduce((acc, fila) => {
        const currentMaxPosition = acc[fila.console]?.positionFila || 0;
        if (fila.positionFila > currentMaxPosition) {
            acc[fila.console] = fila; // Atualiza para a fila com o maior positionFila
        }
        return acc;
    }, {} as Record<string, Queue>);

    // Converte o objeto em um array de mensagens com tempo de espera
    const messages = Object.entries(groupedQueues).map(([console, fila]) => {
        const waitTime = fila.positionFila * 30; // Calcula o tempo de espera em minutos
        const hours = Math.floor(waitTime / 60);
        const minutes = waitTime % 60;
        const timeString = `${hours > 0 ? `${hours}h ` : ""}${minutes}min`;
        return { console, positionFila: fila.positionFila, waitTime: timeString };
    });

    return (
        <View style={styles.container}>
            {messages.length === 0 ? (
                <Text style={styles.message}>Você não está em nenhuma fila. Clique para acessar uma fila.</Text>
            ) : (
                messages.map((item, index) => (
                    <Card key={index} style={styles.card}>
                        <Card.Content>
                            <Text style={styles.consoleName}>{item.console}</Text> {/* Console em destaque */}
                            <Text style={styles.label}>Posição:</Text>
                            <Text style={styles.value}>{item.positionFila}</Text>
                            <Text style={styles.label}>Tempo de espera:</Text>
                            <Text style={styles.value}>{item.waitTime}</Text>
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
    label: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
    value: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    consoleName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
    },
});

export default DisplayFila;
