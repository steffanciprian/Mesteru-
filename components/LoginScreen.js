import React, {useState, useEffect} from 'react';
import {StyleSheet, ActivityIndicator, View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';
import MyButton from "./MyButton";
import MyInputForm from "./MyInputForm";
import Colors from "../constants/Colors";

const MyComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        if (error) {
            Alert.alert('An error occured!', error, [{text: 'Ok'}])
        }
    }, error)

    const signUp = async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(authActions.signUp(email, password));

        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }
    const logIn = async () => {
        setError(null);
        setIsLoading(true);
        try {
           await dispatch(authActions.logIn(email, password));

        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);

    }



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
                            logIn(email, password)
                        }}/>}
                <MyButton
                    color={Colors.secondary}
                    title='Sign up'
                    onPressAction={() => signUp(email, password)}/>
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
