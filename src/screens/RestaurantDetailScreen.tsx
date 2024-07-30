import {View, Text, StatusBar,SafeAreaView} from 'react-native';
import React, { useEffect } from 'react';
import {RootStackParamList} from '@/navigation/RootStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/micro';
import {colors} from '@/utils/theme';
import {StarIcon} from 'react-native-heroicons/solid';
import Icon from 'react-native-vector-icons/Octicons';
import {
  CurrencyBangladeshiIcon,
  MapPinIcon,
} from 'react-native-heroicons/outline';
import ListCardFood from '@/components/ListCardFood';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/utils/redux/store';
import BasketBar from '@/components/BasketBar';
import { emptyBasket, updateItems, updateRestaurant } from '@/utils/redux/slices/basketSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'RestaurantDetail'>;
const RestaurantDetailScreen = ({route, navigation}: Props) => {
  const {id, title, imgUrl, rating, genre, description,address} = route.params;
  
  // const {items}=useSelector((state:RootState)=>state.basket);

  // console.log('detail',items)

  // const findItemQuantity=(id:number)=>{
  //   return items.find(item=>{item.id===id})?.quantity||0;
  // }
  const dispatch=useDispatch();
  dispatch(emptyBasket(null));
  dispatch(updateRestaurant({id,title}))
  // useEffect(()=>{
  //   items=useSelector((state:RootState)=>state.basket.items);
  // },[navigation]);

  
  return (
      <View className='flex-1'>
        <StatusBar backgroundColor={'transparent'} animated />
        <View className="relative w-screen ">
          <Animated.Image
            source={{uri: imgUrl}}
            sharedTransitionTag={`imgcardrestaurant_${id}`}
            resizeMode="cover"
            className="h-64 w-full rounded-sm"
          />
          <TouchableOpacity
            className="absolute top-10 left-2 p-2 bg-slate-100 rounded-full"
            onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={22} color={colors.theme} />
          </TouchableOpacity>
        </View>
      
        <View className=' flex-1'>
          <ScrollView contentContainerStyle={{paddingBottom:70}}>
            <View className="bg-white">
              <View className="px-4 pt-4">
                <Text className="text-2xl text-txt font-bold">{title}</Text>
                <View className="flex-col space-y-1 my-1 f-info">
                  <View className="flex-row items-center space-x-2">
                    <View className="flex flex-row items-center">
                      <StarIcon color={colors.theme} opacity={0.7} size={22} />
                      <Text className="text-txt font-bold text-sm opacity-70 ml-1">
                        {rating}
                      </Text>
                    </View>
                    <Icon
                      name="dot-fill"
                      style={{opacity: 0.7}}
                      color={colors.icon}
                      size={5}
                    />
                    <View className="flex-row">
                      <Text className="text-txt text-sm font-bold opacity-70">
                        {genre}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row items-center space-x-2">
                    <View className="flex-row space-x-1 items-center">
                      <MapPinIcon color={colors.theme} opacity={0.7} size={22} />
                      <Text className="text-txt opacity-70">{address}</Text>
                    </View>
                  </View>
                </View>

                <View className="mt-1 py-2">
                  <Text className="text-txt text-justify">{description}</Text>
                </View>
              </View>

            </View>
            <View className='p-2 my-2 flex mx-auto w-full flex-1' >
              <Text className='text-blue-900 p-1 text-2xl font-bold'>Menu</Text>
              <ListCardFood
                id={4}
                title='Biriyani'
                imgUrl='https://www.kannammacooks.com/wp-content/uploads/chettinadu-chicken-biriyani-1-3.jpg'
                location='KUET'
                restaurant='FoodMood'
                description='Famous Restaurant in KUET. Famous Restaurant in KUET. Famous Restaurant in KUET. Famous Restaurant in KUET. Famous Restaurant in KUET. '
                genre='Rice and Snacks'
                rating={4.7}
                price={55.00}
              />
              <ListCardFood
                id={1}
                title='Biriyani'
                imgUrl='https://www.kannammacooks.com/wp-content/uploads/chettinadu-chicken-biriyani-1-3.jpg'
                location='KUET'
                restaurant='FoodMood'
                description='Famous Restaurant in KUET. Famous Restaurant in KUET. Famous Restaurant in KUET. Famous Restaurant in KUET. Famous Restaurant in KUET. '
                genre='Rice and Snacks'
                rating={4.7}
                price={55.00}
              />
              <ListCardFood
                id={2}
                title='Biriyani'
                imgUrl='https://www.kannammacooks.com/wp-content/uploads/chettinadu-chicken-biriyani-1-3.jpg'
                location='KUET'
                restaurant='FoodMood'
                description='Famous Restaurant in KUET. Famous Restaurant in KUET. Famous Restaurant in KUET. Famous Restaurant in KUET. Famous Restaurant in KUET. '
                genre='Rice and Snacks'
                rating={4.9}
                price={55.60}
              />
            </View>
          </ScrollView>
        </View>
        <BasketBar/>
    </View>
  );
};

export default RestaurantDetailScreen;
