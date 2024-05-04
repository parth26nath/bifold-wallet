import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Amico from '../../assets/icons/amico.svg'

const GeoLocationScreen = () => {
    const navigation = useNavigation();
    const screenHeight = Math.round(Dimensions.get('window').height);

    const getFontSizem = () => {
        return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.025;
    };
    const getFontSizel = () => {
        return screenHeight < 600? screenHeight * 0.016 : screenHeight * 0.018;
    }
    const getButtonSize = () => {
        return screenHeight < 600? screenHeight * 0.016 : screenHeight * 0.017;
    }
    return (
        <SafeAreaView >
            <View style={{width:'100%',height:'100%'}}>
                <View  style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'80%'}}>
                    <Text style={{ fontSize: getFontSizem(),color:'black',fontWeight:'bold',marginBottom:'2%' }}>Your Country</Text>
                    <Text  style={{ fontSize: getFontSizel(),color:'#5F5F5F',marginBottom:'5%' }}>Your current location is India</Text>
                    <Amico width={"100%"} />
                </View>
                <View  style={{borderTopLeftRadius:20,borderTopColor:'#B9B9B9',borderTopRightRadius:20,padding:'2%',display:'flex',justifyContent:'center',alignItems:'center',height:'20%',width:'100%',borderWidth:2,}}>
                    <Text  style={{ fontSize: getFontSizel(),marginBottom:4,width:'93%',marginHorizontal:'auto',color:'black' }}>
                        Choose a country or region specific to your location.
                    </Text>
                    <View  style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',width:'93%',marginHorizontal:'auto'}}>
                        <TouchableOpacity  className="bg-primarybg flex justify-center items-center rounded-[12px] border-[1px] border-primary w-[48%] px-[3%] py-[2%]"
                            style={{...BUTTON_STYLE1,backgroundColor:'#F0F5FF',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:12,border:"1px",borderColor:'#5869E6',width:'48%',paddingHorizontal:'3%',paddingVertical:'2%'}}
                            onPress={() => { navigation.navigate("LocationScreen", { selectedCountry: null }) }}>
                            <Text style={{ fontSize: getButtonSize(),color:'#5869E6' }}>Change country</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...BUTTON_STYLE2,backgroundColor:'#5869E6',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:12,width:'48%',padding:'2%'}} 
                            onPress={() => {
                                navigation.navigate("LocationScreen", { selectedCountry: "India" })
                            }}
                        >
                            <Text  style={{ fontSize: getButtonSize(),color:'white' }}>India</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default GeoLocationScreen