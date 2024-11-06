import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

interface CardboxProps {
    children: React.ReactNode;
  }
  
  const Cardbox: React.FC<CardboxProps> = ({ children }) => {
    console.log('Children card:', children);  // Exibe os dados passados como children
  
    // Verifique se o conteúdo dos children contém espaços vazios ou texto inválido
    if (typeof children === 'string') {
      console.log('Texto dentro do Cardbox:', children);
      if (children.trim() === "") {
        console.warn('O texto passado está vazio ou contém apenas espaços.');
      }
    } else if (Array.isArray(children)) {
      children.forEach((child, index) => {
        console.log(`Child no índice ${index}:`, child);  // Log do child individual
        if (typeof child === 'string' && child.trim() === "") {
          console.warn(`Espaço vazio encontrado no índice ${index} do array de children.`);
        }
      });
    }
    

    return (
        <Card style={styles.card}>
            <Card.Content>
                {children}
            </Card.Content>
        </Card>
    );
};

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

