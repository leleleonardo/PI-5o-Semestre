import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Botão = () => (
    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
        Entrar em nova fila
    </Button>
);

const styles = StyleSheet.create({
    button: {
        width: 250,
        backgroundColor: '#6A28D9',
    },
})

export default Botão;