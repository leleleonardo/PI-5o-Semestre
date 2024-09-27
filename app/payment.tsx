import { View, Text, StyleSheet } from 'react-native'
import { BotãoComprar } from '../Components/Button/Button'
import Cardbox from '../Components/Card/Card'
import { BtIconePgt, BtIconeM, BtIconeAct } from '../Components/IconButton/IconButton'
import { Footer } from '../Components/Footer/footer'


export default function Payment() {
    return (
        <View style={styles.container}>

                <Cardbox>
                    <Text style={styles.title}>Créditos</Text>
                    <BotãoComprar />
                    
                </Cardbox>
            <View style={styles.footer}>
            
            </View>
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
    }
})