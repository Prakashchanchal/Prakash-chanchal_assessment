import 'react-native-gesture-handler';
import React,{useState}  from 'react';
import { View, Text, StyleSheet, Button,Image,ImageBackground,TouchableOpacity,ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../stylesSheet/styles'
import signupScreen from './signupScreen'
import { color } from 'react-native-reanimated';
import dash from '../Screens/dash'
import AsyncStorage from '@react-native-community/async-storage'
var acess_token='abcd'
const loginScreen=({navigation})=>
{
    const[UserName,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    const signupUser=async(textInputData)=>{
        try{
            let user = await AsyncStorage.getItem('user');  
            let parsed = JSON.parse(user);
            let use=parsed.username 
            let  pass=parsed.password
            console.log(use.UserName)
            console.log(pass.Password)
            console.log(UserName.UserName)
            console.log(Password.Password)
            if(UserName=='')
            {
              alert("fill the username")
              return false;
            }
            else if(Password=='')
            {
              alert('fill the password')
              return false;
            }
            else if(Password.Password==pass.Password&&UserName.UserName==use.UserName)
            {
              navigation.navigate('dash')
              return true;
            }
            alert("enter the correct username and password");
            return false
        } 
        
        catch(e)
        {
            console.log('registration invalid')
        }
        finally
        {
            
         console.log(await AsyncStorage.getItem('user'))
         }
    }
  

     
    

return(
    <View style={styles.center}>
        <ImageBackground source={require('../../assests/cloud.jpg')} style={styles.backgroundImage}>
        <Image source={require('../../assests/BabyGroot1.jpg')} style={styles.image}/>
        <TextInput 
        onChangeText={data =>setUserName({ UserName: data })}
        placeholder={'username'}
        placeholderTextColor={'white'}
        underlineColorAndroid='rgba(0,0,0,0)'
        style={styles.input}
        />
        <TextInput
        placeholder={'Password'}
        placeholderTextColor={'white'}
        underlineColorAndroid='rgba(0,0,0,0)'
        onChangeText={data =>setPassword({ Password: data })}
        style={styles.input}
        />
        <View style={styles.buttonCenter}>
        <TouchableOpacity style={styles.container}
        onPress={signupUser}
        >
        <Text style={styles.txtcol}>Login</Text>
        </TouchableOpacity>
        <View style={styles.direction}>
        <Text style={{color:'white'}}>Create new account,  </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('signupScreen')}}>
        <Text style={{color:'skyblue'}}>signUp</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
    </View>
)
}
export default loginScreen;