import React,  {useState,  useEffect} from 'react'; 
import {SafeAreaView, View, Text, Button , StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'; 
import {icons} from '../constants';

const UpdateProgress = ({route, navigation}) => {
    const {title, image, page_count} = route.params;
    const [page, setPage] = useState(0); 
    console.log(page);

    return( 
        <SafeAreaView > 
            <TouchableOpacity
                style = {{marginLeft: 12, marginTop: 20}}
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

            <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: -25}}>
                    <Text style = {styles.header}>
                        Update Your Progress
                    </Text> 
            </View>

            <View style = {{marginTop: 60 , flexDirection: 'column', paddingHorizontal: 12, height: 80, alignItems: "center"}}>
                <Image
                    source = {{uri: image}}
                    style = {{
                        width: 130, 
                        height: 190,
                        borderRadius: 6, 
                    }}
                    
                />

                <View style={{alignItems: 'center', justifyContent: 'center',  marginTop: 20}}>
                    <Text style = {styles.h3}>{title}</Text>
                    <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'center',  marginTop: 10}}>
                    <Text style = {styles.h5}>{"I'm on page  "}</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="#"
                        onChangeText={newPage => setPage(newPage)}
                    />

                    <Text style = {styles.h5}> {"of " + page_count}</Text>
                </View>
                    
            </View>

            </View>
        </SafeAreaView>
    )
}
export default UpdateProgress; 

const styles = StyleSheet.create({
    h2: {
        fontSize: 22, 
        lineHeight: 30, 
        color: "#1E1B26",
        fontWeight: "bold",
        fontFamily: 'Optima-Bold'

    },

    h3: {
        fontSize: 16, 
        lineHeight: 18, 
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
      fontSize: 13, 
      lineHeight: 12,
      color: "#1E1B26",
      marginTop: 5,
      marginLeft: 6, 
    },
}); 
