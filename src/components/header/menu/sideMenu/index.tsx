import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Modal, ScrollView } from 'react-native';
import { SideMenuOption } from './sideMenuOption';
import { Feather } from '@expo/vector-icons';

type SideMenuProps = {
  onClose: () => void;
  visible: boolean;
};

export default function SideMenu({ onClose, visible }: SideMenuProps) {
  const screenWidth = Dimensions.get('window').width;
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
          {/* Botão de Fechar */}
          <TouchableOpacity
            onPress={onClose}
            onPressIn={() => setPressedOption('close')}
            onPressOut={() => setPressedOption(null)}
            activeOpacity={0.7}
          >
            <TouchableOpacity
              onPress={onClose}
              onPressIn={() => setPressedOption('close')}
              onPressOut={() => setPressedOption(null)}
              activeOpacity={0.7}
            >
              <View
                style={{
                  width: 40,               
                  height: 40,             
                  borderRadius: 20,        
                  backgroundColor: pressedOption === 'close' ? '#FFDD00' : '#3366FF',
                  justifyContent: 'center',  
                  alignItems: 'center',      
                  marginBottom: 20,        
                }}
              >
                <Feather
                  name="chevron-left" 
                  size={24}      
                  color="#FFF"
                />
              </View>
            </TouchableOpacity>

          </TouchableOpacity>

          {/* Conteúdo do Menu com Scroll */}
          <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            {/* Opções de Menu usando o componente SideMenuOption */}
            <SideMenuOption
              label="Profile"
              iconName="user"
              onPress={() => console.log('Navegar para Profile')}
            />

            <SideMenuOption
              label="Settings"
              iconName="settings"
              onPress={() => console.log('Navegar para Settings')}
            />

            <SideMenuOption
              label="Logout"
              iconName="log-out"
              onPress={() => console.log('Logout')}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
