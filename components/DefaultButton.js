import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

{/* NextButton Component 

Description: 
- A button designed strictly only for Pages for Loggin In/Registration.

Props: 
1. navigation - Allows for navigation between pages.
2. navigateTo - Specifies what page the button is navigating to. [Type: String] 
3. label - The button's name!
4. labelSize - The buitton's name's size.
5. btnColor - Specifies what colour the button is, default value is Transparent. 
6. btnColorBorder - Specifies what colour the button's border is, default value is White. 
7. btnTextColor - Specifies what colour the button's text is, default value is White. */}
export default function DefaultButton({navigation, 
    navigateTo,
    label,
    labelSize,
    btnColor,
    btnColorBorder,
    btnTextColor}) {

    {/* Create a function that allows Navigation to the provided 'navigateTo' page.*/}
    const navRegistration = () => {
        navigation.navigate(navigateTo);
      };

    {/* Render the Component. */}
    return (
        <TouchableOpacity 
        style={[nextBtnStyles.pinkButton, {
            backgroundColor: btnColor,
            borderColor: btnColorBorder,
        }]} 

        onPress={navRegistration}>
            <Text style={{
                fontSize: labelSize,
                color: btnTextColor,
                fontWeight: 'bold',
                }}>{label}</Text>
        </TouchableOpacity>
    );
}

DefaultButton.defaultProps = {
    labelSize: 14,
    btnColor: '#FF65C3',
    btnColorBorder: '#FF65C3',
    btnTextColor: 'white',
};

{/* Create the Styling for the Component. */}
const nextBtnStyles = StyleSheet.create({

    pinkButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', 
        borderWidth: 1,
    },
})