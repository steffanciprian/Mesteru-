import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ServiceDetailScreen = props => {
    return (
            <View style={styles.container}>
                <Text>{props.title}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 20,

    }
})
export default ServiceDetailScreen;
