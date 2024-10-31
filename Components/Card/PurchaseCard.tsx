import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BotãoComprar, BotãoCreditos } from '../Button/Button';
import { useAuth } from '../../context/auth';
//import axios from 'axios';



const PurchaseCard: React.FC = () => {
  const [creditsAmount, setCreditsAmount] = useState<string>(''); // Estado para o valor de créditos
  const { user } = useAuth(); // Obtém o usuário do contexto

  return (
      <View style={styles.balanceCard}>
          {/* Título "COMPRAR" */}
          <Text style={styles.heading}>COMPRAR</Text>

          {/* Botão Créditos com TextInput */}
          <BotãoCreditos 
              creditsAmount={creditsAmount} 
              setCreditsAmount={setCreditsAmount} 
          />

          {/* Botão Comprar */}
          <BotãoComprar creditsAmount={parseFloat(creditsAmount)} />
      </View>
  );
};

export default PurchaseCard;

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: '#28224A',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center', // Centraliza horizontalmente o conteúdo dentro do card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginBottom: 20,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
  },
  // Flexbox row para alinhar o ícone e o valor do saldo lado a lado
  balanceRow: {
    flexDirection: 'row', // Define layout em linha (horizontal)
    alignItems: 'center', // Centraliza verticalmente os itens na linha
  },
  balanceIcon: {
    fontSize: 36, // Define o tamanho do ícone
    color: 'white',
    marginRight: 10, // Espaçamento entre o ícone e o valor
  },
  balanceAmount: {
    fontSize: 48, // Tamanho do texto que exibe o saldo
    color: 'white',
    margin: 0,
  },
});
