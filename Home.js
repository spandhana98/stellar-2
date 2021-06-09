import React, { Component } from 'react';
import { Text, View,StyleSheet ,TouchableOpacity,SafeAreaView,
     Platform,StatusBar,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                  <ImageBackground source = {require('../assets/main-icon.png')}>
                    <View style = {styles.titleBar}>
                        <Text> Stellar App</Text>
                    </View>


                    <TouchableOpacity style = {styles.button} onPress={()=>
                    this.props.navigation.navigate("DailyPic.js")}>
                    <Text style={styles.buttonText}> DailyPic </Text>
                    <Image source = {require('../assets/daily_pictures.png')}></Image>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style = {styles.button} onPress={()=>
                    this.props.navigation.navigate("SpaceCrafts.js")}>
                    <Text style={styles.buttonText}> SpaceCrafts</Text>
                    <Image source = {require('../assets/space_crafts.png')}></Image>
                    </TouchableOpacity>

                  
                    <TouchableOpacity style = {styles.button} onPress={()=>
                    this.props.navigation.navigate("StarMap.js")}>
                    <Text style={styles.buttonText}> StarMap</Text>
                    <Image source = {require('../assets/star_map.png')}></Image>
                    </TouchableOpacity>
                    </ImageBackground>
                    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
      //  justifyContent: "center",
    // alignItems: "center"
    },
    droidSafeArea : {
        marginTop : Platform.OS ==="android" ? StatusBar.currentHeight:0 
    },

    button : {
        flex : 0.25,
        marginLeft : 50,
        marginRight : 50,
        marginTop :50,
        borderRadius:30,
        backgroundColor :'WHITE'
    },
buttonText : {
    fontSize : 35,
    color :'BLACK'
}
})