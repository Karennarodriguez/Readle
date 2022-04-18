import React, {useState} from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {icons, images} from '../constants';
import {VStack, Input, Button, IconButton, Icon, NativeBaseProvider, Center, Box, Divider, Heading, Stack}from 'native-base';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios"; 

const Discover = ({route, navigation}) => {

    const bookCryingHmart = {
    id: 1,
    bookName: "Crying in H Mart",
    bookCover: images.cryingHmart,
    rating: 4.5,
    language: "Eng",
    pageNo: 256,
    author: "Michelle Zauner",
    genre: [
        "Autobiography", "Memoir"
    ],
    readed: "983",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF"
    }

  const bookJustKids = {
    id: 2,
    bookName: "Just Kids",
    bookCover: images.justKids,
    rating: 4,
    language: "Eng",
    pageNo: 278,
    author: "Patti Smith",
    genre: [
        "Memoir", "Biography",
    ],
    readed: "876",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF"
    }

  const bookNormalPeople = {
    id: 3,
    bookName: "Normal People",
    bookCover: images.normalPeople,
    rating: 3.5,
    language: "Eng",
    pageNo: 266,
    author: "Sally Rooney",
    genre: [
        "Romance", "Fiction",
    ],
    readed: "1.2k",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF"
    }

  const categoriesData = [
    {
      id: 1, 
      categoryName: "Highly Rated",
      books: [ bookNormalPeople ]
    },

    {
      id: 2, 
      categoryName: "Best in Non-Fiction",
      books: [ bookCryingHmart, bookJustKids ]
    },
  ]
  
  const[categories, setCategories] = useState(categoriesData)
  const [selectedCategory, setSelectedCategory] = useState(1); 

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
    })
  }

