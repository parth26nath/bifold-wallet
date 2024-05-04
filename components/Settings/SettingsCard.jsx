import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ToggleButton from '../DesignSystem/ToggleBuutton';
import { useNavigation } from '@react-navigation/native';

const SettingsCard = ({ icon, heading, context, navigate, fromScreen }) => {
    const [showHelloWorld, setShowHelloWorld] = useState(false);
    const navigation = useNavigation();
    const handleTogglePress = () => {
        setShowHelloWorld(!showHelloWorld);
    }
    const screenHeight = Math.round(Dimensions.get('window').height);
    const getFontSizeh = () => {
        return screenHeight < 600 ? screenHeight * 0.015 : screenHeight * 0.020;
    };
    const getFontSize = () => {
        return screenHeight < 600 ? screenHeight * 0.015 : screenHeight * 0.017;
    };

    return (
        <View  style={{backgroundColor:'white',width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#B9B9B9' ,paddingHorizontal:15,paddingVertical:10,marginBottom:'3%',}}>
            <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',gap:3,width:'80%'}}>
                <Text style={[styles.title, { fontSize: getFontSizeh() }]}>{heading}</Text>

                <Text style={{ fontSize: getFontSize(),color:'#898A8E' }}>{context}</Text>
            </View>
            {icon ? <Entypo name="chevron-right" size={32} color="black" /> : <ToggleButton onPress={handleTogglePress} />}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontFamily: 'plus-jakarta-sans',
        color: '#000',
    },
    arrow: {
        fontSize: 20,
        marginTop: 10,
    },
});

export default SettingsCard;
