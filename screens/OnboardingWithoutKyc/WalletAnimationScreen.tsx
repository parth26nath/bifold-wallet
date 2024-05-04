import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { animation } from '../../assets'
import { Loader } from '../../components'
import { useNavigation } from '@react-navigation/native'
import Animation from '../../assets/icons/animation.svg'

interface WalletAnimationScreenProps {}

const WalletAnimationScreen: React.FC<WalletAnimationScreenProps> = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreen')
    }, 2000)

    return () => {
      console.log('SplashScreen unmounted')
      clearTimeout(timer)
    }
  }, [navigation])

  return (
    <View style={{ backgroundColor: '#F0F5FF', width: '100%', height: '100%', position: 'relative' }}>
      <View style={{ width: '100%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Image source={animation} resizeMode='contain' /> */}
        <Animation />
      </View>
      <View style={{ position: 'absolute', left: 0, right: 0, bottom: '20%' }}>
        <Loader />
        <Text style={{ alignSelf: 'center', color: '#5869E6' }}>Creating your wallet</Text>
      </View>
    </View>
  )
}

export default WalletAnimationScreen