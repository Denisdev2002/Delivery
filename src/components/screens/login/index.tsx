// screens/LoginScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/rootStack'; // importando os tipos da navegação
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Tipando o useNavigation
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
    const navigation = useNavigation<NavigationProp>(); // Usando o tipo correto para navegação

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Login</Text>
            {/* Aqui você pode adicionar seus campos de login */}
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
