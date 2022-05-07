import React, { useContext } from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";

const Profile = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext); 

  function renderProfileHeader(){
    return(
      <View style = {{justifyContent: 'center', alignItems:'center', flexDirection: "row"}}>
              <View> 
                <Image 
                style = {{height: 100, width:  100, borderRadius: 65, marginRight: 30}} 
                source = {{uri: "https://avatars.githubusercontent.com/u/20973064?v=4"}}
                />
              </View>

              <View style = {{marginTop: 10,  alignItems:'center'}}>
                <Text style = {styles.h3}> Karenna Rodriguez</Text>

                <View style = {{flexDirection: "row", marginTop: 20}}>
                  <View style = {{flexDirection: "column", alignItems: "center",marginRight: 25}}>
                    <Text style = {styles.h5}>26</Text>
                    <Text style = {styles.body5}>Following</Text>
                  </View>

                  <View style = {{flexDirection: "column", alignItems: "center"}}>
                    <Text style = {styles.h5}> 23</Text>
                    <Text style = {styles.body5}>Followers</Text>
                  </View>
                </View>
            </View>
          </View>

    )
  }

  return(
      <SafeAreaView style = {{flex: 1,  backgroundColor: "white"}}>
          <Text style={styles.h1}>Profile</Text>
          <ScrollView 
            style = {{flex: 5, backgroundColor: "white", marginTop: 10 }}
            contentContainerStyle = {{justifyContent: 'center', alignItems:'center'}}
            showsVerticalScrollIndicator={false}
          >
            {renderProfileHeader()}
            <View style = {{marginTop: 30, alignSelf: 'flex-start',  marginLeft: 10}}>
              <Text style = {styles.h3}> Favorites</Text>
            </View>

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
      paddingTop: 12,
      fontFamily: 'Optima-Bold'
    },
  
    h3: {
      fontSize: 18, 
      lineHeight: 22,
      color: "#1E1B26",
      fontWeight: "bold",
      fontFamily: 'Optima-Bold'
    },
  
    h5: {
      fontSize: 15, 
      color: "#1E1B26",
      fontWeight: "bold",
    },

    body5: {
      fontSize: 12, 
      color: "gray"
    },

    userImg:{
      height: 10,
      width:  10, 
      borderRadius: 75,
    }
  
  })