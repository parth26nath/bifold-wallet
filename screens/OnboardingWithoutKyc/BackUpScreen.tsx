import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
  SafeAreaView,
  TouchableOpacityProps,
} from 'react-native';
import { cloudSync } from '../../assets';
import Pointers from '../../components/Onboarding/Pointers';
import ToggleBuutton from '../../components/DesignSystem/ToggleBuutton';
import { useNavigation } from '@react-navigation/native';
import CloudSync from '../../assets/icons/cloudsync.svg';

const FONT_STYLE_1 = {};
const FONT_STYLE_2 = {};
const BUTTON_STYLE1 = {};
const BUTTON_STYLE2 = {};

const BackUpScreen: React.FC = () => {
  const navigation = useNavigation();
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [modalVisible, setModalVisible] = React.useState(false);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const svgWidth = screenWidth * 0.5;

  const handleBackupNow = () => {
    setModalVisible(true);
  };

  const handleContinueBackup = () => {
    setModalVisible(false);
  };

  const handleCancelBackup = () => {
    setModalVisible(false);
  };

  const getFontSizem = () => {
    return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.025;
  };
  const getFontSizel = () => {
    return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.017;
  };
  const dynamicStyles = {
    container: {
      position: 'absolute',
      top: screenHeight < 600? '5%' : '8%',
      left: screenHeight < 600? '10%' : '15%',
      width: screenHeight < 600? '70%' : '',
    },
  };

  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: '100%', position: 'relative' }}>
        <View style={{ width: '100%', height: '40%', backgroundColor: '#5869E6', borderBottomRightRadius: 900, opacity: 0.3 }} />

        <CloudSync style={dynamicStyles.container} />
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10%', width: '90%', marginHorizontal: 'auto', height: '30%' }}>
          <Text style={{...FONT_STYLE_2, fontSize: getFontSizem(), color: 'black' }}>Backup your wallet</Text>
          <Pointers />
        </View>
        <View style={{ width: '100%', height: screenHeight < 600? '25%' : '30%', paddingHorizontal: '6%' }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', height: '50%' }}>
            <ToggleBuutton />
            <Text style={{...FONT_STYLE_1, fontSize: getFontSizel(), color: 'black', marginLeft: '3%' }}>Enable Auto Back Up</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("WalletAnimationScreen");
              }}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 20, padding: '2%', width: '45%' }}>
              <Text style={{...FONT_STYLE_1, fontSize: getFontSizel(), color: '#5869E6' }}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBackupNow} style={{...BUTTON_STYLE2, backgroundColor: '#5869E6', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, width: '45%', padding: '4%' }}>
              <Text style={{...FONT_STYLE_1, fontSize: getFontSizel(), color: 'white' }}>Backup Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderBottomWidth: 2, backgroundColor: 'white', borderColor: 'white', width: '100%', padding: '2%' }}>
              <Image source={google} resizeMode='contain' style={{ marginRight: '7%' }} />
              <Text style={{ fontSize: getFontSizel(), color: '#5F5F5F', width:'80%' }}>Backup your wallet to Google Drive</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '2%' }}>
              <Text style={{...FONT_STYLE_1, fontSize: getFontSizel(), color: '#5F5F5F' }}>Backup Now</Text>
              <TouchableOpacity onPress={handleCancelBackup}>
                <Text style={{...FONT_STYLE_1, fontSize: getFontSizel(), color: '#5869E6' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: '5%',
    alignItems: 'center',
  },
});

export default BackUpScreen;