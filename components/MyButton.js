import React from 'react';
import {Button, Dimensions, StyleSheet, View} from 'react-native';
const MyButton = props => {
    return (
        <View style={styles.buttonContainer}>
            <Button
                title={props.title}
                onPress={props.onPressAction}
                color={props.color}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:Dimensions.get('window').width*0.5,
        height:Dimensions.get('window').width*0.5 *0.2,
    }
});
export default MyButton;
