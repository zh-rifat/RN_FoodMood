import { View, Text, StatusBar, SafeAreaView, Image, BackHandler, TextInputComponent, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import globalStyles from '../styles/globalStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';
import SliderCategories from '../components/SliderCategories';
import Header from '../components/header/Header';
import SliderFeaturedRestaurants from '../components/SliderFeaturedRestaurants';
import SliderArea from '../components/SliderArea';
import SliderFeaturedFoods from '../components/SliderFeaturedFoods';
import { AdjustmentsHorizontalIcon,MagnifyingGlassIcon as SearchIcon } from 'react-native-heroicons/outline'
import { colors } from '@/utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/utils/redux/store';
import authScreenSlice from '@/utils/redux/slices/authScreenSlice';


type Props=NativeStackScreenProps<RootStackParamList,'Home'>;

const HomeScreen = ({route,navigation,}:Props) => {
  const isLoggedIn=useSelector((state:RootState)=>state.authScreen.isLoggedIn);



  useEffect(()=>{
    
    const timer=setTimeout(()=>{
      if(!isLoggedIn){
        navigation.replace('Auth');
      }
    },100);

    return ()=>clearTimeout(timer);

  },[navigation])
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        
        BackHandler.exitApp();
        return true;
      };

      const listener = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => listener.remove();
    }, [navigation])
  );


  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea} className='bg-theme'>
      <Header/>
      
      <ScrollView className='bg-gray-100' contentContainerStyle={{paddingBottom:20}}>
        <View className='flex-row items-center px-5 py-2 space-x-5 bg-yellow-400'>
          <View className='flex-1 bg-gray-200 flex-row items-center space-x- rounded-sm'>
            <SearchIcon style={{marginLeft:10}} size={20} color={'gray'}/>
            <TextInput 
              
              placeholder='Restaurants or Foods'
              placeholderTextColor={'gray'}
              keyboardAppearance='default'
              keyboardType='default'
              className='text-slate-700 flex-1 py-1.5 text-sm'
            />
          </View>
          <AdjustmentsHorizontalIcon size={30} color={colors.t1}/>
        </View>
        <SliderCategories/>
        <SliderArea/>
        <SliderFeaturedRestaurants title='Featured Restaurants' description='Popular restaurants near you.'/>
        <SliderFeaturedFoods title="Foodie's Favourites" description='Popular foods near you'/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
