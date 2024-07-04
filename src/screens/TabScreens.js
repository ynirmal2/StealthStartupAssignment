import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FingerPrint = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>FingerPrint Screen</Text>
    </View>
  );
};

const TakeOff = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Take Off Screen</Text>
    </View>
  );
};

const CardMembership = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} >Card Membership Screen</Text>
    </View>
  );
};
const Health = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Health Screen</Text>
    </View>
  );
};

const Lightbulb = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Lightbulb Screen</Text>
    </View>
  );
};

const History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} >History Screen</Text>
    </View>
  );
};
const WaterDrop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} >Water Drop Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#252525",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle:{
    color:'#fff'
  }
});

export { CardMembership,FingerPrint,Health,History,Lightbulb,TakeOff,WaterDrop };
