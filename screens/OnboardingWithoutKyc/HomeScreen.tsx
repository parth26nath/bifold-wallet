import { View, Text, Dimensions, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Navbar } from '../../components'
import WalletWithCards from '../WalletDetails/WalletWithCards'
import LinearGradient from 'react-native-linear-gradient';
import ContactPage from '../ContactScreens/ContactPage'
import Settings from '../SettingsScreens/Settings'
import { useIsFocused, useRoute } from '@react-navigation/native'

const HomeScreen = () => {
    const [selectedIcon, setSelectedIcon] = useState<'wallet' | 'contacts' | 'settings'>('wallet');
    const screenHeight = Math.round(Dimensions.get('window').height);
    const isFocused = useIsFocused();
    const route = useRoute();

    const handleIconClick = (iconName: 'wallet' | 'contacts' | 'settings') => {
        setSelectedIcon(iconName);
    };

    useEffect(() => {
        if (!isFocused && route.name === 'HomeScreen') {
            setSelectedIcon('wallet');
        }
    }, [isFocused, route]);

    return (
        <SafeAreaView className="flex-1 bg-primarybg" >
            <LinearGradient
                colors={['#F0F5FF', '#FFFFFF']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.3, y: 0.3 }}
            ></LinearGradient>
            <View style={{width:'100%',height:'100%',backgroundColor:'white'}} >
                <View style={{width:'100%',height:screenHeight<600?'74%':'79%'}} >
                    {selectedIcon === 'wallet' && <WalletWithCards />}
                    {selectedIcon === 'contacts' && <ContactPage />}
                    {selectedIcon === 'settings' && <Settings />}
                </View>
                <Navbar handleIconClick={handleIconClick} icon={route.params?.selectedIcon} />
            </View>
        </SafeAreaView >
    )
}

export default HomeScreen