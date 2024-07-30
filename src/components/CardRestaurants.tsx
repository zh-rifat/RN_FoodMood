import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon, StopIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/Octicons';

import { colors } from '../utils/theme';
import { RestaurantProps } from '@/utils/interfaces';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const CardRestaurants = ({id,title,imgUrl,rating,genre,address,description}:RestaurantProps) => {
  
  const navigation:any=useNavigation();

  return (
    <TouchableOpacity className='mr-3 bg-white shadow-sm  rounded-md'      
      onPress={()=>{
        navigation.navigate('RestaurantDetail',{id,title,imgUrl,rating,genre,address,description});
      }}>
      <Animated.Image
        source={{uri:imgUrl}}
        resizeMode='cover'
        className='h-36 w-64 rounded-sm'
        sharedTransitionTag={`imgcardrestaurant_${id}`}
      />
      <View className='px-3 pb-4'>
        <Text className='text-2xl text-txt font-bold mb-2'>{title}</Text>
        <View className='flex-row items-center space-x-2'>
          <StarIcon color={colors.icon} opacity={.7} size={18}/>
          <Text className='text-txt text-sm opacity-70'>{rating}</Text>
          <Icon name="dot-fill" style={{opacity:.7}} color={colors.icon} size={5}/>
          <Text className='text-txt text-sm opacity-70'>{genre}</Text>
        </View>
        <View className='flex-row items-center space-x-2 mt-1'>
          <MapPinIcon color={colors.icon} opacity={.7} size={15}/>
          <Text className='text-txt opacity-70'>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardRestaurants
