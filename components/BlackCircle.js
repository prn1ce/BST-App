import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BlackCircle() {
    const styles = StyleSheet.create({
        circle: {
            width: 20,
            height: 20,
            backgroundColor: 'black',  // Set circle background color to black
            borderRadius: 10,
            borderWidth: 1,             // Add a white border
            borderColor: 'white',       // Set border color to white
        },
    });

    return (
        <View style={styles.circle}></View>
    );
}
