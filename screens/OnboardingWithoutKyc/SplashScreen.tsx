import { View, Text, Dimensions, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { falcon } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/icons/Logo.svg'

const SplashScreen: React.FC = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LandingPage')
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [navigation])

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: '#733DF5', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Image source={falcon} resizeMode='contain' className="w-32 h-32 mb-3" /> */}
        <Logo width={150} height={150} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Falcon ID</Text>
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen