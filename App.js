import React, {useState} from 'react';
import {Text} from 'react-native';
import {Container, Header} from 'native-base';
import {createStackNavigator} from "@react-navigation/stack"; 
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';  

import Discover from "./screens/Discover";
import Profile from "./screens/Profile";
import BookDetail from "./screens/BookDetail"; 
import UpdateProgress from "./screens/UpdateProgress"; 
import Tabs from "./navigation/tabs"; 

const Stack = createStackNavigator(); 


const App = () => { 
  const [bookList, setBookList] = useState(['Tester']);

  const addBook = (newBook) =>{
    let temp = [...bookList]
    temp.push(newBook)
    setBookList(temp)
  }
  return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName = {'Home'} 
        headerMode="screen" 
        screenOptions={{ headerShown: false}}
        
        >
          {/*Tabs*/}
          {/* <Stack.Screen options = {{header: null, headerMode: 'none'}} name = "Home" component = {()=><Tabs params bookList={bookList} setBookList={()=>setBookList()}/>} /> */}
          <Stack.Screen options = {{header: null, headerMode: 'none'}} name = "Home" component = {Tabs}/>

          <Stack.Screen name = "Discover" component = {Discover} options = {{headerShown: false}}/>

          <Stack.Screen name = "Profile" component = {Profile} options = {{headerShown: false}}/>
          <Stack.Screen name = "UpdateProgress" component = {UpdateProgress} options = {{headerShown: false}}/>
          
          {/*Screens (fix headers)*/}
          {/* <Stack.Screen name = "BookDetail" component ={()=>< BookDetail route bookList={bookList} setBookList={(newBook)=>addBook()}/>}  options = {{headerMode: 'none'}}/>  */}
          <Stack.Screen name = "BookDetail" component ={BookDetail} options = {{headerMode: 'none'}}/> 

        </Stack.Navigator>
      </NavigationContainer> 
  )
  

}

export default App; 