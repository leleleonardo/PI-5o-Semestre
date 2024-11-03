import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Cardbox from '../Components/Card/Card';
import { BotaoEditarConta, BotaoEditarPgto, BotaoHist, BotaoSair } from '../Components/Button/Button';
import { Footer } from '../Components/Footer/footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function Profile() {
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            router.push('/');
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
            Alert.alert('Erro', 'Ocorreu um erro ao sair da conta.');
        }
    };

    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>SUA CONTA</Text>
                <View style={styles.buttonContainer}>
                    <BotaoEditarConta />
                    <BotaoEditarPgto />
                    <BotaoHist />
                </View>
                <View style={styles.sairContainer}>
                    <BotaoSair onLogout={handleLogout} /> {/* Passando a função de logout */}
                </View>
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
    buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    sairContainer: {
        flexDirection: 'row',
        marginTop: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
    },
});
