import React,{useState} from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {VStack, HStack, Button, Menu, NativeBaseProvider, Center, Box, Progress} from 'native-base';
import {images} from '../constants';

// const Home = ({route, navigation, props}) => {
const Home = ({route, navigation}) => {
  // console.log("Home");
  // console.log(props.bookList);
  //   return(
  //       <SafeAreaView style = {{flex: 1,  backgroundColor: "white",}}>
  //           <Text style = {styles.h1}> Home</Text>
            
  //           <View style = {{flex: 1, marginLeft: 20}}>
  //             <NativeBaseProvider>
  //               <View>
  //                 <Text style = {styles.h3}>Currently Reading</Text>
  //                 <HStack>

  //                 </HStack>
  //               </View>
                
  //               <View>
  //                 <Text style = {styles.h3}>Want To Read</Text>
  //                 <HStack>
                    
  //                 </HStack>
  //               </View>
                
  //               <View>
  //                 <Text style = {styles.h3}>Have Read</Text>
  //                 <HStack>
                    
  //                 </HStack>
  //               </View>
  //             </NativeBaseProvider>
  //           </View>
  //       </SafeAreaView>
  //   )
    
    {/*BOOK LIST */}

    const bookJaneEyre = {
      id: 0,
      bookName: "Jane Eyre",
      bookCover: "https://pictures.abebooks.com/isbn/9781423650997-us.jpg",
      rating: 4,
      language: "Eng",
      pageNo: 592,
      author: "Charlotte Bronte",
      genre: [
          "Novel", "Gothic Fiction", "Romance"
      ],
      readed: "50k",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      backgroundColor: "rgba(119,77,143,0.9)",
      navTintColor: "#FFF"
      }
  
    const bookCryingHmart = {
      id: 1,
      bookName: "Crying in H Mart",
      bookCover: "https://i.redd.it/a0v2r4hd3cx61.jpg",
      rating: 4.5,
      language: "Eng",
      pageNo: 256,
      author: "Michelle Zauner",
      genre: [
          "Autobiography", "Memoir"
      ],
      readed: "10k",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      backgroundColor: "rgba(119,77,143,0.9)",
      navTintColor: "#FFF"
      }
  
    const bookJustKids = {
      id: 2,
      bookName: "Just Kids",
      bookCover: "https://images-na.ssl-images-amazon.com/images/I/51OQ3fuFNcL.jpg",
      rating: 4,
      language: "Eng",
      pageNo: 278,
      author: "Patti Smith",
      genre: [
          "Memoir", "Biography",
      ],
      readed: "8k",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      backgroundColor: "rgba(119,77,143,0.9)",
      navTintColor: "#FFF"
      }
  
    const bookNormalPeople = {
      id: 3,
      bookName: "Normal People",
      bookCover: "https://images-na.ssl-images-amazon.com/images/I/812dWt7LgdL.jpg",
      rating: 3.5,
      language: "Eng",
      pageNo: 266,
      author: "Sally Rooney",
      genre: [
          "Novel", "Fiction",
      ],
      readed: "20k",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      backgroundColor: "rgba(119,77,143,0.9)",
      navTintColor: "#FFF"
      }
  
    const bookWhiteNoise= {
      id: 4,
      bookName: "White Noise",
      bookCover: "https://images.penguinrandomhouse.com/cover/9780143129554",
      rating: 5,
      language: "Eng",
      pageNo: 326,
      author: "Don DeLillo",
      genre: [
          "Postmodern",
      ],
      readed: "12k",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      backgroundColor: "rgba(119,77,143,0.9)",
      navTintColor: "#FFF"
      }
  
    const myBooksData = [
      {
        ...bookNormalPeople, 
        completion: "75%", 
      },
      {
        ...bookJustKids,
        completion: "20%", 
      },
      {
        ...bookCryingHmart,
        completion: "0%", 
      },
      {
        ...bookJaneEyre,
        completion: "12%", 
      },
    ]
  
    const readBooksData = [
      {
        ...bookWhiteNoise, 
        completion: "100%"
      }
    ]
  
  
    const profileData ={name: 'Karenna', }
    const [profile, setProfile] = useState(profileData); 
    const { width, height } = Dimensions.get("window");
    const [myBooks, setMyBooks] = useState(myBooksData); 
    const [readBooks, setReadBooks] = useState(readBooksData); 
  
    {/* PROGRESS BAR*/}
    const ProgressBar = () => {
      return <Center marginTop  = "20" marginLeft ="-20" w="100%">
          <Box w="400%" maxW="500" >
            <Progress  bg="coolGray.100" _filledTrack={{
        bg: "lime.500"}} value={45} mx="4" />
          </Box>
        </Center>;
    };
  
  {/* WELCOME*/}
    function renderHeader(profile){
      return(
        <View style = {{flexDirection: 'row', marginTop: 15, paddingHorizontal: 12, alignItems:'center',}}>
               <View style ={{marginLeft: 4}}>
                <Text style={styles.h3}>{profile.name + "'s"}</Text>
                <Text style = {styles.h1}>Bookshelves</Text>
               </View>
        </View>
      )
    }
  
    {/* Currently Reading*/}
  function renderProg(){
    return(
  <View style = {{ justifyContent:'flex-start', alignnContent:'flex-start', paddingHorizontal: 12, marginTop: 20}}>
    <Text style={styles.h3}> Currently Reading...</Text>
  
  
        <View style = {{marginTop: 10, height: 170, backgroundColor: "#f2e9e4",  borderRadius: 10, flexDirection: 'row'}}>
          <View style = {{flexDirection: "column", justifyContent:'center', alignContent: 'center', alignItems:'flex-start' }}>
            <Text style = {styles.h5}>The Unbearable Lightness of Being</Text>
            <Image
              source={{uri: "https://i.harperapps.com/covers/9780060597184/y648.jpg"}}
              style={{ resizeMode: 'contain', width: 90, height: 120,borderRadius: 6, marginBottom:5, marginTop:10, marginLeft: 50}} 
            />
          </View>

          <View style = {{marginTop:  20, flexDirection: "column", justifyContent:'center', alignContent: 'center', alignItems:'center' }}>
                 
                  
              <TouchableOpacity 
                style = {{alignSelf: 'center', backgroundColor:  "#f5f5f4", borderRadius: 10, padding: 10, marginTop: 40}}
                onPress ={() => navigation.navigate("UpdateProgress",{
                  title: "The Unbearable Lightness of Being",
                  image: "https://i.harperapps.com/covers/9780060597184/y648.jpg",
                  page_count: "393",
                  page_num: "0"
                })}
                >
                <Text style = {{color:"#78716c", fontSize: 12}}>Update Progress</Text>
              </TouchableOpacity>
              {/* <Button colorScheme={"dark"} onPress={() => console.log("hello world")}>Update Progress</Button> */}

          </View>
          <NativeBaseProvider>
            <ProgressBar/>
          </NativeBaseProvider>

        </View>


      </View>
      )
    }

  function renderWantRead(myBooks){
    const renderItem = ({item, index}) => { 
      return(
      <TouchableOpacity
        style = {{
          flex: 1, 
          marginLeft: index == 0 ? 10: 0, 
          marginRight: 10,
          marginTop: 0,
        }}
      onPress ={console.log("book")}>
        
        {/*Book Cover*/}
        <Image 
          source = {{uri: item.bookCover}}
          resizeMode = 'cover'
          style = {{
            width: 95, 
            height:135, 
            borderRadius: 3
          }}
        />
      </TouchableOpacity>
      )
    }
  
    return(
      <View>
        <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={styles.h3}> Want To Read</Text>
          <TouchableOpacity onPress = {() => console.log("See More")}> 
            <Text style = {{fontSize: 12, color:"grey", textDecorationLine: "underline", marginRight: 5}}>see more</Text>
          </TouchableOpacity>
        </View>
  
        {/*Books*/}
        <View style = {{flex: 1, marginTop:10, }}>
          <FlatList 
            data = {myBooks}
            renderItem = {renderItem}
            keyExtractor = {item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator = {false}
  
          
          />
        </View>
      </View>
  
    )
  }
  
  function renderRead(){
    const renderItem = ({item, index}) => { 
      return(
      <TouchableOpacity
        style = {{
          flex: 1, 
          marginLeft: index == 0 ? 12:0, 
          marginRight: 12
        }}
      >
        {/*Book Cover*/}
        <Image 
          source = {{uri: item.bookCover}}
          resizeMode = 'cover'
          style = {{
            width: 95, 
            height:135, 
            borderRadius: 3
          }}
        />
      </TouchableOpacity>
      )
    }
    return(
      <View style = {{flex:1,}}>
        <View style = {{flexDirection: "row", justifyContent: "space-between", marginTop: 40,}}>
          <Text style={styles.h3}> Read</Text>
          <TouchableOpacity onPress = {() => console.log("See More")}> 
            <Text style = {{fontSize: 12, color:"grey", textDecorationLine: "underline", marginRight: 5}}>see more</Text>
          </TouchableOpacity>
        </View>
  
        {/*Books*/}
        <View style = {{flex: 1, marginTop:10, }}>
          <FlatList 
            data = {readBooks}
            renderItem = {renderItem}
            keyExtractor = {item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator = {false}
          />
        </View>
      </View>
    )
  }
  
  {/*Calling Everything*/}
    return(
      <SafeAreaView style = {{flex: 1,  backgroundColor: "white",}}>
        <View>
          {renderHeader(profile)}
          {renderProg()}
        </View>

        {/*BODY SECTION*/}
        <ScrollView style = {{marginTop: 50, marginLeft: 10,}}>
        
        
        {/*Want to Read */}
        <View>
          {renderWantRead(myBooks)}
        </View> 
  
        {/*Read */}
        <View>
          {renderRead(readBooks)}
        </View>
  
  
        </ScrollView>
      </SafeAreaView>
    )
  }
  const styles = StyleSheet.create({
    h1: {
      fontSize: 24, 
      lineHeight: 36,
      color: "#1E1B26",
      fontWeight: "bold",
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

export default Home; 

