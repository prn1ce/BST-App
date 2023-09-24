import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

export default function BackButton() {
    
    return (
        <View>
            <View style={[backButtonStyles.btnContainer, {
                justifyContent: 'center',
                alignItems: 'center'
            }]}>
                <FontAwesome
                    name="chevron-left" 
                    size={13} 
                    strokeWidth={2}
                    color='white' 
                />
            </View>
        </View>
    )
}

const backButtonStyles = StyleSheet.create({

    btnContainer: {
        height: 35,
        width: 35,
        borderRadius: 40,
        backgroundColor: '#FF65C3'
    }

})