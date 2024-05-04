import { View, Text, Keyboard, Image, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Document, InputField } from '../../components'
import { useNavigation } from '@react-navigation/native'
import EmptyAmico from '../../assets/icons/emptyamico.svg';
import Activity from '../../assets/icons/activity.svg';

interface DocumentData {
  DataName: string;
  issueDate: string;
  icon: boolean;
  background: string;
  right: boolean;
}

const WalletWithCards = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [docdata, setDocData] = useState<DocumentData[]>([
    { DataName: "10th grade marksheet", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "Aadhaar card", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "Degree certificate-SRM Institute", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "Indian passport", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "10th grade marksheet", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "Aadhaar card", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "Degree certificate-SRM Institute", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "Indian passport", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "10th grade marksheet", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "Aadhaar card", issueDate: "10/9/2023", icon: true, background: "white", right: true },
    { DataName: "Degree certificate-SRM Institute", issueDate: "10/9/2023", icon: true, background: "white", right: true },
  ]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const getFontSizem = () => {
    return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.021;
  };
  const getFontSizel = () => {
    return screenHeight < 600? screenHeight * 0.016 : screenHeight * 0.018;
  }

  const handleDocumentPress = (selectedDocument: DocumentData, event: any, index: number) => {
    event.persist();
    navigation.navigate("VCDetails", {...selectedDocument, index, onDelete: handleDelete });
  };
  const handleDelete = (index: number) => {
    const updatedDocData = [...docdata];
    updatedDocData.splice(index, 1);
    setDocData(updatedDocData);
  };

  return (
    <View style={{ width: '100%', height: '100%', display: 'flex' }}>
      {
        docdata.length === 0
         ?
          <View style={{ display: 'flex', width: '100%', height: '100%' }}>
            <View style={{ width: '100%', height: '15%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', padding: '5%', backgroundColor: '#EAFFE8' }}>
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: getFontSizem() }}>My Wallet</Text>
            </View>
            <View style={{ height: '100%', display: 'flex', alignItems: 'center', paddingTop: '2%' }}>
              <InputField type="inputtype1" icon={true} content={"Find my document"} source={Search} />
              {/* <Image source={emptyamico}style={{ width: '50%', height: '50%', marginTop: '10%' }} /> */}
              <EmptyAmico width={150} height={150} />
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: getFontSizel(), marginTop: '5%' }}>No documents found</Text>
              <Text style={{ color: 'black', fontSize: getFontSizel(), marginTop: '2%' }}>Add documents to your wallet to access them anytime, anywhere</Text>
              <TouchableOpacity style={{ width: '50%', height: '10%', backgroundColor: '#00B58C', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }} onPress={() => navigation.navigate("AddDocument")}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: getFontSizel() }}>Add Document</Text>
              </TouchableOpacity>
            </View>
          </View>
         :
          <View style={{ width: '100%', height: '100%' }}>
            <View style={{ width: '100%', height: '15%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', padding: '5%', backgroundColor: '#EAFFE8' }}>
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: getFontSizem() }}>My Wallet</Text>
              <TouchableOpacity style={{ width: '10%', height: '10%', backgroundColor: '#00B58C', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }} onPress={() => navigation.navigate("AddDocument")}>
                <Activity width={20} height={20} />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: '100%', height: '85%', paddingBottom: '5%' }}>
              {
                docdata.map((data, index) => {
                  return (
                    <Document key={index} data={data} onPress={(event) => handleDocumentPress(data, event, index)} />
                  )
                })
              }
            </ScrollView>
          </View>
      }
    </View>
  )
}

export default WalletWithCards