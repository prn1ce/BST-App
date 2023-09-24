import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessageBox({msgBoxColour, msgText, msgSender}) {

    return msgBoxColour === 'white' ? (

        /* Create a Message with a Profile Picture on the Left. */
        <View style={{ flexDirection: 'row' }}>
            <View style={msgBoxStyles.circle}></View>

            <View style={[msgBoxStyles.messageContainer, { backgroundColor: msgBoxColour }]}>
                    <View style={{ marginHorizontal: 15 }}>

                        {/* User Name */}
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{msgSender}</Text>
                        
                        {/* User's Message */}   
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 12, color: '#545454' }}>
                            {msgText}
                            </Text>
                        </View>
                </View>
            </View>
        </View>
    ) : (
        /* Create a Message with a Profile Picture on the Right. */
        <View style={{ flexDirection: 'row' }}>

            <View style={[msgBoxStyles.messageContainer, { backgroundColor: msgBoxColour}]}>
                <View style={{ marginHorizontal: 15, borderRadius: 5 }}>

                    {/* User Name */}
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>{msgSender}</Text>

                    {/* User's Message */}             
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>
                        {msgText}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={[msgBoxStyles.circle, { marginLeft: 20, marginRight: 0}]}></View>

        </View>
    );
};

MessageBox.defaultProps = {
    msgBoxColour: 'white',
}

const msgBoxStyles = StyleSheet.create({
    circle: {
        marginTop: 20,
        height: 40,
        width: 40,
        borderRadius: 25,
        backgroundColor: '#909090',
        flex: 1,
        marginRight: 20,
    },
    
    messageContainer: {
        flex: 7, 
        marginTop: 20,
        borderRadius: 5,
        paddingVertical: 20,  
    },
})