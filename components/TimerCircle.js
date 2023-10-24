import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Circle() {
  return (
    <View style={styles.outerCircle}>
      <View style={styles.innerCircle}>
        <Text style={styles.timeText}>00:00</Text>
      </View>
    </View>
  );
}

const circleSize = 180;
const outerCircleSize = circleSize + 20; 

const styles = StyleSheet.create({
  outerCircle: {
    width: outerCircleSize,
    height: outerCircleSize,
    borderRadius: outerCircleSize / 2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10, 
    borderColor: 'pink',
  },
  innerCircle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 24, 
    color: 'black', 
  },
});
