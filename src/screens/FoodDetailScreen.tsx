import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RootStackParamList } from '@/navigation/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/micro';
import { colors } from '@/utils/theme';
import { MinusCircleIcon, StarIcon } from 'react-native-heroicons/solid';
import Icon from 'react-native-vector-icons/Octicons';
import { CurrencyBangladeshiIcon, MapPinIcon } from 'react-native-heroicons/outline';
import {PlusCircleIcon} from 'react-native-heroicons/solid';
import { useDispatch } from 'react-redux';
import { updateItems } from '@/utils/redux/slices/basketSlice';

type Props=NativeStackScreenProps<RootStackParamList,'FoodDetail'>;
const FoodDetailScreen = ({route,navigation}:Props) => {
  
  const dispatch=useDispatch();

  const {id,title,imgUrl,rating,genre,location,restaurant,description,price,fromList}=route.params;
  
  const [cquantity, setCquantity] = useState(0);
  const [minusDisabled, setMinusDisabled] = useState(true);
  const handleChangeQuantity=(x:number)=>{
    if(cquantity<=0&&x==-1)return;
    setCquantity(cquantity+x);
  }

  useEffect(()=>{
    if(cquantity<=0)setMinusDisabled(true);
    else setMinusDisabled(false);

  },[cquantity])

  return (
    <ScrollView>
      <StatusBar backgroundColor={'transparent'}
      animated
      />
      <View>
        
        <View className='relative w-screen '>
          <Animated.Image
            source={{uri:imgUrl}}
            sharedTransitionTag={`img${fromList?"list":""}cardfood_${id}`}
          resizeMode='cover'
          className='h-64 w-full rounded-sm'
          />
          <TouchableOpacity className='absolute top-10 left-2 p-2 bg-slate-100 rounded-full'
            onPress={()=>navigation.goBack()}
          >
            <ArrowLeftIcon size={22} color={colors.theme}/>

          </TouchableOpacity>
        </View>

        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <View className='flex flex-row items-center mb-2 justify-between'>
              <Text className='text-2xl text-txt font-bold'>{title}</Text>
              <View className='flex flex-row items-center mr-2'>
                <StarIcon color={colors.theme} opacity={.7} size={22}/>
                <Text className='text-txt font-bold text-sm opacity-70 ml-1'>{rating}</Text>
              </View>
            </View>
            <View className='flex-col space-y-1 my-1 f-info'>
              <View className='flex-row items-center space-x-2'>
                <View className='flex-row space-x-1 items-center'>
                  <CurrencyBangladeshiIcon color={colors.theme} size={22}/>
                  <Text className='text-txt text-sm font-bold opacity-70'>{price}</Text>
                </View>
                <Icon name="dot-fill" style={{opacity:.7}} color={colors.icon} size={5}/>
                <View className='flex-row'>
                  <Text className='text-txt text-sm font-bold opacity-70'>{genre}</Text>
                </View>
              </View>
              <View className='flex-row items-center space-x-2'>
                <View className='flex-row space-x-1 items-center'>
                  <MapPinIcon color={colors.theme} opacity={.7} size={22}/>
                  <Text className='text-txt opacity-70 font-bold'>{restaurant}</Text>
                </View>
                <Icon name="dot-fill" style={{opacity:.7}} color={colors.icon} size={5}/>
                <View className='flex-row'>
                  <Text className='text-txt text-sm opacity-70'>{location}</Text>
                </View>
              </View>
            </View>
            <View className='mt-1 py-2'>
              <Text className='text-txt text-justify'>
                {description}
              </Text>
            </View>
          </View>
        </View>
        <View className='px-4 py-2 my-2 bg-white flex-row items-center w-full  justify-between'>
          <View className='flex-row items-center space-x-3'>
            <TouchableOpacity onPress={()=>handleChangeQuantity(-1)} disabled={minusDisabled}
              className={`${minusDisabled&&'opacity-40'}`}  
            
            >
              <MinusCircleIcon size={42} color={colors.theme}/>
            </TouchableOpacity>
            <Text className='text-txt text-2xl rounded-3 border-slate-300 border px-2'>{cquantity}</Text>

            <TouchableOpacity onPress={()=>handleChangeQuantity(1)}>
              <PlusCircleIcon size={42} color={colors.theme}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity disabled={cquantity===0}>
              <Text className={`bg-theme py-2 px-6 font-bold text-lg text-white rounded-md ${cquantity===0&&'opacity-50'}`}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default FoodDetailScreen;
