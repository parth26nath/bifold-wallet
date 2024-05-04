import { View, Text, TouchableOpacity, Dimensions, Alert, RefObject } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { RecoverPhrase, ErrAndSucSt } from '../../components'
import { BUTTON_STYLE1, BUTTON_STYLE2 } from '../../constants/fonts'

interface RecoveryPhaseScreenProps {
    route: any
}

const RecoveryPhaseScreen: React.FC<RecoveryPhaseScreenProps> = ({ route }) => {
    const navigation = useNavigation();
    const screenHeight = Math.round(Dimensions.get('window').height);
    const { previous } = route.params || {};
    const recoveryPhraseRef = useRef<RecoverPhrase>(null);
    const [copied, setCopied] = useState(false);

    const showToast = (type: string, message: string) => {
        // Call your custom toast component with props
        ErrAndSucSt({ type, message });
    };

    const handleTextCopy = () => {
        recoveryPhraseRef.current?.copyToClipboard();  // Trigger the copyToClipboard function in RecoverPhrase component
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 2000);
        // Alert.alert('Copied', 'The recovery phrase has been copied to the clipboard.');
    }

    const handleNavigation = () => {
        if (previous)
            navigation.navigate('Settings')
        else
            navigation.navigate('BackUpScreen')
    }
    const getFontSizem = () => {
        return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.025;
    };
    const getFontSizel = () => {
        return screenHeight < 600? screenHeight * 0.016 : screenHeight * 0.018;
    }

    return (
        <SafeAreaView >
            <View style={{width:'100%',height:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
                <View style={{width:'100%',paddingTop:screenHeight<600?'10%':'30%',height:'75%',display:'flex',alignItems:'center'}} >
                    <View style={{width:'90%',display:'flex',justifyContent:'center',alignItems:'center'}} >
                        <Text  style={{ fontSize: getFontSizem(),fontWeight:'bold',marginBottom:'2%',color:'black' }}>Recovery Phrase</Text>
                        <Text  style={{ fontSize: getFontSizel(),alignSelf:'center',color:'#5F5F5F',marginBottom:'10%'}}>Note down the phrase to recover your wallet later.</Text>
                    </View>
                    <RecoverPhrase ref={recoveryPhraseRef} />
                </View>

                {copied && < ErrAndSucSt type={'success'} message={'Copied phrases to clipboard'} /> }
                <View style={{width:'90%',height:screenHeight<600?'25%':'20%',display:'flex',justifyContent:'center',alignItems:'center',gap:5}} >
                    <TouchableOpacity  style={{...BUTTON_STYLE1,backgroundColor:'#F0F5FF',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:12,borderWidth:2,borderColor:'#5869E6',width:'95%',paddingVertical:'4%'}} onPress={handleTextCopy}>
                        <Text style={{ fontSize: getFontSizel(),color:'#5869E6'}}>Copy phrases to clipboard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{...BUTTON_STYLE2,backgroundColor:'#5869E6',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:12,width:'95%',paddingVertical:'4%' }}
                        onPress={handleNavigation}>
                        <Text style={{ fontSize: getFontSizel(),color:'white' }}>I have noted the phrases</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default RecoveryPhaseScreen