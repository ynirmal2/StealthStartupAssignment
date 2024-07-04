import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieAnimation from '../components/LottieAnimation';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // 2 seconds delay
  }, [navigation]);

  return (
    <View style={styles.container}>
     <LottieAnimation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
