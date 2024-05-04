import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import { BUTTON_STYLE1 } from '../../constants/fonts';

const Document = ({ DataName, issueDate, icon, source, background, key, right, truncateText }) => {
    const navigation = useNavigation();
    const screenHeight = Math.round(Dimensions.get('window').height);
    const getFontSizem = () => {
        return screenHeight < 600 ? screenHeight * 0.015 : screenHeight * 0.021;
    };
    const getFontSizel = () => {
        return screenHeight < 600 ? screenHeight * 0.016 : screenHeight * 0.018;
    }
    return (
        <View style={{width:'93%',marginHorizontal:'auto',display:'flex',alignSelf:'center',flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderRadius:15,marginBottom:15,backgroundColor:background?'white':'none',...BUTTON_STYLE1}}  >
            <View style={{height:'100%',backgroundColor:'#47C2D0',width:'5%',borderTopLeftRadius:15,borderBottomLeftRadius:15,borderWidth:2,borderColor:'white'}} />

            <View style={{padding:screenHeight<600?12:18,display:'flex',flexDirection:'row',width:'75%',justifyContent:'flex-start',alignItems:'center'}} >
                {icon ? <FontAwesome name="university" size={32} color="black" /> : <View  style={{backgroundColor:'#F2F2F2',borderRadius:900,padding:8,display:'flex',justifyContent:'center',alignItems:'center'}}><AntDesign name="question" size={24} color="black" /></View>}
                <View style={{display:'flex',justifyContent:'center',alignItems:'flex-start',marginHorizontal:15}}>
                    <Text
                        style={[{ fontSize: getFontSizem(), color: 'black' }]}
                        numberOfLines={truncateText ? 1 : undefined} // Limits to one line if truncateText is true
                        ellipsizeMode={truncateText ? "tail" : undefined} // Truncates the text with an ellipsis if truncateText is true
                    >
                        {DataName}
                    </Text>
                    <Text  style={{ fontSize: getFontSizel(),color:'#898A8E' }}>Issued Data: {issueDate}</Text>
                </View>
            </View>
            <View  style={{width:'15%',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'2%'}}>
                {right && <EvilIcons name="chevron-right" size={48} color="black" />}
            </View>





        </View>
    );
};



export default Document;
