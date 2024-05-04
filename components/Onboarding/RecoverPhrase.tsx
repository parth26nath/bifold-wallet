import React, { useState, useEffect, useImperativeHandle, forwardRef, Ref } from 'react';
import { View, Text, Dimensions, Clipboard } from 'react-native';
import { FONT_STYLE_2, FONT_STYLE_3 } from '../../constants/fonts';
import { BUTTON_STYLE1 } from '../../constants/fonts';

const dictionary = [
    'apple', 'banana', 'cherry', 'dog', 'elephant', 'flower', 'grape', 'happiness', 'ice cream', 'jazz', 'kangaroo', 'lemon'
];

interface RecoverPhraseProps {
    // add any props here if needed
}

const RecoverPhrase = forwardRef<RecoverPhraseProps, any>((props, ref) => {
    const [randomWords, setRandomWords] = useState<string[]>([]);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const copyToClipboard = async () => {
        try {
            const textToCopy = randomWords.join(' ');
            await Clipboard.setString(textToCopy);
            console.log('Copied Content:', textToCopy);
            return true;
        } catch (error) {
            console.error('Error copying to clipboard:', error);
            return false;
        }
    };

    useImperativeHandle(ref, () => ( {
        copyToClipboard,
    }));

    const getFontSizem = () => {
        return screenHeight < 600? screenHeight * 0.015 : screenHeight * 0.021;
    };

    const getFontSizel = () => {
        return screenHeight < 600? screenHeight * 0.016 : screenHeight * 0.018;
    };

    const generateRandomWords = () => {
        const shuffledWords = [...dictionary].sort(() => Math.random() - 0.5);
        const selectedWords = Array.from(new Set(shuffledWords.slice(0, 12)));
        setRandomWords(selectedWords);
    };

    useEffect(() => {
        generateRandomWords();
    }, []);

    return (
        <View style={{...BUTTON_STYLE1, width: '90%', height: 'auto', borderWidth: 1, borderColor: '#5869E6', backgroundColor: '#F0F5FF', borderRadius: 12, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: '8%', paddingVertical: '5%' }}>
            <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'start', gap: 7, marginRight: '15%' }}>
                {randomWords.slice(0, 3).map((word, index) => (
                    <Text key={index} style={{...FONT_STYLE_3, fontSize: getFontSizel(), color: 'black', marginBottom: index === 2? 4 : '' }}>
                        <Text style={{...FONT_STYLE_2, color: '#8E8E8E' }}>{index + 1}.</Text> {word}
                    </Text>
                ))}
                {randomWords.slice(3, 6).map((word, index) => (
                    <Text key={index + 3} style={{ fontSize: getFontSizel(), color: 'black' }}>
                        <Text style={{ color: '#8E8E8E' }}>{index + 4}.</Text> {word}
                    </Text>
                ))}
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 7 }}>
                {randomWords.slice(6, 9).map((word, index) => (
                    <Text key={index + 6} style={{ fontSize: getFontSizel(), color: 'black', marginBottom: index === 2? 4 : '' }}>
                        <Text style={{ color: '#8E8E8E' }}>{index + 7}.</Text> {word}
                    </Text>
                ))}
                {randomWords.slice(9, 12).map((word, index) => (
                    <Text key={index + 9} style={{ fontSize: getFontSizel(), color: 'black' }}>
                        <Text style={{ color: '#8E8E8E' }}>{index + 10}.</Text> {word}
                    </Text>
                ))}
            </View>
        </View>
    );
});

export default RecoverPhrase;