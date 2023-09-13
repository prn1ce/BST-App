import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import { styles } from '../styles';
import HorizontalContent from '../../components/HorizontalContent';
import CustomHeader from '../../components/CustomHeader';
import SingleTile from '../../components/SingleTile';
import Divider from '../../components/Divider';
import DividerVertical from '../../components/DividerVertical'

export default function TrainingSession({navigation}) {

    {/* Set the Default Width of the Application */}
    const defaultWidth = Dimensions.get('window').width - 40;
    const thumbnailTileHeight = Dimensions.get('window').height / 6;

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

                    {/* Add Your Current Meal Plan Viewing */}
                    <View style={{borderWidth: 1, borderRadius: 5, borderColor: '#FF65C3'}}>
                        <SingleTile 
                            label={'3x Bodyweight Squats'}
                            imagePath={require('../../assets/trainingScreensImages/trainingSessionSection/squat.jpg')}
                            tileWidth={defaultWidth}
                            tileHeight={thumbnailTileHeight}
                            textSize={18}
                            viewButton={true}
                        />
                    </View>

                    <DividerVertical colour={'#FF65C3'}/>

                    {/* Add Your Current Meal Plan Viewing */}
                    <SingleTile 
                        label={'3x High Knees'}
                        imagePath={require('../../assets/trainingScreensImages/trainingSessionSection/high-knees.jpg')}
                        tileWidth={defaultWidth}
                        tileHeight={thumbnailTileHeight}
                        textSize={18}
                        viewButton={true}
                    />

                    <DividerVertical />

                    {/* Add Your Current Meal Plan Viewing */}
                    <SingleTile 
                        label={'3x Alternating Lunges with Twist'}
                        imagePath={require('../../assets/trainingScreensImages/trainingSessionSection/lunges.jpg')}
                        tileWidth={defaultWidth}
                        tileHeight={thumbnailTileHeight}
                        textSize={18}
                        viewButton={true}
                    />

                    <DividerVertical />

                    {/* Add Your Current Meal Plan Viewing */}
                    <SingleTile 
                        label={'3x Band Deadlift'}
                        imagePath={require('../../assets/trainingScreensImages/trainingSessionSection/deadlift.jpg')}
                        tileWidth={defaultWidth}
                        tileHeight={thumbnailTileHeight}
                        textSize={18}
                        viewButton={true}
                    />

                    <DividerVertical />
                    
                    {/* Add Your Current Meal Plan Viewing */}
                    <SingleTile 
                        label={'x10 Push Ups'}
                        imagePath={require('../../assets/trainingScreensImages/trainingSessionSection/pushup.jpg')}
                        tileWidth={defaultWidth}
                        tileHeight={thumbnailTileHeight}
                        textSize={18}
                        viewButton={true}
                    />


                    {/* Divide */}
                    <Divider />

                </View>

            </ScrollView>


        </SafeAreaView>
    )
}