import { View, StyleSheet, Text } from 'react-native'
import Cardbox from '../Components/Card/Card'
import { useState } from 'react'
import { Footer } from '../Components/Footer/footer'
import { BotãoJogar } from '../Components/Button/Button'


export default function Home() {

    const [filas, setFilas] = useState([])

    const cardContent = filas.length === 0
        ?<Text> Você não está em nenhuma fila. Clique para acessar uma fila</Text>
        :<Text> Você está nas seguintes filas: {filas.join(', ')}</Text>
    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>JOGAR</Text>
                <Text style={styles.message}>Nenhum console selecionado. Clique em "COMEÇAR A JOGAR" para selecionar um console.</Text>
                <BotãoJogar />
            </Cardbox>
            <Footer></Footer>
        </View>
    )
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
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
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
})
