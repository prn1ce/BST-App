import React from 'react';
import { View, ScrollView, StyleSheet, Modal } from 'react-native'
import Divider from './Divider';
import DefaultButton from './DefaultButton';

{/* PopUp Component

Description: 
- A skeleton of a pop-up function, used throughout the Application.
- Create the Base Structure of the Pop-Up 

Props:
1. visible - Used to show the visibility of the PopUp.
2. onClose - Allows for closure of the PopUp.
3. children - The content of the PopUp.*/}
export default function PopUp({ visible, onClose, children }) {    

    {/* Render the Component. */}
    return (
        <Modal transparent visible={visible}>

            <View style={[popUpStyles.popUpBG]}>

                {/* Allow for an expandable, scrollable PopUp */}
                <ScrollView style={popUpStyles.popUpContainer}>
                    <View style={{paddingBottom: 50}}>
                        {children}
                        <View style={{gap: 20}}>
                            <Divider length={'100%'}/>
                            <DefaultButton label={'Close'} onPress={onClose}/>
                        </View>
                    </View>                       
                </ScrollView>

            </View>

        </Modal>
    )
}

{/* Create the Styling for the Component. */}
const popUpStyles = StyleSheet.create({
    popUpBG: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    popUpContainer: {
        width: '85%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 30,
        borderRadius: 20,
        maxHeight: '70%',
    },
})