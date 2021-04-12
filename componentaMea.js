import React, {useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {useDispatch} from 'react-redux';
import * as authActions from './store/actions/auth';
import MyButton from "./components/MyButton";
import MyInputForm from "./components/MyInputForm";
import Colors from "./components/Colors";

const MyComponent = () => {

    const dispatch = useDispatch();
    const signUpWithEmailAndPassword = () => {
        dispatch(authActions.signUpWithEmailAndPassword(email, password));
    }
    const logInWithEmailAndPassword = () => {
        dispatch(authActions.loginWithEmailAndPassword(email,password));
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
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
            <MyButton
                color={Colors.primary}
                title='Log in'
                onPressAction={() => {
                    logInWithEmailAndPassword(email,password)
                }}/>
            <MyButton
                color={Colors.secondary}
                title='Sign up'
                onPressAction={() => signUpWithEmailAndPassword(email, password)}/>

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
