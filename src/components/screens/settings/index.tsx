// screens/LoginScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
    },
});
