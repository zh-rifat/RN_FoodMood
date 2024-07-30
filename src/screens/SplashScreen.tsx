import { View, Text, StatusBar, Platform, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';
import { containerAnimation, containerAnimationStyles, logoAnimation, logoAnimationStyles, logoTransition } from '../styles/splash-screen-animation';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@/utils/theme';


type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;



const SplashScreen = ({route,navigation}:Props) => {
  useLayoutEffect(() => {

  }, []);

  const nav:any=useNavigation();

  useEffect(()=>{
    const timer=setTimeout(()=>{
      navigation.navigate('Home');
    },3000);

    return ()=>clearTimeout(timer);

  },[navigation]);



  // const startLogoAnimation=()=>{
  //   Animated.spring(logoAnimation,{
  //     toValue:1,
  //     useNativeDriver:true
  //   }).start();
  // }
  // const startContainerAnimation=()=>{
  //   Animated.spring(containerAnimation,{
  //     toValue:1,
  //     useNativeDriver:false
  //   }).start();
  // }

  const screenWidth=Dimensions.get('window').width;
  console.log(screenWidth);




  return (
    <Animated.View className={`flex-1 justify-center items-center bg-yellow-400`}>
      <Animated.View className={`bg-yellow-400 w-full p-10 overflow-hidden`}
        sharedTransitionTag='logo'
        // sharedTransitionStyle={logoTransition}
        style={{height:screenWidth}}
        
      >
          <FastImage 
            
            className='w-full h-full'
            source={require('../assets/splash_animation_tr_r.gif')} 
            resizeMode={'contain'}
          />
      </Animated.View>
    </Animated.View>
  )
}


export default SplashScreen
