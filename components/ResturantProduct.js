import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SIZES, FONTS, COLORS } from '../constants';
import OrderDilivery from '../screens/OrderDilivery';

const ResturantProduct = ({ menuData }) => {
    const navigation = useNavigation()

    return (

        <>

            <ScrollView>
                {menuData.map((curElem) => {
                    const { id, name, photo, duration, menu1, description1, calories1, price1, menu2, description2, calories2, price2 } = curElem
                    return (
                        <>
                            <TouchableOpacity key={id} 
                                style={{
                                    backgroundColor: "white",
                                    marginBottom: 20,
                                    borderRadius: 30


                                }} 
                                onPress={() => navigation.navigate(OrderDilivery, {
                                 
                                })} >
                                <Text
                                    style={{
                                        marginLeft: 8,
                                        color: COLORS.black,
                                        fontWeight: "700",
                                        fontSize: 30
                                    }}
                                >
                                    {name}
                                </Text>
                                <View
                                    style={{

                                        width: 340,


                                    }}
                                >
                                    <Image
                                        source={photo}
                                        resizeMode="contain"
                                        style={{
                                            marginTop: 3,
                                            marginLeft: 6,
                                            width: 350,
                                            height: 150,
                                            borderRadius: 30,

                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 16,
                                        marginTop: -20,
                                        width: 100,
                                        borderRadius: 10,
                                        textAlign: "center",
                                        backgroundColor: "white"
                                    }}>{duration}</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    fontWeight: "400",
                                    fontSize: 20,
                                    marginTop: 17,
                                }}>
                                    <Text style={{
                                        fontWeight: "400",
                                        fontSize: 20,
                                    }}>Menu : <Text style={{ color: "orange" }}>{menu1}</Text></Text>
                                    <Text style={{
                                        fontWeight: "400",
                                        fontSize: 20,
                                    }}>Description : <Text style={{ color: "orange" }}>{description1}</Text></Text>
                                    <Text style={{
                                        fontWeight: "400",
                                        fontSize: 20,
                                    }}>Calories : <Text style={{ color: "orange" }}>{calories1}</Text></Text>
                                    <Text style={{
                                        fontWeight: "400",
                                        fontSize: 20,
                                    }}>Price : <Text style={{ color: "orange" }}>{price1}</Text></Text>

                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    marginTop: 10,

                                }}>
                                    <Text style={{
                                        fontWeight: "400",
                                        fontSize: 20,
                                    }}>Menu : <Text style={{ color: "orange" }}>{menu2}</Text></Text>
                                    <Text style={{
                                        fontWeight: "400",
                                        fontSize: 20,
                                    }}>Description : <Text style={{ color: "orange" }}>{description2}</Text></Text>
                                    <Text style={{
                                        fontWeight: "400",
                                        fontSize: 20,
                                    }}>Calories : <Text style={{ color: "orange" }}>{calories2}</Text></Text>
                                    <Text style={{
                                        fontWeight: "400",
                                        fontSize: 20,
                                    }}>Price : <Text style={{ color: "orange" }}>{price2}</Text></Text>

                                </View>
                                <TouchableOpacity
                                    style={{
                                        marginTop: 9,
                                        backgroundColor: "orange",
                                        height: 30,
                                        width: 80,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 15
                                    }}>
                                    <Text>Order Now</Text>
                                </TouchableOpacity>


                            </TouchableOpacity>
                        </>
                    )
                })}
            </ScrollView>


        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});


export default ResturantProduct