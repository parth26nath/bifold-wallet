import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ErrAndSucSt from './ErrAndSucSt';

interface PinDotsProps {
    confirm1: boolean;
    confirm: (value: boolean) => void;
}

const PinDots: React.FC<PinDotsProps> = ({ confirm1, confirm }) => {
    const [pin, setPin] = useState('');
    const textInputRef = useRef<TextInput>(null);
    const [createdPin, setCreatedPin] = useState<string | null>(null);
    const [pinConfirm, setPinConfirm] = useState(confirm1);
    const [checkConfirmation, setCheckConfirmation] = useState(false);
    const navigation = useNavigation();
    const [showError, SetShowError] = useState(false);

    useEffect(() => {
        if (pinConfirm) {
            textInputRef.current?.focus();
            return setPinConfirm(false);
        }
        textInputRef.current?.focus();
    }, [pinConfirm]);

    const handlePinChange = (newPin: string) => {
        const sanitizedPin = newPin.replace(/[^0-9]/g, '');
        const limitedPin = sanitizedPin.slice(0, 6);
        setPin(limitedPin);
    };

    const handleKeyPress = ({ nativeEvent }: KeyboardEvent) => {
        const inputKey = nativeEvent.key;
        if (/^\d$/.test(inputKey)) {
            const newPin = (pin + inputKey).slice(0, 6);
            setPin(newPin);
        } else if (inputKey === 'Backspace' && pin.length > 0) {
            setPin(pin.slice(0, -1));
        }
    };

    const checking = () => {
        if (pin.length === 6 && pin === createdPin) {
            console.log("Cr", pin);
            return navigation.navigate("GeoLocationScreen");
        } else {
            SetShowError(true);
            setTimeout(() => {
                SetShowError(false);
            }, 1000);
        }
    };

    const confirmation = () => {
        confirm(true);
        setPinConfirm(true);
        setCheckConfirmation(true);
    };

    useEffect(() => {
        if (pin.length === 6 && pinConfirm) {
            console.log('PIN:', pin);
            setCreatedPin(pin);
            setPin('');
        }
    }, [pin, pinConfirm]);

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    ref={textInputRef}
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={6}
                    value={pin}
                    onChangeText={handlePinChange}
                    onKeyPress={handleKeyPress}
                    onSubmitEditing={() => pin.length === 6? (checkConfirmation? checking() : confirmation()) : null}
                    autoFocus
                    blurOnSubmit={showError}
                />

                <View style={styles.pinDots}>
                    {[...Array(6)].map((_, index) => (
                        <View
                            key={index}
                            style={[styles.dot, { backgroundColor: pinConfirm? '#CBCBCC' : index < pin.length? '#733DF5' : '#CBCBCC' }]}
                        />
                    ))}
                </View>
            </View>
            {showError && (
                <View className="flex items-center mt-5 ">
                    <ErrAndSucSt type="error" message="pin doesn't match" />
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        position: 'absolute',
        width: 0,
        height: 0,
    },
    pinDots: {
        flexDirection: 'row',
        marginTop: 10,
    },
    dot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: 'grey',
    },
});

export default PinDots;