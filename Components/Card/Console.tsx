import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { BotãoJogar } from '../Button/Button';
import { useAuth } from '../../context/auth';

const Console1 = () => (
  <Card style={styles.consoleCard}>
    <Card.Content>
      <Text style={styles.title}>PS5</Text>
      <Text style= {styles.message}>Tempo de espera: 30 minutos</Text>
    </Card.Content>
  </Card>
);

const Console2 = () => {
  const { user } = useAuth(); // Obtenha o usuário do contexto

  return (
      <Card style={styles.consoleCard}>
          <Card.Content>
              <Text style={styles.title}>PS5</Text>
              <Text style={styles.message}>Tempo de espera: 30 minutos</Text>
              {user.username ? (
                   <BotãoJogar /> // O username é acessado diretamente do contexto
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

/*import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Button } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';

const Console = () => {
  const [consoleData, setConsoleData] = useState(null);
  const [availableConsoles, setAvailableConsoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsoleData = async () => {
      try {
        const response = await fetch('URL_DA_SUA_API'); // Substitua pela URL da sua API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setConsoleData(data.selectedConsole); // Presumindo que os dados têm um console selecionado
        setAvailableConsoles(data.availableConsoles); // Presumindo que os dados têm uma lista de consoles disponíveis
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConsoleData();
  }, []);

  const handleSelectConsole = (console) => {
    setConsoleData(console);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={{ color: 'red' }}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {consoleData ? (
        <Card style={styles.consoleCard}>
          <Card.Content>
            <Text variant="titleLarge">{consoleData.name || 'Console'}</Text>
            <Text variant="bodyMedium">Tempo de espera: {consoleData.waitTime || 'N/A'} minutos</Text>
          </Card.Content>
        </Card>
      ) : (
        <View>
          <Text variant="titleLarge">Consoles Disponíveis</Text>
          <FlatList
            data={availableConsoles}
            keyExtractor={(item) => item.id.toString()} // Presumindo que cada console tem um ID único
            renderItem={({ item }) => (
              <Card style={styles.consoleCard}>
                <Card.Content>
                  <Text variant="titleMedium">{item.name}</Text>
                  <Text variant="bodyMedium">Tempo de espera: {item.waitTime} minutos</Text>
                  <Button title="Jogar" onPress={() => handleSelectConsole(item)} />
                </Card.Content>
              </Card>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  consoleCard: {
    backgroundColor: '#28224A',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginBottom: 20,
  },
});

export default Console;*/
