import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Dropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <View className="w-[90%] bg-white m-5" style={styles.bordercase}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.bordercase} className="rounded-lg"  >
                <View className="flex-row w-[100%] justify-between p-5 ">
                    <Text className="text-xl">Custom ledgers</Text>
                    <Feather name={dropdownOpen ? 'chevron-up' : 'chevron-down'} size={30} color="black" />
                </View>
            </TouchableOpacity>
            {dropdownOpen && (
                <View>
                    <View className="flex-row justify-start items-center gap-4 px-5 py-2">
                        <MaterialCommunityIcons name="code-tags" size={32} color="#733DF5" />
                        <Text className="font-semibold text-lg">bcovrin-prod</Text>
                    </View>
                    <View className="flex-row justify-start items-center gap-4 px-5 py-2">
                        <MaterialCommunityIcons name="code-tags" size={32} color="#733DF5" />
                        <Text className="font-semibold text-lg">bcovrin-prod</Text>
                    </View>
                    <View className="flex-row justify-start items-center gap-4 px-5 py-2">
                        <MaterialCommunityIcons name="code-tags" size={32} color="#733DF5" />
                        <Text className="font-semibold text-lg">bcovrin-prod</Text>
                    </View>
                </View>

            )}


        </View>
    );
};



export default Dropdown;

const styles = StyleSheet.create({
    bordercase: {
        borderWidth: 1,
        borderColor: '#CBCBCC',
    },
})