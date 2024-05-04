import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { FONT_STYLE_2, FONT_STYLE_3 } from '../../constants/fonts';

interface IData {
  item1: JSX.Element;
  item2: JSX.Element;
  item3: JSX.Element;
  item4: JSX.Element;
}

const ServiceHeadings: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState('item1');
  const { height: screenHeight } = Dimensions.get('window');
  const data: IData = {
    item1: (
      <Text>
        Your digital identity will be <Text className='text-secondary'>safeguarded</Text> under your control. Empower yourself with <Text className='text-secondary'>secure digital identity management.</Text>
      </Text>
    ),
    item2: (
      <Text>
        Ensure <Text className='text-secondary'>your data remains exclusively yours</Text>. Your information is protected with cutting-edge encryption technology.
      </Text>
    ),
    item3: (
      <Text>
        Preserve your privacy and data security by sharing your data selectively.  <Text className='text-secondary'>Effortlessly</Text> and <Text className='text-secondary'>securely</Text> control the data you share.
      </Text>
    ),
    item4: (
      <Text>
        Your wallet, your rules.<Text className='text-secondary'>Easily backup your wallet</Text> to popular cloud platforms. Gain complete control over your data.
      </Text>
    ),
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const getButtonStyle = (item: string) => {
    return selectedItem === item
      ? { color: '#733DF5' }
      : { color: '#898A8E' };
  };

  const getFontSize = () => {
    return screenHeight < 600 ? screenHeight * 0.015 : screenHeight * 0.017;
  };

  const getSpace = () => {
    return screenHeight < 600 ? screenHeight * 0.015 : screenHeight * 0.026;
  };

  return (
    <View style={{ marginTop: screenHeight < 600 ? '1%' : '5%' }}>
      <View style={{ marginBottom: getSpace() }}>
        <Text style={{ textAlign: 'justify', fontSize: getFontSize(), ...FONT_STYLE_3, color: 'black' }}>{data[selectedItem]}</Text>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => handleItemClick('item1')} style={[getButtonStyle('item1'), { marginRight: '2%' }]}>
          <Text className={`${selectedItem === 'item1' ? 'text-[#733DF5]' : 'text-grey3'}`} style={{ fontSize: getFontSize() }}>Identity</Text>
        </TouchableOpacity>
        <View style={{ width: 8, height: 8, marginRight: '2%', borderRadius: 100, backgroundColor: '#733DF5' }} />
        <TouchableOpacity onPress={() => handleItemClick('item2')} style={[getButtonStyle('item2'), { marginRight: '2%' }]}>
          <Text className={`${selectedItem === 'item2' ? 'text-[#733DF5]' : 'text-grey3'}`} style={{ fontSize: getFontSize() }}>Encryption</Text>
        </TouchableOpacity>
        <View style={{ width: 8, height: 8, marginRight: '2%', borderRadius: 100, backgroundColor: '#733DF5' }} />
        <TouchableOpacity onPress={() => handleItemClick('item3')} style={[getButtonStyle('item3'), { marginRight: '2%' }]}>
          <Text className={`${selectedItem === 'item3' ? 'text-[#733DF5]' : 'text-grey3'}`} style={{ fontSize: getFontSize() }}>Share</Text>
        </TouchableOpacity>
        <View style={{ width: 8, height: 8, marginRight: '2%', borderRadius: 100, backgroundColor: '#733DF5' }} />
        <TouchableOpacity onPress={() => handleItemClick('item4')} style={[getButtonStyle('item4'), { marginRight: '2%' }]}>
          <Text className={`${selectedItem === 'item4' ? 'text-[#733DF5]' : 'text-grey3'}`} style={{ fontSize: getFontSize() }}>Backup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceHeadings;