import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

interface FundoProps {
    children: React.ReactNode;
}

const Fundo: React.FC<FundoProps> = ({ children }) => (
    <Card style={styles.card}>
        <Card.Content>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {children}
            </ScrollView>
        </Card.Content>
    </Card>
);

const styles = StyleSheet.create({
    card: {
        width: 310,
        height: 400,
        backgroundColor: '#3A3560',
        borderRadius: 20,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
});

export default Fundo;
