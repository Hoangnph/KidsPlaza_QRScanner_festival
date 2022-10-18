import { KeyboardAvoidingView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import styles from "../../styles";
import { auth } from '../../firebase'

const  LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth
            .onAuthStateChanged(user => { 
                if (user) {
                    navigation.replace("Home")
                }
            })
        return unsubscribe
    },[])

    const handleSignUp = () => {
        auth 
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Register with: ',user.email);
                setEmail('');
                setPassword('');
            })
            .catch(err => alert(err.message));
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Login with: ', user.email);
                setEmail('');
                setPassword('');
            })
            .catch(err => alert(err.message))
    }

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry={true}
            />
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.btn}
            >
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.btn, styles.btnOutline]}
            >
                <Text style={styles.btnOutlineText}>Register</Text>
            </TouchableOpacity> */}
        </View>
      </KeyboardAvoidingView>
    )
}


export default LoginScreen