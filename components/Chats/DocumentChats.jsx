import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const DocumentChats = ({ requestType, caseType }) => {

    const formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    let options;
    switch (caseType) {
        case 'case1':
            options = (
                <View className="bg-[#5869E6] p-4 w-full h-auto  rounded-[12px]">
                    <Text className="text-center text-[16px] text-white" style={{
                        fontWeight: '500',
                        fontFamily: 'plus-jakarta-sans',
                    }}>Transcript</Text>
                </View>
            );
            break;
        case 'case2':
            options = (
                <View className="border-[#5869E6] bg-[#F0F5FF] border-[1px] p-4 w-full h-auto rounded-[12px]">
                    <Text className="text-center text-[16px] text-[#5869E6]" style={{
                        fontWeight: '500',
                        fontFamily: 'plus-jakarta-sans',
                    }}>Adding To Wallet</Text>
                </View>
            );
            break;
        case 'case3':
            options = (
                <View className="flex-row items-center justify-center mt-3 gap-2 p-4 w-full">
                    <AntDesign name='check' size={24} color={'#28A81D'} />
                    <Text className="text-center text-[#28A81D]" style={{
                        fontWeight: 500, fontSize: 14,
                        fontFamily: 'plus-jakarta-sans',
                    }}>Added To Wallet</Text>
                </View>
            );
            break;
        case 'case4':
            options = (
                <View className="bg-[#5869E6]  p-4 w-full  mt-3 h-auto rounded-[12px]">
                    <Text className="text-center text-white" style={{
                        fontWeight: 500, fontSize: 16,
                        fontFamily: 'plus-jakarta-sans',
                    }}>Your PAN Card</Text>
                </View>
            );
            break;
        case 'case5':
            options = (
                <View className=" flex-row items-center justify-center gap-2  mt-3 p-3 w-full h-auto rounded-xl">
                    <AntDesign name='closecircleo' size={24} color={'red'} />
                    <Text className="text-center text-red-500 text-[14px]" style={{
                        fontWeight: 500,
                        fontFamily: 'plus-jakarta-sans',
                    }}>Document declined</Text>
                </View>
            );
            break;
        case 'case6':
            options = (
                <View className="border-[#CBCBCC]  border-2 bg-white  mt-3 p-3 w-full h-auto rounded-xl">
                    <Text className="text-center text-[#898A8E] text-[16px]" style={{
                        fontWeight: 500,
                        fontFamily: 'plus-jakarta-sans',
                    }}>Degree Certificate</Text>
                </View>
            );
            break;

        default:
            options = null;
    }
    return (
        <View className="w-[80%] bg-[#F0F5FF] p-5 flex justify-center rounded-2xl rounded-bl-[4px] rounded-t-[12px] rounded-br-[12px] mb-5">
            <Text style={{
                ...styles.timeText, fontWeight: '400',
                fontFamily: 'plus-jakarta-sans',
            }}>{formattedTime}</Text>
            <View>
                <Text style={{
                    ...styles.messageText, fontWeight: '400',
                    fontFamily: 'plus-jakarta-sans',
                }}
                >{requestType}</Text>
            </View>
            {options}
        </View>
    )
};

const styles = StyleSheet.create({

    timeText: {
        fontSize: 12,
        color: 'black',
        marginBottom: '2%',
        fontFamily: 'plus-jakarta-sans',
    },
    messageText: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'plus-jakarta-sans',
    },

});

export default DocumentChats
