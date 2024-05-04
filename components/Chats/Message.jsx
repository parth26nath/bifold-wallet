import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';

const Message = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className={`flex-row justify-center items-center bg-white w-[90%] rounded-xl border-[1px] border-[#898A8E] px-3 py-4 ${isFocused ? 'border-[#5869E6]' : 'border-[#898A8E]'}`}>
            <TextInput placeholder='Type message' placeholderTextColor={'#898A8E'} onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)} className="w-[90%] text-[16px]" />
            <TouchableOpacity>
                <Feather name="send" size={32} color="#5869E6" />
            </TouchableOpacity>

        </View>
    )
}

export default Message