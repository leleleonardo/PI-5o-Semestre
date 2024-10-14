/*import { View, Text, StyleSheet } from 'react-native';
import Cardbox from '../Components/Card/Card';
import { Footer } from '../Components/Footer/footer';
import React from 'react';
import Fundo from '../Components/Card/Fundo';

export default function Fila() {
    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>JOGAR</Text>
                
                <Fundo>
                    {/Adicionando múltiplos textos para testar a barra de rolagem }
                    {Array.from({ length: 20 }).map((_, index) => (
                        <Text key={index} style={styles.message}>
                            Este é o item {index + 1}
                        </Text>
                    ))}
                </Fundo>
            </Cardbox>
            <View style={styles.footer}>
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1C1635',
        padding: 20,
        alignItems: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
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
        marginBottom: 10, // Reduzido para ajustar melhor o conteúdo
    },
});*/

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fundo from '../Components/Card/Fundo'; // Altere o caminho conforme necessário
import { Footer } from '../Components/Footer/footer';
import Cardbox from '../Components/Card/Card';

export default function Fila() {
  return (
    <View style={styles.container}>
        <Cardbox>
      <Text style={styles.title}>JOGAR</Text>
      <Fundo>
        {/* Adicionando múltiplos textos para testar a barra de rolagem */}
        {Array.from({ length: 20 }).map((_, index) => (
          <Text key={index} style={styles.message}>
            Este é o item {index + 1}
          </Text>
        ))}
      </Fundo>
      </Cardbox>
      <View style={styles.footer}>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1C1635',
    padding: 20,
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
    marginBottom: 10,
  },
});
