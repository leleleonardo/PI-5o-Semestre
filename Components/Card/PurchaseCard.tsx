import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../../Services/api'; // Importe o arquivo api.ts
import { BotaoComprar, BotaoCreditos } from '../Button/Button';

const PurchaseCard: React.FC = () => {
  const [creditsAmount, setCreditsAmount] = useState<string>(''); // Estado para o valor de créditos

  const handlePurchase = async () => {
    if (isNaN(parseFloat(creditsAmount)) || parseFloat(creditsAmount) <= 0) {
      alert("Por favor, insira um valor válido.");
      return;
    }
    
    try {
      const response = await api.addCredits({ amount: parseFloat(creditsAmount) }); // Chamando o método addCredits do arquivo api
      alert(`Créditos adicionados: ${response.credits}`);
    } catch (error) {
      alert("Erro ao adicionar créditos. Tente novamente.");
    }
  };

  return (
    <View style={styles.balanceCard}>
        <Text style={styles.heading}>COMPRAR</Text>
        <BotaoCreditos creditsAmount={creditsAmount} setCreditsAmount={setCreditsAmount} />
        <BotaoComprar creditsAmount={Number(creditsAmount)} onPress={handlePurchase} />
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
});

export default PurchaseCard;
