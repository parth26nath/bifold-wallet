import { View, Text } from 'react-native'
import React from 'react';

const ActivityCard = ({ name, type, status }) => {
    const formattedTime = new Date().toLocaleTimeString();
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return (
        <View className="w-[90%] bg-white flex-row justify-between items-center  rounded-xl ">
            <View className="flex-col justify-start items-center ">
                <Text className="text-lg font-semibold">{name}</Text>
                <Text className="text-[#898A8E]">{type}</Text>
            </View>
            <View className="flex-col justify-end items-center  ">
                <Text className="text-[#898A8E]">{formattedDate}</Text>
                <Text className="text-[#898A8E]]">{formattedTime}</Text>
            </View>





        </View>
    )
}

export default ActivityCard