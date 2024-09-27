import { router, useRouter } from 'expo-router';
import * as React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';


const BtIconeM = () => {
  const router = useRouter()
  return(
  <IconButton
    icon="menu"
    iconColor={MD3Colors.error95}
    size={40}
    onPress={() => router.push('/home')}
  />
)
};

const BtIconeAct = () => {
  const router = useRouter()
  return(
    <IconButton
    icon="account"
    iconColor={MD3Colors.error95}
    size={40}
    onPress={() => router.push('/profile')}
  />
  )
};

const BtIconePgt = () => (
    <IconButton
    icon="credit-card"
    iconColor={MD3Colors.error95}
    size={40}
    onPress={() => router.push('/payment')}
  />
);

export { BtIconeM, BtIconeAct, BtIconePgt };