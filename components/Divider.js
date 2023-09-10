import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export default function Divider() {
    return (
        <View style={dividerStyles.divider}></View>
    )
}

const dividerStyles = StyleSheet.create({
    
    divider: {
        height: 0.5,
        backgroundColor: '#272727',
        width: Dimensions.get('window').width - 40,
    },

})