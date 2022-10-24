import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Header from './Header';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {ScrollView} from 'react-native-web';


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
  {/* <Header title='Login' /> */}
        <View>
            {errMsg === '' ? (<Text style={styles.goodErr}></Text>) : (<Text style={styles.badErr}>{errMsg}</Text>)}
        </View>
        <View style={styles.top}></View>
                <TextInput style={styles.input} onChangeText={value => setEmail(value)} placeholder="Enter Email" />
                <TextInput style={styles.input2} onChangeText={value => setPassword(value)} placeholder='Enter Password' />
            
                <Text style={styles.forgot}> Forgot Password? </Text>
                <Button style={styles.log} title='Login' onPress={loginWithEmail} />
           
                <Text style={styles.toReg}>Don't have an account?</Text>

                <Button style={styles.reg} title='SignUp' onPress={() => navigation.navigate('SignUp')} />    
        </View>
 
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginLeft: 5,
//         borderWidth: 2,
        width: '50',
        height: '90vh',

    },
    badErr: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
    },
    log: {
        flex: 1,
        width: '35%',
        height: '15vh',
        marginLeft: '25vw'
        
    },
    reg: {
        flex: 1,
        width: '35%',
        marginLeft: '25vw'


    },
    input: {
        width: '85vw',
        borderColor: 'gray',
        height: 50,
        borderWidth: 2,
        marginBottom: 25,
        borderRadius: 15,

    },

    input2: {
        width: '85vw',
        borderColor: 'gray',
        height: 50,
        borderWidth: 2,
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
  
    }
})

export default Login