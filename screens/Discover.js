import React, {useState, useEffect} from "react"; 
import axios from "axios"; 
import {SafeAreaView, View,  Modal, Text, StyleSheet, TouchableOpacity,  FlatList, Alert} from "react-native";
import {VStack, Input, Button, Menu, Image, NativeBaseProvider, Center, Box, Divider, Heading, Stack, SearchIcon}from 'native-base';
import {icons} from '../constants';
import {ModalPicker} from '../components/ModalPicker'


const Discover = ({navigation}) => {
  const [book, setBook] = useState(""); 
  const [result, setResult] = useState([]);
  const [apiKey,  setApiKey] = useState("AIzaSyA8_Yoqzedlv3Xnb5kEjcN6pp9UEmBb07o");

  function handleChange(event){

    const book = event; 
    setBook(book);
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
      <View style = {{marginVertical:10}}> 
        <TouchableOpacity
          style = {{flex: 1, flexDirection: "row", marginRight: 25, marginTop:20}}
          onPress ={() => navigation.navigate("BookDetail", {
            book: item
          })}
        >
          {/* BOOK COVER */}
          <Image 
            source={{uri: "https:"+ item.volumeInfo.imageLinks.thumbnail.substring(5,100)}} 
            alt = {item.volumeInfo.title +" Cover"}  
            resizeMode = "cover"
            width={110}
            height={160}
            borderRadius={6}
            />
            {/* TITLE & AUTHOR */}
            
            <View style = {{flex: 1, marginLeft: 15}}>
              <View>
              <Text style = {styles.h3}>
                {item.volumeInfo.title}
              </Text>
              <Text style= {{paddingRight: 5, color: "gray" }}>
                {item.volumeInfo.authors}
              </Text>
            </View>
            
           
            <View style = {{flexDirection: "row", marginTop: 6  }} >
            {/* PAGE COUNT */}
            <Image 
              source = {icons.page_filled_icon}
              alt = {"PG"} 
              resizeMode = "contain"
              style = {{
                width: 18, 
                height: 18, 
                tintColor: "gray"
            }}/>
            
            <Text 
              style ={{ paddingRight: 10, paddingLeft:5, paddingTop: 3, color: "gray", fontSize: 12}}> 
              {item.volumeInfo.pageCount}
            </Text>

             {/* NUMBER READ */}
             <Image 
              source = {icons.read_icon}
              alt = {"Reads:"} 
              resizeMode = "contain"
              style = {{
                width: 20, 
                height: 20, 
                tintColor: "gray"
            }}/>
            
            <Text 
              style ={{  paddingRight: 10, paddingTop: 3, paddingLeft: 5, color: "gray", fontSize: 12}}> 
              {item.volumeInfo.ratingsCount}
            </Text>

            {/* AVG RATING */}
            <Image 
              source = {icons.star_icon}
              alt = {"Rating:"} 
              resizeMode = "contain"
              style = {{
                width: 16, 
                height: 16, 
                tintColor: "gray"
            }}/>
            
            <Text 
              style ={{ paddingTop: 3, paddingLeft: 5, color: "gray", fontSize: 12}}> 
              {item.volumeInfo.averageRating}
            </Text>
            </View>

            <View style = {{flexDirection: 'row', marginTop:48}}>
              <View style ={{justifyContent: 'center',
              alignItems:'center', padding:10, marginRight: 8, backgroundColor:"#ffdfbf", height:40, borderRadius:4}}> 
              <Text style = {{color:"#e76f51"}}>{item.volumeInfo.categories}</Text> 
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* MORE ICON */}
        {/* <TouchableOpacity
          style = {{ position: 'absolute', top: 25, right: 25}}
        >

            <Image
              source = {icons.three_more_icon}
              resizeMode = "contain"
              alt = "Add"
              style = {{
                width: 20, 
                height:20,
                tintColor: "gray"
              }}
            />
        
        </TouchableOpacity> */}
         
      </View>
    )
  } 



     {/* FINAL PRODUCT */} 
    return(
      
        <SafeAreaView style = {{flex: 1,  backgroundColor: "white"}}>
            <Text style = {styles.h1}>Discover</Text>
            
            <NativeBaseProvider>
            
            <VStack space ={5} marginLeft={10}> 
             
              <Input activeBorderColor = "blue" variant="unstyled" value={book} w="100%" maxW="310px" 
                onChangeText={handleChange} placeholder="Search Books & Authors" 
                InputRightElement={<Button colorScheme = "dark" variant = "ghost" ml={4} roundedLeft="sm" roundedRight="sm" 
                onPress={handleSubmit}>
                <Image
                  source = {icons.search_icon}
                  alt = {"Go"} 
                  resizeMode = "contain"
                  style = {{
                    width: 18, 
                    height: 18, 
                    tintColor: "emerald"
                }}/>

                </Button>} 
              />
              
                <FlatList 
                  data = {result}
                  showsHorizontalScrollIndicator = {false}
                  renderItem={renderItem}
                  keyExtractor = {item => `${item.id}`}
                />

                
            </VStack>

           
            </NativeBaseProvider>
            
          
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
      fontFamily: 'Optima-Bold'
    },
  
    h3: {
      fontSize: 16, 
      lineHeight: 22,
      color: "#1E1B26",
      fontWeight: "bold",
      fontFamily: 'Optima-Bold'
    },
  
    h5: {
      fontSize: 12, 
      lineHeight: 18,
      color: "#1E1B26",
      marginTop: 5,
      marginLeft: 6, 
    },
  
  })