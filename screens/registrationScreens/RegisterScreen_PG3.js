import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { styles } from '../styles';

import CustomHeader from '../../components/CustomHeader';
import InputField from '../../components/InputField';
import CheckBox from '../../components/CheckBox';
import DefaultButton from '../../components/DefaultButton';

export default function RegisterScreen_PG3({ navigation }) {

    {/* Define the Gap between Headers and Element  */}
    const gap = 10;

    {/* Render the Page. */}
    return (

        <SafeAreaView style={styles.container}>

            {/* Create ScrollView due to the Long List of Items in the Page - Allow Scrolling */}
            <ScrollView>   
                
                {/* The Content */}
                <View style={styles.container}>

                    {/* Area 1: Logo */}
                    <CustomHeader showLogo={true}/>

                    {/* Area 2: Body */}
                    <View style={[styles.bodyContent, {gap: 50}]}>

                        {/* Area 2a: The first area of the Body - Header */}
                        <View style={[styles.noFlexContainer]}>

                            {/* Area 2aa: The first half area of containerOne */}
                            <View>
                                <Text style={styles.header}>
                                    Set up your Profile!
                                </Text>

                                <Text style={styles.description}>
                                    Tell us more about your desired journey before moving on!
                                </Text>
                            </View>


                        </View>

                        {/* Area 2b: The second area of the Body - Contains the Content */}
                        <View style={[styles.oneFlexContainer, {gap: 50}]}>

                            {/* Area 2c: Contains the Step Goal Content */}
                            <View style={{gap: gap}}>
                                <View>
                                    <Text style={styles.subheader}>
                                        What is your Step Goal per day?
                                    </Text>
                                </View>

                                <View style={{flex: 1}}>
                                    <View style={[styles.contentRow, {flex: 1, gap: 10}]}>
                                        <View style={[styles.flexItem,  {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'0 - 2,500'} />
                                            <CheckBox label={'5,000 - 7,500'} />
                                        </View>

                                        <View style={[styles.flexItem, {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'2,500 - 5,000'} />
                                            <CheckBox label={'7,500 - 10,000'} />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/* Area 2d: Contains the No. Days Workout Content */}
                            <View style={{gap: gap}}>
                                <InputField label={"How many days do you workout per week?"} fontSize={14} />
                            </View>

                            {/* Area 2e: Contains the Daily Activity Content */}
                            <View style={{gap: gap}}>
                                <View>
                                    <Text style={styles.subheader}>
                                        My daily activity is:
                                    </Text>
                                </View>

                                <View style={{flex: 1}}>
                                    <View style={[styles.contentRow, {flex: 1, gap: 10}]}>
                                        <View style={[styles.flexItem,  {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'Sedentary'} />
                                            <CheckBox label={'Moderately Active'} />
                                        </View>

                                        <View style={[styles.flexItem,  {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'Lightly Active'} />
                                            <CheckBox label={'Very Active'} />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/* Area 2f: Contains the Active Lifestyle Content */}
                            <View style={{gap: gap}}>
                                <View>
                                    <Text style={styles.subheader}>
                                        I have led an active lifestyle through gym sport or similar for:
                                    </Text>
                                </View>

                                <View style={{flex: 1}}>
                                    <View style={[styles.contentRow, {flex: 1, gap: 10}]}>
                                        <View style={[styles.flexItem,  {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'1 - 2 years'} />
                                            <CheckBox label={'3 - 4 years'} />
                                            <CheckBox label={'I have a highly active job'} />
                                        </View>

                                        <View style={[styles.flexItem,  {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'2 - 3 years'} />
                                            <CheckBox label={'I train irregularly'} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            
                            {/* Area 2g: Contains the Equipment Content */}
                            <View style={{gap: gap}}>
                                <View>
                                    <Text style={styles.subheader}>
                                        Where will you have the ability to train and access the equipment you need?
                                    </Text>
                                </View>

                                <View style={{flex: 1}}>
                                    <View style={[styles.contentRow, {flex: 1, gap: 10}]}>
                                        <View style={[styles.flexItem,  {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'Commercial gym'} />
                                            <CheckBox label={'Home - minimal equipment'} />
                                        </View>

                                        <View style={[styles.flexItem,  {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'Home gym'} />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/* Area 2h: Contains the Gender Content */}
                            <View style={{gap: gap}}>
                                <View>
                                    <Text style={styles.subheader}>
                                        Gender
                                    </Text>
                                </View>

                                <View style={{flex: 1}}>
                                    <View style={[styles.contentRow, {flex: 1, gap: 10}]}>
                                        <View style={[styles.flexItem,  {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'Male'} />
                                            <CheckBox label={'Female'} />
                                        </View>

                                        <View style={[styles.flexItem,  {justifyContent: 'flex-start', gap: 30}]}>
                                            <CheckBox label={'Non-binary'} />
                                            <CheckBox label={'Other'} />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/* Area 2i: Contains the Stats Content */}
                            <View style={{paddingBottom: 40}}>
                                <View style={[styles.contentRow, {gap: 10}]}>
                                    <View style={styles.flexItem}>
                                        <InputField label={'Age'} fontSize={14}/>
                                    </View>

                                    <View style={styles.flexItem}>
                                        <InputField label={'Height'} fontSize={14}/>
                                    </View>

                                    <View style={styles.flexItem}>
                                        <InputField label={'Weight'} fontSize={14}/>
                                    </View>
                                </View>
                            </View>            
                        </View>
                    </View>

                    {/* Area 3: Bottom */}
                    <View style={styles.endContent}>
                        <DefaultButton
                            onPress={() => navigation.navigate('TrainingDashboard')} 
                            navigation={navigation} 
                            navigateTo={'TrainingDashboard'}
                            label={'Start Training!'} />
                    </View>                    

                </View>

            </ScrollView>
        </SafeAreaView>

    )       
}