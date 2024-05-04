import { View, Text, TouchableOpacity, Dimensions, Keyboard, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextAreaField } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { BUTTON_STYLE2 } from '../../constants/fonts'

const RecoverWalletScreen: React.FC = () => {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const navigation = useNavigation();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <SafeAreaView>
            <View style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <View style={{width:'100%',height:'90%',display:'flex'}}>
                    <TouchableOpacity
                        style={{
                        width: 48,
                        height: 48,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8,
                        margin: '8%',
                    }}>
                        <MaterialCommunityIcons name="arrow-left" size={24} color="black" onPress={() => { navigation.navigate("Recover") }} />
                    </TouchableOpacity>
                    <View style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                        <Text  style={{fontWeight:'bold',fontSize:screenHeight<600?18:22,alignSelf:'center',marginBottom:'4%',color:'black'}}>Recovery phrase</Text>
                        <Text style={{alignSelf:'center',color:'#8E8E8E',fontSize:screenHeight<600?14:18,marginBottom:"10%"}}>Enter your wallet’s recovery phrase.</Text>
                        <TextAreaField content={'Enter Recovery Phrase'} type={'inputtype1'} />
                    </View>

                </View>
                {!isKeyboardVisible && (
                    <TouchableOpacity style={{backgroundColor:'#5869E6',...BUTTON_STYLE2,height:'8%',width:'90%',borderRadius:12,display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'7%',padding:'2%'}} onPress={() => { navigation.navigate('CreatePin') }}>
                        <Text style={{fontSize:18,alignSelf:'center',color:'white'}} >Proceed</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    )
}

export default RecoverWalletScreen