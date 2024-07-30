import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/navigation/RootStack';
import globalStyles from '@/styles/globalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/utils/redux/store';
import {XCircleIcon} from 'react-native-heroicons/solid';
import {colors} from '@/utils/theme';
import {CurrencyBangladeshiIcon} from 'react-native-heroicons/solid';
import {removeItem} from '@/utils/redux/slices/basketSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Basket'>;
const BasketScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {items, restaurant} = useSelector((state: RootState) => state.basket);
  if (items.length === 0) {
    navigation.goBack();
  }
  const totalPrice = items.reduce((total, item) => (total += item.price * item.quantity), 0,);
  const deliveryCharge=15;

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <View className="bg-gray-100 flex-1 mx-2 overflow-hidden rounded-t-xl shadow-2xl shadow-black">
        <View className="p-4 border-theme/40 bg-white border-b">
          <Text className="text-2xl text-txt font-bold text-center">
            Basket
          </Text>
          <Text className=" text-gray-400 text-center">
            {restaurant?.title}
          </Text>

          <TouchableOpacity
            activeOpacity={0.6}
            className="absolute top-2 right-2"
            onPress={navigation.goBack}>
            <XCircleIcon color={colors.theme} size={40} />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={{paddingBottom: 30}}
          className="divide-y-2 px-2 divide-gray-200 mt-2">
          {items.map(item => (
            <View
              key={item.id}
              className="flex-row items-center space-x-3 px-5 py-2 bg-white">
              <Text className="text-gray-500 font-semibold">
                {item.quantity} x
              </Text>
              <Image
                source={{uri: item.imgUrl}}
                className="h-12 w-12 rounded-xl "
              />
              <Text className="text-txt text-bold flex-1">{item.title}</Text>
              <View className="flex-row space-x-0 items-center">
                <CurrencyBangladeshiIcon color={colors.icon} size={13} />
                <Text className="text-txt font-extrabold">
                  {item.price * item.quantity}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}>
                <Text className="text-red-400 font-semibold">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="flex flex-col px-6 bg-theme py-4">
          <View className="flex flex-row justify-between">
            <Text className="text-txt text-lg">Subtotal :</Text>
            <View className="flex-row space-x-1 items-center">
              <Text className="text-txt font-bold text-lg">
                {totalPrice}/=
              </Text>
              <CurrencyBangladeshiIcon color="black" size={22} />
            </View>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-txt text-lg">Delivery Charge : </Text>
            <View className="flex-row space-x-1 items-center">
              <Text className="text-txt font-bold text-lg">
                {deliveryCharge}/=
              </Text>
              <CurrencyBangladeshiIcon color="black" size={22} />
            </View>
          </View>
          <View className='border-b-2 border-yellow-500'/>
          <View className="flex flex-row justify-between">
            
            <Text className="text-txt text-lg font-bold">Total :</Text>
            <View className="flex-row space-x-1 items-center">
              <Text className="text-txt font-extrabold text-lg">
                {totalPrice+deliveryCharge}/=
              </Text>
              <CurrencyBangladeshiIcon color="black" size={22} />
            </View>
          </View>
          <View>
            
            <TouchableOpacity disabled={false} activeOpacity={.8}>
                <Text className={` py-2 px-6 font-bold text-lg text-white text-center mt-4 bg-txt rounded-md }`}>Proceed to payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
