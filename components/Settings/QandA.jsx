import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const QandA = ({ question, answer }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };



    return (
        <View className="w-[90%] m-[3%] rounded-[12px]" style={styles.bordercase}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.bordercase} className="rounded-[12px]"  >
                <View className="flex-row w-[100%] justify-between items-center p-2 ">
                    <Text className="text-[17px] w-[90%]">{question} </Text>
                    <Feather name={dropdownOpen ? 'chevron-up' : 'chevron-down'} size={30} color="black" />
                </View>
            </TouchableOpacity>
            {dropdownOpen && (
                <Text className="w-[90%] px-3 text-[17px]">
                    {answer}
                </Text>
            )}
        </View>
    );
};



export default QandA;

const styles = StyleSheet.create({
    bordercase: {
        borderWidth: 1,
        borderColor: '#CBCBCC',
    },
})