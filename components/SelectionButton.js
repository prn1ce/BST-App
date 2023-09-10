import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';


{/* ChangingCircle Function

Description: 
- A button for the 'Circle' that is highlighted when the Role is selected.

Props:
1. circleColor - The color of the Circle.
2. borderColor - The color of the Circle Border.
3. onPress - Press Handler Event. 

*/}
const ChangingCircle = ({ circleColor, borderColor, onPress }) => {

    {/* Create the Circle. */}
    return (
        <TouchableOpacity onPress={onPress} style={rolebtnStyles.circleContainer}>
            <View style={[rolebtnStyles.circle, { backgroundColor: circleColor, borderColor: borderColor }]} />
        </TouchableOpacity>
    );

};

{/* Role Button Component

Description: 
- A button for the roles when signing up (Personal Trainer / Client).

Props:
1. label - The button name! */}
export default function SelectionButton({label}) {

    {/* State of the Colors, default state. */}
    const [circleColor, setCircleColor] = useState('transparent');
    const [borderColor, setBorderColor] = useState('#0F0F0F');

    {/* Function to change the Colours depending on State. */}
    const changeColor = () => {

        const newColor = circleColor === 'transparent' ? '#FF65C3' : 'transparent';
        const newBorderColor = newColor === 'transparent' ? '#0F0F0F' : '#FF65C3';
        setCircleColor(newColor);
        setBorderColor(newBorderColor);

    };

    {/* Render the Component. */}
    return (
        <TouchableOpacity onPress={changeColor}>
            <View style={rolebtnStyles.buttonLarge}>
                <Text style={rolebtnStyles.buttonLargeText}>{label}</Text>
                <ChangingCircle circleColor={circleColor} borderColor={borderColor} onPress={changeColor} />
            </View>
        </TouchableOpacity>
    );
}

{/* Create the Styling for the Component and the Function. */}
const rolebtnStyles = StyleSheet.create({

    circle: {
        width: 15,
        height: 15,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#0F0F0F',
    },

    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingEnd: 10,
    },

    buttonLargeText: {
        fontSize: 14,
        fontWeight: "bold",
    },

    buttonLarge: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
        height: 90,
        borderRadius: 10,
        borderColor: 'transparent',
    },
})