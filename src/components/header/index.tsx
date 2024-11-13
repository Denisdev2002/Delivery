import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Menu from './menu';
import Notification from './notification';
import SideMenu from './menu/sideMenu';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
      }}
    >
      {/* Botão de Menu */}
      <View style={{ zIndex: 20 }}>
        <Menu onPress={toggleMenu} />
      </View>

      {/* Localização - Sem deslocamento */}
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 12 }}>Localização</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Campo Grande</Text>
        </View>
      </View>

      {/* Notificação */}
      <Notification />

      {/* Menu Lateral - Controle de visibilidade */}
      <SideMenu visible={menuVisible} onClose={toggleMenu} />
    </View>
  );
}
