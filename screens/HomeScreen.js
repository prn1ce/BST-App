import React from 'react';

import { View, SafeAreaView, Text, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import CustomHeader from '../components/CustomHeader';
import SingleTile from '../components/SingleTile';
import HorizontalContent from '../components/HorizontalContent';
import CatchupSection from '../components/CatchupSection';

export default function HomeScreen() {

    /* Define the title of the Contents of the Horizontal Scroll. */
    const fyTitles = [
        'Savory Bowl',
        'Minimal Equipment',
        'Start your Day with Cardio!',
        'Tips for your Fitness Journey',
    ];

    /* Define the images of the Contents of the Horizontal Scroll. */
    const fyImages = [
        require('../assets/homeScreenImages/savoury-bowl.jpg'),
        require('../assets/homeScreenImages/min-equipment.jpg'),
        require('../assets/homeScreenImages/day-cardio.jpg'),
        require('../assets/homeScreenImages/tips-fitness.jpg'),
    ];
    
    /* Define the Width and Height of the EVent Tiles. */
    const eventsWidth = Dimensions.get('window').width - 40;

    /* Define the Titles for the Events. */
    const eventsLabels = [
        'BST Mini Marathon',
        "Member's Launch Party",
        '2023 Challenge',
    ];

    /* Define the Subheaders for the Events. */
    const eventsSubheaders = [
        'April 10, 2023: 7:00AM \nBrowns Plains Park',
        'May 10, 2023: 6:30PM \nRestaurant at Burpengary',
        'All-year! \nBST Gym, Burpengary'
    ];

    /* Define the Images for the Events. */
    const eventsImages = [
        require('../assets/homeScreenImages/mini-marathon.jpg'),
        require('../assets/homeScreenImages/launch-party.jpg'),
        require('../assets/homeScreenImages/bst-chall.jpg')
    ];

    /* Define the Labels for the Buttons in the Events. */
    const eventsbtnLabels = [
        '$99',
        'Free',
        '$35'
    ];

    {/* Render the Page */}
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <CustomHeader 
                    title={'Good Morning, Kate!'} 
                    titleAlignment={'flex-start'}
                    titleSubheader={'Today, April 18 2023'}
                    />
            </View>

            <ScrollView>
                <View style={[styles.bodyContent, {gap: 20, marginTop: 20, paddingBottom: 70}]}>

                    {/* Section 1: Chat Area Section. */}
                    <View>     
                        {/* Add the Header */}
                        <Text style={styles.header}>Catch-Ups!</Text>
    
                        {/* Add the Chat / Messages Area */}
                        <CatchupSection />
                    </View>

                    {/* Section 2: Today's Agena Section. */}
                    <View style={{gap: 20}}>
                        <Text style={styles.header}>Today's Agenda</Text>

                        <View style={{flexDirection: 'row'}}>

                            <View style={{flex: 1}}>
                                <SingleTile 
                                    label={'Summary for \nToday'}
                                    tileHeight={400}
                                    tileWidth={(Dimensions.get('window').width / 2) - 25}
                                    tileColour={'#FF65C3'}
                                />
                            </View>

                            <View style={{flex: 1}}>

                                <View style={{flex: 1}}>
                                    <SingleTile 
                                        label={'Upcoming'}
                                        tileHeight={205}
                                        tileWidth={(Dimensions.get('window').width / 2) - 20}
                                        tileColour={'#FF65C3'}
                                    />
                                </View>

                                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                    <SingleTile 
                                        label={'Reminders'}
                                        tileHeight={190}
                                        tileWidth={(Dimensions.get('window').width / 2) - 20}
                                        tileColour={'#FF65C3'}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Section 3: For You Section. */}
                    <View style={[styles.bodyContent]}>
                        <HorizontalContent
                            titleArray={fyTitles}
                            imageArray={fyImages}
                            headingTitle={'For You'}
                            rightText={'See All'}
                        />
                    </View>

                    
                    {/* Section 4: Events Section. */}
                    <View style={{gap: 20, paddingBottom: 20}}>

                        <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                            <View style={{flex: 1}}>
                                <Text style={styles.header}>
                                    Events
                                </Text>
                            </View>

                            {/* Add the Right Text (Usually a Link to a Page) if required. */}
                            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
                                <View>
                                    <Text style={styles.rightText}>
                                        See All
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{gap: 20}}>
                            {eventsLabels.map((item, index) => (

                            <SingleTile
                                label={item}
                                imagePath={eventsImages[index]}
                                tileWidth={eventsWidth}
                                subHeaderActive={true}
                                subHeaderText={eventsSubheaders[index]}
                                buttonVisible={true}
                                buttonLabel={[eventsbtnLabels[index]]}
                                key={index}
                            />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}