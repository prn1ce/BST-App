import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export default function Divider({ length }) {
    return (
        <View style={[dividerStyles.divider, {width: length}]}></View>
    )
}

Divider.defaultProps = {
    length: Dimensions.get('window').width - 40,
};

const dividerStyles = StyleSheet.create({
    divider: {
        height: 0.5,
        backgroundColor: '#272727',
    },
})