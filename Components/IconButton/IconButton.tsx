import * as React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';

const BtIconeM = () => (
  <IconButton
    icon="menu"
    iconColor={MD3Colors.error95}
    size={40}
    onPress={() => console.log('Pressed')}
  />
);

const BtIconeAct = () => (
    <IconButton
    icon="account"
    iconColor={MD3Colors.error95}
    size={40}
    onPress={() => console.log('Pressed')}
  />
);

const BtIconePgt = () => (
    <IconButton
    icon="credit-card"
    iconColor={MD3Colors.error95}
    size={40}
    onPress={() => console.log('Pressed')}
  />
);

export { BtIconeM, BtIconeAct, BtIconePgt };