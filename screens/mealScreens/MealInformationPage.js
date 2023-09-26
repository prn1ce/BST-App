import React, { useState } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    SafeAreaView, 
    Dimensions, 
    Image, 
    StyleSheet, 
    } from 'react-native'
import { styles } from '../styles';
import CustomHeader from '../../components/CustomHeader';
import Divider from '../../components/Divider';
import DefaultButton from '../../components/DefaultButton';
import PopUp from '../../components/PopUp';

{/* Create the Meal Information Page */}
export default function MealInformationPage() {

    {/* Create the Variables for the Pop-Ups */}
    const [modalVisible, setModalVisible] = useState(false);
    const showPopUp = () => setModalVisible(true);

    {/* Render the Page. */}
    return (
        <SafeAreaView style={styles.container}>

            {/* Add the Header */}
            <CustomHeader title={'Singaporean Noodles'} showLogo={false} showButton={true}/>

            {/* Body Content */}
            <ScrollView>

                <View style={[styles.bodyContent, {gap: 20, marginVertical: 20, paddingBottom: 50}]}>

                    {/* Add the Header */}
                    <View>
                        <Text style={styles.header}>Your Lunch for Today!</Text>
                    </View>

                    {/* Add the Image of the Meal */}
                    <Image 
                            source={require('../../assets/mealScreensImages/currentMealPlan/noodles.jpg')}
                            style={mealInfoStyles.imageStyle}
                        />

                    {/* Add the Title of the Meal */}
                    <View style={{ flexDirection: 'column', alignItems: 'center', gap: 10}}>
                        <Text style={[styles.header]}>Singaporean Noodles</Text>
                        <Divider />
                    </View>

                    {/* Add the Description and the Macros of the Meal */}
                    <View>
                        <View style={{flexDirection: 'column', gap: 20}}>

                            {/* Meal Description */}
                            <View style={{flexDirection: 'row'}}>

                                <View style={{flex: 1}}>
                                    <Text style={styles.pagesSubheading}>Description</Text>
                                </View>

                                <View style={{flex: 2}}>
                                    <Text style={styles.bodyText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. 
                                    </Text>
                                </View>
                            
                            </View>

                            {/* Meal Macros Description */}
                            <View style={{flexDirection: 'row'}}>

                                <View style={{flex: 1}}>
                                    <Text style={styles.pagesSubheading}>Macros</Text>
                                </View>

                                <View style={{flex: 2}}>
                                    <Text style={styles.bodyText}>
                                    Scelerisque eu ultrices vitae auctor eu augue ut. Erat velit scelerisque in dictum non consectetur a erat. 
                                    Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Bibendum ut tristique et egestas quis. 
                                    Dui sapien eget mi proin sed libero. Accumsan lacus vel facilisis volutpat est velit egestas dui id.
                                    </Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View>
                        <DefaultButton
                            label={'View Recipe'}
                            onPress={showPopUp} 
                        />
                    </View>

                </View>

            </ScrollView>

            {/* Render the Modal */}
            <PopUp visible={modalVisible} onClose={() => setModalVisible(false)}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{gap: 20}}>
                        <View>
                            <Text style={[styles.header, {color: 'black'}]}>Ingredients</Text>
                            <Divider length={'100%'}/>
                        </View>

                        <Text>
                            <Text style={[styles.pagesSubheading, {color: 'black'}]}>Sauce</Text>{"\n"}
                            &#8226; 2 tbsp soy sauce (Note 1) {"\n"}
                            &#8226; 2 tbsp Chinese cooking wine (Note 2) {"\n"}
                            &#8226; 2 1/2 tsp curry powder (hot or ordinary, Note 3) {"\n"}
                            &#8226; 1/2 tsp sugar {"\n"}
                            &#8226; 1/2 tsp white pepper (black also ok)
                        </Text>
                        <Divider length={'100%'}/>
                        <Text>
                            <Text style={[styles.pagesSubheading, {color: 'black'}]}>Stir Fry</Text>{"\n"}
                            &#8226; 100g / 3 oz dried rice vermicelli noodles (Note 4) {"\n"}
                            &#8226; 2 tbsp peanut oil, separated {"\n"}
                            &#8226; 8-10 medium raw shrimp / prawns, shelled and deveined {"\n"}
                            &#8226; 2 eggs, beaten {"\n"}
                            &#8226; 1/2 medium onion, thinly sliced (yellow, brown, or white) {"\n"}
                            &#8226; 4 garlic cloves, minced {"\n"}
                            &#8226; 1 tsp ginger, freshly grated {"\n"}
                            &#8226; 1/2 lb / 250g Chinese barbecue pork (Char Siu), thinly sliced (Note 5) {"\n"}
                            &#8226; 1 cup red capsicum / bell pepper {"\n"}
                            &#8226; 2 tsp thinly sliced hot green pepper (adjust to taste, optional)
                        </Text>
                        <Divider length={'100%'}/>
                        <Text>
                            <Text style={[styles.pagesSubheading, {color: 'black'}]}>Instructions</Text>{"\n"} {'\n'}
                            1. Combine the Sauce ingredients in a small bowl and mix.{'\n'} {'\n'}
                            2. Place rice vermicelli noodles in a large bowl filled with boiled water and soak as per packet instructions. Drain and set aside.{'\n'} {'\n'}
                            3. Heat 1 tbsp of oil in a wok or heavy-based frypan over medium heat. Add the shrimp/prawns, cook until just cooked - about 2 1/2 to 3 minutes. Remove and set aside.{'\n'} {'\n'}
                            4. Add the egg and spread it out to make a thin omelette. Once set, use a spatula to roll it up, remove it from the wok, and slice (while still rolled up).{'\n'} {'\n'}
                            5. Return the wok to medium heat and add the remaining 1 tbsp of oil. Add the garlic, ginger, and onion, cook for 2 minutes until the onion is slightly softened.{'\n'} {'\n'}
                            6. Add capsicum and cook for 1 minute.{'\n'} {'\n'}
                            7. Add noodles and Sauce, give it a few tosses. Then add the egg, pork, shrimp/prawns, chilies (if using). Toss until the sauce coats all the noodles and everything is heated through - about 1 to 2 minutes.{'\n'} {'\n'}
                            8. Serve immediately.{'\n'} 
                        </Text>
                    </View>
                </View>
            </PopUp>

        </SafeAreaView>
    )
}

{/* Create Reusable Constants for the Styling. */}
const defaultWidth = Dimensions.get('window').width - 40;
const imgHeight = Dimensions.get('window').width / 1.5;

{/* Create the Styling for MealInformationPage.js */}
const mealInfoStyles = StyleSheet.create({

    imageStyle: {
        width: defaultWidth,
        height: imgHeight,
        resizeMode: 'cover',
        borderRadius: 5
    },
});