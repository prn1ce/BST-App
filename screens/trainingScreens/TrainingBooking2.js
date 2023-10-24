import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, ScrollView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

import CustomHeader from '../../components/CustomHeader';
import DefaultButton from '../../components/DefaultButton';
import CheckBox from '../../components/CheckBox';

export default function CalendarTest() {
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');
  const [open, setOpen] = useState(false); // opens and closes modal
  const [date, setDate] = useState('24/10/2023'); // date variable

  const gap = 10;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 20,
    },
    description: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      marginBottom: 20,
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    timeText: {
      fontSize: 16,
      color: 'white',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      width: '90%',
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    openButton: {
      backgroundColor: 'black',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    openButtonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    bodyContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '45%', // 2 columns with a small gap
      marginBottom: 10,
    },
    Button: {
        color: "#FF65C3",
        width: 100,
        alignItems: 'center',
    }
  });

  const times = [
    { label: '7:00AM', key: 'time1' },
    { label: '9:00AM', key: 'time2' },
    { label: '12:00PM', key: 'time3' },
    { label: '3:00PM', key: 'time4' },
  ];

  function handleOnPress() {
    setOpen(!open);
  }

  function handleChange(propDate) {
    setDate(propDate);
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={'Trainer Booking'} showLogo={false} showButton={true} />

      <ScrollView>
        <View>
          <Text style={styles.header}>
            Book a personal training session at our Boss Squad Training facility!
          </Text>

          <Text style={styles.description}>
            Now select your preferred date and time!
          </Text>
        </View>
        

        <View style={styles.container}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode='calendar'
                  minimumDate={startDate}
                  selected={date}
                  onDateChanged={handleChange}
                />
              </View>
            </View>
          
          <StatusBar style="auto" />
        </View>

        <View style={styles.bodyContent}>
            {times.map((time) => (
              <View key={time.key} style={styles.checkboxContainer}>
                <CheckBox label={time.label} />
              </View>
            ))}
        </View>

       

        <DefaultButton
          label={'Book Session'}
        />

<View style={[styles.bodyContent, { gap: 20, marginVertical: 20, paddingBottom: 70 }]}></View>

      </ScrollView>
    </SafeAreaView>
  );
}
