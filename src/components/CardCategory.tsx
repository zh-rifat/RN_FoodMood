import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

interface props{
  imgUrl:string;
  title:string;
}

const CardCategory = ({imgUrl,title}:props) => {
  return (
    <TouchableOpacity
      className='relative mr-2'
    >
      <Image
        source={{uri:imgUrl}}
        className='w-20 h-20 rounded'
      />
      <Text className='text-white absolute bottom-1 left-1 font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CardCategory
