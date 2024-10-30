import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fundo from '../Components/Card/Fundo';
import { Footer } from '../Components/Footer/footer';
import Cardbox from '../Components/Card/Card';
import  { Console2 } from '../Components/Card/Console';


export default function Selecao() {
    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>JOGAR</Text>
                <Fundo>
                    <Console2 consoleName="PS5" />
                    <Console2 consoleName="XBOX" />
                    <Console2 consoleName="VR" />
                    
                </Fundo>

            </Cardbox>
            <View style={styles.footer}>
            </View>
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
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
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
