import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default function Divider({ height, color }) {

    return  (
        <View style={[dividerStyles.container, {height: height}]}>
            <View style={[dividerStyles.divider, {backgroundColor: color}]}></View>
            <View style={[dividerStyles.divider, {backgroundColor: color}]}></View>
            <View style={[dividerStyles.divider, {backgroundColor: color}]}></View>
            <View style={[dividerStyles.divider, {backgroundColor: color}]}></View>
            <View style={[dividerStyles.divider, {backgroundColor: color}]}></View>
        </View>
    )
}

Divider.defaultProps = {
    height: Dimensions.get('window').height / 20,
    color: 'white'
};

const dividerStyles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    
    divider: {
        flex: 1,
        width: 2,
        marginVertical: 2,
    },
})