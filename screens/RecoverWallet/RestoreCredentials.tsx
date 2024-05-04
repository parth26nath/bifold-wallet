import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import restoreimage from '../../assets/restoreimage'

const RestoreCredentials: React.FC = () => {
    return (
        <SafeAreaView>
            <View className="w-full h-full flex items-center">
                <View className="flex justify-start items-center w-full pt-[25%] h-[80%]">
                    <Text className="text-2xl font-semibold mb-[2%]">Restore credentials</Text>
                    <Text className="text-sm text-grey3 mb-[2%]">Restore your credentials and documents.</Text>
                    <Image source={restoreimage} resizeMode='contain' className="w-[80%] h-[60%]" />
                </View>
                <View className="h-[20%] w-full flex justify-center items-center">
                    <TouchableOpacity className={`w-[90%] rounded-xl flex justify-center items-center mb-[7%] p-[4%] bg-primary`} >
                        <Text className={` text-lg  text-center text-white`}>Restore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text className={` text-lg  text-center text-primary`}>Cancel</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView >
    )
}

export default RestoreCredentials