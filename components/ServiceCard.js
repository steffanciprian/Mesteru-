import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const ServiceCard = props => {
    return (
        <TouchableOpacity
            style={styles.serviceCard}
           >
            <View style={styles.container}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    serviceCard: {
            flex: 1,
            margin: 15,
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
        backgroundColor:'#3Eb489',
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            borderRadius: 20,

        }
})

export default ServiceCard;
