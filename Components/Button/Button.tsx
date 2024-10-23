import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { router, useRouter } from 'expo-router';
import axios from 'axios';


const BotãoFila = () => {
    const router = useRouter();

  const handlePress = async () => {
    try {
      // Faz a requisição POST para a API
      const response = await axios.post('http://localhost:3000/fila', {
        userId: userId, // Passa o userId
        console: consoleName // Passa o nome do console
      });

      console.log('Item inserido:', response.data);
      // Redireciona após inserir na fila
      router.push('/selecao_console');
    } catch (error) {
      console.error('Erro ao inserir na fila:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Button
      style={styles.button}
      mode="contained"
      contentStyle={{ height: 55 }}
      onPress={handlePress}
    >
      JOGAR
    </Button>
  );
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