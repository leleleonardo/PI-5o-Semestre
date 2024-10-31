import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fundo from '../Components/Card/Fundo';
import { Footer } from '../Components/Footer/footer';
import Cardbox from '../Components/Card/Card';
import { BotãoCancelar, BotãoComprar, BotãoConfirmar, BotãoEditarConta, BotãoSair } from '../Components/Button/Button';

export default function ConfirmationPage() {
    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>CRÉDITOS INSUFICIENTES</Text>
                <Fundo>
                    <Text style={styles.message}>Seu Saldo é de X créditos. Para entrar nessa fila, você precisa de X créditos.</Text>
                    <BotãoComprar />
                    <BotãoCancelar />
                </Fundo>
            </Cardbox>
                <Footer />
        </View>
    )
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
