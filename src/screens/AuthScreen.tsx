import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, SafeAreaView, BackHandler } from 'react-native';
import LoginFragment from '../components/fragments/LoginFragment';
import RegisterFragment from '../components/fragments/RegisterFragment';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/redux/store';
import { authScreenState } from '../utils/redux/slices/authScreenSlice';
import globalStyles from '@/styles/globalStyles';
import ResetPasswordFragment from '@/components/fragments/ResetPasswordFragment';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/RootStack';

type Props=NativeStackScreenProps<RootStackParamList,'Auth'>;
const AuthScreen = ({route,navigation,}:Props) => {
  const {screenType}=useSelector((state:RootState)=>state.authScreen);
  
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
  
  const handleLogin = () => {
    
  };

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea} className='bg-green-700'>
      <ScrollView className="">
        <View className="flex-1 justify-center items-center">

          {screenType==='LOGIN'&&<LoginFragment/>}
          {screenType==='REGISTRATION'&&<RegisterFragment/>}
          {screenType==='RESET'&&<ResetPasswordFragment/>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
