import React, { useLayoutEffect, useState } from 'react'
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import ResturantProduct from '../components/ResturantProduct';
import Header from '../components/Header';
import RestaurantData from './Data';


const UniqueList = [...new Set(RestaurantData.map((curElem) => {
  return curElem.name 
})),"All"]

console.log(UniqueList);

const HomeScreen = () => {
  


  const [menuData, setMenuData] = useState(RestaurantData)
  const [menuList, setMenyList] = useState(UniqueList)



  const filterItem = (name) => {
    if (name === "All"){
      setMenuData(RestaurantData)
      return
    }
    const updatedList = RestaurantData.filter((curElem) => {
      return curElem.name === name
    })
    setMenuData(updatedList)
  }


  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  return (
    <SafeAreaView >


      <View className="flex-row bg-white pt-3">
        <Image source={{
          uri: "https://links.papareact.com/wru",
        }}
          className="h-7 w-7 bg-grey-300 rounded-full p-4">

        </Image>
        <View className="flex-1">
          <Text className="font-bold text-grey-400 text-xs">Deleviry Now!</Text>
          <Text className="font-bold text-grey-400 text-xl">Current Location
            <AntDesign name="downcircle" size={24} color="orange" /></Text>
        </View>

        <AntDesign name="user" size={40} color="orange" /></View>
      <View>

      </View>

      <Header menuList={menuList} filterItem={filterItem} />
      <ResturantProduct menuData={menuData} />
    </ SafeAreaView>
  )
}

export default HomeScreen