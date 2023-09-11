import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen_PG1 from '../screens/registrationScreens/RegisterScreen_PG1';
import RegisterScreen_PG2 from '../screens/registrationScreens/RegisterScreen_PG2';
import RegisterScreen_PG3 from '../screens/registrationScreens/RegisterScreen_PG3';
import HomeScreen from '../screens/HomeScreen';
import MealRegistrationPage from '../screens/registrationScreens/MealRegistrationPage';
import MealDashboard from '../screens/mealScreens/MealDashboard';
import CurrentMealPlanPage from '../screens/mealScreens/CurrentMealPlanPage';
import MealInformationPage from '../screens/mealScreens/MealInformationPage';
import TrainingDashboard from '../screens/trainingScreens/TrainingDashboard';
import CustomTab from '../components/CustomTab';

const Stack = createNativeStackNavigator(); 

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
            <Stack.Screen name="RegisterScreen_PG1" options={{headerShown: false}} component={RegisterScreen_PG1} /> 
            <Stack.Screen name="RegisterScreen_PG2" options={{headerShown: false}} component={RegisterScreen_PG2} />  
            <Stack.Screen name="RegisterScreen_PG3" options={{headerShown: false}} component={RegisterScreen_PG3} />     
            <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LoginScreen} />
            <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
            <Stack.Screen name="MealRegistrationPage" options={{headerShown: false}} component={MealRegistrationPage} />
            <Stack.Screen name="MealDashboard" options={{headerShown: false}} component={MealDashboard} />
            <Stack.Screen name="CurrentMealPlanPage" options={{headerShown: false}} component={CurrentMealPlanPage} />
            <Stack.Screen name="MealInformationPage" options={{headerShown: false}} component={MealInformationPage} />
            <Stack.Screen name="TrainingDashboard" options={{headerShown: false}} component={TrainingDashboard} />
            <Stack.Screen name="CustomTab" component={CustomTab} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}