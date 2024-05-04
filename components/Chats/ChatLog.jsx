import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const ChatLog = ({ contact, image, noofmessages, messages, truncateText }) => {
    const getFontSizem = () => {
        return screenHeight < 600 ? screenHeight * 0.015 : screenHeight * 0.017;
    };
    const getFontSizel = () => {
        return screenHeight < 600 ? screenHeight * 0.013 : screenHeight * 0.013;
    }

    const formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const screenHeight = Math.round(Dimensions.get('window').height);
    return (
        <View style={{width:'95%',marginHorizontal:'auto',display:'flex',padding:'2%',flexDirection:'row',alignSelf:'center',borderBottomWidth:1,borderColor:'#B9B9B9'}} >
            <View style={{display:'flex',flexDirection:'row',width:'80%',alignItems:'center'}} >
                <Image source={image} resizeMode='contain' style={{marginRight:'3%'}}/>
                <Text style={{
                    color: 'black',
                    fontSize: getFontSizem(),
                    fontWeight: 500,
                    fontFamily: 'plus-jakarta-sans',
                    maxWidth: '80%', // Set maximum width for the text container
                    overflow: 'hidden', // Hide overflow
                    textOverflow: 'ellipsis',
                }} numberOfLines={1}>{contact}</Text>
            </View>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center',width:'20%'}}>
                <Text style={{ fontSize: getFontSizel(),color:'#8E8E8E' }}>{formattedTime}</Text>
                {messages &&
                    <View  style={{borderRadius:900,backgroundColor:'#5869E6',width:23,height:23,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{ fontSize: getFontSizel() ,color:'white'}}>{noofmessages}</Text>
                    </View>
                }
            </View>
        </View >
    )
}

export default ChatLog