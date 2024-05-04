import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { QandA } from '../../components'
import { useNavigation } from '@react-navigation/native'

const SupportScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-primarybg">
            <LinearGradient
                colors={['#F0F5FF', '#FFFFFF']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.3, y: 0.3 }}
            ><View className="flex-row items-center justify-between py-5 px-8">
                    <View>
                        <Text className="text-lg font-bold">Support</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <MaterialCommunityIcons name="home-outline" size={28} color="#000" />
                    </TouchableOpacity>
                </View>
                <ScrollView className="px-8">
                    <QandA
                        question="How do I reset my password?"
                        answer="To reset your password, click on 'Forgot Password' on the login screen and follow the instructions. If you have any issues, please contact our support team."
                    />
                    <QandA
                        question="How do I delete my account?"
                        answer="To delete your account, go to your profile page, click on 'Settings', then 'Delete Account'. If you have any issues, please contact our support team."
                    />
                    <QandA
                        question="Can I change my username?"
                        answer="To change your username, go to your profile page, click on 'Settings', then 'Change Username'. If you have any issues, please contact our support team."
                    />
                    <QandA
                        question="How do I update my billing information?"
                        answer="To update your billing information, go to your profile page, click on 'Settings', then 'Billing Information'. If you have any issues, please contact our support team."
                    />
                    <QandA
                        question="How do I cancel my subscription?"
                        answer="To cancel your subscription, go to your profile page, click on 'Settings', then 'Subscription'. If you have any issues, please contact our support team."
                    />
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default SupportScreen