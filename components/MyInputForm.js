import React from 'react';
import {TextInput, StyleSheet, View, Dimensions} from 'react-native';

const MyInputForm = props => {
    return (
        <View style={styles.inputTextContainer}>
            <TextInput
                placeholder={props.placeholderText}
                id={props.id}
                label={props.label}
                keyboard-type={props.keyboardType}
                autoCapitalize={props.autoCapitalizeForm}
                errorText={props.errorMessageText}
                onChangeText={props.onTouchTextInput}
                secureTextEntry={props.secureTextEntry}
                style={{textAlign: 'center'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputTextContainer: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5 * 0.2,
        textAlign: 'center',
        justifyContent: 'center',
    }
});
export default MyInputForm;
