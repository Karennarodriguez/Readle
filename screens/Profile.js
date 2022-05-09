import React, { useContext } from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, FlatList} from "react-native";
import { Center, Box, Progress, NativeBaseProvider, Image , HStack} from 'native-base';

const Profile = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext); 

  function renderProfileHeader(){
    return(
      <View style = {{justifyContent: 'center', alignItems:'center', flexDirection: "row"}}>
              <View style={{marginTop: 10}}> 
                <Image 
                style = {{height: 100, width:  100, borderRadius: 65, marginRight: 30}} 
                source = {{uri: "https://avatars.githubusercontent.com/u/20973064?v=4"}}
                alt = {"Profile Image"}
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
          <NativeBaseProvider
            style = {{flex: 5, backgroundColor: "white", marginTop: 10 }}
            contentContainerStyle = {{justifyContent: 'center', alignItems:'center'}}
            showsVerticalScrollIndicator={false}
          >
            {renderProfileHeader()}
            <View style = {{marginTop: 30, alignSelf: 'flex-start',  marginLeft: 10}}>
              <Text style = {styles.h3}> Favorites</Text>
            </View>
            
            <HStack>
              <TouchableOpacity>
                <Image 
                    style = {{height: 140, width:  100,  marginLeft: 25, marginTop: 30, borderRadius: 6} }
                    source = {{uri: "https://images-na.ssl-images-amazon.com/images/I/51OQ3fuFNcL.jpg"}}
                    alt = {"Profile Image"}
                  />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                    style = {{height: 140, width:  100,  marginLeft: 25, marginTop: 30, borderRadius: 6} }
                    source = {{uri: "https://quotepark.com/media/works/3775-in-watermelon-sugar.detail.png"}}
                    alt = {"Profile Image"}
                  />
            </TouchableOpacity>
          </HStack>
            

          </NativeBaseProvider>
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