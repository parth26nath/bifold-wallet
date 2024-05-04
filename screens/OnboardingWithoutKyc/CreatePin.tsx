import { View, Text, TouchableOpacity, Dimensions, Keyboard } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PinDots } from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreatePin: React.FC = () => {
  const navigation = useNavigation();
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [confirm, setConfirm] = useState(false);

  const getFontSizem = (): number => {
    return screenHeight < 600 ? screenHeight * 0.015 : screenHeight * 0.025;
  };

  const getFontSizel = (): number => {
    return screenHeight < 600 ? screenHeight * 0.016 : screenHeight * 0.018;
  };

  const handlePress = (): void => {
    console.log('TouchableOpacity pressed');
    navigation.goBack(); // Verify navigation is defined and working
  };

  return (
    <SafeAreaView>
      {!confirm ? (
        <View className="w-full h-full flex">
          <TouchableOpacity
            style={{
              width: 48,
              height: 48,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              margin: '8%',
            }}
            onPress={handlePress}
          >
            <Icon name="arrow-left" color="black" size={24} />
          </TouchableOpacity>
          <Text style={{ fontSize: getFontSizem(), fontWeight: 'bold', alignSelf: 'center', color: 'black' }}>
            Create PIN
          </Text>
          <Text
            style={{
              fontSize: getFontSizel(),
              alignSelf: 'center',
              color: '#8E8E8E',
              marginTop: '2%',
              marginBottom: '10%',
            }}
          >
            Choose a new pin for authentication
          </Text>
          <PinDots confirm1={confirm} confirm={setConfirm} />
        </View>
      ) : (
        <View style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <TouchableOpacity
            style={{
              width: 48,
              height: 48,
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              margin: '8%',
            }}
          >
            <Icon name="arrow-left" size={24} color="black" onPress={() => navigation.goBack()} />
          </TouchableOpacity>
          <Text style={{ fontSize: getFontSizem(), fontWeight: 'bold', alignSelf: 'center', color: 'black' }}>
            Confirm PIN
          </Text>
          <Text
            style={{
              fontSize: getFontSizel(),
              alignSelf: 'center',
              color: '#8E8E8E',
              marginTop: '2%',
              marginBottom: '10%',
            }}
          >
            Confirm pin for authentication
          </Text>
          <PinDots confirm1={confirm} confirm={setConfirm} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CreatePin;