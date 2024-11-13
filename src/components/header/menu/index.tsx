import React from 'react';
import { Pressable, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type MenuProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export default function Menu({ onPress }: MenuProps) {
  return (
    <Pressable 
      onPress={onPress}
      style={{
        width: 40, 
        height: 40, 
        backgroundColor: 'white', 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <Ionicons name="menu" size={20} color='#121212'/>
    </Pressable>
  );
}
