import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const BotãoFila = () => (
    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
        Entrar em nova fila
    </Button>
);

const BotãoComprar = () => (
    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
        Comprar
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

const BotãoSair = () => (
    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
        SAIR
    </Button>
);

const BotãoCreditos = () => (
    <Button style={styles.botaoText} mode="contained" onPress={() => console.log('Pressed')}>
        5 créditos/min
    </Button>
);

const styles = StyleSheet.create({
    button: {
        height: 45,
        width: 230,
        backgroundColor: '#6A28D9',
        margin: 15,
        alignContent: "center",
    },
    botaoText: {
    height: 45,
    width: 230,
    color: '#000000',
    backgroundColor: '#000000',
    margin: 15,
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 10,     
    },
    
})

export { BotãoFila, BotãoCreditos, BotãoComprar, BotãoEditarConta, BotãoEditarPgto, BotãoHist, BotãoSair };