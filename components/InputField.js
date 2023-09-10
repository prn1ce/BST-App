import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

{/* InputField Component

Description:
- An input field, used frequently in registrations.

Props:
1. placeholder - A custom placeholder for the Text Input Field (Optional)
2. label - The label of the Text Input.

*/}
export default function InputField({ placeholder, label, fontSize }) {

    {/* Render the Component */}
    return (
        <View style={inputFieldStyles.container}>
            <Text style={[inputFieldStyles.textStyle, {fontSize: fontSize}]}>{label}</Text>
            <TextInput 
                style={inputFieldStyles.inputStyle}
                placeholder={placeholder}
                placeholderTextColor={'gray'}
                />
        </View>
    )
}

{/* Create the Default Styling for the Component. */}
InputField.defaultProps = {
    fontSize: 12,
};

{/* Create the Styling for the Component */}
const inputFieldStyles = StyleSheet.create({

    container: {
        gap: 5,
    },

    textStyle: {
        fontWeight: 'bold',
        color: 'white',
    },

    inputStyle: {
        padding: 5,
        borderColor: 'white',
        borderRadius: 5, 
        borderWidth: 1,
    },

})