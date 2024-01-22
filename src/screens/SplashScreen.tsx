import { View, Text, StatusBar, Platform, Animated, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import FastImage from 'react-native-fast-image';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';
import { containerAnimation, containerAnimationStyles, logoAnimation, logoAnimationStyles } from '../styles/splash-screen-animation';

import { SharedElement } from 'react-navigation-shared-element';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;



const SplashScreen = ({route,navigation}:Props) => {
  useLayoutEffect(() => {

  }, []);

  useEffect(()=>{
    
    const timer=setTimeout(()=>{
      startLogoAnimation();
      startContainerAnimation();
    },3000);

    return ()=>clearTimeout(timer);
  },[]);

  useEffect(()=>{
    
    const timer=setTimeout(()=>{
      navigation.replace('Home');
    },5000);

    return ()=>clearTimeout(timer);
  },[navigation]);



  const startLogoAnimation=()=>{
    Animated.spring(logoAnimation,{
      toValue:1,
      useNativeDriver:true
    }).start();
  }
  const startContainerAnimation=()=>{
    Animated.spring(containerAnimation,{
      toValue:1,
      useNativeDriver:false
    }).start();
  }

  const screenWidth=Dimensions.get('window').width;
  console.log(screenWidth);




  return (
    <Animated.View className='flex-1 justify-center items-center bg-yellow-400'
      style={[{},containerAnimationStyles]}
    >
      <Animated.View className={`bg-yellow-400 w-full`}
        style={[{
          height:screenWidth
        },
          logoAnimationStyles
        ]}
        
      >
        <SharedElement id='logo'>
          <FastImage 
            className='w-full h-full'
            source={require('../assets/splash_animation_tr_r.gif')} 
            resizeMode={'contain'}
          />
        </SharedElement>
      </Animated.View>
    </Animated.View>
  )
}


export default SplashScreen
