import React, {useState} from "react"; 
import axios from "axios"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {VStack, Input, Button, Icon, IconButton, NativeBaseProvider, Center, Box, Divider, Heading, Stack, SearchIcon}from 'native-base';



const Discover = ({navigation}) => {
  const [book, setBook] = useState(""); 
  const [result, setResult] = useState([]);
  const [apiKey,  setApiKey] = useState("AIzaSyA8_Yoqzedlv3Xnb5kEjcN6pp9UEmBb07o");

  function handleChange(event){
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event){
    event.preventDefault(); 
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=5") 
    .then(data => {
      console.log(data.data.items);
      setResult(data.data.items);
      // console.log(result)

    })
  }

  function SearchBar() {
    return <VStack my="4" space={5} w="90%" maxW="400px" divider={<Box px="2">
            <Divider/> </Box>}>
        <VStack w="100%" space={5} alignSelf="center">
          
          <Input placeholder="Search Books & Authors"  value={book} onChange={handleChange} _light={{
            placeholderTextColor: "blueGray.400"
          }} _dark={{
            placeholderTextColor: "blueGray.50"
          }} width="100%" borderRadius="25" py="3" px="10" fontSize="14"  InputRightElement={<Button  ml={1} roundedLeft={0} roundedRight="md" onPress={handleSubmit}>
        Go</Button>} /> 


        </VStack>
      </VStack>;
    }

    

     {/* FINAL PRODUCT */} 
    return(
        <SafeAreaView style = {{flex: 1,  backgroundColor: "#1E1B26",}}>
            <Text style = {styles.h1}>Discover</Text>
            <NativeBaseProvider>
                <Center flex={1} px="2">
                    <SearchBar />
                </Center>
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
      color: "white",
      fontWeight: "bold",
      paddingLeft: 12, 
      paddingTop: 12
    },
  
    h3: {
      fontSize: 16, 
      lineHeight: 22,
      color: "white",
      fontWeight: "bold"
    },
  
    h5: {
      fontSize: 12, 
      lineHeight: 18,
      color: "white",
      marginTop: 5,
      marginLeft: 6, 
    },
  
  })