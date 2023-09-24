import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { styles } from '../screens/styles';
import InputField from './InputField';
import MessageBox from './MessageBox';

export default function CatchupSection() {

    /* Create a Dummy Record for the Texts in the Message Boxes. */
    const msgTextArray = [
        'Hello!',
        'I love your workout Program! Lets get a work in!',
        'Ill be there soon! Wait for me!',
        'Good work yesterday on your PR!',
        'Welcome to the Gym!'
    ]

    /* Create a Dummy Record for the Names in the Message Boxes. */
    const msgSenderArray = [
        'Angela',
        'Jhalen',
        'Jerry',
        'Doug',
        'Kate'
    ]

    {/* Render the Component */}
    return (

        <ScrollView 
            style={catchUpSectionStyles.catchUpsContainer} 
            indicatorStyle='#FF65C3'
        >
            <View style={{paddingHorizontal: 15, marginBottom: 20}}>
                <InputField 
                    placeholder={'Share something...'}
                    bgColour={'white'}
                    placeholderColour={'#B8B8B8'}
                />

                {msgTextArray.map((text, index) => (
                    <View key={index}>
                        {index % 2 === 0 ? (
                            <MessageBox 
                                msgText={text}
                                msgSender={msgSenderArray[index]}
                            />
                            ) : (
                                <MessageBox
                                msgBoxColour={'#FF65C3'}
                                msgText={text}
                                msgSender={msgSenderArray[index]}
                            />
                            )
                        }
                    </View>
                ))}

            </View>
        </ScrollView>
    );
}


const catchUpSectionStyles = StyleSheet.create({

    catchUpsContainer: {
        backgroundColor: '#272727', 
        marginTop: 20, 
        borderRadius: 5, 
        maxHeight: 220,
    },

})