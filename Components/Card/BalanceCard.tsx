import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { API_URL } from '../../config';

interface BalanceCardProps {
  balance: number;
}

const BalanceCard: React.FC = () => {
  const { user } = useAuth(); // Obtém o usuário do contexto
  const [balance, setBalance] = useState<number>(0); // Estado para armazenar o saldo

  useEffect(() => {
      const fetchBalance = async () => {
          try {
              const response = await axios.get(`${API_URL}/credits`); // Chame a URL do seu endpoint para obter o saldo
              setBalance(response.data.credits); // Armazena o saldo no estado
          } catch (error) {
              console.error('Erro ao buscar o saldo:', error);
          }
      };

      if (user.username) { // Verifica se o usuário está logado
          fetchBalance();
      }
  }, [user.username]); // Executa o efeito quando o usuário muda

  return (
      <View style={styles.balanceCard}>
          {/* Título "SALDO" */}
          <Text style={styles.heading}>SALDO</Text>

          {/* Container para o ícone e o valor, com flexDirection em "row" para exibição lado a lado */}
          <View style={styles.balanceRow}>
              <Text style={styles.balanceIcon}>💲</Text>
              <Text style={styles.balanceAmount}>{balance}</Text>
          </View>
      </View>
  );
};

export default BalanceCard;

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
