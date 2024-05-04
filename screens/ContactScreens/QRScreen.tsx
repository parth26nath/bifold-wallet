import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { qr } from '../../assets';

const QRScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();
  const { height: screenHeight } = Dimensions.get('window');

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    if (!scanned) {
      setScanned(true);
      console.log('Scanned data:', data);
      // Handle navigation or other actions upon successful scan
      navigation.navigate("AcceptDeclineScreen", { qrData: data });
    }
  };

  const getFontSize = () => {
    return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.017;
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onBarCodeScanned={scanned? undefined : handleBarCodeScanned}
      >
        <View style={styles.innerBox}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={qr} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.crossButton} onPress={() => navigation.navigate("HomeScreen", { selectedIcon: "wallet" })}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Scan QR code to contact others.
          </Text>
          <Text style={{ fontSize: getFontSize(), color: 'black' }}>
            You will be able to add your VC provider or others as a contact after scanning the QR code on their website.
          </Text>
        </View>
      </RNCamera>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },

  corner: {
    width: 85, // Adjust the width of the corner dashes
    height: 85, // Adjust the height of the corner dashes
    borderWidth: 5,
    borderColor: '#5869E6',
    position: 'absolute',
    borderRadius: 12
  },
  topLeft: {
    top: -1,
    left: -1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: -1,
    right: -1,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  innerBox: {
    position: 'absolute',
    width: 226,
    height: 226,
    borderRadius: 5, // Adjust the border radius here
    borderWidth: 5,
    borderColor: 'transparent',
    opacity: 0.75,
  },
  bottomLeft: {
    bottom: -1,
    left: -1,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: -2,
    right: -1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '10%',
    position: 'absolute',
    top: '10%',
    zIndex: 2
  },
 iconImage: {
    height: '100%',
    width: '60%',

  },
  crossButton: {
    padding: 5,

  },
  infoBox: {
    flex: 1,
    width: '80%', // Adjust the width here
    bottom: 30,
    left: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  infoText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    marginBottom: 10
  }
});

export default QRScreen;