import React from 'react';
import {Text} from 'react-native';
import {Container, Header} from 'native-base';
import {createStackNavigator} from "@react-navigation/stack"; 
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';  

import Discover from "./screens/Discover";
import Profile from "./screens/Profile";
import BookDetail from "./screens/BookDetail"; 
import EditProfile from "./screens/EditProfile"; 
import Tabs from "./navigation/tabs"; 

const Stack = createStackNavigator(); 


const App = () => { 
  return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName = {''} 
        headerMode="screen" 
        screenOptions={{ headerShown: false}}
        
        >
          {/*Tabs*/}
          <Stack.Screen options = {{header: null, headerMode: 'none'}} name = "Home" component = {Tabs} />
          <Stack.Screen name = "Discover" component = {Discover} options = {{headerShown: false}}/>

          <Stack.Screen name = "Profile" component = {Profile} options = {{headerShown: false}}/>
          <Stack.Screen name = "EditProfile" component = {EditProfile} options = {{headerShown: false}}/>
          
          {/*Screens (fix headers)*/}
          <Stack.Screen name = "BookDetail" component = {BookDetail} options = {{headerMode: 'none'}}/> 

        </Stack.Navigator>
      </NavigationContainer> 
  )
  

}

export default App; 