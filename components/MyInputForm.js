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
                style={styles.inputText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputTextContainer: {
        width:Dimensions.get('window').width*0.8,
        height:Dimensions.get('window').width*0.5 *0.2,
        textAlign: 'center',
        justifyContent: 'center',
    },
    inputText:{
        textAlign:'center',
        borderWidth:1,
        borderColor:'grey',
        borderRadius:8,
        height: 40,
    }
});
export default MyInputForm;