function renderCategory(){
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style = {{flex: 1, marginRight:10, marginTop:20}}
        onPress = {() => setSelectedCategory(item.id)}
      >
      { 
        selectedCategory == item.id && 
        <Text style = {{color: "white", fontSize: 12}}>{item.categoryName}</Text>
      }

      { 
        selectedCategory != item.id && 
        <Text style = {{color:"grey", fontSize: 12}}>{item.categoryName}</Text>
      }


      </TouchableOpacity>
    )
  } 
  return(
    <View style = {{flex:1, paddingLeft:10}}>
      <FlatList 
        data = {categories}
        showsHorizontalScrollIndicator = {false}
        renderItem={renderItem}
        keyExtractor = {item => `${item.id}`}
        horizontal
      />
    </View>
  )
}
function SearchBar() {
  return <VStack my="4" space={5} w="90%" maxW="400px" divider={<Box px="2">
          <Divider/> </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
        
        <Input onChangeText={handleChange} placeholder="Search Books & Authors" width="100%" borderRadius="25" py="3" px="10" fontSize="14"  InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />

      </VStack>
    </VStack>;
}

function Example() {
  return <Center flex={1} px="2">
      <SearchBar/>
    </Center>;
}

const ButtonEx= () => {
  return <ScrollView showsVerticalScrollIndicator={false} px="3">
      <VStack w="100%" space={4} px="1" mt="1" alignItems="center" justifyContent="center">
        {
        /* Subtle */
      }
        <Stack mb="2.5" mt="1.5" direction={{
        base: "row",
        md: "row"
      }} space={2} mx={{
        base: "auto",
        md: "0"
      }}>
          <Button size="sm" variant="subtle" colorScheme="light">
            Fiction
          </Button>
          <Button size="sm" variant="subtle" colorScheme="light">
            Non-Fiction
          </Button>

          <Button size="sm" variant="subtle" colorScheme="light">
            Young-Adult
          </Button>

        </Stack>
      </VStack>
    </ScrollView>;
};

function renderCategoryData(){
  var books = [] 
  let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

  if(selectedCategoryBooks.length > 0){
    books = selectedCategoryBooks[0].books 
  }
  const renderItem = ({item}) => {
    return(
      <View style = {{marginVertical:10}}> 
        <TouchableOpacity
        style = {{flex: 1, flexDirection: "row"}}
        onPress ={() => navigation.navigate("BookDetail", {
          book: item
        })}
        >

          <Image 
            source = {item.bookCover}
            resizeMode ="cover"
            style = {{width: 100, height: 150, borderRadius: 10}}       
          />
          <View style = {{flex: 1, marginLeft: 6}}>
            {/*Book name and author*/}
            <View>
              <Text style= {styles.h3}>
              {item.bookName}</Text>
              <Text style= {{paddingRight: 5, color: "gray" }}>{item.author}</Text>
            </View>
            {/*Book Information*/}
        <View style = {{flexDirection: "row", marginTop: 6,  }} >
            <Image 
            source = {icons.page_filled_icon}
            resizeMode = "contain"
            style = {{
              width: 20, 
              height: 20, 
              tintColor: "gray"
            }}/>
            
            <Text style ={{ paddingRight: 10, paddingTop: 5, color: "gray", fontSize: 12}}> {item.pageNo}
            </Text>

            <Image 
            source = {icons.read_icon}
            resizeMode = "contain"
            style = {{
              width: 20, 
              height: 20, 
              tintColor: "gray"
            }}/>
            
            <Text style ={{ paddingTop: 5, color: "gray", fontSize: 12}}> {item.readed}
            </Text>

            {/*Genre*/}
            <View style = {{flexDirection: 'row', marginTop:48, marginLeft:-90}}>
            {
              item.genre.includes("Fiction") && 
              <View style ={{justifyContent: 'center',
              alignItems:'center', padding:10, marginRight: 8, backgroundColor:"#213432", height:40, borderRadius:4}}> 

              <Text style = {{color:"#31Ad66"}}>Fiction</Text>
              
              </View>
            }
            {
              item.genre.includes("Romance") && 
              <View style ={{justifyContent: 'center',
              alignItems:'center', padding:10, marginRight: 8, backgroundColor:"#31262F", height:40, borderRadius:4}}> 
              
              <Text style = {{color:"#C5505E"}}>Romance</Text>
              
              </View>
            }
            {
              item.genre.includes("Memoir") && 
              <View style ={{justifyContent: 'center',
              alignItems:'center', padding:10, marginRight: 8, backgroundColor:"#213432", height:40, borderRadius:4}}> 
              
              <Text style = {{color:"#31Ad66"}}>Memoir</Text>
              
              </View>
            }

                        {
              item.genre.includes("Biography") && 
              <View style ={{justifyContent: 'center',
              alignItems:'center', padding:10, marginRight: 8, backgroundColor:"#22273B", height:40, borderRadius:4}}> 
              
              <Text style = {{color:"#424BAF"}}>Biography</Text>
              
              </View>
            }
           
            </View>

          </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{ position: 'absolute', top: 5, right: 15}}
            onPress={() => console.log("Bookmark")}>

            <Image
              source = {icons.plus_icon}
              resizeMode = "contain"
              style = {{
                width: 15, 
                height:15,
                tintColor: "gray"
              }}
            />
        
        </TouchableOpacity>

      </View>
    )
  }  
  
  return(
    <View style = {{flex: 1, marginTop: 10, paddingLeft:10 }}>
      <FlatList 
        data = {books}
        renderItem = {renderItem}
        keyExtractor = {item => `${item.id}`}
        showsVerticalScrollIndicator = {false}
      />
    </View>
  )
}
  return(
    <SafeAreaView style = {{flex: 1, backgroundColor: "#1E1B26"}}>
    <View style = {{padding: 12}}>
    <Text style = {styles.h1}>Discover</Text>
    
    <View>
      <NativeBaseProvider>
        <Center flex={1} px="3">
            <Example/>
        </Center>
      </NativeBaseProvider>

      <NativeBaseProvider>
        <Center flex={1} px="3">
            <ButtonEx/>
        </Center>
      </NativeBaseProvider>

      {renderCategory()}

      <View>
      {renderCategoryData()}
      </View>
    </View>
    </View>
  </SafeAreaView>
  )
}

export default Discover; 

const styles = StyleSheet.create({
  h1: {
    fontSize: 24, 
    lineHeight: 36,
    color: "white",
    fontWeight: "bold"
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