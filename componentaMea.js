import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import * as authActions from './store/actions/auth';
import MyButton from "./components/MyButton";
import MyInputForm from "./components/MyInputForm";

const MyComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const signupHandler = () => {
        dispatch(authActions.signUp(email, password));
    }

    return (
        <View style={styles.container}>
            <MyButton title='Sign up'
                      onPressAction={() => signupHandler(email, password)}/>
            <MyInputForm
                placeholderText="email"
                id="email"
                label='E-mail'
                keyboardType="email-address"
                autoCapitalizeForm="none"
                errorMessageText="please enter a valid email address"
                onTouchTextInput={text => setEmail(text)}
            />
            <MyInputForm
                placeholderText="password"
                id="password"
                label="Password"
                keyboardType="default"
                secureTextEntry
                minLenght={5}
                autoCapitalizeForm="none"
                errorMessageText="Please enter a valid password"
                onTouchTextInput={text => setPassword(text)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default MyComponent;
