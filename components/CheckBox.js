import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

{/* TickBox Component

Description: A component that has a tickbox option, accompanied by a label.
Typically used in Sign-Up/Registration Options.

Props: 
1. label: The tickbox('s) name. Type: String */}
export default function CheckBox({label}) {

  {/* The current state of the tickbox. Change if Ticked.*/}
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => { setIsChecked(!isChecked); };

  {/* Render the Component. */}
  return (
    <TouchableOpacity onPress={toggleCheckbox} style={tickBoxStyles.checkBoxContainer}>

      {/* Container of the CheckBox */}
      <View>
        <View style={[tickBoxStyles.checkbox, isChecked && tickBoxStyles.checked]}>
          {isChecked && <Text style={tickBoxStyles.checkmark}></Text>}
        </View>
      </View>

      {/* Container of the Label to ensure flexibility. */}
      <View style={tickBoxStyles.textContainer}>
        <Text style={tickBoxStyles.label}>{label}</Text>
      </View>

    </TouchableOpacity>
  );
}

{/* Create the Styling for the Component. */}
const tickBoxStyles = StyleSheet.create({

    checkBoxContainer: {
      flex: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 10,
    },

    textContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    checkbox: {
      width: 30,
      height: 30,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: 'white',
      alignItems: 'center',
    },

    checked: {
      backgroundColor: '#FF65C3',
      borderColor: '#FF65C3',
    },

    checkmark: {
      color: 'white',
    },

    label: {
      fontSize: 13,
      color: 'white',
    },
});