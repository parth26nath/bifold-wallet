import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const AppbarSettings = ({ name, mobile }: { name: string, mobile: string }) => {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const getFontSizeh = () => {
        return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.020;
    };
    const getFontSize = () => {
        return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.017;
    };
    return (
        <View  style={{display:'flex',padding:'5%',alignItems:'flex-start',width:'100%',height:'15%',backgroundColor:'#F0F5FF'}}>
            <Text style={{ fontWeight: 800, fontFamily: 'plus-jakarta-sans', fontSize: getFontSizeh(), color: 'black',marginBottom:'3%'}} >
                {name}
            </Text>
            <Text style={{ fontWeight: 400, fontFamily: 'plus-jakarta-sans', fontSize: getFontSize(), color: 'black' }} >
                {mobile}
            </Text>
        </View>
    )
}

export default AppbarSettings