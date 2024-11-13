import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons'; // Importando ícones

type SideMenuProps = {
  onClose: () => void;
  visible: boolean;
};

export default function SideMenu({ onClose, visible }: SideMenuProps) {
  const screenWidth = Dimensions.get('window').width;

  // Estado para controlar o efeito de pressionamento em cada opção
  const [pressedOption, setPressedOption] = useState<string | null>(null);

  const handlePressIn = (option: string) => setPressedOption(option);
  const handlePressOut = () => setPressedOption(null);

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          justifyContent: 'flex-start',
        }}
      >
        <View
          style={{
            height: '100%',
            width: screenWidth * 0.7,
            backgroundColor: '#3366FF',
            padding: 20,
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowOffset: { width: 2, height: 0 },
            shadowRadius: 10,
            zIndex: 10,
          }}
        >
          {/* Botão de Fechar com Feedback de Pressionamento */}
          <TouchableOpacity
            onPress={onClose}
            onPressIn={() => setPressedOption('close')}
            onPressOut={() => setPressedOption(null)}
            activeOpacity={0.7}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 20, color: pressedOption === 'close' ? '#FFDD00' : '#FFF' }}>
              X
            </Text>
          </TouchableOpacity>

          {/* Conteúdo do Menu com Scroll */}
          <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            {/* Opção de Perfil */}
            <TouchableOpacity
              onPress={() => console.log('Navegar para Profile')}
              onPressIn={() => handlePressIn('profile')}
              onPressOut={handlePressOut}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.3)',
                backgroundColor: pressedOption === 'profile' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              }}
            >
              <Feather name="user" size={20} color="#FFF" style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 18, color: '#FFF' }}>Profile</Text>
            </TouchableOpacity>

            {/* Opção de Configurações */}
            <TouchableOpacity
              onPress={() => console.log('Navegar para Settings')}
              onPressIn={() => handlePressIn('settings')}
              onPressOut={handlePressOut}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.3)',
                backgroundColor: pressedOption === 'settings' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              }}
            >
              <Feather name="settings" size={20} color="#FFF" style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 18, color: '#FFF' }}>Settings</Text>
            </TouchableOpacity>

            {/* Adicione mais opções com ícones, se necessário */}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
