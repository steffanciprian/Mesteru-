import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';
import MyButton from "./MyButton";
import MyInputForm from "./MyInputForm";
import Colors from "../constants/Colors";

const MyComponent = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const signUpWithEmailAndPassword = () => {
        setIsLoading(true);
        dispatch(authActions.signUpWithEmailAndPassword(email, password));
        setIsLoading(false);
    }
    const logInWithEmailAndPassword = () => {
        setIsLoading(true);
        dispatch(authActions.loginWithEmailAndPassword(email, password));
        setIsLoading(false);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <MyInputForm
                    placeholderText="E-Mail"
                    id="email"
                    label='E-mail'
                    keyboardType="email-address"
                    autoCapitalizeForm="none"
                    errorMessageText="please enter a valid email address"
                    onTouchTextInput={text => setEmail(text)}
                />
                <MyInputForm
                    placeholderText="Password"
                    id="password"
                    label="Password"
                    keyboardType="default"
                    secureTextEntry
                    minLenght={5}
                    autoCapitalizeForm="none"
                    errorMessageText="Please enter a valid password"
                    onTouchTextInput={text => setPassword(text)}
                />
                {isLoading ? <ActivityIndicator size='large'
                                                color='#0000ff'/> :
                    <MyButton
                        color={Colors.primary}
                        title='Log in'
                        onPressAction={() => {
                            logInWithEmailAndPassword(email, password)
                        }}/>}
                <MyButton
                    color={Colors.secondary}
                    title='Sign up'
                    onPressAction={() => signUpWithEmailAndPassword(email, password)}/>
            </View>

        </TouchableWithoutFeedback>
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
