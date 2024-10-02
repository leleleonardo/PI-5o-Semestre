/*import { View, StyleSheet, Text } from 'react-native'
import Cardbox from '../Components/Card/Card'
import { BtIconeM, BtIconeAct, BtIconePgt } from '../Components/IconButton/IconButton'
import { useState } from 'react'
import { Footer } from '../Components/Footer/footer'


export default function Home() {

    const [filas, setFilas] = useState([])

    const cardContent = filas.length === 0
        ?<Text> Você não está em nenhuma fila. Clique para acessar uma fila</Text>
        :<Text> Você está nas seguintes filas: {filas.join(', ')}</Text>
    return (
        <View style={styles.container}>
            <Cardbox>
                {cardContent}
            </Cardbox>
            <Footer></Footer>
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
    footer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
})*/

import { View, StyleSheet, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useAuth } from '../context/auth'
import Cardbox from '../Components/Card/Card'
import React from 'react'

export default function Login() {
    const auth = useAuth()
    const [showPassword, setShowPassword] = React.useState(false)

    return (
        <View style={styles.container}>
            <Cardbox>
                <Text style={styles.title}>LOGIN</Text>

                <Text style={styles.label}>User:</Text>
                <TextInput
                    mode="flat"
                    style={styles.input}
                    theme={{ colors: { primary: '#ffffff', text: '#ffffff', placeholder: '#888' } }}
                    onChangeText={(text) => auth.setUser({ ...auth.user, email: text })}
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
                    onChangeText={(text) => auth.setUser({ ...auth.user, password: text })}
                />
                <Button mode="contained"
                    onPress={auth.handleLogin}
                >ENTRAR</Button>


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
