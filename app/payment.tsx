import { View, Text, StyleSheet } from 'react-native'
import { BotãoComprar } from '../Components/Button/Button'
import Cardbox from '../Components/Card/Card'
import { Footer } from '../Components/Footer/footer'
import BalanceCard from '../Components/Card/BalanceCard'
import PurchaseCard from '../Components/Card/PurchaseCard'
import React from 'react'



export default function Payment() {
    return (
        <View style={styles.container}>

                <Cardbox>
                    <Text style={styles.title}>Créditos</Text>
                    <BalanceCard balance={35}></BalanceCard>
                    <PurchaseCard></PurchaseCard>
                    
                    
                </Cardbox>
            <View style={styles.footer}>
            
            </View>
            
           
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
        marginBottom: 20,
    }
})