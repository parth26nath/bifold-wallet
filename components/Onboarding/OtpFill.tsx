import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Dimensions } from 'react-native';

interface OtpFillProps {
  onComplete: (otp: string) => void;
}

const OtpFill: React.FC<OtpFillProps> = ({ onComplete }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const refs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

  const handleInput = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    if (index > 0 && text === '') {
      // Move focus to the previous box when backspace is pressed
      refs[index - 1].current?.focus();
    } else if (index < 5 && text !== '') {
      refs[index + 1].current?.focus();
    } else if (index === 5 && text !== '') {
      onComplete(newOtp.join(''));
    }

    setOtp(newOtp);
  };

  const handleBackspace = (index: number) => {
    const newOtp = [...otp];
    newOtp[index] = '';

    if (newOtp[index] !== '') {
      newOtp[index] = '';
    } else if (index > 0) {
      // Move focus to the previous box if at the beginning
      refs[index - 1].current?.clear(); // clear the digit in the previous box
      refs[index - 1].current?.focus(); // move focus to the previous box
    }

    setOtp(newOtp);
    console.log('Backspace pressed. Updated OTP:', newOtp);
  };

  useEffect(() => {
    // Set focus on the first input when the component mounts
    refs[0].current?.focus();
  }, []);

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={refs[index]}
          style={[
            styles.input,
            {
              width: screenHeight < 600 ? 30 : 40,
              height: screenHeight < 600 ? 30 : 40,
            },
          ]}
          value={digit}
          className={`${screenHeight < 600 ? 'w-40 h-40' : 'w-50 h-50'}`}
          keyboardType="numeric"
          onChangeText={(text) => handleInput(text, index)}
          onKeyPress={({ nativeEvent }) => {
            // Handle backspace key press
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(index);
            }
          }}
          maxLength={1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#CBCBCC',
    textAlign: 'center',
    fontSize: 14,
    backgroundColor: 'white',
    color: 'black',
    marginHorizontal: 5,
  },
});

export default OtpFill;