import React,{useState, useEffect} from 'react';
import {styleSheet,Text,View} from 'react-native'
import login from './loginScreen'
import { exp } from 'react-native-reanimated';
import styles from '../stylesSheet/styles';
import signpScreen from './signupScreen'
import AsyncStorage from '@react-native-community/async-storage'
const headerScreen=async(textInputData)=>{
    const[username,setusername]=useState('')
 useEffect(()=>
 {
        const signupUser=async()=>
        {
        const user=await AsyncStorage.getItem('UserName')
        setusername(user)
        }
        signupUser();
    }
 )
    
    
    return(
        <View style={styles.header}>
    <Text>{username}</Text>
      
        </View>

    )
}
export default headerScreen;