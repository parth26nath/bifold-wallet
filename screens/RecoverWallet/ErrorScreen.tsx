import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import errorImage from '../../assets';

const ErrorScreen: React.FC = () => {
    return (
        <SafeAreaView>
            <View style={{width:'100%',height:'100%',display:'flex',alignItems:'center',paddingTop:'25%'}} >
                <Text style={{fontSize:20,fontWeight:'bold',marginBottom:'2%'}} >Something went wrong</Text>
                <Text style={{fontSize:16,color:'#8E8E8E',marginBottom:'10%'}}>Try to restore your credentials again.</Text>
                <Image source={errorImage} resizeMode='contain' style={{height:'50%'}}  />
            </View>
        </SafeAreaView>
    );
};

export default ErrorScreen;