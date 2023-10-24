import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'

export default function SingleTile({
    label,
    imagePath,
    tileHeight,
    tileWidth,
    textSize,
    subHeaderActive,
    subHeaderText,
    buttonVisible,
    buttonLabel,
    navigation,
    navigateTo, 
    borderActive,
    tileColour, 
    }) {

    {/* Re-adjust the Button's Size if it is a SmallButton */}
    const borderHighlight = borderActive ? 
    {borderWidth: 1, borderRadius: 5, borderColor: '#FF65C3'} : 
    {borderWidth: 0, borderRadius: 0 }

    {/* Render the Component. */}
    return (
        <TouchableOpacity style={borderHighlight}>
            <View style={{height: tileHeight, width: tileWidth}}>
                <View style={{flex: 2}}>
                    <Image source={imagePath}
                        style={[singleTileStyles.rounded, singleTileStyles.imageStyle]}
                        resizeMode="cover"
                    />
                </View>

                <View style={[singleTileStyles.overlay, singleTileStyles.rounded, {backgroundColor: tileColour}]}>
                    <Text style={[singleTileStyles.overlayText, {fontSize: textSize}]}>{label}</Text>

                    {/* Add a Subheader if the User Wishes */}
                    {subHeaderActive ? (
                        <Text style={[singleTileStyles.overlayText, singleTileStyles.subheaderStyle]}>{subHeaderText}</Text>
                    ) : ( 
                        <></>
                    )}
                    
                    {/* Add a Button if the User Wishes */}
                    {buttonVisible ? (
                        <View style={{ position: 'absolute', bottom: 0, right: 0, paddingBottom: 10, paddingRight: 10 }}>
                            <DefaultButton 
                            label={buttonLabel} 
                            smallButton={true} 
                            onPress={() => navigation.navigate(navigateTo)}
                            navigation={navigation} 
                            navigateTo={navigateTo}/>
                        </View>
                    ) : (
                        <></>
                    )}

                </View>
            </View>
        </TouchableOpacity>
    );
};

{/* Default Width and Height */}
SingleTile.defaultProps = {
    tileWidth: 200,
    tileHeight: 150,
    textSize: 16,
    buttonLabel: 'View',
    tileColour: 'rgba(0, 0, 0, 0.7)',
}

{/* Create the styling for the Component */}
const singleTileStyles = StyleSheet.create({

    // Overlay for the Image if Needed
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },

    // Round the Corners
    rounded: {
        borderRadius: 5,
    },

    // Overlay Text over the Image
    overlayText: {
        paddingLeft: 15,
        paddingTop: 15,
        color: 'white', 
        fontWeight: 'bold',
    },

    subheaderStyle: {
        paddingTop: 0, 
        fontWeight: 'normal', 
        fontSize: 12
    },

    // Image Style
    imageStyle: {
        height: '100%',
        width: '100%'
    },
})