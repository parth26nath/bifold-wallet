import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ServiceHeadings from '../../components/Onboarding/ServiceHeadings'
import Amico11 from '../../assets/icons/amico11.svg'
import Amico12 from '../../assets/icons/amico12.svg'
import Amico13 from '../../assets/icons/amico13.svg'

const LandingPage = () => {
    const navigation = useNavigation()
    const screenHeight = Math.round(Dimensions.get('window').height)
    const imageComponents = [Amico11, Amico12, Amico13]
    const screenWidth = Math.round(Dimensions.get('window').width)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [walletInitialized, setWalletInitialized] = useState(false)
    const [networkConnected, setNetworkConnected] = useState(false)

    const styles = {
        border: {
            borderColor: '#5869E6',
            borderWidth: 1,
        },
    }

    const getFontSizeh = () => {
        return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.025
    }
    const getFontSize = () => {
        return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.017
    }
    const getSpace = () => {
        return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.08
    }

    useEffect(() => {
        console.log(screenHeight)
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageComponents.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const dynamicStyles = {
        container: {
            position: 'absolute',
            top: screenHeight < 600? '5%' : '12%',
            left: screenHeight < 600? '10%' : '15%',
            width: screenHeight < 600? '70%' : '',
        },
    }

    return (
        <SafeAreaView>
            <View style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: 'white' }}>
                <View style={{ width: '100%', height: '40%', backgroundColor: '#5869E6', borderBottomRightRadius: 800, opacity: 0.3 }} />

                {React.createElement(imageComponents[currentImageIndex], { style: dynamicStyles.container })}

                <View style={{ width: '90%', marginHorizontal: 'auto', height: '43%', paddingTop: '20%', display: 'flex', alignItems: 'flex-start' }}>
                    <Text style={{...FONT_STYLE_2, fontSize: getFontSizeh(), color: 'black' }}>My Identity, My Wallet</Text>
                    <ServiceHeadings />
                    <Text style={{ fontSize: getFontSize(), marginTop: getSpace(), width: '80%', color: 'black', alignContent: 'flex-start' }}>
                        By clicking, I accept the <Text style={{ color: '#5869E6' }}>terms of service</Text> and <Text style={{ color: '#5869E6' }}>privacy policy</Text>.
                    </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginHorizontal: 'auto', marginTop: screenHeight < 600? '5%' : '14%' }}>
                    <TouchableOpacity style={{...BUTTON_STYLE1, borderRadius: 10, backgroundColor: '#F0F5FF', display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#5869E6', paddingHorizontal: '6%', paddingVertical: '3%' }} onPress={() => { navigation.navigate('Recover') }}>
                        <Text style={{...FONT_STYLE_1, fontSize: getFontSize(), color: '#5869E6' }}>Recover Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...BUTTON_STYLE2, backgroundColor: '#5869E6', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingHorizontal: '6%', paddingVertical: '3%' }} onPress={() => {
                        navigation.navigate("CreatePin");
                    }}>
                        <Text style={{...FONT_STYLE_1, fontSize: getFontSize(), color: 'white' }}>Create Wallet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LandingPage