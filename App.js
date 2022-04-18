import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Home} from "./screens/Home";  
// import {Discover} from "./screens/Discover";
import {Profile} from "./screens/Profile";
import {BookDetail} from "./screens/BookDetail"; 
import Tabs from "./navigation/tabs"; 

const theme = {
  ...DefaultTheme, 
  
  colors:{
    ...DefaultTheme.colors, 
    border: "transparent"
  }
}
const Stack = createStackNavigator(); 

const App = () => { 
  return (
    <NavigationContainer theme = {theme}>
      <Stack.Navigator
        navigationOptions = {{
          header: null,
          headerShown: false
        }}
        initialRouteName = {''} 
      >
        {/*Tabs*/}
        <Stack.Screen name = "Home" component = {Tabs} options = {{headerShown: false}}/>
        {/* <Stack.Screen name = "Discover" component = {Discover} options = {{headerShown: false}}/> */}

        <Stack.Screen name = "Profile" component = {Profile} options = {{headerShown: false}}/>
        
        {/*Screens (fix headers)*/}
        <Stack.Screen name = "BookDetail" component = {BookDetail} options = {{headerShown: false}}/> 


      </Stack.Navigator>
    </NavigationContainer> 
  )
}

export default App; 
