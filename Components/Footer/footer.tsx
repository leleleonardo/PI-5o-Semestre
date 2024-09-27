import { View, StyleSheet } from "react-native";
import { BtIconePgt, BtIconeM, BtIconeAct } from "../IconButton/IconButton";

const Footer = () => (
    <View style={styles.footer}>
                <BtIconePgt />
                <BtIconeM />
                <BtIconeAct />
            </View>
)

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

export { Footer}