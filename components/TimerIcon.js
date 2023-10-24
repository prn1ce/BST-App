import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TimerIcon() {
    return (
        <View style={styles.container}>
            <Icon name="hourglass" size={30} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    
    },
});
