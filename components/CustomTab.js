import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import TrainingDashboard from '../screens/trainingScreens/TrainingDashboard';

const Tab = createBottomTabNavigator();

export default function CustomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="TrainingDashboard" component={TrainingDashboard} />
        </Tab.Navigator>
    )
}
