import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default function Divider({ height, colour }) {

    return  (
        <View style={[dividerStyles.container, {height: height}]}>
            <View style={[dividerStyles.divider, {backgroundColor: colour}]}></View>
            <View style={[dividerStyles.divider, {backgroundColor: colour}]}></View>
            <View style={[dividerStyles.divider, {backgroundColor: colour}]}></View>
            <View style={[dividerStyles.divider, {backgroundColor: colour}]}></View>
            <View style={[dividerStyles.divider, {backgroundColor: colour}]}></View>
        </View>
    )
}

Divider.defaultProps = {
    height: Dimensions.get('window').height / 12,
    colour: 'white'
};

const dividerStyles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    
    divider: {
        flex: 1,
        width: 1,
        marginVertical: 2,
    },
})