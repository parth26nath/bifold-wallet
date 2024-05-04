import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppbarSettings, SettingsCard } from '../../components'

import { useFocusEffect, useNavigation } from '@react-navigation/native'

const Settings: React.FC = () => {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const [popup, setPopup] = useState(false);
    const navigation = useNavigation();

    const navigateToCreatePin = () => {
        navigation.navigate('CreatePin');
    };
    return (
        <View style={{width:'full',height:'full',display:'flex'}} >
            <AppbarSettings name="Ashwin Mayank" mobile="+91 7075537129" />
            <View style={{height:'97%',width:'100%'}} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    <SettingsCard icon={true} heading={"Change PIN"} context={"Edit and reset your PIN"} />
                    <SettingsCard heading={"Biometrics"} context={"Enable biometrics"} />
                    <SettingsCard heading={"Backup"} context={"Backup your wallet to cloud"} popvalue={popup} />
                    <SettingsCard icon={true} heading={"Recovery phrase"} context={"Recovery phrase to restore your wallet"} navigate={'RecoveryPhaseScreen'} />
                    <SettingsCard icon={true} heading={"Help"} context={"Support and FAQ"} navigate={'SupportScreen'} />
                    <SettingsCard icon={true} heading={"Network"} context={"Network"} navigate={'Networks'} />
                </ScrollView>
            </View >

        </View >
    )
}

export default Settings