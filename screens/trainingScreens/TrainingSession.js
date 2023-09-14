import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import { styles } from '../styles';
import CustomHeader from '../../components/CustomHeader';
import SingleTile from '../../components/SingleTile';
import Divider from '../../components/Divider';
import DividerVertical from '../../components/DividerVertical'

export default function TrainingSession({navigation}) {

    {/* Set the Default Width of the Application */}
    const defaultWidth = Dimensions.get('window').width - 40;
    const thumbnailTileHeight = Dimensions.get('window').height / 6;

    {/* Set the Label for the Tiles in the Content Page */}
    const tileTitles = [
        '3x Bodyweight Squats',
        '3x High Knees',
        '3x Alternating Lunges with Twist',
        '3x Band Deadlift',
        'x10 Push Ups',
    ]

    {/* Set the Images for the Tiles in the Content Page */}
    const tileImage = [
        require('../../assets/trainingScreensImages/trainingSessionSection/squat.jpg'),
        require('../../assets/trainingScreensImages/trainingSessionSection/high-knees.jpg'),
        require('../../assets/trainingScreensImages/trainingSessionSection/lunges.jpg'),
        require('../../assets/trainingScreensImages/trainingSessionSection/deadlift.jpg'),
        require('../../assets/trainingScreensImages/trainingSessionSection/pushup.jpg'),

    ]

    return (
        <SafeAreaView style={styles.container}>
        
            {/* Add the Header */}
            <CustomHeader title={'Training Session'} showLogo={false}/>

            <ScrollView>
            
                <View style={[styles.bodyContent, {gap: 20}]}>

                    {/* Add the Header */}
                    <View>
                        <Text style={styles.header}>Training: Home Workout (Beginner) </Text>
                    </View>

                    {/* Render the Body Content */}
                    {tileTitles.map((item, index) => (

                        <React.Fragment key={index}>

                            {/* Render a Content Tile */}
                            <SingleTile 
                                label={item}
                                imagePath={tileImage[index]}
                                tileWidth={defaultWidth}
                                tileHeight={thumbnailTileHeight}
                                textSize={18}
                                buttonVisible={true}
                                buttonLabel={'>'}
                            />

                            {/* Render a Vertical Divider */}
                            {index !== tileTitles.length - 1 && <DividerVertical />}
                            
                        </React.Fragment>
                    ))}

                    {/* Divide */}
                    <Divider />

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}