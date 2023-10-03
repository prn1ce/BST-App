import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

{/* Import the AuthStack */}
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen_PG1 from '../screens/registrationScreens/RegisterScreen_PG1';
import RegisterScreen_PG2 from '../screens/registrationScreens/RegisterScreen_PG2';
import RegisterScreen_PG3 from '../screens/registrationScreens/RegisterScreen_PG3';

{/* Import the Main Pages */}
import HomeScreen from '../screens/HomeScreen';

{/* Import the Nutrition/Meal Pages */}
import MealRegistrationPage from '../screens/registrationScreens/MealRegistrationPage';
import MealDashboard from '../screens/mealScreens/MealDashboard';
import CurrentMealPlanPage from '../screens/mealScreens/CurrentMealPlanPage';
import MealInformationPage from '../screens/mealScreens/MealInformationPage';

{/* Import the Training Pages */}
import TrainingDashboard from '../screens/trainingScreens/TrainingDashboard';
import TrainingSession from '../screens/trainingScreens/TrainingSession';

/* Create the Navigator */
const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();

/* Create the Authentication Stack. */
const AuthStack = () => (
  <Stack.Navigator initialRouteName='Welcome'>
    <Stack.Screen name='Welcome' options={{headerShown: false}} component={WelcomeScreen} />
    <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LoginScreen} />  
    <Stack.Screen name="RegisterScreen_PG1" options={{headerShown: false}} component={RegisterScreen_PG1} /> 
    <Stack.Screen name="RegisterScreen_PG2" options={{headerShown: false}} component={RegisterScreen_PG2} />  
    <Stack.Screen name="RegisterScreen_PG3" options={{headerShown: false}} component={RegisterScreen_PG3} />     
  </Stack.Navigator>
)

/* Create the Training Stack. */
const TrainingStack = () => (
  <Stack.Navigator initialRouteName='TrainingDashboard'>
    <Stack.Screen name="TrainingDashboard" options={{headerShown: false}} component={TrainingDashboard} />
    <Stack.Screen name="TrainingSession" options={{headerShown: false}} component={TrainingSession} />
  </Stack.Navigator>
)

/* Create the Nutrition Stack. */
const NutritionStack = () => (
  <Stack.Navigator initialRouteName='MealDashboard'>
    <Stack.Screen name="MealRegistrationPage" options={{headerShown: false}} component={MealRegistrationPage} />
    <Stack.Screen name="MealDashboard" options={{headerShown: false}} component={MealDashboard} />
    <Stack.Screen name="CurrentMealPlanPage" options={{headerShown: false}} component={CurrentMealPlanPage} />
    <Stack.Screen name="MealInformationPage" options={{headerShown: false}} component={MealInformationPage} />
  </Stack.Navigator>
)

/* Create the Main Tabs and its Navigation. */
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FF65C3',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: {
        height: 60,
        position: 'absolute',
        backgroundColor: '#272727',
        borderColor: 'white',
        alignItems: 'center', 
        justifyContent: 'center', 
      }
    }}
  >
    <Tab.Screen 
      name="HomeScreen" 
      options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <FontAwesome name="home" color={color} size={30} style={{ marginTop: 15 }} />
        )  
      }} 
      component={HomeScreen} />

    <Tab.Screen 
      name="Training" 
      options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="dumbbell" color={color} size={23} style={{ marginTop: 15 }} />
        )
        }} 
      component={TrainingStack} />

    <Tab.Screen 
      name="Nutrition" 
      options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="food-apple" color={color} size={26} style={{ marginTop: 14 }} />
        )
        }} 
      component={NutritionStack} />
  </Tab.Navigator>
)

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Auth" options={{headerShown: false}} component={AuthStack} />
      <Stack.Screen name="Main" options={{headerShown: false}} component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppNavigator;