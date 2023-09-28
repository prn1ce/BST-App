import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

export default function BackButton() {
    
    return (
        <View>
            <FontAwesome.Button
                name="chevron-left" 
                size={13} 
                color={'white'} 
                backgroundColor={'#FF65C3'}
                borderRadius={50}>
                    Back
                </FontAwesome.Button>
        </View>
    )
}

const backButtonStyles = StyleSheet.create({

    buttonStyle: {
        size: 13,
        color: 'white',
        backgroundColor: '#FF65C3',
        borderRadius: 50,
    }

})