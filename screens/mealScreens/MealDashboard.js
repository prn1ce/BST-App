import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import { styles } from '../styles';
import HorizontalContent from '../../components/HorizontalContent';
import CustomHeader from '../../components/CustomHeader';

export default function MealDashboard() {

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
                    
                    <View style={styles.bodyContent}>

                        <View style={{paddingBottom: 20}}>
                            <Text style={styles.pagesSubheading}>Nutrition is Key!</Text>
                        </View>

                        {/* The Horizontal Scroll Content. */}
                        <HorizontalContent 
                        titleArray={arrayTitles}
                        imageArray={arrayImages}
                        headingTitle={'Recommended Meals for you!'}/>

                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}