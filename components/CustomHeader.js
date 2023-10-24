import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { styles } from '../screens/styles';
import { useNavigation } from '@react-navigation/native';

import Divider from './Divider';
import BackButton from './BackButton';

export default function CustomHeader({ title, showLogo, showButton, titleAlignment, titleSubheader}) {
    const navigation = useNavigation(); // Get the navigation object from the context

    const handleBackButtonPress = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    return (
        <SafeAreaView>
        {showLogo ? (
            <View style={customerHeaderStyles.logoContainer}>
            <Image
                source={require("../assets/bst-icon.png")}
                style={customerHeaderStyles.logoSize}
            />
            </View>
        ) : (
            <View style={[customerHeaderStyles.header]}>

               
                <View style={{flexDirection: 'row', gap: 10}}>
                    {showButton ? (
                        <BackButton onPress={handleBackButtonPress} />
                    ) : null}

                    <View style={{alignItems: titleAlignment, justifyContent: 'center', paddingBottom: 20}}>
                        <Text style={[customerHeaderStyles.title]}>{title}</Text>

                        { titleSubheader ? (
                            <Text style={styles.subheader}>{titleSubheader}</Text>
                        ) : ( null )}

                    </View> 
                </View>

                <Divider />

            </View>
        )}
        </SafeAreaView>
    )
}

CustomHeader.defaultProps = {
    titleAlignment: 'center'
}

const customerHeaderStyles = StyleSheet.create({
    header: {
        marginTop: 50,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    logoContainer: {
        flex: 0,
        paddingTop: 40,
        alignItems: 'center',
        width: Dimensions.get('window').width - 40,
        marginBottom: 20,
    },
    logoSize: {
        width: 208,
        height: 91,
    },
    btnContainer: {
        alignItems: 'flex-start'
    }
})
