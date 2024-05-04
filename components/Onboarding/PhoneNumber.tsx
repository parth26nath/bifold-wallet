import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';

interface PhoneNumberProps {
  onPhoneNumberChange: (phoneNumber: string) => void;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ onPhoneNumberChange }) => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [isCountryCodeValid, setIsCountryCodeValid] = useState(true); // State to track country code validity

  const validatePhoneNumber = () => {
    if (
      phoneNumber.length < 10 &&
      phoneNumber.replace(/\D/g, '') &&
      /^\d+$/.test(phoneNumber)
    ) {
      setPhoneNumberError('Phone number must be at least 10 digits');
    } else {
      setPhoneNumberError('');
    }
  };

  const validateCountryCode = () => {
    if (countryCode.length < 1 || countryCode.length > 3) {
      setIsCountryCodeValid(false);
    } else {
      setIsCountryCodeValid(true);
    }
  };

  useEffect(() => {
    validatePhoneNumber();
    onPhoneNumberChange(phoneNumber);
  }, [phoneNumber]);

  useEffect(() => {
    validateCountryCode();
  }, [countryCode]);

  const styles = StyleSheet.create({
    line: {
      height: '90%',
      borderWidth: 1,
      borderColor: '#5F5F5F',
    },
    placeholdercolor: {
      color: isFocused? '#212228' : '#898A8E',
    },
  });

  const getFontSize = () => {
    return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.017;
  };

  return (
    <View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'90%',marginHorizontal:'auto',borderRadius:10,borderWidth:1,borderColor:'#B9B9B9',paddingHorizontal:6,paddingVertical:15}}>
        <TextInput
          placeholderTextColor={styles.placeholdercolor.color}
          value={countryCode}
          onChangeText={setCountryCode}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{ fontSize: getFontSize(), color: 'black',width:'15%',color:'#5F5F5F',alignSelf:'center' }}
        />
        <View style={{height:'90%',borderWidth:1,borderColor:'#454545',marginRight:'5%'}}/>
        <TextInput
          style={{ fontSize: getFontSize(), color: 'black',width:'80%'}}
          placeholder='Enter Your Phone Number'
          placeholderTextColor={styles.placeholdercolor.color}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          keyboardType='number-pad'
          maxLength={10}
        />
      </View>
      {!isCountryCodeValid && (
        <Text style={{ color: 'red', marginLeft: '5%', marginTop: '5%', fontSize: 16 }}>
         ! Invalid country code
        </Text>
      )}
    </View>
  );
};

export default PhoneNumber;