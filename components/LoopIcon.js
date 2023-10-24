import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoopIcon() {
    return (
        <View style={styles.container}>
            <Icon name="refresh" size={30} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        
    },
});
