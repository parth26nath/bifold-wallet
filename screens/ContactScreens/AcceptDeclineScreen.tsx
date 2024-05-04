import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { university } from '../../assets';
import { ErrAndSucSt } from '../../components';
import { useNavigation } from '@react-navigation/native';

const AcceptDeclineScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '88%',
          display: 'flex',
          alignItems: 'center',
          marginTop: '10%',
        }}>
        <Text
          style={{ fontSize: 20, alignSelf: 'flex-start', marginBottom: '6%' }}>
          Do you want to form a connection with Benagluru University?
        </Text>
        <View
          style={{
            width: '93%',
            marginHorizontal: 'auto',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <View
            style={{
              height: '100%',
              backgroundColor: '#47C2D0',
              width: '5%',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderWidth: 2,
              borderColor: 'white',
            }}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingHorizontal: 15,
              paddingVertical: 10,
              width: '90%',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={university} />

              <Text style={{ color: 'black', marginBottom: 1, fontSize: 15 }}>
                Benguluru University
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'black',
                marginBottom: 2,
              }}
            />
            <ErrAndSucSt type="success" message="contact is verified" />
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}>
        <TouchableOpacity
          style={{
           ...BUTTON_STYLE1,
            backgroundColor: '#F0F5FF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#5869E6',
            paddingVertical: '3%',
            width: '50%',
          }}
          onPress={() => setmodalVisible(false)}>
          <Text style={{ color: '#5869E6', fontSize: 20 }}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
           ...BUTTON_STYLE2,
            backgroundColor: '#5869E6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            width: '50%',
            paddingVertical: '3%',
          }}
          onPress={onDelete}>
          <Text style={{ color: 'white', fontSize: 20 }}>Yes,delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AcceptDeclineScreen;