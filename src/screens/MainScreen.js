import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import CardScreen from './CardScreen';




const MainScreen = () => {

  return (

    <View style={styles.container}>
      <CardScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




export default MainScreen;
