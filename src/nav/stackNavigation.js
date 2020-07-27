import 'react-native-gesture-handler';
import * as React from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator,NavigationStackOptions } from 'react-navigation-stack';
import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator } from 'react-navigation';
import App from '../../App';
import loginScreen from '../Auth/loginScreen'
import styleView from '../stylesSheet/styles'
import signupScreen from '../Auth/signupScreen'
import dashBoard from '../Screens/dashBoard';
import dash from '../Screens/dash'
import headerScreen from '../Auth/headerScreen'
import logOut from '../Auth/logOut'
import AsyncStorage from '@react-native-community/async-storage'
import drawerNav from '../nav/drawerNav'
const StackNavigation = createStackNavigator(
    {
        loginScreen:{screen: loginScreen,navigationOptions:{headerShown:false}},
        signupScreen:{screen:signupScreen,navigationOptions:{headerShown:false}},
        dashBoard:dashBoard,
        dash:{screen: dash},
    },
    {
      initialRouteName: 'loginScreen',
    },
   );
const DrawerNavigation=createDrawerNavigator(
  {
    dash:{
        screen:StackNavigation
    },
   },
     {
       contentComponent:drawerNav,
      }
    ) 
export default createAppContainer(DrawerNavigation);
 