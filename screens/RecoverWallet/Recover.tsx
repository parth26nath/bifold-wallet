import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BackUp } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { BUTTON_STYLE2 } from '../../constants/fonts'

const Recover: React.FC = () => {
  const navigation = useNavigation();
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '100%', height: '90%', display: 'flex' }}>
          <TouchableOpacity
            style={{
              width: 48,
              height: 48,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              margin: '8%',
            }}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" onPress={() => { navigation.navigate("LandingPage") }} />
          </TouchableOpacity>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: screenHeight < 600? 18 : 26, alignSelf: 'center', marginBottom: '4%' }}>Import backup file</Text>
            <Text style={{ alignSelf: 'auto', color: '#8E8E8E', fontSize: screenHeight < 600? 14 : 18, marginBottom: '10%' }}>Please select your backup  zip file to restore your wallet with your credentials.</Text>
            <BackUp />
          </View>

        </View>
        <TouchableOpacity style={{ backgroundColor: '#5869E6',...BUTTON_STYLE2, height: '8%', width: '90%', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '7%', padding: '2%' }} onPress={() => { navigation.navigate('RecoverWalletScreen') }}>
          <Text className={` text-lg  text-center text-white`}>Import</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Recover