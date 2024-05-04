import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AadharSchema, Document, Dropdown } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { BUTTON_STYLE1, BUTTON_STYLE2 } from '../../constants/fonts'

interface VCDetailsProps {
    route: any;
}

const VCDetails: React.FC<VCDetailsProps> = ({ route }) => {
    const navigation = useNavigation();
    const [modalVisible, setmodalVisible] = useState(false)
    const selectedDocument = route.params;
    const aadharschema = { 'name': "johdsjhe sfhchdb fgebnfvd gcmv n", 'DOB': "19-2-2024", "Sex": "male", "Aadhaarno": "5645421654564", "Address": "bfhdbmhdvc  dsjvndsv", "VID": "45434635468541653", "Issuedate": "13/2/2018" }
    const onDelete = () => {
        route.params.onDelete(selectedDocument.index);
        setmodalVisible(false);
        navigation.navigate("HomeScreen")
    };

    const items = [
        { id: 'document', component: <Document DataName={selectedDocument.DataName} issueDate={selectedDocument.issueDate} icon={selectedDocument.icon} background={selectedDocument.background} /> },
        { id: 'aadharSchema', component: <AadharSchema aadharschema={aadharschema} /> },
        { id: 'dropdown', component: <Dropdown /> },

    ];

    const renderItem = ({ item }: { item: any }) => (
        <View style={{ flex: 1, alignItems: 'center' }}>
            {item.component}
        </View>
    );

    return (
        <SafeAreaView >
            <View style={{display:'flex',flexDirection:'row',width:'95%',marginHorizontal:'auto',justifyContent:'space-between',alignItems:'center'}}  >
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}} >
                    <TouchableOpacity  style={{width:48,height:48,backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:8,margin:'8%'}} onPress={() => navigation.navigate("HomeScreen")}>
                        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'black'}} >Details</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'20%',marginRight:'2%',justifyContent:'space-between'}} >
                    <AntDesign name="delete" size={24} color="black" onPress={() => setmodalVisible(true)} />
                    <Octicons name="eye-closed" size={24} color="black" onPress={() => navigation.navigate("SelectSchemaScreen", { selectedDocument, aadharschema })} />
                </View>
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}} >
                    <View style={{width:'100%',backgroundColor:'white',padding:'5%',borderTopLeftRadius:25,borderTopRightRadius:25}} c>
                        <Text  style={{fontSize:16,marginBottom:'5%',width:'90%',color:'black',fontWeight:'bold'}}>Are you sure you want to delete this credential from your wallet?</Text>
                        <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:8}} >
                            <TouchableOpacity style={{...BUTTON_STYLE1,backgroundColor:'#F0F5FF',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:12,borderWidth:1,borderColor:'#5869E6',paddingVertical:'3%',width:'50%' }} onPress={() => setmodalVisible(false)}>
                                <Text style={{color:'#5869E6',fontSize:20}}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={{...BUTTON_STYLE2,backgroundColor:'#5869E6',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:12,paddingVertical:'3%',width:'50%' }} onPress={onDelete}>
                                <Text style={{color:'white',fontSize:20}}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default VCDetails;