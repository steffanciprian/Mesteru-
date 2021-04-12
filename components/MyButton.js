import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const MyButton = props => {
    return (
        <View>
            <Button
                title={props.title}
                onPress={props.onPressAction}
            />
        </View>
    )
}

const styles = StyleSheet.create({});
export default MyButton;
