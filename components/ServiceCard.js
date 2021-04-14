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
                        source={{
                            uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/naildesign-1600704777.jpg'
                        }}
                        style={styles.imageStyle}/>
                </View>

                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    serviceCard: {
        margin: 15,
        justifyContent: 'center',
        borderWidth: 1,
        height: Dimensions.get('window').height * 0.3,
        width: Dimensions.get('window').width * 0.8,
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
    imageContainer:{
        width:'99%',
        height:'90%',
    }
})

export default ServiceCard;
