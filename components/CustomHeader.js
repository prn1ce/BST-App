import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { styles } from '../screens/styles';

import Divider from './Divider';
import BackButton from './BackButton';

{/* CustomerHeader Component

Description: Use the Component to generate the Header of the Page and to follow a 
consistent design theme.

Props:
1. title: The title of the Page
2. showLogo: Show the Logo Header instead of a Title. */}
export default function CustomHeader({ title, showLogo, showButton, titleAlignment, titleSubheader}) {

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
            <View style={[customerHeaderStyles.header]}>

                {/* Render the Back Button if needed. */}
                <View style={{flexDirection: 'row', gap: 10}}>
                    {showButton ? (
                        <BackButton />
                    ) : null}

                    <View style={{alignItems: titleAlignment, justifyContent: 'center', paddingBottom: 20}}>
                        <Text style={[customerHeaderStyles.title, {backgroundColor: 'green'}]}>{title}</Text>
                        <Text style={styles.subheader}>{titleSubheader}</Text>
                    </View> 
                </View>

                <Divider />

            </View>
        )}
        </SafeAreaView>
    )
}

CustomHeader.defaultProps = {
    titleAlignment: 'center'
}

{/* Create the Styling for the Component. */}
const customerHeaderStyles = StyleSheet.create({

    /* Styling for Title Header */
    header: {
        marginTop: 50,
    },

    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5,
    },

    /* Styling for Logo Header */
    logoContainer: {
        flex: 0,
        paddingTop: 40,
        alignItems: 'center',
        width: Dimensions.get('window').width - 40,
        marginBottom: 20,
    },

    logoSize: {
        width: 208,
        height: 91,
    },

    btnContainer: {
        alignItems: 'flex-start'
        // position: 'absolute',
        // top: 7.5,
        // left: 0,
        // right: 0,
        // bottom: 0,
    },
})