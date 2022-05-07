import React,{useState} from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {VStack, HStack, Button, Menu, NativeBaseProvider, Center} from 'native-base';

const Home = ({navigation}) => {
    return(
        <SafeAreaView style = {{flex: 1,  backgroundColor: "white",}}>
            <Text style = {styles.h1}> Home</Text>
            
            <View style = {{flex: 1, marginLeft: 20}}>
              <NativeBaseProvider>
                <View>
                  <Text style = {styles.h3}>Currently Reading</Text>
                  <HStack>

                  </HStack>
                </View>
                
                <View>
                  <Text style = {styles.h3}>Want To Read</Text>
                  <HStack>
                    
                  </HStack>
                </View>
                
                <View>
                  <Text style = {styles.h3}>Have Read</Text>
                  <HStack>
                    
                  </HStack>
                </View>
              </NativeBaseProvider>
            </View>
        </SafeAreaView>
    )

}

export default Home; 

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