import React from 'react';

import { View, SafeAreaView, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

import DefaultButton from '../components/DefaultButton';

{/* Create the Welcome Screen/Hero Page */}
export default function WelcomeScreen({ navigation }) {

  {/* Render the Page. */}
  return (

    <LinearGradient colors={['#0F0F0F', '#FF65C3']} style={welcomePageStyles.gradient}>

      {/* Create a Gradient Linear Background for the Page. */}
      <SafeAreaView style={styles.container}>

        {/* Add a Large Image of the Logo */}
        <View style={welcomePageStyles.logoArea}>
          <Image
            source={require("../assets/bst-icon.png")}
            style={welcomePageStyles.logoLarge}
          />
        </View>

        {/* Add the Button Options in the Page: Log in and Sign Up */}
        <View style={styles.endContent}>
          <DefaultButton 
            label={'Register'}
            onPress={() => navigation.navigate('RegisterScreen_PG1')}
            navigation={navigation}
            navigateTo={'RegisterScreen_PG1'}
            btnColor={'#FF65C3'}
            btnColorBorder={'#FF65C3'} />

          <DefaultButton 
            label={'Log In'}
            onPress={() => navigation.navigate('LoginScreen')}
            navigation={navigation}
            navigateTo={'LoginScreen'}
            btnColor={'transparent'}
            btnColorBorder={'white'} />
        </View>

      </SafeAreaView>

    </LinearGradient>

  )
}

{/* Create styling that is unique to the Page, if needed. */}
const welcomePageStyles = StyleSheet.create({

  gradient: {
    flex: 1,
    height: '50%',
  },

  logoArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoLarge: {
    width: 333,
    height: 146,
  },

})