import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useAuth } from '../context/auth';
import Cardbox from '../Components/Card/Card';

const Login: React.FC = () => {
    const auth = useAuth(); 
    console.log("Auth Context:", auth);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log("Clicou no botão de login"); // Adicione esta linha
    try {
        await auth.handleLogin(username, password); 
    } catch (error) {
        console.error("Erro durante login:", error);
        Alert.alert('Erro', 'Usuário ou senha inválidos!');
    }
    };

    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>LOGIN</Text>

                <TextInput
                    mode="flat"
                    style={styles.input}
                    theme={{ colors: { primary: '#ffffff', text: '#ffffff', placeholder: '#888' } }}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
                />

                <TextInput
                    mode="flat"
                    style={styles.input}
                    secureTextEntry={!showPassword}
                    placeholder="********"
                    theme={{ colors: { primary: '#ffffff', text: '#ffffff', placeholder: '#888' } }}
                    value={password}
                    onChangeText={setPassword}
                    right={
                        <TextInput.Icon
                            icon={showPassword ? "eye-off" : "eye"}
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                />

                <Button mode="contained" onPress={handleLogin}>
                ENTRAR
                </Button>
            </Cardbox>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1C1635',
        padding: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
    },
    input: {
        color: '#ffffff',
        marginBottom: 15,
        borderRadius: 8,
        paddingLeft: 10,
        height: 50,
    },
});

export default Login;
