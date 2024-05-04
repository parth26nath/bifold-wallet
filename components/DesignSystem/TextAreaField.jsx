import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

const TextAreaField = ({ content, type }) => {

    const [formattedContent, setFormattedContent] = useState('');


    const handleTextChange = (text) => {
        // Capitalize the first letter of each word after a space
        const formattedText = text.replace(/(\w+)/g, (word) => {
            const trimmedWord = word.trim();
            return trimmedWord.charAt(0).toUpperCase() + trimmedWord.slice(1);
        });

        setFormattedContent(formattedText);
    };
    const styles = {
        inputtype1: {
            text: {
                fontSize: 20,
                textAlignVertical: 'top',
                padding: 10

            },
            placeholdercolor: {
                color: "#898A8E",
            },
        },
        inputtype2: {
            text: {
                fontSize: 20,
                textAlignVertical: 'top',
                padding: 10

            },
            placeholdercolor: {
                color: "#ffffff",
            },
        }


    };
    return (
        <View style={{width:'90%',borderWidth:1,borderColor:'#8E8E8E',borderRadius:20,height:'auto'}} >
            <TextInput
                style={styles[type].text}
                placeholder={content}
                placeholderTextColor={styles[type].placeholdercolor}
                multiline
                numberOfLines={5}
                value={formattedContent}
                onChangeText={handleTextChange}
            />
        </View >
    )
}

export default TextAreaField