import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import { styles } from '../styles';
import HorizontalContent from '../../components/HorizontalContent';
import CustomHeader from '../../components/CustomHeader';
import SingleTile from '../../components/SingleTile';
import Divider from '../../components/Divider';

export default function MealDashboard() {

    {/* Set the Default Width of the Application */}
    const defaultWidth = Dimensions.get('window').width - 40;
    const thumbnailTileHeight = Dimensions.get('window').width / 2;

    {/* The titles of the Recommended Meal Section  */}
    arrayTitles = [
        'Breakfast Recommendations',
        'Lunch Recommendations',
        'Dinner Recommendations'
    ];

    {/* The image paths of the Recommended Meal Section  */}
    arrayImages = [
        require('../../assets/mealScreensImages/dashboardSection/breakfastRec.png'),
        require('../../assets/mealScreensImages/dashboardSection/lunchRec.png'),
        require('../../assets/mealScreensImages/dashboardSection/dinnerRec.png'),
    ];

    {/* Render the Page. */}
    return (
        <SafeAreaView style={styles.container}>

            {/* Add the Header */}
            <CustomHeader title={'Nutrition Dashboard'} showLogo={false}/>

            <ScrollView>
                <View styles={styles.container}>
                    
                    <View style={[styles.bodyContent, {gap: 20}]}>

                        {/* Add the Header */}
                        <View>
                            <Text style={styles.header}>Nutrition is Key!</Text>
                        </View>

                        {/* Add Your Current Meal Plan Viewing */}
                        <SingleTile 
                            label={'Your Current Meal Plan'}
                            imagePath={require('../../assets/mealScreensImages/dashboardSection/currentMealPlan.jpg')}
                            tileWidth={defaultWidth}
                            tileHeight={thumbnailTileHeight}
                            textSize={18}
                            subHeaderActive={true}
                            subHeaderText={'Breakfast, Lunch and Dinner'}
                            viewButton={true}
                        />

                        {/* Add Your Current Macro Details Viewing */}
                        <SingleTile 
                            label={'Your Current Macro Details'}
                            imagePath={require('../../assets/mealScreensImages/dashboardSection/macroDetails.jpg')}
                            tileWidth={defaultWidth}
                            tileHeight={thumbnailTileHeight}
                            textSize={18}
                            subHeaderActive={true}
                            subHeaderText={'Track your current macro progress.'}
                            viewButton={true}
                        />

                        {/* Divide */}
                        <Divider />

                        {/* The Horizontal Scroll Content. */}
                        <HorizontalContent 
                        titleArray={arrayTitles}
                        imageArray={arrayImages}
                        headingTitle={'Recommended Meals for you!'} 
                        />

                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}