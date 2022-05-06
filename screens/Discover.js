import React, {useState, useEffect} from "react"; 
import axios from "axios"; 
import {SafeAreaView, View, TextInput, Text, StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity, ScrollView, FlatList, Alert} from "react-native";
import {VStack, Input, Button, Icon, IconButton, Image, NativeBaseProvider, Center, Box, Divider, Heading, Stack, SearchIcon}from 'native-base';

const API_KEY = "AIzaSyA8_Yoqzedlv3Xnb5kEjcN6pp9UEmBb07o"
const GOOGLE_BOOKS_URL  = "https://www.googleapis.com/books";
const GET_BOOKS_BY_NAME_ENDPOINT = "/v1/volumes?q=";
const KEY_HEADER = "&key="+ API_KEY;



const Discover = ({navigation}) => {
  const [book, setBook] = useState(""); 
  const [result, setResult] = useState([]);
  const [apiKey,  setApiKey] = useState("AIzaSyA8_Yoqzedlv3Xnb5kEjcN6pp9UEmBb07o");

  function handleChange(event){
    console.log("hi")
    const book = event; 
    setBook(book);

    // if (book != undefined) {
    //   console.log("hello")
    //   setBook(book);

    // } 
    
  }



  async function handleSubmit(event){
    event.preventDefault(); 
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=5") 
    .then(data => {
      setResult([]);
      setResult(data.data.items);
      // console.log(data.data.items);

    })
  }
  const renderItem = ({item}) => {
    console.log('render item', item)
    return (
      <TouchableOpacity
        style = {{flex: 1, marginRight:10, marginTop:20}}
        // onPress = {() => setSelectedCategory(item.id)}
      >
        <Text>{item.volumeInfo.title}</Text>
        {console.log("https:"+ item.volumeInfo.imageLinks.thumbnail.substring(5,100))}
        <Image 
          source={{uri: "https:"+ item.volumeInfo.imageLinks.thumbnail.substring(5,100)}} 
          alt = {item.volumeInfo.title +" Cover"}  
          width={110}
          height={160}
          borderRadius={6}
          />

      </TouchableOpacity>
    )

  } 

  const handleChange1 = text => setBook(text);

  function SearchBar() {
    return <VStack my="4" space={5} w="90%" maxW="400px" divider={<Box px="2">
            <Divider/> </Box>}>
        <VStack w="100%" space={5} alignSelf="center">
          
          <Input 
          // placeholder="Search Books & Authors"  
          value={book} onChangeText={handleChange} width="100%" borderRadius="25" py="3" px="10" fontSize="14"  
          // InputRightElement={<Button  ml={1} roundedLeft={0} roundedRight="md" onPress={handleSubmit}
        // Go</Button>}
         /> 

        


        </VStack>
      </VStack>;
    }


    

     {/* FINAL PRODUCT */} 
    return(
      
        <SafeAreaView style = {{flex: 1,  backgroundColor: "white",}}>
            <Text style = {styles.h1}>Discover</Text>
            
            <NativeBaseProvider>
              <ScrollView>
              <Center flex={1} px="2">
              <Input value={book} w="75%" maxW="300px" 
                onChangeText={handleChange} placeholder="Search Books & Authors" 
                InputRightElement={<Button  ml={1} roundedLeft={0} roundedRight="md" 
                onPress={handleSubmit}>Go</Button>} 
              />

              </Center>
              <FlatList 
                data = {result}
                showsHorizontalScrollIndicator = {false}
                renderItem={renderItem}
                keyExtractor = {item => `${item.id}`}

              />
              </ScrollView>
            </NativeBaseProvider>
            
      
           

            
            
                
            {/* 
            <FlatList
              data ={result}
              // keyExtractor={(result, index)=>{return }}  
              
              renderItem={(result, index) =>(
                <View>
                  <Image>{result.volumeInfo.imageLinks.thumbnail}</Image>
                </View>
              )}
            />  */}

            {/* {result.map(book =>(<Image source ={{uri:book.volumeInfo.imageLinks.thumbnail}}/>))} */}
          
        </SafeAreaView>
    )
}

export default Discover; 

const styles = StyleSheet.create({
    h1: {
      fontSize: 24, 
      lineHeight: 36,
      color: "#1E1B26",
      fontWeight: "bold",
      paddingLeft: 12, 
      paddingTop: 12,
      paddingBottom: 15,
    },
  
    h3: {
      fontSize: 16, 
      lineHeight: 22,
      color: "#1E1B26",
      fontWeight: "bold"
    },
  
    h5: {
      fontSize: 12, 
      lineHeight: 18,
      color: "#1E1B26",
      marginTop: 5,
      marginLeft: 6, 
    },
  
  })