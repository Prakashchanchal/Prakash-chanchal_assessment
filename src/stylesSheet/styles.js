import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, Button,Image,ImageBackground,TouchableOpacity,ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default StyleSheet.create(
{
    container:{
        borderWidth:1,
        height:42,
        width:"60%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:40,
        backgroundColor:"skyblue",
        alignSelf:"center"
      },
      backgroundImage:{
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      input: {
        color:'black', 
        height:50,
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        paddingHorizontal:16,
         marginVertical:10,
         borderColor:'white',
         borderRadius:25,
         alignItems:"center",
         justifyContent:"center"
            
      },
    center:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
        
        },
    buttonCenter:
    {   marginTop:'10%'
        ,width:'80%',
        
     },
     txtcol:{
        color:'white',
        flexDirection:'row'
     },
     image:{
      width:"40%",
      borderRadius:100,
      height:"25%",
      marginVertical:10,
      alignItems: 'center',
      justifyContent: 'center'
     },
     direction:{
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      marginVertical:10
    },
    header:{
      width:'100%',
      height:'100%',
      
      alignItems:'center',
      justifyContent:'center'
    }, sideMenuContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#307ecc',
      paddingTop: 40,
      color: 'white',
    },
    profileHeader: {
      flexDirection: 'row',
      backgroundColor: '#307ecc',
      padding: 15,
      textAlign: 'center',
    },
    profileHeaderPicCircle: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      color: 'white',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileHeaderText: {
      color: 'white',
      alignSelf: 'center',
      paddingHorizontal: 10,
      fontWeight: 'bold',
    },
    profileHeaderLine: {
      height: 1,
      marginHorizontal: 20,
      backgroundColor: '#e2e2e2',
      marginTop: 15,
      marginBottom: 10,
    },
    stylecolor:{
      flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'white',
    },
    viewimage:{
      alignSelf:'left',
      height:60,
      width:60,
      borderBottomLeftRadius:25,
      borderTopRightRadius:25,
      borderTopLeftRadius:25,
      borderBottomLeftRadius:25
    }
}
)
