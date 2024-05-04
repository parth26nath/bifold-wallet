import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Logo } from '../../assets'
import Icon from 'react-native-vector-icons/Entypo'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { FONT_STYLE_2, FONT_STYLE_3 } from '../../constants/fonts'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

const screenHeight = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({
  iconColor: {
    tintColor: '#733DF5',
  },
  imagestyle: {
    width: 20,
    height: 20,
  },
})

const getFontSizel = () => {
  return screenHeight < 600? screenHeight * 0.016 : screenHeight * 0.018
}

const Pointers: React.FC = () => {
  return (
    <View style={{ width: '90%', height: 'auto', marginTop: '2%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 2, marginBottom: '5%' }}>
        <View style={{ borderRadius: '50%', backgroundColor: 'divColor', padding: screenHeight < 600? 2 : 4 }}>
          <Image source={Logo} resizeMode="contain" style={styles.imagestyle} />
        </View>
        <Text style={{...FONT_STYLE_3, fontSize: getFontSizel(), color: 'black' }}>Easily recover your digital identity.</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 2, marginBottom: '5%' }}>
        <View style={{ borderRadius: '50%', backgroundColor: 'divColor', padding: screenHeight < 600? 2 : 4 }}>
          <Icon name="browser" size={24} color="#733DF5" />
        </View>
        <Text style={{...FONT_STYLE_3, fontSize: getFontSizel(), color: 'black' }}>Backup to your Google Cloud or iCloud.</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
        <View style={{ borderRadius: '50%', backgroundColor: 'divColor', padding: screenHeight < 600? 2 : 4 }}>
          <FeatherIcon name="eye-off" size={24} color="#733DF5" />
        </View>
        <Text style={{...FONT_STYLE_3, fontSize: getFontSizel(), color: 'black' }}>Only you have access to your identity.</Text>
      </View>
    </View>
  )
}

export default Pointers