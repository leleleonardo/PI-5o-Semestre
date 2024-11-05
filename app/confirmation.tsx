import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fundo from '../Components/Card/Fundo';
import { Footer } from '../Components/Footer/footer';
import Cardbox from '../Components/Card/Card';
import { BotaoCancelar, BotaoConfirmar} from '../Components/Button/Button';
import api from "../Services/api";

export default function ConfirmationPage() {
    const [credits, setCredits] = useState(0); // Estado para armazenar os créditos

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await api.getUser(); // Chama a função getUser
                setCredits(userData.credits); // Armazena os créditos no estado
            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }
        };

        fetchUserData(); // Chama a função para buscar os dados
    }, []); // O array vazio significa que isso só será executado uma vez após o primeiro render

    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>CONFIRMAÇÃO</Text>
                <Fundo>
                    <Text style={styles.message}>
                        Seu Saldo é de {credits} créditos. O valor será descontado de seu saldo e cartão de crédito quando chegar sua.
                    </Text>
                    <BotaoConfirmar />
                    <BotaoCancelar />
                </Fundo>
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
        alignItems: 'center',
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
        fontSize: 26,
        textAlign: 'center',
        color: 'white',

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
        width: '100%',
        alignItems: 'center',
    },
});
