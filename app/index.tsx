import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useAuth } from '../context/auth'
import Cardbox from '../Components/Card/Card'

const Login: React.FC = () => {
    const auth = useAuth()
    const [showPassword, setShowPassword] = useState(false)


    const handleLogin = async () => {
        await auth.handleLogin(); // Lógica do login
        auth.setUser({ ...auth.user, username: auth.user.email }); // Armazena o email como username
        
        // Redirecionar para a tela onde o BotãoJogar é exibido, por exemplo, Home
        // Use o roteador para redirecionar
        router.push('/home'); // Ajuste o caminho conforme necessário
    };

    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>LOGIN</Text>

                <Text style={styles.label}>User:</Text>
                <TextInput
                    mode="flat"
                    style={styles.input}
                    theme={{ colors: { primary: '#ffffff', text: '#ffffff', placeholder: '#888' } }}
                    onChangeText={(text: string) => auth.setUser({ ...auth.user, email: text })}
                />

                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    mode="flat"
                    style={styles.input}
                    secureTextEntry={!showPassword}
                    placeholder="********"
                    theme={{ colors: { primary: '#ffffff', text: '#ffffff', placeholder: '#888' } }}
                    right={
                        <TextInput.Icon
                            icon={showPassword ? "eye-off" : "eye"}
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                    onChangeText={(text: string) => auth.setUser({ ...auth.user, password: text })}
                />

                <Button mode="contained" onPress={auth.handleLogin}>ENTRAR</Button>
            </Cardbox>
        </View>
    )
}

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
    label: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
        marginTop: 15,
        alignSelf: 'flex-start',
    },
})

export default Login
