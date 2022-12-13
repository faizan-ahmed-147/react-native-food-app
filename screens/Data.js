import { images } from "../constants"
const RestaurantData = [
    {
        id: 1,
        name: "Burger",
        rating: 4.8,
        photo: images.burger_restaurant_1,
        duration: "30 - 45 min",

        
        menu1: "Crispy Chicken Burger",
        description1: "Burger with crispy chicken, cheese and lettuce",
        calories1: 200,
        price1: 10,

        menu2: "Crispy Chicken Burger",
        description2: "Crispy Chicken Burger with Honey Mustard Coleslaw",
        calories2: 250,
        price2: 15,


    },

    {
        id: 2,
        name: "Pizza",
        rating: 4.8,
        photo: images.pizza_restaurant,
        duration: "15 - 20 min",



        menu1: "Hawaiian Pizza",

        description1: "Canadian bacon, homemade pizza crust, pizza sauce",
        calories1: 250,
        price1: 15,


        menu2: "Tomato & Basil Pizza",

        description2: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        calories2: 250,
        price2: 20,



    },
    {
        id: 3,
        name: "Pizza",
        rating: 4.8,
        photo: images.pizza_restaurant,
        duration: "15 - 20 min",



        menu1: "Hawaiian Pizza",

        description1: "Canadian bacon, homemade pizza crust, pizza sauce",
        calories1: 250,
        price1: 15,


        menu2: "Tomato & Basil Pizza",

        description2: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        calories2: 250,
        price2: 20,



    },

    {
        id: 4,
        name: "Hotdogs",
        rating: 4.8,
        photo: images.hot_dog_restaurant,
        duration: "20 - 25 min",



        menu1: "Chicago Style Hot Dog",
        description1: "Fresh tomatoes, all beef hot dogs",
        calories1: 100,
        price1: 20,

        menu2: "Tomato & Basil Pizza",

        description2: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        calories2: 250,
        price2: 20,


    },
    {
        id: 5,
        name: "Hotdogs",
        rating: 4.8,
        photo: images.hot_dog_restaurant,
        duration: "20 - 25 min",



        menu1: "Chicago Style Hot Dog",
        description1: "Fresh tomatoes, all beef hot dogs",
        calories1: 100,
        price1: 20,

        menu2: "Tomato & Basil Pizza",

        description2: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        calories2: 250,
        price2: 20,


    },
    {
        id: 6,
        name: "Sushi",
        rating: 4.8,
        categories: [8],
        photo: images.japanese_restaurant,
        duration: "10 - 15 min",



        menu1: "Sushi sets",
        description1: "Fresh salmon, sushi rice, fresh juicy avocado",
        calories1: 100,
        price1: 50,

        menu2: "Tomato & Basil Pizza",

        description2: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        calories2: 250,
        price2: 20,


    },
    {
        id: 7,
        name: "Cuisine",
        rating: 4.8,
        categories: [1, 2],
        photo: images.noodle_shop,
        duration: "15 - 20 min",



        menu1: "Kolo Mee",
        description1: "Noodles with char siu",
        calories1: 200,
        price1: 5,

        menu2: "Sarawak Laksa",
        description2: "Vermicelli noodles, cooked prawns",
        calories2: 300,
        price2: 8,

   

    },
    {

        id: 8,
        name: "Dessets",
        rating: 4.9,
        categories: [9, 10],
        photo: images.kek_lapis_shop,
        duration: "35 - 40 min",

         
        menu1: "Teh C Peng",
        description1: "Three Layer Teh C Peng",
        calories1: 100,
        price1: 2,
            



    }


]

export default RestaurantData 