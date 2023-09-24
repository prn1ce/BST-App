import React from 'react';

import { View, SafeAreaView} from 'react-native'
import { styles } from './styles';

import DefaultButton from '../components/DefaultButton';
import InputField from '../components/InputField';
import CustomHeader from '../components/CustomHeader';

{/* Create the Register Screen: Page 1 */}
export default function LoginScreen({ navigation }) {

  const handleLogin = () => {
    // You can put any login logic here, and navigate afterward if needed.
    // For this example, we're simply navigating to the "Home" screen.
    navigation.navigate('Main', { screen: 'Home' });
  };

  {/* Render the Page. */}
  return (
    <SafeAreaView style={styles.container}>

      {/* Area 1: Logo */}
      <CustomHeader showLogo={true}/>

      {/* Area 2: Body */}
      <View style={[styles.bodyContent, {gap: 20}]}>
          <InputField label={"Email"} fontSize={14} />
          <InputField label={"Password"} fontSize={14}/>
      </View>

      {/* Area 3: Bottom */}
      <View style={styles.endContent}>
        <DefaultButton 
        onPress={handleLogin}
        stackName={'Main'}
        navigation={navigation}
        navigateTo={'HomeScreen'} 
        label={'Log In'}
        smallButton={false}
        />
      </View>

    </SafeAreaView>
  )
}