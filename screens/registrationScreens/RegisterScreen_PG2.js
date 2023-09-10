import React from 'react';

import { View, Text, SafeAreaView } from 'react-native'
import { styles } from '../styles';

import CheckBox from '../../components/CheckBox';
import CustomHeader from '../../components/CustomHeader';
import DefaultButton from '../../components/DefaultButton';
import InputField from '../../components/InputField';

{/* Create the Register Screen: Page 2 */}
export default function RegisterScreen_PG2({navigation}) {
    
    {/* Define the Labels for the CheckBox (es) Component, First Column*/}
    const tickBoxLabelsColOne = [
        "Lose Fat",
        "Gain Muscle",
        "Recomposition",
        "Build endurance",
        "Pre & post-natal training",
    ];

    {/* Define the Labels for the CheckBox (es) Component, Second Column */}
    const tickBoxLabelsColTwo = [
        "Sports/Rehab Specific",
        "Create a healthier life",
        "Build strength",
        "Build flexibility"
    ];

    {/* Render the Page. */}
    return (
        <SafeAreaView style={styles.container}>

            {/* Area 1: Logo */}
            <CustomHeader showLogo={true}/>

            {/* Area 2: Body */}
            <View style={[styles.bodyContent, {gap: 20}]}>

                {/* Area 2a: The first half area of the Body. */}
                <View style={[styles.noFlexContainer]}>

                    {/* Area 2aa: The first half area of containerOne */}
                    <View>
                        <Text style={styles.header}>
                            Set up your Profile!
                        </Text>

                        <Text style={styles.description}>
                            Tell us about yourself to help us guide your fitness journey!
                        </Text>
                    </View>

                    {/* Area 2ab: The first half area of containerOne */}
                    <View style={[styles.contentRow, {gap: 10}]}>
                        <View style={styles.flexItem}>
                            <InputField label={'First Name'}/>
                        </View>

                        <View style={styles.flexItem}>
                            <InputField label={'Last Name'}/>
                        </View>
                    </View>
                </View>

                {/* Area 2b: The second half area of the Body. */}
                <View style={[styles.oneFlexContainer, {gap: 20}]}>

                    {/* Area 2ba: The first half area of containerTwo */}
                    <View>
                        <Text style={styles.subheader}>
                            What is your Fitness Goal?
                        </Text>
                    </View>

                    {/* Area 2ba: The second half area of containerTwo */}
                    <View style={{flex: 1}}>
                        <View style={[
                            styles.contentRow, 
                            {flex: 1, gap: 10}]}>
                            
                            <View style={[styles.flexItem, {justifyContent: 'flex-start', gap: 30}]}>
                                {tickBoxLabelsColOne.map((label, index) => (
                                    <CheckBox key={index} label={label} /> ))}
                            </View>

                            <View style={[styles.flexItem, {justifyContent: 'flex-start', gap: 30}]}>
                                {tickBoxLabelsColTwo.map((label, index) => (
                                    <CheckBox key={index} label={label} /> ))}
                            </View>
                        </View>
                    </View>
                </View>

            </View>

            {/* Area 3: Bottom */}
            <View style={styles.endContent}>
                <DefaultButton
                    onPress={() => navigation.navigate('RegisterScreen_PG3')} 
                    navigation={navigation} 
                    navigateTo={'RegisterScreen_PG3'}
                    label={'One More!'} />
            </View>
            
        </SafeAreaView>
  )
}