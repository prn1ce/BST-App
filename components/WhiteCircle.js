import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WhiteCircle() {
    const styles = StyleSheet.create({
        circle: {
            width: 20,
            height: 20,
            backgroundColor: 'white',   // Set circle background color to white
            borderRadius: 10,
            borderWidth: 1,             // Add a white border
            borderColor: 'black',       // Set border color to black
        },
    });

    return (
        <View style={styles.circle}></View>
    );
}
