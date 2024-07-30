import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotalPrice } from '@/utils/redux/slices/basketSlice'
import { RootState } from '@/utils/redux/store'
import { CurrencyBangladeshiIcon } from 'react-native-heroicons/outline'
import { colors } from '@/utils/theme'
import { useNavigation } from '@react-navigation/native'
import BasketScreen from '@/screens/BasketScreen'
import { RootStackParamList } from '@/navigation/RootStack'

const BasketBar = () => {
  const navigation:any=useNavigation();
  const items=useSelector((state:RootState)=>state.basket.items);
  const totalItems=items.reduce((total,item)=>total+=item.quantity,0);
  if(totalItems===0)return;
  const totalPrice=items.reduce((total,item)=>total+=item.price*item.quantity,0);

  const handleBasket=()=>{
    navigation.navigate("Basket");
  }
  return (
    <View className='absolute bottom-5 w-full z-50 '>
      <TouchableOpacity onPress={handleBasket} activeOpacity={.8} className='bg-theme mx-5 px-4 py-2 flex-row rounded-lg items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg bg-[#C9A61B] py-1 px-2'>{totalItems}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <View className='flex-row space-x-1 items-center'>
          <CurrencyBangladeshiIcon color='white' size={22}/>
          <Text className='text-white font-extrabold text-lg'>{totalPrice}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default BasketBar
