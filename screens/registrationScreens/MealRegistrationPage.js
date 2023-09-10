import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { styles } from '../styles';

import CustomHeader from '../../components/CustomHeader';
import CheckBox from '../../components/CheckBox';
import DefaultButton from '../../components/DefaultButton';

export default function MealRegistrationPage({ navigation }) {

    const mealsOptionsColOne = [
        'Breakfast',
        'Dinner',
        'Snack 2',
    ];

    const mealsOptionsColTwo = [
        'Lunch',
        'Snack 1',
        'Snack 3',
    ];

    const foodPrefColOne = [
        'Pescetarian',
        'Wheat Free',
        'Low GI',
        'Vegetarian'
    ];

    const foodPrefColTwo = [
        'Gluten Free',
        'Dairy Free',
        'Candida Friendly',
        'Vegan'
    ];

    {/* Render the Page. */}
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>

                {/* Area 1: Logo */}
                <CustomHeader showLogo={true}/>

                {/* Area 2: Body */}
                <View style={[styles.bodyContent, {gap: 20}]}>

                    {/* Area 2a: The first half area of the Body. */}
                    <View style={[styles.noFlexContainer]}>
                        <View>
                            <Text style={styles.header}>
                                Set up your nutrition profile!
                            </Text>

                            <Text style={styles.description}>
                                Tell us about your dietary/nutrition preferences!
                            </Text>
                        </View>
                    </View>
          
                    {/* Area 2b: The second half area of the Body. */}
                    <View style={[styles.oneFlexContainer, {gap: 20}]}>
                        <View style={{flex: 1, gap: 20}}>

                            {/* Content: Subheader */}
                            <View>
                                <Text style={styles.subheader}>
                                    Pick your meals (Select All)
                                </Text>
                            </View>
                            
                            {/* Content: Values */}
                            <View style={[styles.contentRow, {gap: 10}]}>
                                
                                <View style={[styles.flexItem, {justifyContent: 'flex-start', gap: 30}]}>
                                    {mealsOptionsColOne.map((label, index) => (
                                        <CheckBox key={index} label={label} /> ))}
                                </View>

                                <View style={[styles.flexItem, {justifyContent: 'flex-start', gap: 30}]}>
                                    {mealsOptionsColTwo.map((label, index) => (
                                        <CheckBox key={index} label={label} /> ))}
                                </View>
                            </View>
                            
                            {/* Content: Subheader */}
                            <View>
                                <Text style={styles.subheader}>
                                    Food Preferences (Select All) 
                                </Text>
                            </View>

                            {/* Content: Subheader */}
                            <View style={[styles.contentRow, {gap: 10}]}>
                                
                                <View style={[styles.flexItem, {justifyContent: 'flex-start', gap: 30}]}>
                                    {foodPrefColOne.map((label, index) => (
                                        <CheckBox key={index} label={label} /> ))}
                                </View>

                                <View style={[styles.flexItem, {justifyContent: 'flex-start', gap: 30}]}>
                                    {foodPrefColTwo.map((label, index) => (
                                        <CheckBox key={index} label={label} /> ))}
                                </View>
                            </View>
                        </View>
                    </View>                   
                </View>

                {/* Area 3: Bottom */}
                <View style={styles.endContent}>
                    <DefaultButton
                        onPress={() => navigation.navigate('MealDashboard')} 
                        navigation={navigation} 
                        navigateTo={'MealDashboard'}
                        label={"You're all Set!"} />
                </View>
            </View>
        </SafeAreaView>
    )
}