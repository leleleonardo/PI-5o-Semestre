import { View, StyleSheet } from 'react-native'
import Cardbox from '../Components/Card/Card'
import { BtIconeM, BtIconeAct, BtIconePgt } from '../Components/IconButton/IconButton'

export default function Login() {
    return (
        <View style={styles.container}>
            <Cardbox />
            <View style={styles.footer}>
                <BtIconePgt />
                <BtIconeM />
                <BtIconeAct />
            </View>
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


