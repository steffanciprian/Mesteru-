import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ServiceDetailScreen = props => {
    const serviciuId = props.navigation.getParam('serviciuId');
    const serviciuTitle = props.navigation.getParam('serviciuTitle');
    const serviciuUri = props.navigation.getParam('serviciuUri');
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Text>{serviciuTitle}</Text>
                <Image source={{
                    uri: serviciuUri
                }}
                       style={styles.imageStyle}/>
            </View>

        </View>
    )
}
// ServiceDetailScreen.navigationOptions = navigationData => {
//     const serviciuId=navigationData.navigation.getParam('serviciuId');
//     const serviciuTitle=navigationData.navigation.getParam('serviciuTitle');
//     const serviciuUri=navigationData.navigation.getParam('serviciuUri');
// }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 20,
    },
    imageStyle: {
        width: '50%',
        height: '50%',

    },
    imageContainer: {
        width: '99%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default ServiceDetailScreen;
