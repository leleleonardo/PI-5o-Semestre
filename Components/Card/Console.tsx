import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { BotaoJogar } from '../Button/Button';
import { useAuth } from '../../context/auth';
//import axios from 'axios';

const Console1 = () => (
  <Card style={styles.consoleCard}>
    <Card.Content>
      <Text style={styles.title}>PS5</Text>
      <Text style= {styles.message}>Tempo de espera: 30 minutos</Text>
    </Card.Content>
  </Card>
);

interface Console2Props {
  consoleName: string; // Definindo que consoleName é uma string
}

const Console2: React.FC<Console2Props> = ({ consoleName }) => {
    const { user } = useAuth(); // Obtenha o usuário do contexto
    console.log(user); // Verifique os dados do usuário

    return (
        <Card style={styles.consoleCard}>
            <Card.Content>
                <Text style={styles.title}>{consoleName}</Text>
                <Text style={styles.message}>Tempo de espera: 30 minutos</Text>
                {user.username ? (
                    <BotaoJogar consoleName={consoleName} /> // Passando o nome do console
                ) : (
                    <Text>Faça login para jogar.</Text>
                )}
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    consoleCard: {
      backgroundColor: '#28224A',
      width: 250,
      height: 175,
      borderRadius: 20,
      padding: 10,
      alignItems: 'center', 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      marginBottom: 20,
      borderColor: "white",
      
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
        color: 'white',
    },
    message: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    },
  });

export { Console1, Console2 }

/*interface Console2Props {
    consoleName: string; // Definindo que consoleName é uma string
}

const Console2: React.FC<Console2Props> = ({ consoleName }) => {
    const { user } = useAuth(); // Obtenha o usuário do contexto
    const [waitTime, setWaitTime] = useState<number | null>(null); // Estado para armazenar o tempo de espera

    useEffect(() => {
        const fetchQueueData = async () => {
            try {
                // Substitua pela URL correta da sua API
                const response = await axios.get(`${API_URL}/queues`); 
                
                // Supondo que a resposta contenha a posição na fila para o console específico
                const positionFila = response.data.find((item: any) => item.console === consoleName)?.positionFila || 0;

                // Calcula o tempo de espera em minutos
                const calculatedWaitTime = positionFila * 30; // Multiplica pela taxa de 30 minutos
                setWaitTime(calculatedWaitTime);
            } catch (error) {
                console.error('Erro ao buscar dados da fila:', error);
            }
        };

        fetchQueueData();
    }, [consoleName]); // Dependência no consoleName para refazer a busca se mudar

    return (
        <Card style={styles.consoleCard}>
            <Card.Content>
                <Text style={styles.title}>{consoleName}</Text>
                <Text style={styles.message}>
                    Tempo de espera: {waitTime !== null ? `${waitTime} minutos` : 'Carregando...'}
                </Text>
                {user.username ? (
                    <BotaoJogar consoleName={consoleName} /> // Passando o nome do console
                ) : (
                    <Text>Faça login para jogar.</Text>
                )}
            </Card.Content>
        </Card>
    );
};

// Estilos (exemplo)
const styles = {
    consoleCard: {
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 16,
    },
};

export default Console2;*/
