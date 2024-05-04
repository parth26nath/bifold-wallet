import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navbar } from '../../components';
import { useNavigation } from '@react-navigation/native';

interface LoaderScreenProps {
  // No props defined
}

const LoaderScreen: React.FC<LoaderScreenProps> = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('WalletEmptyScreen');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <SafeAreaView style={{ display: 'flex', backgroundColor: '#F0F5FF' }}>
      <View style={{ width: '100%', height: '100%', display: 'flex', backgroundColor: 'white' }}>
        <View
          style={{
            height: '80%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', marginTop: '3%', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', marginTop: '3%', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', marginTop: '3%', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', marginTop: '3%', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />
          <View style={{ width: '60%', height: '10%', backgroundColor: '#B9B9B9', opacity: 0.1 }} />

        </View>
        <Navbar />
      </View>
    </SafeAreaView>
  );
};

export default LoaderScreen;