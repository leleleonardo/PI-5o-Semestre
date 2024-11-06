import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../../Services/api'; // Importe o arquivo api.ts
import { useAuth } from '../../context/auth';

const BalanceCard: React.FC = () => {
  const { user } = useAuth(); // Obtém o usuário do contexto
  const [balance, setBalance] = useState<number>(0); // Estado para armazenar o saldo
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await api.getCredits(); // Chamando o método getCredits do arquivo api
        setBalance(response.credits); // Atualiza o estado com o saldo
      } catch (error) {
        setError('Erro ao buscar saldo. Tente novamente mais tarde.');
      }
    };

    if (user.username) {
      fetchBalance();
    }
  }, [user.username]);

  return (
    <View style={styles.balanceCard}>
      <Text style={styles.heading}>SALDO</Text>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <View style={styles.balanceRow}>
          <Text style={styles.balanceIcon}>💲</Text>
          <Text style={styles.balanceAmount}>{balance}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  balanceCard: {
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
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceIcon: {
    fontSize: 36,
    color: 'white',
    marginRight: 10,
  },
  balanceAmount: {
    fontSize: 48,
    color: 'white',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  }
});

export default BalanceCard;
