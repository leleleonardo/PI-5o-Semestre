/*import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Botão from '../Button/Button';

const Cardbox = () => (
    <Card style={styles.card}>
        <Card.Content>
            <Text style={styles.title}>FILAS</Text>
            <Text style={styles.message}>Você não está em nenhuma fila no momento. Clique em "Entrar em nova fila" para selecionar o console a ser jogado.</Text>
            <Botão></Botão>
        </Card.Content>
    </Card>
);

const styles = StyleSheet.create({
    card: {
        width: 300,
        backgroundColor: '#272856',
        borderRadius: 20,
        padding: 10,
        borderColor:"#03CEFE",
        borderWidth: 2
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

export default Cardbox;*/

import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const Cardbox = ({ children }) => (
    <Card style={styles.card}>
        <Card.Content>
            {children}
        </Card.Content>
    </Card>
);

const styles = StyleSheet.create({
    card: {
        width: 300,
        backgroundColor: '#272856',
        borderRadius: 20,
        padding: 10,
        borderColor:"#03CEFE",
        borderWidth: 2,
        alignContent: "center"
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
});

export default Cardbox;

