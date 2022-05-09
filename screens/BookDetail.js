import React, {useState, useEffect} from "react"; 
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, Animated} from "react-native";
import {VStack, Button, Menu, NativeBaseProvider, Center} from 'native-base';
import {icons} from '../constants';

// import { db } from "../firebaseConfig";
// import {doc} from "@react-native-firebase/firestore";


const LineDivider = () => {
    return (
        <View  style  = {{width: 1, paddingVertical: 5}}>
            <View style = {{ flex: 1, borderLeftColor: "#e76f51", borderLeftWidth: 1 }}></View>
        </View>
    )
}


const BookDetail = ({ route, navigation}) => {
    const [book, setBook] = useState(null); 
    const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);
    const indicator = new Animated.Value(0); 
    const [shouldOverlapWithTrigger] = useState(false);
    const [position, setPosition] = useState("auto");
    const [isLiked, setIsLiked] = useState(false); 
    const [favorites, setFavorites] = useState([]);
    const [bookList, setBookList] = useState([]);
   

    const onPress = async () => {
        setIsLiked((isLiked) => !isLiked)
        setFavorites(book)
        // AsyncStorage.setItem("favorite_books", favorites)
    }


    // async function addBook(newBook){
    //     let temp = [...bookList];
    //     temp.unshift(newBook);
    //     // const tempString = JSON.stringify(temp);
    //     // await AsyncStorage.setItem("bookList", tempString)
    //     setBookList(temp);
    // }
    // const addBook = (newBook) => {

    //     const newDoc  =  doc(db, "currentlyReading", "newBook" )
    //     const docData = {
    //         image: "https:"+ newBook.volumeInfo.imageLinks.thumbnail.substring(5,100),
    //         name: newBook.volumeInfo.title,
    //     }
    //     setDoc (newDoc, docData)
    //     .then(()=>{
    //         alert("document created!")

    //     })
    //     .catch((error)=>{
    //         alert("failed")
    //     })

    // }
    // getBook();

  useEffect(() => {
    let {book} = route.params;
    setBook(book);
  }, [book]); 


  function renderBookInfoSection(){
      return(
          <View style={{flex: 1}}>
              <ImageBackground
                source={{uri: "https:"+ book.volumeInfo.imageLinks.thumbnail.substring(5,100)}}
                resizeMode = "cover"
                style = {{
                    position: 'absolute', 
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left:0,
                    
                }}
              />
            {/* COLOR OVERLAY*/}
            <View
                style = {{
                    position: 'absolute', 
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left:0,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                
                }}
            >
            </View>

            {/* NAV HEADER */}
            <View style = {{flexDirection: 'row', paddingHorizontal: 12, height: 80, alignItems: "flex-end"}}>
                <TouchableOpacity
                    style = {{marginLeft: 12}}
                    onPress={()=> navigation.goBack()}
                >
                    <Image 
                        source={icons.back_arrow_icon}
                        resizeMode = "contain"
                        style = {{
                            width: 25, 
                            height: 25,
                            tintColor: "#1E1B26"
                        }}
                    />

                </TouchableOpacity>
               
                <View style = {{flex:  1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style = {styles.header}>
                        Book Detail
                    </Text> 
                </View>

                {/* LIKE BUTTON */}
                <View>
                    <TouchableOpacity
                        onPress = {onPress}
                    >
                        {isLiked ? (
                            <Image 
                                source={icons.heart_icon}
                                style = {[styles.heart, styles.heartFilled]}
                            />
                            ) : (
                            
                            <Image 
                                source={icons.heart_icon}
                                style = {styles.heart}
                            />
                            )
                        }

                    </TouchableOpacity>
                </View>
            </View>

            {/* BOOK COVER */}
            <View style ={{flex: 5, paddingTop: 36, alignItems: "center"}}>
                <Image 
                    source = {{uri: "https:"+ book.volumeInfo.imageLinks.thumbnail.substring(5,100)}}
                    resizeMode = "contain"
                    style =  {{
                        flex: 1, 
                        width: 150, 
                        height: "auto" ,
                        borderRadius: 20,
                    }}
                />
            </View>
            
            {/* BOOK NAME AND AUTHOR*/}
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.h2}>{book.volumeInfo.title}</Text>
                <Text style = {styles.h5}>{book.volumeInfo.authors}</Text>
            </View>

            <View
                style = {{
                    flexDirection: 'row', 
                    paddingVertical: 10, 
                    margin: 20, 
                    borderRadius: 8, 
                    backgroundColor: "rgba(231,111,81,0.4)"
                }}
            >
                {/* Rating */}
                <View style = {{flex: 1, alignItems: 'center'}}>
                    <Text style = {styles.h3}>
                        {book.volumeInfo.averageRating}
                    </Text>
                    <Text style = {styles.body4}>Rating</Text>
                </View>

                <LineDivider/>
            

                {/* Pages */}
                <View style = {{flex: 1, alignItems: 'center'}}>
                    <Text style = {styles.h3}>
                        {book.volumeInfo.pageCount}
                    </Text>
                    <Text style = {styles.body4}>No. of Pages</Text>
                </View>

                <LineDivider/>

                {/* Language */}
                <View style = {{flex: 1, alignItems: 'center'}}>
                    <Text style = {styles.h3}>
                        {book.volumeInfo.language}
                    </Text>
                    <Text style = {styles.body4}>Language</Text>
                </View>
            
            </View>
        </View>
                
      )
  }

  function renderBookDescription(){
      const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ?
      scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : 
      scrollViewVisibleHeight

      const difference = scrollViewVisibleHeight > indicatorSize ? 
      scrollViewVisibleHeight - indicatorSize : 1
      
      return(
        <View style = {{flex:1, flexDirection:"row", padding: 20 }}>
              {/*SCROLL BAR*/}
              <View style={{width: 4, height: "100%", backgroundColor: "gray"}}>

            <Animated.View
                style ={{
                    width: 4, 
                    height:  indicatorSize, 
                    backgroundColor: "#CCCCCC",
                    transform: [{
                        translateY: Animated.multiply(indicator, scrollViewVisibleHeight/scrollViewWholeHeight).
                        interpolate({
                            inputRange: [0, difference],
                            outputRange: [0, difference], 
                            extrapolate: 'clamp'
                        }) 
                    }]
                }}
            
            />


        </View>
        
        {/* DESCRIPTION */}
        <ScrollView 
            contentContainerStyle = {{paddingLeft: 32 }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onContentSizeChange = {(width, height) => {
                setScrollViewWholeHeight(height)
            }}
            onLayout = {({nativeEvent: {layout: {x, y, width, height}}}) =>{
                setScrollViewVisibleHeight(height)
            }}
            onScroll = {Animated.event(
                [{nativeEvent: {contentOffset: {y: indicator} }}], 
                {useNativeDriver: false}
            )}
        >
            <Text style = {styles.h3}>
                Description
            </Text>

            <Text style = {styles.body2}>
                {book.volumeInfo.description}
            </Text>
        </ScrollView>
        </View>
      )

  }
function renderDropDown(){
    return (
    <VStack space={0}>
        <Menu shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
        placement={position == "auto" ? undefined : position} trigger={triggerProps => {
        return <Button  colorScheme = "light" variant = "subtle" marginBottom = "10" alignSelf="center" {...triggerProps}>
                Add to a Bookshelf
                </Button>;
        }}>
            <Menu.Item onPress={()=>console.log("Currently Reading")}>Currently Reading</Menu.Item> 
            {/* {console.log({bookList})} */}
            <Menu.Item onPress={()=> console.log("Want To Read")}>Want To Read</Menu.Item>
            <Menu.Item onPress={()=> console.log("Have Read")}>Have Read</Menu.Item>
        </Menu>
    </VStack>
    )
}


  if(book){
    return(
        <View style ={{flex: 1, backgroundColor: "white"}}>
            {/*BOOK COVER*/}
        
            <View style = {{flex: 4}}>
                {renderBookInfoSection()}
            </View>

            {/*BOOK DESCRIPTION*/}
            <View style = {{flex: 2}}>
                {renderBookDescription()}
            </View>
            

            {/*Buttons*/}
            {/* <View style = {{height: 70}}> 
                {renderPicker()}
            </View> */}
        <NativeBaseProvider style = {{padding: 0}}>
            <Center flex={3} px="3">
                {renderDropDown()}
            </Center>
          </NativeBaseProvider>
        </View>
    );

  }else{
      return (<></>)
  }

}

export default BookDetail; 

const styles = StyleSheet.create({
    h1: {
      fontSize: 24, 
      lineHeight: 36,
      color: "#1E1B26",
      fontWeight: "bold",
      paddingLeft: 12, 
      paddingTop: 12,
      paddingBottom: 15,
      fontFamily: 'Optima-Bold'
    },

    h2: {
        fontSize: 22, 
        lineHeight: 30, 
        color: "#1E1B26",
        fontWeight: "bold",
        fontFamily: 'Optima-Bold'

    },

    h3: {
        fontSize: 16, 
        lineHeight: 20, 
        color: "#1E1B26",
        fontWeight: "bold",
        fontFamily: 'Optima-Bold'
  
      },
  
    header: {
      fontSize: 16, 
      lineHeight: 22, 
      color: "#1E1B26",
      fontWeight: "bold",
      marginRight: 0, 

    },
  
    h5: {
      fontSize: 12, 
      lineHeight: 18,
      color: "#1E1B26",
      marginTop: 5,
      marginLeft: 6, 
    },
    
    body4: {
        fontSize: 14, 
        lineHeight: 22, 

    },

    body2: {
        fontSize: 16,
        lineHeight: 30, 
        color: "gray",
    },
    
    heart: {
        tintColor: "gray",
        height: 25, 
        width: 25,
        marginRight:10
    },

    heartFilled: {
        tintColor: "#E83941",
        height: 25, 
        width: 25,
        marginRight:10
    }

  
  })