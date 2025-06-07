import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Fundo from '../../Components/Card/Fundo';
import Cardbox from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/footer';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useLocalSearchParams, router } from "expo-router";
import { Avatar, Checkbox } from 'react-native-paper';

const API_URL = 'https://api.dify.ai/v1/chat-messages';
const API_KEY = 'app-QeiUZQebl17JrfVYXd9c3nQU';

export default function ChatBotScreen() {
  const { user } = useAuth();
  const USER_ID = user?.username || 'anon';

  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [stage, setStage] = useState<'start' | 'faq' | 'perfil' | 'console' | 'estilo'>('start');
  const [perfilData, setPerfilData] = useState({ console: [] as string[], estilo: [] as string[] });
  const [isTyping, setIsTyping] = useState(false);

  const { origin } = useLocalSearchParams();

  const showResetButton = stage !== "start" && stage !== "console" && stage !== "estilo";

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setIsTyping(true);

    try {
      const payload: any = {
        query: text,
        user: USER_ID,
        inputs: {},
        response_mode: 'blocking',
      };
      if (conversationId) payload.conversation_id = conversationId;

      const response = await axios.post(API_URL, payload, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      if (data.conversation_id) setConversationId(data.conversation_id);

      setMessages(prev => [...prev, { role: 'user', content: text }, { role: 'assistant', content: data.answer }]);
    } catch (err) {
      console.error('Erro ao chamar o Dify:', err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleStartOption = (option: 'faq' | 'perfil') => {
    setStage(option);
    if (option === 'faq') {
      sendMessage('Quero acessar o FAQ');
    }
  };

  // Função para alternar seleção checkbox no array do perfil
  const toggleSelection = (type: 'console' | 'estilo', value: string) => {
    setPerfilData(prev => {
      const current = prev[type];
      if (current.includes(value)) {
        // Remove se já estava selecionado
        return { ...prev, [type]: current.filter(item => item !== value) };
      } else {
        // Adiciona se não estava selecionado
        return { ...prev, [type]: [...current, value] };
      }
    });
  };

  // Confirmar seleção para consoles (vai para etapa de estilos)
  const confirmConsoleSelection = () => {
    if (perfilData.console.length === 0) return; // não avança se nada selecionado
    setStage('estilo');
  };

  // Confirmar seleção para estilos (envia a mensagem e volta para perfil)
  const confirmEstiloSelection = () => {
    if (perfilData.estilo.length === 0) return; // não avança se nada selecionado
    const consolesStr = perfilData.console.join(', ');
    const estilosStr = perfilData.estilo.join(', ');
    sendMessage(`Meus consoles preferidos são ${consolesStr} e meus estilos são ${estilosStr}`);
    setStage('perfil');
  };

  const renderInitialButtons = () => (
    <View style={styles.buttonsContainer}>
      <Text style={styles.subtitle}>Olá, meu nome é Corujinha, antes de começar, me conte o que você quer fazer:</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleStartOption('faq')}><Text style={styles.buttonText}>FAQ</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setStage('console')}><Text style={styles.buttonText}>Análise de perfil</Text></TouchableOpacity>
    </View>
  );

  const renderConsoleOptions = () => {
    const options = ['VR', 'XBOX One', 'Playstation 5', 'PC'];
    return (
      <View style={styles.buttonsContainer}>
        <Text style={styles.subtitle}>Vamos analisar seu perfil! Escolha um ou mais consoles:</Text>
        {options.map(item => (
          <View key={item} style={styles.checkboxContainer}>
            <Checkbox
              status={perfilData.console.includes(item) ? 'checked' : 'unchecked'}
              onPress={() => toggleSelection('console', item)}
              color="#03CEFE"
            />
            <Text style={styles.checkboxLabel}>{item}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={[styles.button, { marginTop: 10 }]}
          onPress={confirmConsoleSelection}
          disabled={perfilData.console.length === 0}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEstiloOptions = () => {
    const options = [
        'Ação',
        'Aventura',
        'RPG',
        'Tiro',
        'Corrida',
        'Terror',
        'Simulação',
        'Plataforma',
        'Multiplayer',
        'Mundo Aberto',
        'VR',
    ];
    return (
      <View style={styles.buttonsContainer}>
        <Text style={styles.subtitle}>Qual seu(s) estilo(s) de jogo preferido(s)?</Text>
        {options.map(item => (
          <View key={item} style={styles.checkboxContainer}>
            <Checkbox
              status={perfilData.estilo.includes(item) ? 'checked' : 'unchecked'}
              onPress={() => toggleSelection('estilo', item)}
              color="#03CEFE"
            />
            <Text style={styles.checkboxLabel}>{item}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={[styles.button, { marginTop: 10 }]}
          onPress={confirmEstiloSelection}
          disabled={perfilData.estilo.length === 0}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Cardbox>
        <Fundo>

          <View style={styles.owlContainer}>
            <Avatar.Icon
                size={124}
                icon="owl"
                style={{
                backgroundColor: 'transparent',
                transform: isTyping ? [{ scale: 1.1 }] : [],
                }}
                color={isTyping ? "#6366f1" : "#9ca3af"}
            />
            {isTyping && <Text style={styles.typingText}>Hmm... estou pensando...</Text>}
            </View>

          {stage === 'start' && renderInitialButtons()}
          {stage === 'console' && renderConsoleOptions()}
          {stage === 'estilo' && renderEstiloOptions()}

          <FlatList
            data={messages}
            style={{ maxHeight: 250 }}
            renderItem={({ item }) => (
              <Text style={{ color: item.role === 'user' ? '#00DFFC' : '#ffffff', marginBottom: 4 }}>
                {item.role === 'user' ? 'Você: ' : 'Corujinha: '}{item.content}
              </Text>
            )}
            keyExtractor={(_, index) => index.toString()}
          />

          {stage === 'faq' && !isTyping && (
            <>
                <TextInput
                style={styles.input}
                placeholder="Digite sua pergunta para o FAQ..."
                placeholderTextColor="#aaa"
                value={input}
                onChangeText={setInput}
                />
                <TouchableOpacity style={styles.sendButton} onPress={() => { sendMessage(input); setInput(''); }}>
                <Text style={styles.buttonText}>Enviar</Text>

                </TouchableOpacity>
            </>
            )}

          {showResetButton && !isTyping && (
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#e91e63', marginBottom: 16, marginTop: 16 }]}
                onPress={() => {
                setMessages([]);
                router.push('/chatbot');
                }}
            >
                <Text style={[styles.buttonText, { color: 'white' }]}>Voltar</Text>
            </TouchableOpacity>
            )}

        </Fundo>
      </Cardbox>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1635',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#03CEFE',
    padding: 12,
    borderRadius: 20,
    marginBottom: 10,
    width: 236,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1C1635',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    marginTop: 12,
  },
  sendButton: {
    backgroundColor: '#03CEFE',
    padding: 12,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  owlContainer: {
    paddingTop: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  typingText: {
    color: '#6366f1',
    marginTop: 4,
    fontStyle: 'italic',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxLabel: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
