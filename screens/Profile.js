import React, {useState, useTheme} from "react"; 
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {images} from '../constants';
import {Container, HStack, Avatar, Center, Box, Progress, NativeBaseProvider } from 'native-base';


const Profile = ({navigation}) => {
  
  const profileData ={name: 'Karenna', }
  const [profile, setProfile] = React.useState(profileData); 

  const { width, height } = Dimensions.get("window");
    function renderHeader(profile){
      return(
        <View style = {{flex:1, flexDirection: 'row', marginTop: 10, paddingHorizontal: 12, alignItems:'left',}}>
          <View style = {{flex:1}}>
            <View style={{marginRight:24}}>
                <Text style = {styles.h1}>{profile.name}</Text>
            </View>
          </View>
        </View>
      )
    }

  const Example = () => {
  return <HStack justifyContent="center" space={2}>
      <Avatar bg="green.500" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        AJ
      </Avatar>
    </HStack>
  }

  return(
    <SafeAreaView style = {{flex: 1, backgroundColor: "#1E1B26"}}>
      <View>
        {renderHeader(profile)}
      </View>
    </SafeAreaView>
  )
}

export default Profile; 

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