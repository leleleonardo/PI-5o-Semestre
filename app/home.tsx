import { View, StyleSheet, Text } from 'react-native'
import Cardbox from '../Components/Card/Card'
import React, { useEffect, useState } from 'react';
import { Footer } from '../Components/Footer/footer'
import { useAuth } from '../context/auth';
import DisplayFila from '../Components/Card/DisplayFila'; 
import api from "../Services/api";

// Defina a interface para a fila
interface Queue {
    ID: string; // Defina o tipo correto para ID com base no que sua API retorna
    console: string; // Adicione a propriedade console
    positionFila: number; // Adicione a propriedade positionFila
}

export default function Home() {
    const [filas, setFilas] = useState<Queue[]>([]); // Use o tipo definido para o estado
    const { user } = useAuth(); // Presumindo que você tem um contexto de autenticação

    useEffect(() => {
        const fetchQueues = async () => {
            try {
                const queues = await api.getQueuesUser(user.username); // Chama a API para buscar as filas pelo usuário
                setFilas(queues);
            } catch (error) {
                console.error('Erro ao buscar filas:', error);
            }
        };

        fetchQueues();
    }, [user.username]); // Dependência para re-executar se o usuário mudar

    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>Aguardando</Text>
                <DisplayFila filas={filas} /> {/* Renderiza o novo componente com as filas */}
            </Cardbox>
            <Footer />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1C1635',
        padding: 20,
        alignItems: 'center'
    },
    title: {
        position: "relative",
        top: 20,
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
    },
    message: {
        position: "relative",
        top: 130,
        fontSize: 26,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    botaoContainer: {
        marginTop: 230,
        width: '100%', 
        alignItems: 'center', 
    },

})
