import React, {useState} from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {images} from '../constants';
import { Center, Box, Progress, NativeBaseProvider } from 'native-base';

const Home = ({navigation}) => {


  {/*BOOK LIST */}

  const bookJaneEyre = {
    id: 0,
    bookName: "Jane Eyre",
    bookCover: images.janeEyre,
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
    bookCover: images.cryingHmart,
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
    bookCover: images.justKids,
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
    bookCover: images.normalPeople,
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

  const bookWeDoThis = {
    id: 4,
    bookName: "We Do This 'Til We Free Us",
    bookCover: images.weDoThis,
    rating: 5,
    language: "Eng",
    pageNo: 197,
    author: "Mariame Kaba",
    genre: [
        "Discrimination", "Feminist Theory",
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
      ...bookWeDoThis, 
      completion: "100%"
    }
  ]


  const profileData ={name: 'Karenna', }
  const [profile, setProfile] = React.useState(profileData); 
  const { width, height } = Dimensions.get("window");
  const [myBooks, setMyBooks] = React.useState(myBooksData); 
  const [readBooks, setReadBooks] = React.useState(readBooksData); 

  {/* PROGRESS BAR*/}
  const Example = () => {
  return <Center w="100%">
      <Box w="90%" maxW="400">
        <Progress size="xs" mb={4} value={35} />
      </Box>
    </Center>;
};

{/* WELCOME*/}
  function renderHeader(profile){
    return(
      <View style = {{flex:1, flexDirection: 'row', marginTop: 10, paddingHorizontal: 12, alignItems:'left',}}>
        <View style = {{flex:1}}>
          <View style={{marginRight:24}}>
              <Text style={styles.h3}>Good Morning</Text>
              <Text style = {styles.h1}>{profile.name}</Text>
              

          </View>
        </View>
      </View>
    )
  }

  {/* Currently Reading*/}
function renderProg(){
  return(
  <View style = {{flex: 1, justifyContent:'flex-start', alignnContent:'flex-start', paddingHorizontal: 12, marginTop: -20}}>
  <Text style={styles.h3}> Currently Reading...</Text>
    <View style = {{height: 150, backgroundColor: "#25282F", borderRadius: 10, }}>
      <Text style = {styles.h5}>The Unbearable Lightness of Being</Text>
      
      <View style = {{flexDirection: 'row', height: 120}}>
        <NativeBaseProvider>
          <Center flex={1} >
              <Image
          source={images.lightnessBeing}
          style={{ resizeMode: 'contain', width: 80, height: 110,borderRadius: 10, marginBottom:5, marginTop:20,}}>
              </Image>
              <Example/>
          </Center>
        </NativeBaseProvider>
        <TouchableOpacity style = {{alignSelf: 'center', marginRight:30, backgroundColor:  "#f5f5f4", borderRadius: 10, padding: 10}}>
          <Text style = {{color:"#78716c", fontSize: 12, fontWeight: "semi-bold"}}>Update Progress</Text>
        </TouchableOpacity>

      </View>
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
        marginRight: 10
      }}
    onPress ={() => navigation.navigate("BookDetail", {
      book: item
      })}>
      
      {/*Book Cover*/}
      <Image 
        source = {item.bookCover}
        resizeMode = 'cover'
        style = {{
          width: 85, 
          height:115, 
          borderRadius: 3
        }}
      />
    </TouchableOpacity>
    )
  }

  return(
    <View style = {{flex:1,}}>
      <View style = {{flexDirection: "row", justifyContent: "space-between", marginTop: 20,}}>
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
      onPress ={() => navigation.navigate("BookDetail", {
          book: item
      })}
    >
      {/*Book Cover*/}
      <Image 
        source = {item.bookCover}
        resizeMode = 'cover'
        style = {{
          width: 85, 
          height:115, 
          borderRadius: 3
        }}
      />
    </TouchableOpacity>
    )
  }


  return(
    <View style = {{flex:1,}}>
      <View style = {{flexDirection: "row", justifyContent: "space-between", marginTop: 20,}}>
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
    <SafeAreaView style = {{flex: 1,  backgroundColor: "#1E1B26",}}>
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

export default Home; 