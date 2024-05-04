import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { FONT_STYLE_2, FONT_STYLE_3 } from '../../constants/fonts';

const RequestedMessage = ({ requestType, caseType }) => {
    const formattedTime = new Date().toLocaleTimeString();


    let options;
    switch (caseType) {
        case 'case1':
            options = (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity className="bg-[#F0F5FF]  p-3 w-[40%] rounded-[12px] border-[1px] border-[#5869E6]">
                        <Text className="text-center text-[16px] text-[#5869E6]" style={{ ...FONT_STYLE_3 }}>Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-[#5869E6] p-3 w-[40%] rounded-[12px]">
                        <Text className="text-center text-[16px] text-white" style={{ ...FONT_STYLE_3 }}> Details</Text>
                    </TouchableOpacity>
                </View>
            );
            break;
        case 'case2':
            options = (
                <View className="flex justify-center items-center">
                    <TouchableOpacity  >
                        <Text className="text-[#5869E6] text-[16px]" style={{ ...FONT_STYLE_3 }}>Sent</Text>
                    </TouchableOpacity>
                </View>
            );
            break;
        case 'case3':
            options = (
                <View className="flex-row justify-center items-center gap-2">
                    <AntDesign name="closecircleo" size={24} color="red" />
                    <Text className="text-red-500 text-[14px]" style={{ ...FONT_STYLE_3 }} > Request declined</Text>
                </View >
            );
            break;
        default:
            options = null;
    }

    return (
        <View className="w-[80%] bg-[#F0F5FF] p-5  rounded-bl-[4px] mb-5 flex justify-center rounded-t-[12px] rounded-br-[12px]">
            <Text style={{ ...FONT_STYLE_2, ...styles.timeText }}>{formattedTime}</Text>
            <View>
                <Text style={{ ...FONT_STYLE_3, ...styles.messageText }} className="text-[14px] mb-[10px]">{requestType[0]}</Text>

                <Text style={{ ...FONT_STYLE_3, ...styles.messageText }} className="text-[14px] mb-[10px]">{requestType[1]}</Text>
            </View>
            {options}
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
    },
    timeText: {
        fontSize: 12,
        color: '#888',
        marginBottom: '2%'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '',
        padding: 8,
        borderRadius: 5,
        width: '48%', // Adjust as needed
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    declinedText: {
        color: '#d9534f',
        fontWeight: 'bold',
    },
});

export default RequestedMessage;
