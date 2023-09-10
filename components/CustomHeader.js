import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import Divider from './Divider';

{/* CustomerHeader Component

Description: Use the Component to generate the Header of the Page and to follow a 
consistent design theme.

Props:
1. title: The title of the Page
2. showLogo: Show the Logo Header instead of a Title. */}
export default function CustomHeader({ title, showLogo }) {

    {/* Render the Component. */}
    return (
        <SafeAreaView>
        {showLogo ? (
            <View style={customerHeaderStyles.logoContainer}>
            <Image
                source={require("../assets/bst-icon.png")}
                style={customerHeaderStyles.logoSize}
            />
            </View>
        ) : (
            <View style={customerHeaderStyles.header}>
                <Text style={customerHeaderStyles.title}>{title}</Text>
                <Divider />
            </View>
        )}
        </SafeAreaView>
    )
}

{/* Create the Styling for the Component. */}
const customerHeaderStyles = StyleSheet.create({

    /* Styling for Title Header */
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    /* Styling for Logo Header */
    logoContainer: {
        flex: 0,
        paddingTop: 40,
        alignItems: 'center',
        width: Dimensions.get('window').width - 40,
        paddingBottom: 20,
    },

    logoSize: {
        width: 208,
        height: 91
    },
})