import { View, StyleSheet, Text } from 'react-native'
import Cardbox from '../Components/Card/Card'
import { BotãoEditarConta, BotãoEditarPgto, BotãoHist, BotãoSair } from '../Components/Button/Button'
import { Footer } from '../Components/Footer/footer'


export default function Profile() {
    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>SUA CONTA</Text>
                <View style={styles.buttonContainer}>
                    <BotãoEditarConta />
                    <BotãoEditarPgto />
                    <BotãoHist />
                </View>
                <View style={styles.sairContainer}>
                    <BotãoSair />
                </View>
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
})