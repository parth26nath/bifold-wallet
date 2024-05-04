import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { FONT_STYLE_3 } from '../../constants/fonts';

type ErrAndSucStProps = {
  type: 'success' | 'error';
  message: string;
};

const ErrAndSucSt: React.FC<ErrAndSucStProps> = ({ type, message }) => {
  const getIconName = () => {
    switch (type) {
      case 'success':
        return 'check';
      case 'error':
        return 'closecircleo';
      default:
        return;
    }
  };

  const getIconColor = () => {
    return type === 'success'? 'green' : 'red';
  };

  const getTextColor = () => {
    return type === 'success'? 'green' : 'red';
  };

  return (
    <View className="flex-row">
      <Icon name={getIconName()} size={24} color={getIconColor()} style={{...FONT_STYLE_3, marginRight: 10 }} />
      <Text style={{...FONT_STYLE_3, color: getTextColor(), fontSize: 14 }}>{message}</Text>
    </View>
  );
};

export default ErrAndSucSt;