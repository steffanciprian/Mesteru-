import React from 'react';
import {Button, Dimensions, StyleSheet, View} from 'react-native';
const MyButton = props => {
    return (
        <View style={styles.buttonContainer}>
            <Button
                title={props.title}
                onPress={props.onPressAction}
                color={props.color}
                style={styles.buttonStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:Dimensions.get('window').width*0.8,
        height:Dimensions.get('window').width*0.1,
    },
    buttonStyle:{
        height:20,
    }
});
export default MyButton;
