import { View, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'

export default function Notification() {
 return (
   <View>
    <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center 
            items-center">
                <Feather name="bell" size={20} color='#121212'/>
            </Pressable>
   </View>
  );
}