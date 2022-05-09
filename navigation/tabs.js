import React from "react"; 
import {Image, Header, Title} from 'react-native'; 

import {icons} from "../constants"; 
import {Home, Discover, Profile, BookDetail} from "../screens"; 
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"; 

const Tab = createBottomTabNavigator(); 

const Tabs = ({navigation}) => {
  return (
    <Tab.Navigator
      // need to fix
      tabBarOptions={{
        showLabel: false,  
        activeBackgroundColor: "white",
        inactiveBackgroundColor: "white",
      }}
      
      screenOptions= {({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? "#788282" : "#cdd2d7"; 
          switch(route.name){
          case "Home": 
            return(
              <Image 
                source={icons.dashboard_icon}
                resizeMode = "contain"
                style = {{tintColor: tintColor, width: 25, height: 20}}
              />
            )

            case "Discover": 
            return(
              <Image 
                source={icons.search_icon}
                resizeMode = "contain"
                style = {{tintColor: tintColor, width: 25, height: 20}}
              />
            )

            case "Profile": 
            return(
              <Image 
                source={icons.user_icon}
                resizeMode = "contain"
                style = {{tintColor: tintColor, width: 25, height: 20}}
              />
            )

          }
        }

      })}>
      
      <Tab.Screen
        name = "Home"
        // component = {() => <Home bookList = {props.bookList} />}
        //component = {Home(props.bookList, props.setBookList())}
        component={Home}
      /> 

      <Tab.Screen
        name = "Discover"
        // component = {() => <Discover bookList = {props.bookList} navigation />}
        component = {Discover}
      /> 

      <Tab.Screen
        name = "Profile"
        component = {Profile}
      /> 
    </Tab.Navigator> 
  )

}

export default Tabs; 
