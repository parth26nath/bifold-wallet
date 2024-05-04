import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Document } from '../../components';
import { BUTTON_STYLE1 } from '../../constants/fonts';
import { useNavigation } from '@react-navigation/native';

interface SelectedSchemaProps {
  route: any;
}

const SelectedSchema: React.FC<SelectedSchemaProps> = ({ route }) => {
  const { selectedSchemas, aadharschema, schemaList, selectedDocument } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '90%', height: '10%', marginHorizontal: 'auto' }}>
          <TouchableOpacity style={{ width: 48, height: 48, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 12, margin: '8%', marginLeft: 0 }}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Selected Details</Text>
        </View>

        <Document DataName={selectedDocument.DataName} issueDate={selectedDocument.issueDate} icon={selectedDocument.icon} background={selectedDocument.background} />

        <View style={{ borderWidth: 2, width: '93%', marginHorizontal: 'auto', borderColor: '#B9B9B9', padding: '5%', borderRadius: 12 }}>
          {selectedSchemas.map((schema) => (
            <View key={schema} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View className="flex justify-start">
                <Text style={{ color: '#636363' }}>{schemaList.find(item => item.key === schema)?.label}</Text>
              </View>
              <View style={{ display: 'flex', alignItems: 'flex-start' }}>
                <Text style={{ color: 'black' }}>{aadharschema[schema]}</Text>
              </View>
            </View>
          ))}
        </View>
        {/* <Button content={"return to credebtial"} icon={false} type={"buttontype3"} /> */}
        <TouchableOpacity style={{ display: 'flex', marginTop: '10%', alignItems: 'center' }} onPress={() => { navigation.goBack() }}>
          <Text style={{ color: '#5869E6', fontSize: 16 }}>Return to credential</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SelectedSchema