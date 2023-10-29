import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../styles';

import CustomHeader from '../../components/CustomHeader';
import DefaultButton from '../../components/DefaultButton';
import InputField from '../../components/InputField';
import HorizontalContent from '../../components/HorizontalContent';
import InputDivider from '../../components/InputDivider';

export default function TrainingBooking({ navigation }) {
    const customStyles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
        },
        contentContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        header: {
            color: 'white',
            fontSize: 20,
            marginBottom: 20,
        },
        description: {
            color: 'white',
            fontSize: 16,
        },
        buttonContainer: {
            paddingBottom: 20, 
        },
    });

    {/* The titles of the Trainers  */}
    const arrayTitles = [
        'John',
        'Kate',
        'Anton',
        'Bella'
    ];
      {/* The image paths of the Recommended Meal Section  */}
      const arrayImages = [
        require('../../assets/trainingScreensImages/trainerBooking/trainer1.png'),
        require('../../assets/trainingScreensImages/trainerBooking/trainer2.jpg'),
        require('../../assets/trainingScreensImages/trainerBooking/trainer3.jpg'),
        require('../../assets/trainingScreensImages/trainerBooking/trainer4.jpg')
    ];

    const handleStartWorkout = () => {
        navigation.navigate('TrainingBooking2');
    };

    return (
        <SafeAreaView style={customStyles.container}>
            <CustomHeader
                title={'Trainer Booking'}
                showLogo={false}
                showButton={true}
            />

            <ScrollView>
                <View style={[styles.bodyContent, { gap: 20 }]}>
                    <View style={[styles.noFlexContainer]}>
                        <View>
                            <Text style={styles.header}>
                                Book a personal training session at our Boss Squad Training facility!
                            </Text>

                            <Text style={styles.description}>
                                Fill in this form to create a booking!
                            </Text>
                        </View>

                        <View style={[styles.contentRow, { gap: 20 }]}>
                            <View style={styles.flexItem}>
                                <InputField label={'First Name'} />
                            </View>

                            <View style={styles.flexItem}>
                                <InputField label={'Last Name'} />
                            </View>
                        </View>
                    </View>
                </View>

                <InputDivider />

                <View style={styles.inputFieldContainer}>
                    <InputField label={"Phone"} fontSize={14} style={{ marginBottom: 20 }} />
                </View>

                <InputDivider />

                <View style={styles.inputFieldContainer}>
                    <InputField label={"Email"} fontSize={14} style={{ marginBottom: 20 }} />
                </View>

                <InputDivider />

                <View style={styles.inputFieldContainer}>
                    <InputField label={"Address"} fontSize={14} style={{ marginBottom: 20 }} />
                </View>

                <InputDivider />

                <View style={styles.inputFieldContainer}>
                    <View style={styles.contentRow}>
                        <View style={styles.flexItem}>
                            <InputField label={'City/Suburb'} fontSize={14} />
                        </View>

                        <View style={styles.flexItem}>
                            <InputField label={'State'} fontSize={14} />
                        </View>

                        <View style={styles.flexItem}>
                            <InputField label={'Postcode'} fontSize={14} />
                        </View>
                    </View>
                </View>

                <InputDivider />

                <View style={[styles.oneFlexContainer, { gap: 20 }]}>
                    <View>
                        <Text style={styles.subheader}>
                            Emergency Contact
                        </Text>

                        <View style={[styles.contentRow, { gap: 20 }]}>
                            <View style={styles.flexItem}>
                                <InputField label={'First Name'} />
                            </View>

                            <View style={styles.flexItem}>
                                <InputField label={'Last Name'} />
                            </View>
                        </View>
                    </View>
                </View>

                <InputDivider />

                <View style={styles.inputFieldContainer}>
                    <InputField label={"Phone"} fontSize={14} style={{ marginBottom: 20 }} />
                </View>

                <InputDivider />

                <View style={styles.inputFieldContainer}>
                    <InputField label={"Goal"} fontSize={14} style={{ marginBottom: 20 }} />
                </View>

                <InputDivider />

               
                
                {/* The Horizontal Scroll Content. */}
            <View>
                 <HorizontalContent 
                titleArray={arrayTitles}
                imageArray={arrayImages}
                headingTitle={'Select a trainer'} 
                rightText={'swipe'}
                 />
            </View>

            <InputDivider />

            <View style={customStyles.buttonContainer}>
                    <DefaultButton
                        label={'Almost There!'}
                        onPress={handleStartWorkout}
                    />
            </View>

            <InputDivider />


            </ScrollView>
        </SafeAreaView>
    );
}
