import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default function InputDivider({ height, color }) {

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

InputDivider.defaultProps = {
    height: Dimensions.get('window').height / 20,
    color: 'black' 
};

const dividerStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    
    divider: {
        flex: 1,
        width: 5,
        marginVertical: 2,
    },
})
