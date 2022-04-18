import React from "react"; 
import {Image, Text} from 'react-native'; 
import {icons} from "../constants"; 
import {Home, Profile, BookDetail} from "../screens"; 
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"; 

const Tab = createBottomTabNavigator(); 

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
      showLabel: false,  
      height: "10%",
      activeBackgroundColor: "#1E1B26",
      inactiveBackgroundColor:"#1E1B26"
      }}
      
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? "white" : "gray"; 
          switch(route.name){
          
          case "Home": 
            return(
              <Image 
                source={icons.dashboard_icon}
                resizeMode = "contain"
                style = {{tintColor: tintColor, width: 25, height: 20}}
              />
            )

            // case "Discover": 
            // return(
            //   <Image 
            //     source={icons.search_icon}
            //     resizeMode = "contain"
            //     style = {{tintColor: tintColor, width: 25, height: 20}}
            //   />
            // )

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
        component = {Home}
      /> 

      {/* <Tab.Screen
        name = "Discover"
        component = {Discover}
      />  */}

      <Tab.Screen
        name = "Profile"
        component = {Profile}
      /> 
    </Tab.Navigator> 
  )

}

export default Tabs; 
