import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FoodProps } from '@/utils/interfaces';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { CurrencyBangladeshiIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/outline';
import { colors } from '@/utils/theme';
import Icon from 'react-native-vector-icons/Octicons';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { updateItems } from '@/utils/redux/slices/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/utils/redux/store';

const ListCardFood = ({id,title,imgUrl,rating,genre,location,restaurant,description,price}:FoodProps) => {
  const navigation:any=useNavigation();  
  const dispatch=useDispatch();
  const items=useSelector((state:RootState)=>state.basket.items);
  console.log('detail' ,items.length)
  let qty=0;
  const existingIndex=items.findIndex(item=>item.id===id);
  if(existingIndex!==-1){
    qty=items[existingIndex].quantity;
  }
  const [cquantity, setCquantity] = useState(qty);
  const [minusDisabled, setMinusDisabled] = useState(true);
  
  const handleChangeQuantity=(x:number)=>{
    if(cquantity==0&&x==-1)return;
    dispatch(updateItems({id,quantity:cquantity+x,price,imgUrl,title}));
    setCquantity(cquantity+x);
  }
  useEffect(()=>{
    if(cquantity==0)setMinusDisabled(true);
    else setMinusDisabled(false);
  },[cquantity,dispatch])

  useEffect(() => {
    setCquantity(qty);
  }, [qty]);

  return (
      <View className='flex-row justify-between items-start p-2 my-2 bg-white shadow-sm  rounded-md '>
        <View className='w-2/3'>
          <View className='flex flex-row items-center mb-2 justify-between'>
            <Text className='text-lg text-txt font-bold'>{title}</Text>
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
          <View className='flex-row items-center mt-1 overflow-hidden'>
            <Text className='text-sm text-txt text-justify'>
              {description}
            </Text>
          </View>



        </View>
        <View className='flex flex-col items-center'>

    <TouchableOpacity
      onPress={()=>{
        navigation.navigate('FoodDetail',{id,title,imgUrl,rating,genre,location,restaurant,description,price,fromList:true});
      }}
    >
          <Animated.Image
            source={{uri:imgUrl}}
            resizeMode='cover'
            className='h-24 w-24 rounded-sm'
            sharedTransitionTag={`imglistcardfood_${id}`}
          />        
    </TouchableOpacity>
          <View className='py-1 my-1 bg-white flex-row items-center w-full  justify-between'>
          <View className='flex-row items-center space-x-1'>
            <TouchableOpacity onPress={()=>handleChangeQuantity(-1)} disabled={minusDisabled}
              className={`${minusDisabled&&'opacity-40'}`}  
            
            >
              <MinusCircleIcon size={32} color={colors.theme}/>
            </TouchableOpacity>
            <Text className='text-txt text-xl rounded-3 border-slate-300 border px-2'>{cquantity}</Text>

            <TouchableOpacity onPress={()=>handleChangeQuantity(1)}>
              <PlusCircleIcon size={32} color={colors.theme}/>
            </TouchableOpacity>
          </View>
        </View>

        </View>
      </View>
  )
}

export default ListCardFood;
