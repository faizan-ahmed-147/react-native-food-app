import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import { COLORS, icons } from '../constants';
import OrderDilivery from '../screens/OrderDilivery';

const Tab = createMaterialBottomTabNavigator();
import React from 'react'

const MyTab = () => {
    return (
        <Tab.Navigator
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'white' }}
        // tabBarOptions={{
        //     // showLabel: false
        // }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="spoon" size={28} color="orange" />
                    ),
                //     tabBarButton: (props)=>(
                //         <TabBarCustomButton {...props}/>
                //    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="search" size={28} color="orange" />
                    ),
                }}
            />
            <Tab.Screen
                name="Like"
                component={OrderDilivery}
                options={{
                    tabBarLabel: 'contact',
                    tabBarIcon: ({ }) => (
                        <AntDesign name="contacts" size={28} color="orange" />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="user" size={28} color="orange" />
                    ),
                }}
            />
        


        </Tab.Navigator>
    )
}

export default MyTab