import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import { styles } from '../styles';
import HorizontalContent from '../../components/HorizontalContent';
import CustomHeader from '../../components/CustomHeader';
import SingleTile from '../../components/SingleTile';
import Divider from '../../components/Divider';

export default function MealDashboard({ navigation }) {

    {/* Set the Default Width of the Application */}
    const defaultWidth = Dimensions.get('window').width - 40;
    const thumbnailTileHeight = Dimensions.get('window').width / 2;

    {/* The titles of the Recommended Meal Section  */}
    const arrayTitles = [
        'Breakfast Recommendations',
        'Lunch Recommendations',
        'Dinner Recommendations'
    ];

    {/* The image paths of the Recommended Meal Section  */}
    const arrayImages = [
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
                <View>
                    <View style={[styles.bodyContent, {gap: 20, paddingBottom: 20}]}>

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
                            buttonVisible={true}
                            navigation={navigation}
                            navigateTo={'CurrentMealPlanPage'}
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
                            buttonVisible={true}
                        />

                        {/* Divide */}
                        <Divider />

                        {/* The Horizontal Scroll Content. */}
                        <View>
                            <HorizontalContent 
                            titleArray={arrayTitles}
                            imageArray={arrayImages}
                            headingTitle={'Recommended Meals for you!'} 
                            rightText={'See All'}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}