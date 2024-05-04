import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { Document, SelectSchema } from '../../components'
import { useNavigation } from '@react-navigation/native'

interface Schema {
  key: string;
  label: string;
}

interface Document {
  DataName: string;
  issueDate: string;
  icon: any;
  background: string;
}

interface RouteParams {
  selectedDocument: Document;
  aadharschema: any;
}

const SelectSchemaScreen = ({ route }: { route: { params: RouteParams } }) => {
  const { selectedDocument, aadharschema } = route.params;
  const navigation = useNavigation();
  const schemaList: Schema[] = [
    { key: 'name', label: 'Name' },
    { key: 'Sex', label: 'Sex' },
    { key: 'Aadhaarno', label: 'Aadhaar no.' },
    { key: 'Address', label: 'Address' },
    { key: 'VID', label: 'VID' },
    { key: 'Issuedate', label: 'Issue date' },
    { key: 'DOB', label: 'DOB' },
  ];
  const [selectedSchemas, setSelectedSchemas] = useState<string[]>([]);

  const handleSchemaSelect = (selectedSchemas: string[]) => {
    console.log('Selected Schemas:', selectedSchemas);
    const selectedAadharSchemas = schemaList
     .filter((schema) => selectedSchemas.includes(schema.key))
     .map((schema) => aadharschema[schema.key]);
    console.log('Selected Aadhar Schemas:', selectedAadharSchemas);
    setSelectedSchemas(selectedSchemas);
  };

  useEffect(() => {
    setSelectedSchemas([]);
  }, [route.params]);

  const showDetails = () => {
    navigation.navigate("SelectedSchema", { selectedSchemas, aadharschema, schemaList, selectedDocument });
  };

  return (
    <SafeAreaView >

      <View style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '90%', height: '10%', marginHorizontal: 'auto' }}>
          <TouchableOpacity style={{ width: 48, height: 48, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 8, margin: '8%', marginLeft: 0 }}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Select Details</Text>
        </View>
        <Document DataName={selectedDocument.DataName} issueDate={selectedDocument.issueDate} icon={selectedDocument.icon} background={selectedDocument.background} />
        <View style={{ display: 'flex', alignItems: 'center', width: '90%', height: '60%', marginHorizontal: 'auto' }}>
          <SelectSchema schemaList={schemaList} onSchemaSelect={handleSchemaSelect} />
        </View>
        <TouchableOpacity style={{ width: '90%', display: 'flex', height: '7%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5869E6', borderRadius: 12 }} onPress={showDetails}>
          <Text style={{ color: "white" }}>Show Details</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default SelectSchemaScreen