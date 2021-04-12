import React, {useState} from 'react';
import {Button, TextInput, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import * as authActions from './store/actions/auth';

const MyComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const signupHandler = () => {
        dispatch(authActions.signUp(email, password));
    }

    return (
        <View style={styles.container}>
            <Button title='Sign up'
                    onPress={() => signupHandler(email, password)}/>
            <TextInput
                placeholder="email"
                id="email"
                label='E-mail'
                keyboard-type="email-address"
                autoCapitalize="none"
                errorText="please enter a valid email address"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                placeholder="password"
                id="password"
                label="Password"
                keyboard-type="default"
                secureTextEntry
                minLenght={5}
                autoCapitalize="none"
                errorText="Please enter a valid password"
                onChangeText={text => setPassword(text)}
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
