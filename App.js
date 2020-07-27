import 'react-native-gesture-handler';
import * as React from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator,NavigationStackOptions } from 'react-navigation-stack';
import StackNavigation from './src/nav/stackNavigation'

const App=()=>{
    return<StackNavigation/>
};
export default App;

