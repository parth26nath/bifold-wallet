import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DualActionComponent = ({ actionType }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View className="bg-white w-[90%] rounded-t-3xl p-[5%]">
                {actionType === 'action1' ? (
                    <>
                        <View className="flex">
                            <Text className="text-xl font-semibold">Srishti Manipal Institute</Text>
                            <Text className="text-[15px] mt-[2%]">Requesting you to share required information from your Aadhaar card and PAN card.</Text>
                        </View>
                    </>
                ) : (
                    <>
                        <Text>Are you sure you want to delete this credential from your wallet?</Text>
                    </>
                )}
                <View className="flex-row  justify-start items-start mt-[4%]">
                    <TouchableOpacity

                        style={{
                            backgroundColor: '#F0F5FF',
                            padding: 10,
                            margin: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '45%',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: '#5264E6'
                        }}
                    >
                        <Text style={{ color: '#5869E6', fontSize: 20 }}>
                            {actionType === 'action1' ? 'Decline' : 'No'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                        style={{
                            backgroundColor: '#5264E6',
                            padding: 10,
                            margin: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '45%',
                            borderRadius: 15
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            {actionType === 'action1' ? 'View Details' : 'Yes, delete'}
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
};

export default DualActionComponent;
