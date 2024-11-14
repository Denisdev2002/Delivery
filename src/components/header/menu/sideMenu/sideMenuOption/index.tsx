import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Tipo para as props de SideMenuOption
type SideMenuOptionProps = {
  label: string;
  iconName: keyof typeof Feather.glyphMap;
  onPress: () => void;
};

// Componente SideMenuOption com TouchableOpacity
export function SideMenuOption({ label, iconName, onPress }: SideMenuOptionProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: isPressed ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      }}
    >
      <Feather name={iconName} size={20} color="#FFF" style={{ marginRight: 10 }} />
      <Text style={{ fontSize: 18, color: '#FFF' }}>{label}</Text>
    </TouchableOpacity>
  );
}
