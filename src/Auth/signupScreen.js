import 'react-native-gesture-handler';
import React,{useState}  from 'react';
import { View, Text, StyleSheet, Button,Image,ImageBackground,TouchableOpacity,ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import styles from '../stylesSheet/styles'
import { Value } from 'react-native-reanimated';
import loginScreen from './loginScreen'
const signupScreen=({navigation})=>
{  
    const[UserName,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    const[Email,setEmail]=useState('');
    const textInputData={
        username:UserName,
        password:Password,
        email:Email
    }
   const signupUser=async(textInputData)=>{
       if(UserName==''||Password==''||Email=='')
       {
           alert('filled all data')
       }
       else{
       try{
           const jValue=JSON.stringify(textInputData)
           await AsyncStorage.setItem('user',jValue)
           console.log(UserName)
           console.log(Password)
           console.log(Email)
       }
       catch(e)
       {
           console.log('registration invalid')
       }
       finally
       {
           alert('Sucessfully registered')
        console.log(await AsyncStorage.getItem('user'))
        }
    }
   }
return(
    <View style={styles.center}>
        <ImageBackground source={require('../../assests/drop.jpg')} style={styles.backgroundImage}>
        <Image source={require('../../assests/babygroot2.jpeg')} style={styles.image}/>
        <TextInput 
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={'Enter your username'}
        placeholderTextColor={'white'}
        value={UserName}
          onChangeText={data =>setUserName({ UserName: data })}
        style={styles.input}
        />
        <TextInput
        placeholder={'Enter your email_id'}
        placeholderTextColor={'white'}
        underlineColorAndroid='rgba(0,0,0,0)'
        value={Email}
          onChangeText={data =>setEmail({ Email: data })}
        style={styles.input}
        />
        <TextInput
        placeholder={'Enter your Password'}
        placeholderTextColor={'white'}
        underlineColorAndroid='rgba(0,0,0,0)'
        value={textInputData}
          onChangeText={data =>setPassword({ Password: data })}
        style={styles.input}
        />
        <View style={styles.buttonCenter}>
        <TouchableOpacity style={styles.container}
        onPress={()=>{signupUser(textInputData)}}>
        <Text style={styles.txtcol}>Register</Text>
        </TouchableOpacity>
        <View style={styles.direction}>
        <Text style={{color:'white'}}>Goto login Page,   </Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('loginScreen')}}>
        <Text style={{color:'skyblue'}}>login</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
    </View>
)
}
export default signupScreen;