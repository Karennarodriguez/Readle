import React, { useContext } from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";

const Profile = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext); 

  return(
      <SafeAreaView style = {{flex: 1,  backgroundColor: "#1E1B26"}}>
          <Text style={styles.h1}>Profile</Text>
          <ScrollView 
            style = {{flex: 1, backgroundColor: "#1E1B26" }}
            contentContainerStyle = {{justifyContent: 'center', alignItems:'center'}}
            showsVerticalScrollIndicator={false}
          >
            <Image style = {styles.userImg} source = {require('../assets/icons/user_icon.png')}/>


          </ScrollView>
      </SafeAreaView>
  );
};

export default Profile; 

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