import React, { useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import Fundo from '../Components/Card/Fundo';
import { Footer } from '../Components/Footer/footer';
import Cardbox from '../Components/Card/Card';
import { BotaoCancelar, BotaoConfirmar} from '../Components/Button/Button';
import api from "../Services/api";

const Confirmation: React.FC = () => {
    const { consoleName } = useLocalSearchParams();  

    const [credits, setCredits] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await api.getUser();
                setCredits(userData.credits);
            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }
        };

        fetchUserData();
    }, []); // O useEffect será executado assim que o componente for montado

    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>CONFIRMAÇÃO</Text>
                
                    <Text style={styles.message}>
                        Seu saldo é de {credits} créditos. O valor será descontado de seu saldo e cartão de crédito quando chegar sua vez.
                    </Text>
                    <BotaoConfirmar consoleName={consoleName as string} />
                    <BotaoCancelar consoleName={consoleName as string} />
                
            </Cardbox>
            <Footer />
        </View>
    );
};

export default Confirmation;

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
