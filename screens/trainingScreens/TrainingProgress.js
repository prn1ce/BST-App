import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import DefaultButton from '../../components/DefaultButton';
import Circle from '../../components/TimerCircle';

export default function TrainingProgress({ navigation }) {
    const styles = StyleSheet.create({
        container: {
            flex: 1, // Take up the entire screen
            backgroundColor: 'black', // Set the background color to black
        },
        contentContainer: {
            flex: 1, // Take up the available space
            justifyContent: 'center', // Center content vertically
            alignItems: 'center', // Center content horizontally
        },
        whiteBox: {
            backgroundColor: 'white', // Set the background color to white
            flex: 0.7, // Adjust the flex property to make the box shorter
            margin: 20, // Add some margin around the white box
            padding: 20, // Add padding inside the white box
            borderRadius: 20, // Set the border radius to make the corners more curved
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'left', // Align the title to the left
        },
        description: {
            fontSize: 14,
            textAlign: 'left', // Align the description to the left
        },
        circleContainer: {
            alignItems: 'center', // Center the Circle component horizontally
            marginTop: 40, // Increase the margin to position the circle lower
        },
    });

    const handleStartWorkout = () => {
        navigation.navigate('TrainingBooking'); // Navigate to TrainingProgress
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Add the Header */}
            <CustomHeader
                title={'Training: In Progress'}
                showLogo={false}
                showButton={true}
                navigation={navigation}
            />

            {/* White rectangle box with title and description text */}
            <View style={styles.whiteBox}>
                <Text style={styles.title}>Complete as a circuit</Text>
                <Text style={styles.description}>6 exercises</Text>

                {/* Your existing content */}
                <ScrollView>
                    <View style={[styles.bodyContent, { gap: 20, marginVertical: 20, paddingBottom: 70 }]}></View>
                </ScrollView>

                <View>
                    <DefaultButton
                        label={"Let's Go!"}
                        onPress={handleStartWorkout}
                    />
                </View>
            </View>

            
            <View style={styles.circleContainer}>
                <Circle/>
            </View>
        </SafeAreaView>
    );
}
