import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';

interface NavbarProps {
    handleIconClick: (icon: string) => void;
    icon: string;
}

const Navbar: React.FC<NavbarProps> = ({ handleIconClick, icon }) => {
    const [selectedIcon, setSelectedIcon] = useState('wallet');
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    const navigation = useNavigation();
    const route = useRoute();
    const getFontSizel = () => {
        return screenHeight < 600? screenHeight * 0.010 : screenHeight * 0.014;
    }

    const handleIconClick1 = (iconName: string) => {
        setSelectedIcon(iconName);
        if (iconName === 'scan') {
            navigation.navigate('QRScreen');
        } else { }
    };
    useFocusEffect(
        React.useCallback(() => {
            // If coming back from QRScreen, set the selectedIcon to 'wallet'
            if (icon === 'wallet') {
                setSelectedIcon('wallet');
            }
        }, [icon])
    );

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardStatus(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardStatus(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const renderIcon = (iconName: string, label: string) => (
        <TouchableOpacity
            key={iconName}
            style={{
                flex: 1,
                alignItems: 'center',
                paddingVertical: '5%',
                borderTopWidth: 4,
                borderTopColor: selectedIcon === iconName? '#5869E6' : 'transparent',
            }}
            onPress={() => {
                handleIconClick(iconName);
                handleIconClick1(iconName);

            }}
        >
            {iconName === 'wallet' && <AntDesign name="wallet" size={24} color={selectedIcon === 'wallet'? '#5869E6' : 'black'} />}
            {iconName === 'contacts' && <Feather name="users" size={24} color={selectedIcon === 'contacts'? '#5869E6' : 'black'} />}
            {iconName === 'scan' && <Ionicons name="scan" size={24} color={selectedIcon === 'scan'? '#5869E6' : 'black'} />}
            {iconName === 'settings' && <Feather name="settings" size={24} color={selectedIcon === 'settings'? '#5869E6' : 'black'} />}

            <Text
                style={{
                    fontWeight: 500,
                    fontFamily: 'plus-jakarta-sans',
                    color: selectedIcon === iconName? '#5869E6' : 'black',
                    fontSize: getFontSizel()
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white' }}>
            {!keyboardStatus? (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopColor: '#CBCBCC', borderTopWidth: 1, paddingHorizontal: '5%' }}>
                    {renderIcon('wallet', 'Wallet')}
                    {renderIcon('contacts', 'Contacts')}
                    {renderIcon('scan', 'Scan')}
                    {renderIcon('settings', 'Settings')}
                </View>
            ) : (
                <View style={{ padding: 0, height: '0px', backgroundColor: 'green' }}>
                    {/* <Text>Keyboard is visible</Text> */}
                </View>
            )}
        </View>
    );
};

export default Navbar;