import React from 'react';
import { View, StyleSheet, Animated, Easing, ActivityIndicator } from 'react-native';

const RotatingLoader: React.FC = () => {
  const rotateValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="big" color="#5869E6" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

export default RotatingLoader;