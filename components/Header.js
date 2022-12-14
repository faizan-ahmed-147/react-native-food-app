import React from 'react'
import { View, Text, TouchableOpacity, ScrollView,Image } from "react-native";
import { COLORS } from '../constants';


// {menuList , filterItem}
const Header = ({menuList , filterItem}) => {
  return (
    <>
          <ScrollView horizontal={true}>
        <View style={{display: "flex" , flexDirection: "row" ,  backgroundColor: "white"}} >  
      
   {
      menuList.map((curElem)=>{ 
         return( 
        <TouchableOpacity style={{ backgroundColor: "orange", height: 40, margin: 10,  width: 70, borderRadius: 30, alignItems: "center", justifyContent: "center"}} onPress={()=>{filterItem(curElem)
        }}>
          {/* require("../assets/images/burger-restaurant.jpg") */}
        

        <Text >{curElem}</Text>     
        </TouchableOpacity>
         )
        }) 
      }
      </View>
      </ScrollView>
    </>
  )
}

export default Header