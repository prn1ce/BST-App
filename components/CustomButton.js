import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';


const CustomButton = ({onPress, text}) => {
    return (
      <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  };




  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#3B71F5',
      width: '100%',
      marginVertical: 5,
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      fontWeight: 'bold',
      color: 'white',
    },
  });


  export default CustomButton;