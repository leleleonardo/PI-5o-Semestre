import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../context/auth';
import api from "../../Services/api";

const BalanceCard: React.FC = () => {
  const { user } = useAuth(); // Obtém o usuário do contexto
  const [balance, setBalance] = useState<number>(0); // Estado para armazenar o saldo

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const userData = await api.getUser(); // Chama a API para obter os dados do usuário
        setBalance(userData.credits); // Acessa diretamente os créditos no objeto retornado
      } catch (error) {
        console.error('Erro ao buscar o saldo:', error);
      }
    };

    if (user?.username) { // Verifica se o usuário está logado
      fetchBalance();
    }
  }, [user?.username]); // Executa o efeito sempre que o `user.username` mudar

  return (
    <View style={styles.balanceCard}>
      <Text style={styles.heading}>SALDO</Text>
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