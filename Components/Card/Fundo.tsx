import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

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
      flex: 1,               // Preenche o espaço disponível no Cardbox
      backgroundColor: '#3A3560',
      borderRadius: 20,
      margin: 5,             // Margem interna opcional para espaçamento
  },
  scrollContent: {
      paddingHorizontal: 24,
      paddingVertical: 16,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',  

},
});

export default Fundo;

