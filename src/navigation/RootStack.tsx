import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import AuthScreen from '../screens/AuthScreen';
import FoodDetailScreen from '@/screens/FoodDetailScreen';
import RestaurantDetailScreen from '@/screens/RestaurantDetailScreen';
import BasketScreen from '@/screens/BasketScreen';


export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Auth: undefined;
  FoodDetail: {
    id:number,
    imgUrl:string,
    title:string,
    rating:string,
    price:number,
    genre:string,
    location:string,
    restaurant:string,
    description:string,
    quantity:number,
    fromList:boolean
  };
  RestaurantDetail:{
    id:number,
    title: string,
    imgUrl: string,
    rating: number,
    genre: string,
    address: string,
    description: string,
  };
  Basket:undefined
};
const RootStack = () => {
  const Stack=createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerShown:false,
        animation:'slide_from_right',
        animationDuration:100,
        statusBarAnimation:"slide",
        contentStyle:{},
      }}
      
      
    >
      <Stack.Screen name='Splash'  component={SplashScreen} />
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Auth' component={AuthScreen}/>
      <Stack.Screen name='FoodDetail' component={FoodDetailScreen}/>
      <Stack.Screen name='RestaurantDetail' component={RestaurantDetailScreen}/>
      <Stack.Screen name='Basket' component={BasketScreen} 
        options={{presentation:'transparentModal',
                  animation:'slide_from_bottom',
                  headerShown:false,

                }}
      />
  
    </Stack.Navigator>
  )
}

export default RootStack
