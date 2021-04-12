import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const MyInputForm = props => {
    return (
        <View>
            <TextInput
                placeholder={props.placeholderText}
                id={props.id}
                label={props.label}
                keyboard-type={props.keyboardType}
                autoCapitalize={props.autoCapitalizeForm}
                errorText={props.errorMessageText}
                onChangeText={props.onTouchTextInput}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({});
export default MyInputForm;
