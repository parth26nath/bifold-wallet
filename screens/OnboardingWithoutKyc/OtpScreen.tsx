import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpFill } from '../../components'
import { useNavigation } from '@react-navigation/native'

const OtpScreen = () => {
    const screenHeight = Math.round(Dimensions.get('window').height)
    const navigation = useNavigation()
    const [nameValue, setNameValue] = useState('')

    const handleOTPComplete = (otp: string) => {
        if (otp === "123456") {
            navigation.navigate("RecoveryPhaseScreen")
        }
        console.log('Completed OTP:', otp);
    };

    const getFontSizem = () => {
        return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.025;
    };

    const getFontSizel = () => {
        return screenHeight < 600? screenHeight * 0.016 : screenHeight * 0.018;
    }

    const handleNameChange = (value: string) => {
        setNameValue(value);
    };

    return (
        <SafeAreaView >
            <View style={{width:'100%',height:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
                <View style={{width:'90%',height:'100%',paddingTop:screenHeight<800?'10%':'30%',display:'flex',alignItems:'center'}} >
                    <Text  style={{ fontSize: getFontSizem(),fontWeight:'bold',marginBottom:'2%',color:'black' }}>Enter OTP</Text>
                    <Text  style={{ fontSize: getFontSizel(),alignSelf:'center',color:'#5F5F5F' }}>Enter OTP sent to your mobile number linked with your Aadhaar card.</Text>
                    <OtpFill onComplete={handleOTPComplete} />
                    <TouchableOpacity ><Text style={{ fontSize: getFontSizel(),color:'#5869E6' }}>Resend OTP</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default OtpScreen;