import React, {useState, useEffect} from "react"; 
import {View, Text,  ImageBackground, TouchableOpacity,  Image, StyleSheet, SafeAreaView} from "react-native";
import {icons, images} from '../constants';


const BookDetail = ({route, navigation}) => {
  const [book, setBook] = useState(null); 

  useEffect(() => {
    let {book, onPress} = route.params;
    setBook(book);
  }, [route.params]); 

  
  return(
    <SafeAreaView>
      <Text style = {styles.h1}>Hi</Text>
    </SafeAreaView>
  )
}

export default BookDetail; 

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