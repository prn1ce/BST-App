import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SingleTile from '../components/SingleTile'
import { styles } from '../screens/styles';

{/* HorizontalContent Component

Description: 
- Designed as a Container for Single Tile, allows for Reusability across various pages that require
horizontal content.

Props:
1. titleArray: Array of Titles being passed through.
2. imageArray: Array of Images being passed through.
3. titleHeight (Optional): Set the height of each tile, has a default of 150px.
4. titleWeight (Optional): Set the height of each tile, has a default of 200px. */}
export default function HorizontalContent({titleArray, imageArray, tileHeight, tileWidth, headingTitle, rightText}) {

    {/* Render the Component. */}
    return (
        <View style={{gap: 10}}>

            {/* Adding Title to the Content. */}
            <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                <View style={{flex: 5}}>
                    <Text style={styles.header}>
                        {headingTitle}
                    </Text>
                </View>

                {/* Add the Right Text (Usually a Link to a Page) if required. */}
                <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
                    <View>
                        <Text style={styles.rightText}>
                            {rightText}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Render the Contents, and Map the Array received. */}
            <ScrollView horizontal={true}>
                {titleArray.map((title, index) => (
                    <View key={index} style={{ marginRight: 10}}>
                        <SingleTile label={title} imagePath={imageArray[index]}/>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}