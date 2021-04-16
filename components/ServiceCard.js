import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from "../constants/Colors";

const ServiceCard = props => {
    return (
        <TouchableOpacity
            style={styles.serviceCard}
            onPress={props.onPress}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: props.uri}}
                        style={styles.imageStyle}/>
                </View>
                <Text>{props.title} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    serviceCard: {
        margin: 15,
        borderWidth: 1,
        height: Dimensions.get('window').height * 0.3,
        width: '100%',
        borderRadius: 5,
        borderColor: Colors.secondary,

    },
    container: {
        alignItems: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: '99%',
        height: '90%',

    }
})

export default ServiceCard;
