import React, { useState, useEffect } from 'react';

import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Header from './Header';

import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({navigation}) => {
   

    //states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //error state
    const [errMsg, setErrMsg] = useState('');

    useEffect(()=>{
        if (auth.currentUser) {
            navigation.navigate('Home');
        }
    }, [])

    //function to check if the user exist already
    const loginWithEmail = async() => {
        if (email === '') {
            setErrMsg('Email is required to log in');
        } else {
            if (password === '') {
                setErrMsg('Password is required to login')
            } else {
                await signInWithEmailAndPassword(auth, email, password).then(
                    userCridential => {
                        navigation.navigate('Home')
                    }
                ).catch(
                    err => {
                        setErrMsg(err.message);
                    }
                )
            }
        }
    }
  return (
    <View style={styles.container}>
        <Header title='Login' />
        <View>
            {errMsg === '' ? (<Text style={styles.goodErr}></Text>) : (<Text style={styles.badErr}>{errMsg}</Text>)}
        </View>
        <View>
            <View>
                <Text>Email:         <View style={styles.input}><TextInput onChangeText={value => setEmail(value)} placeholder="Please ener your email" /></View></Text>
            </View>
            <View>
                <Text>Password:   <View style={styles.input}><TextInput onChangeText={value => setPassword(value)} placeholder='Please enter your password here' /></View></Text>
            </View>
            <View style={styles.log}>
                <Button title='Login' onPress={loginWithEmail} />
            </View>
            <View>
                <Text>Don't have an account?</Text>
                <View style={styles.reg}>
                    <Button title='SignUp' onPress={() => navigation.navigate('SignUp')} />
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    badErr: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
    },
    log: {
        flex: 1,
        width: '15%',
    },
    reg: {
        flex: 1,
        width: '15%',
    },
    input: {
        width: '40vw',
        borderColor: 'gray',
    },
})

export default Login