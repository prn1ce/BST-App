import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import { styles } from '../styles';
import HorizontalContent from '../../components/HorizontalContent';
import CustomHeader from '../../components/CustomHeader';
import SingleTile from '../../components/SingleTile';
import Divider from '../../components/Divider';

export default function TrainingDashboard({navigation}) {

    {/* Set the Default Width of the Application */}
    const defaultWidth = Dimensions.get('window').width - 40;
    const thumbnailTileHeight = Dimensions.get('window').width / 2;

    {/* The titles of the Recommended Training Section  */}
    const arrayTitles = [
        'CARDIO',
        'ARMS',
        'BACK',
        'CHEST'
    ];

    {/* The image paths of the Recommended Meal Section  */}
    const arrayImages = [
        require('../../assets/trainingScreensImages/dashboardSection/cardio.png'),
        require('../../assets/trainingScreensImages/dashboardSection/arms.png'),
        require('../../assets/trainingScreensImages/dashboardSection/back.png'),
        require('../../assets/trainingScreensImages/dashboardSection/chest.png'),
    ];

    {/* Set the Label for the Tile Titles in the Page */}
    const tileTitles = [
        'Track your Progress',
        'Your workout for the Day!',
    ]

    {/* Set the Label for the Tile Images in the Page */}
    const tileImages = [
        require('../../assets/trainingScreensImages/dashboardSection/track-progress.jpg'),
        require('../../assets/trainingScreensImages/dashboardSection/workoutday.jpeg'),
    ]

    {/* Set the Label for the Tile Subheaders in the Page */}
    const tileSubheaders = [
        'You’re doing really well, click here to view your progress',
        'Your focused workout for today.',
    ]

    {/* Set the Label for the Tile Navigators in the Page */}
    const tileNavigators = [
        '',
        'TrainingSession'
    ]
 
    return (
        <SafeAreaView style={styles.container}>
        
            {/* Add the Header */}
            <CustomHeader title={'Training Dashboard'} showLogo={false}/>

            <ScrollView>
            
                <View style={[styles.bodyContent, {gap: 20}]}>

                    {/* Add the Header */}
                    <View>
                        <Text style={styles.header}>Your health, is wealth.</Text>
                    </View>

                    {/* Render the Content Tiles in the Page. */}
                    {tileTitles.map((title, index) => (
                        <SingleTile 
                            label={title}
                            imagePath={tileImages[index]}
                            tileWidth={defaultWidth}
                            tileHeight={thumbnailTileHeight}
                            textSize={18}
                            subHeaderActive={true}
                            subHeaderText={tileSubheaders[index]}
                            buttonVisible={true}
                            navigation={navigation}
                            navigateTo={tileNavigators[index]}
                            key={index}
                        />
                    ))}

                    {/* Divide */}
                    <Divider />

                    {/* The Horizontal Scroll Content. */}
                    <HorizontalContent 
                        titleArray={arrayTitles}
                        imageArray={arrayImages}
                        headingTitle={'Designed For You'} 
                    />

                </View>

            </ScrollView>


        </SafeAreaView>
    )
}