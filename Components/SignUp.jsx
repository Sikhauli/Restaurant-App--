import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Header from './Header';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({navigation}) => {
    //states for error
    const [errMsg, setErrMsg] = useState('');

    //states for new user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(()=>{
        if (auth.currentUser) {
            navigation.navigate('Home');
        } 
    }, [])

    //function to register new user with email and password
    const registerWithEmail = async() => {
        //check if inputs are empty
        if (email === '') {
            //email empty
            setErrMsg('Email is required to register');
            alert('Email is required to register');
        } else {
            if (password === '') {
                //new password empty
                setErrMsg('Password is required to register');
            } else {
                if (confirmPassword === '') {
                    //confirm password empty
                    setErrMsg('Confirm password is required to register');
                } else {
                    if (password !== confirmPassword) {
                        //pasword does not match
                        setErrMsg('Passwords entered does not match');
                    } else {
                        //good to go
                        await createUserWithEmailAndPassword(auth, email, password).then(
                            userCridential => {
                                setErrMsg('');
                                navigation.navigate('Home');
                            }
                        ).catch(
                            err => {
                                setErrMsg(err.message);
                            }
                        )
                    }
                }
            }
        }
    }
  return (
    
    <View style={styles.container}>
{/*         <Header title='Register' /> */}
        {errMsg !== '' ? (<View><Text style={styles.badErr}>{errMsg}</Text></View>) : (<View><Text style={styles.goodErr}></Text></View>) }
        <View style={styles.top}>

                <TextInput style={styles.input} onChangeText={value => setEmail(value)}  placeholder="Enter Email"/>

                <TextInput style={styles.input} onChangeText={value => setPassword(value)} placeholder="Enter Password" />

                <TextInput style={styles.input} onChangeText={value => setConfirmPassword(value)} placeholder="Confirm Password" />

            <Button style={styles.reg} title='Register' onPress={registerWithEmail} />
            <View>
                <Text style={styles.toReg}>Already Have An Account?</Text>
                <Button style={styles.reg} title='Login' onPress={() => navigation.navigate('Login')} />
            </View>

        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
//         padding: 15,
    },
    badErr: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
    },
    reg: {
            flex: 1,
            width: '35%',
            marginLeft: '25vw'
        },
        input: {
            width: '90vw',
            borderColor: 'gray',
            height: 50,
            marginLeft: '5vw',
            borderWidth: 2,
            marginBottom: 25,
            borderRadius: 15,

        },
        top: {
            marginTop: '20vh'
        },
        toReg:{
            marginLeft: '25vw'
        },
        forgot:{

            marginLeft: '53vw',
            marginBottom: 25,
            // marginBottom: '10vh'
        },
        top: {
            marginTop: '20vh'
              },
})

export default SignUp