import { View, StyleSheet, Text } from 'react-native'
import Cardbox from '../Components/Card/Card'
import { BtIconeM, BtIconeAct, BtIconePgt } from '../Components/IconButton/IconButton'
import { useState } from 'react'
import { Footer } from '../Components/Footer/footer'


export default function Home() {

    const [filas, setFilas] = useState([])

    const cardContent = filas.length === 0
        ?<Text> Você não está em nenhuma fila. Clique para acessar uma fila</Text>
        :<Text> Você está nas seguintes filas: {filas.join(', ')}</Text>
    return (
        <View style={styles.container}>
            <Cardbox>
                {cardContent}
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
    footer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
})
