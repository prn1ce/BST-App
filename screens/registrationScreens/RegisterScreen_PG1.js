import React, {useState} from 'react';

import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../styles';

import CustomHeader from '../../components/CustomHeader';
import DefaultButton from '../../components/DefaultButton';
import SelectionButton from '../../components/SelectionButton';

{/* Create the Register Screen: Page 1 */}
export default function RegisterScreen_PG1({ navigation }) {

  {/* NOT IMPLEMENTED: Add a State to show which Role is being Click */}
  const [selectedRole, setSelectedRole] = useState(null);

  {/* Render the Page. */}
  return (
    <SafeAreaView style={styles.container}>

        {/* Area 1: Logo */}
        <CustomHeader showLogo={true}/>

        {/* Area 2: Body */}
        <View style={[styles.bodyContent, {gap: 15}]}>

          <View>
            {/* Header Text */}
            <Text style={styles.header}>
              Who are you?
            </Text>

            {/* Description Text */}
            <Text style={styles.description}>
              Select one of the options to sign-up
            </Text>
          </View>

          <View style={{gap: 10}}>
            <SelectionButton label = 'Personal Trainer' />
            <SelectionButton label = 'Client' />
          </View>
          
        </View>

        {/* Area 3: Bottom */}
        <View style={styles.endContent}>
          <DefaultButton 
            onPress={() => navigation.navigate('RegisterScreen_PG2')} 
            navigation={navigation} 
            navigateTo={'RegisterScreen_PG2'}
            label={'Almost There!'} />
        </View>

    </SafeAreaView>

  )
};