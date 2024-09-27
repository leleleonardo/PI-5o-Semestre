import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const BotãoFila = () => (
    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
        Entrar em nova fila
    </Button>
);

const BotãoEditarConta = () => (
    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
        EDITAR CONTA
    </Button>
);

const BotãoEditarPgto = () => (
    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
        EDITAR PAGAMENTO
    </Button>
);

const BotãoHist = () => (
    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
        HISTÓRICO
    </Button>
);

const styles = StyleSheet.create({
    button: {
        width: 250,
        backgroundColor: '#6A28D9',
        margin: 10,
        alignContent: "center",
    },
})

export { BotãoFila, BotãoEditarConta, BotãoEditarPgto, BotãoHist };