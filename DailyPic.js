import React,{component} from 'react'
import { Text ,View} from 'react-native'
  
export default class  DailyPicScreen extends component {
    render (){
        return(
            <View
            Style={{
                flex : 1,
                justifyContent: "center",
                alignItems :"centere"
            }}>
                <Text>DailyPicScreen</Text>
            </View>
        )
    }
}