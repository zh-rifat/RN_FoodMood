import { View, Text, TextInput } from 'react-native'
import React from 'react';
import { AdjustmentsHorizontalIcon, ChevronDownIcon, UserIcon,MagnifyingGlassIcon as SearchIcon } from 'react-native-heroicons/outline'
import Animated from 'react-native-reanimated';
import { colors } from '../../utils/theme';
import { LOGO_RECT, LOGO_SQUARE } from '../../utils/asset-mapper';
import { logoTransition } from '../../styles/splash-screen-animation';

const Header = () => {
  return (
    <View className=' bg-yellow-400'>
      <View className='flex-row pb-1 px-3 items-center space-x-2 justify-between relative'>

        <View className='flex-col items-start justify-center'>
          <Animated.View className='w-32 h-8 overflow-hidden'
              sharedTransitionTag='logo' 
              sharedTransitionStyle={logoTransition}
          >
            <Animated.Image
              source={LOGO_RECT}
              className='w-full h-full rounded-full box-border'
              resizeMode='center'
            />

          </Animated.View>

          <View className='flex ml-2'>
            <View className='flex-row items-center'>
              <Text className='text-stone-600 font-bold text-lg'>Current Location</Text>
              <ChevronDownIcon size={16}  color={colors.t1} />  
            </View>
          </View>
          
          </View>
          
        <UserIcon size={30} color={colors.t1}/>
      </View>
    </View>
  )
}

export default Header
