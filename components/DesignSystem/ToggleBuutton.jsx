import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const ToggleButton = ({ onPress }) => {
    const [isToggled, setIsToggled] = useState(false);
    const toggleAnimation = new Animated.Value(isToggled ? 1 : 0);

    const handlePress = () => {
        setIsToggled(!isToggled);
        const transitionDuration = isToggled ? 0 : 200;
        Animated.timing(toggleAnimation, {
            toValue: isToggled ? 0 : 1,
            duration: transitionDuration,

            useNativeDriver: false,
        }).start();
        onPress(!isToggled);
    };

    const toggleOnColor = '#5869E6';
    const toggleOffColor = '#CBCBCC';

    const styles = StyleSheet.create({
        toggleContainer: {
            height: 32,
            width: 56,
            borderRadius: 500,
            overflow: 'hidden',
            backgroundColor: isToggled ? toggleOnColor : toggleOffColor,
        },
        toggleBackground: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: isToggled ? toggleOnColor : toggleOffColor,
            transform: [
                {
                    translateX: toggleAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 28],
                    }),
                },
            ],
        },
        toggleButton: {
            height: 28,
            width: 28,
            borderRadius: 500,
            position: 'absolute',
            top: 2,
            left: isToggled ? 28 : 2,
            zIndex: 1,
            elevation: 1,
            backgroundColor: 'white',
        },
    });

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.toggleContainer}>
                <Animated.View style={styles.toggleBackground} />
                <Animated.View style={styles.toggleButton} />
            </View>
        </TouchableOpacity>
    );
};

export default ToggleButton;
