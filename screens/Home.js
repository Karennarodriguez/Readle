import React,{useState} from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";


const Home = ({navigation}) => {
    return(
        <SafeAreaView style = {{flex: 1,  backgroundColor: "#1E1B26",}}>
            <Text style = {styles.h1}> Home</Text>
        </SafeAreaView>
    )

}

export default Home; 

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