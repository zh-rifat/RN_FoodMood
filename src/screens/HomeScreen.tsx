import { View, Text, StatusBar, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/globalStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';
import { SharedElement } from 'react-navigation-shared-element';

type Props=NativeStackScreenProps<RootStackParamList,'Home'>;

const HomeScreen = ({route,navigation}:Props) => {
  
  


  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea} className= 'flex-1'>
      <View className='p-2'>
        <SharedElement id='logo'>
        <Image
          source={require('../assets/logo_square.jpg')}
          className='w-16 h-16 rounded-full'
          resizeMode='cover'
        />

        </SharedElement>
      </View>
      <Text className='bg-red-400 text-black'>home ff</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
