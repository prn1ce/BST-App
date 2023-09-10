import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'

import DefaultButton from './DefaultButton';

{/* SingleTile Component

Description: 
- A Tile designed for Horizontal Content Scrolling.

Props: 
1. label - The tile's name.
2. imagePath - The image's path used in the Tile. */}
export default function SingleTile({
    label,
    imagePath,
    tileHeight,
    tileWidth,
    textSize,
    subHeaderActive,
    subHeaderText,
    viewButton }) {

    {/* Render the Component. */}
    return (
        <TouchableOpacity>
            <View style={{height: tileHeight, width: tileWidth}}>
                <View style={{flex: 2}}>
                    <Image source={imagePath}
                        style={[singleTileStyles.rounded, {width: tileWidth, height: tileHeight}]}
                    />
                </View>

                <View style={[singleTileStyles.overlay, singleTileStyles.rounded]}>
                    <Text style={[singleTileStyles.overlayText, {fontSize: textSize}]}>{label}</Text>

                    {/* Add a Subheader if the User Wishes */}
                    {subHeaderActive ? (
                        <Text style={[singleTileStyles.overlayText, singleTileStyles.subheaderStyle]}>{subHeaderText}</Text>
                    ) : ( 
                        <></>
                    )}
                    
                    {/* Add a View Button if the User Wishes */}
                    {viewButton ? (
                        <View style={{ position: 'absolute', bottom: 0, right: 0, paddingBottom: 10, paddingRight: 10 }}>
                            <DefaultButton label={'View'} smallButton={true}/>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        flex: 1,
        resizeMode: 'cover',
    },
})