import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { router, useRouter } from 'expo-router';


const BotãoFila = () => {
    const router = useRouter()
    return(
    <Button style={styles.button}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => router.push('/selecao_console')}>
        COMEÇAR A JOGAR
    </Button>
)
};

const BotãoJogar = () => {
    return (
        <Button style={styles.button}
            mode="contained"
            contentStyle={{ height: 55 }}
            onPress={() => router.push('/selecao_console')}>
            JOGAR
        </Button>
    )
};

const BotãoComprar = () => (
    <Button style={styles.button}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        COMPRAR
    </Button>
);

const BotãoEditarConta = () => (
    <Button style={styles.botaoPfl}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        EDITAR CONTA
    </Button>
);

const BotãoEditarPgto = () => (
    <Button style={styles.botaoPfl}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        EDITAR PAGAMENTO
    </Button>
);

const BotãoHist = () => (
    <Button style={styles.botaoPfl}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        HISTÓRICO
    </Button>
);

const BotãoSair = () => (
    <Button style={styles.button}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        SAIR
    </Button>
);

const BotãoCreditos = () => (
    <Button style={styles.botaoText}
        mode="contained"
        contentStyle={{ height: 55 }}
        onPress={() => console.log('Pressed')}>
        5 créditos/min
    </Button>
);

const styles = StyleSheet.create({
    button: {
        height: 55,
        width: 230,
        backgroundColor: '#6A28D9',
        marginVertical: 10,
        fontSize: 24,
        alignContent: "center",
        borderRadius: 30
    },
    botaoText: {
        height: 35,
        width: 230,
        color: '#000000',
        backgroundColor: '#000000',
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    botaoPfl: {
        height: 55,
        width: 230,
        backgroundColor: '#3A3560',
        marginVertical: 10,
        borderRadius: 30,
        alignContent: "center",
    }
})

export { BotãoFila, BotãoCreditos, BotãoComprar, BotãoEditarConta, BotãoEditarPgto, BotãoHist, BotãoSair, BotãoJogar };