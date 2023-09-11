import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import CustomTab from './components/CustomTab';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <AppNavigation />
  );
}