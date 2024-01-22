import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
};
const RootStack = () => {
  const Stack=createSharedElementStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator 
      initialRouteName='Splash'
      screenOptions={{headerShown:false}}
    >
      <Stack.Screen name='Splash'  component={SplashScreen} />
      <Stack.Screen name='Home' component={HomeScreen}  
        sharedElements={(route, otherRoute, showing) => {
          return [{ id: `logo`, animation: 'fade' }];
        }}
      />
    </Stack.Navigator>
  )
}

export default RootStack
