/*import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import React from 'react';

interface FundoProps {
  children: React.ReactNode;
}

const Fundo: React.FC<FundoProps> = ({ children }) => (
  <Card style={styles.card}>
    <Card.Content style={styles.cardContent}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {children}
      </ScrollView>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    width: 295,
    height: 450, // Altura fixa para que o ScrollView tenha espaço para rolar
    backgroundColor: '#3A3560',
    borderRadius: 50,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 16,
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
},
});


export default Fundo;*/

import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

interface FundoProps {
  children: React.ReactNode;
}

const Fundo: React.FC<FundoProps> = ({ children }) => (
  <Card style={styles.card}>
    <Card.Content>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {children}
      </ScrollView>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    width: 295,
    height: 450,
    backgroundColor: '#3A3560',
    borderRadius: 20,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});

export default Fundo;
