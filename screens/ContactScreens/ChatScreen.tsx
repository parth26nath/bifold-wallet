import { View, Text, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { university } from '../../assets'

const ChatScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F5FF' }}>
      <LinearGradient
        colors={['#F0F5FF', '#FFFFFF']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.3, y: 0.3 }}
      >
        <View style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%', marginHorizontal: 'auto', marginTop: '3%' }}>
            <AntDesign name="arrowleft" size={24} color="black" style={{ width: '30%' }} />
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', gap: 5 }}>
              <Image source={university} />

              <Text style={{ color: 'black', marginBottom: 1, fontSize: 16 }}>Benguluru University</Text>
            </View>

          </View>
          <View style={{ backgroundColor: '#F0F5FF', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderColor: '#5869E6', padding: '5%', width: '90%', marginTop: '5%' }}>
            <Text style={{ alignSelf: 'center', fontSize: 15 }}>Messages are end-to-end encrypted. No one outside this chat, not even _____ can read the conversation.</Text>
          </View>
        </View>

      </LinearGradient>
    </SafeAreaView >
  )
}

export default ChatScreen