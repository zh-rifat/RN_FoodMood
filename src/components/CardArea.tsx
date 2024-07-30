import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

interface props{
  imgUrl:string;
  title:string;
}

const CardArea = ({imgUrl,title}:props) => {
  return (
    <TouchableOpacity
      className='relative mr-2 w-32'
    >
      <Image
        source={{uri:imgUrl}}
        className='w-32 h-24 rounded'
      />
      <Text className='text-txt absolute bottom-1 left-1 font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CardArea
