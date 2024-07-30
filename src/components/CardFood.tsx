import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon, StopIcon } from 'react-native-heroicons/solid';
import { CurrencyBangladeshiIcon, MapPinIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/Octicons';

import { colors } from '../utils/theme';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { FoodProps } from '@/utils/interfaces';

// interface props{
//   id:number;
//   title: string;
//   imgUrl: string;
//   rating: number;
//   genre: string;
//   restaurant: string;
//   description: string;
// }

const CardFood = ({id,title,imgUrl,rating,genre,location,restaurant,description,price}:FoodProps) => {

  const navigation:any=useNavigation();
  
  return (
    <TouchableOpacity className='mr-3 bg-white shadow-sm  rounded-md'
      onPress={()=>{
        navigation.navigate('FoodDetail',{id,title,imgUrl,rating,genre,location,restaurant,description,price,fromList:false});
      }}
    >
      <Animated.Image
        source={{uri:imgUrl}}
        resizeMode='cover'
        className='h-44 w-64 rounded-sm'
        sharedTransitionTag={`imgcardfood_${id}`}
      />
      <View className='px-3 pb-4'>
        <View className='flex flex-row items-center mb-2 justify-between'>
          <Text className='text-2xl text-txt font-bold'>{title}</Text>
          <View className='flex flex-row items-center mr-2'>
            <StarIcon color={colors.icon} opacity={.7} size={18}/>
            <Text className='text-txt text-sm opacity-70 ml-1'>{rating}</Text>
          </View>
        </View>
        <View className='flex-row items-center space-x-2'>
          <View className='flex-row space-x-1'>
            <CurrencyBangladeshiIcon color={colors.icon} size={18}/>
            <Text className='text-txt text-sm opacity-70'>{price}</Text>
          </View>
            <Icon name="dot-fill" style={{opacity:.7}} color={colors.icon} size={5}/>
          <View className='flex-row'>
            <Text className='text-txt text-sm opacity-70'>{genre}</Text>
          </View>
        </View>
        <View className='flex-row items-center space-x-2 mt-1'>
          <View className='flex-row space-x-1'>
            <MapPinIcon color={colors.icon} opacity={.7} size={18}/>
            <Text className='text-txt opacity-70'>{restaurant}</Text>
          </View>
          <Icon name="dot-fill" style={{opacity:.7}} color={colors.icon} size={5}/>
          <View className='flex-row'>
            <Text className='text-txt text-sm opacity-70'>{location}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardFood;
