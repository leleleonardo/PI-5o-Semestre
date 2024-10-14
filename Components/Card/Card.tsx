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
        width: 350,
        height: 550,
        backgroundColor: '#272856',
        borderRadius: 50,
        borderColor: "#03CEFE",
        borderWidth: 2,
        padding: 10,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', 
        alignItems: 'center',  

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

