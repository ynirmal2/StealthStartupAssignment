import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LottieAnimation = () => {
  return (
    // <View style={styles.container}>
      <LottieView
        source={require('../assets/Animations/Splash/Splash.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height:'100%',
    backgroundColor:'black'
  },
  lottie: {
    width: '100%',
    height: '100%',
    
  },
});

export default LottieAnimation;
