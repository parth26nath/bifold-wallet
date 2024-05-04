import { View, Text, Keyboard, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { InputField, Navbar } from '../../components'
import { Search, emptyamico, university } from '../../assets'
import { activity } from '../../assets'
import { ChatLog } from '../../components'
import EmptyContact from '../../assets/icons/emptycontact.svg'
import Activity from '../../assets/icons/activity.svg'

const ContactPage: React.FC = () => {
    const screenHeight = Math.round(Dimensions.get('window').height)
    const [keyboardVisible, setKeyboardVisible] = useState(false)
    const [contactData, setContactData] = useState([
        { contact: "Srishti Manipal insthgf", noofmessages: "1", messages: true, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "1", messages: true, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "1", messages: true, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "5", messages: true, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "1", messages: false, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "1", messages: false, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "1", messages: true, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "1", messages: false, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "5", messages: true, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "4", messages: true, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "3", messages: true, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "2", messages: false, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "9", messages: true, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "1", messages: false, image: university },
        { contact: "Srishti Manipal Institute", noofmessages: "1", messages: true, image: university },
    ])

    const getFontSizeM = (): number => {
        return screenHeight < 600 ? screenHeight * 0.015 : screenHeight * 0.021
    }
    const getFontSizeL = (): number => {
        return screenHeight < 600 ? screenHeight * 0.016 : screenHeight * 0.018
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true)
            }
        )
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false)
            }
        )

        return () => {
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    }, [])

    return (
        <View style={{ width: '100%', height: '100%', display: 'flex' }}>
            {contactData.length === 0 ?
                <View style={{ display: 'flex', width: '100%', height: '100%' }}>
                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: '15%', padding: '5%', backgroundColor: '#F0F5FF' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: getFontSizeM(), color: 'black' }}>My Contacts</Text>
                        <Activity />
                    </View>
                    <View style={{ height: '100%', display: 'flex', alignItems: 'center', paddingTop: '2%' }}>
                        <InputField type="inputtype1" icon={true} content={"Find my documnet"} source={Search} />
                        <EmptyContact style={{ marginTop: screenHeight < 600 ? '3%' : '15%', marginBottom: screenHeight < 600 ? '0' : '5%' }} />
                        {/* <Image source={emptyamico} className={`${screenHeight < 600 ? 'mt-[3%] mb-0' : 'mt-[15%]  mb-[5%]'}`} /> */}
                        <Text style={{ fontSize: getFontSizeM(), color: 'black' }}>No Contacts Found</Text>
                    </View>
                </View>
                :
                <View style={{ display: 'flex', width: '100%', height: '100%' }}>
                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: '15%', padding: '5%', backgroundColor: '#F0F5FF' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: getFontSizeM(), color: 'black' }}>My Contacts</Text>
                        <Activity />
                    </View>
                    <View style={{ height: '85%', width: '100%', display: 'flex', overflow: 'scroll' }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {contactData.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5%' }}>
                                        <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                        <View style={{ width: '80%', display: 'flex', flexDirection: 'column', marginLeft: '5%' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: getFontSizeL(), color: 'black' }}>{item.contact}</Text>
                                            <Text style={{ fontSize: getFontSizeM(), color: 'black' }}>{item.noofmessages} messages</Text>
                                        </View>
                                        {item.messages &&
                                            <View style={{ width: '10%', display: 'flex', alignItems: 'flex-end' }}>
                                                <ChatLog />
                                            </View>
                                        }
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            }
        </View>
    )
}

export default ContactPage