import React, { useContext } from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";

const Profile = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext); 

  return(
      <SafeAreaView style = {{flex: 1,  backgroundColor: "white"}}>
          <Text style={styles.h1}>Profile</Text>
          <ScrollView 
            style = {{flex: 1, backgroundColor: "white" }}
            contentContainerStyle = {{justifyContent: 'center', alignItems:'center'}}
            showsVerticalScrollIndicator={false}
          >
            <Image 
            style = {{height: 40, width:  40, borderRadius: 65}} 
            source = {require('../assets/icons/user_icon.png')}
            />

            <Text style = {styles.h3}> Harry Styles</Text>
            <Text> Lorem Ipsum </Text>



          </ScrollView>
      </SafeAreaView>
  );
};

export default Profile; 

const styles = StyleSheet.create({
    h1: {
      fontSize: 24, 
      lineHeight: 36,
      color: "#1E1B26",
      fontWeight: "bold",
      paddingLeft: 12, 
      paddingTop: 12
    },
  
    h3: {
      fontSize: 16, 
      lineHeight: 22,
      color: "#1E1B26",
      fontWeight: "bold"
    },
  
    h5: {
      fontSize: 12, 
      lineHeight: 18,
      color: "#1E1B26",
      marginTop: 5,
      marginLeft: 6, 
    },

    userImg:{
      height: 10,
      width:  10, 
      borderRadius: 75,
    }
  
  })