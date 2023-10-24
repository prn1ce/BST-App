import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import DefaultButton from '../../components/DefaultButton';
import { styles } from '../styles';
import DividerVertical from '../../components/DividerVertical';

import BlackCircle from '../../components/BlackCircle';
import PinkCircle from '../../components/PinkCircle';
import WhiteCircle from '../../components/WhiteCircle';

import LoopIcon from '../../components/LoopIcon';
import TimerIcon from '../../components/TimerIcon';
import PlayIcon from '../../components/PlayIcon';

export default function TrainingCircuit({ navigation }) {
    const containerStyles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
        },
    });

    const textStyles = StyleSheet.create({
        text: {
            color: 'white',
            fontSize: 17, 
        },
        rowContainer: {
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10,
            marginRight: 30,
            marginLeft: 10,
        },
        icon: {
            marginRight: 20, // Increase the margin here for more space
            marginLeft: 10,
        },
    });

    const CircleContainer = StyleSheet.create({
        rowContainer: {
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10,
            alignItems: 'center',
        },
        gap: {
            width: 10, // Adjust the width for the desired gap
        },
    });


    const IconRowContainer = StyleSheet.create({
        rowContainer: {
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10,
            alignItems: 'center',
        },
        gap: {
            width: 100, 
        },
    });


    const handleStartWorkout = () => {
        navigation.navigate('TrainingBooking');
    };

    return (
        <SafeAreaView style={containerStyles.container}>
            <CustomHeader
                title={'Training: Home Workout (Beginner)'}
                showLogo={false}
                showButton={true}
                navigation={navigation}
            />

            <View style={textStyles.rowContainer}>
                    <View style={textStyles.rowContainer}>
                    <LoopIcon style={textStyles.icon} />
                    <Text style={textStyles.text}>1 Circuit</Text>
                </View>

                <View style={textStyles.rowContainer}>
                    <PlayIcon />
                    <Text style={textStyles.text}>6 Exercises</Text>
                </View>

                <View style={textStyles.rowContainer}>
                
                    <TimerIcon />
                    <Text style={textStyles.text}>45 Minutes</Text>
                </View>
            </View>

            <View style={textStyles.rowContainer}>
                <View style={IconRowContainer.gap} />
                <WhiteCircle />
                <View style={CircleContainer.gap} />
                <Text style={textStyles.text}>Complete as a circuit</Text>
            </View>

            <View style={CircleContainer.rowContainer}>
                <View style={IconRowContainer.gap} />
                <PinkCircle />
                <View style={CircleContainer.gap} />
                <Text style={textStyles.text}>3x Bodyweight Squats</Text>
            </View>

            <DividerVertical />

            <View style={textStyles.rowContainer}>
                <View style={IconRowContainer.gap} />
                <BlackCircle />
                <View style={CircleContainer.gap} />
                <Text style={textStyles.text}>3x High Knees</Text>
            </View>

            <DividerVertical />

            <View style={textStyles.rowContainer}>
                <View style={IconRowContainer.gap} />
                <BlackCircle />
                <View style={CircleContainer.gap} />
                <Text style={textStyles.text}>3x Alternating Lunges with Twists</Text>
            </View>

            <DividerVertical />

            <View style={textStyles.rowContainer}>
                <View style={IconRowContainer.gap} />
                <BlackCircle />
                <View style={CircleContainer.gap} />
                <Text style={textStyles.text}>Bend Deadlift</Text>
            </View>

            <DividerVertical />

            <View style={textStyles.rowContainer}>
                <View style={IconRowContainer.gap} />
                <BlackCircle />
                <View style={CircleContainer.gap} />
                <Text style={textStyles.text}>3x Lateral Raise - with bands</Text>
            </View>

            <DividerVertical />

            <View style={textStyles.rowContainer}>
                <View style={IconRowContainer.gap} />
                <BlackCircle />
                <View style={CircleContainer.gap} />
                <Text style={textStyles.text}>3x Press ups</Text>
            </View>

            <View>
                <DefaultButton
                    label="Start Workout!"
                    onPress={handleStartWorkout}
                />
            </View>
        </SafeAreaView>
    );
}
