
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CardCategory from './CardCategory';

const SliderCategories = () => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
      }}
    >
      <CardCategory 
        imgUrl='https://img.freepik.com/free-vector/isolated-delicious-hamburger-cartoon_1308-134032.jpg?w=900&t=st=1706730666~exp=1706731266~hmac=2a9a97306e15501e1c05a7be09e39581275d4ce15cee4d134e6542d75d8776ef'
        title='Burger'
      />
      <CardCategory 
        imgUrl='https://img.freepik.com/free-vector/isolated-delicious-hamburger-cartoon_1308-134032.jpg?w=900&t=st=1706730666~exp=1706731266~hmac=2a9a97306e15501e1c05a7be09e39581275d4ce15cee4d134e6542d75d8776ef'
        title='Burger'
      />
      <CardCategory 
        imgUrl='https://img.freepik.com/free-vector/isolated-delicious-hamburger-cartoon_1308-134032.jpg?w=900&t=st=1706730666~exp=1706731266~hmac=2a9a97306e15501e1c05a7be09e39581275d4ce15cee4d134e6542d75d8776ef'
        title='Burger'
      />
      <CardCategory 
        imgUrl='https://img.freepik.com/free-vector/isolated-delicious-hamburger-cartoon_1308-134032.jpg?w=900&t=st=1706730666~exp=1706731266~hmac=2a9a97306e15501e1c05a7be09e39581275d4ce15cee4d134e6542d75d8776ef'
        title='Burger'
      />
      <CardCategory 
        imgUrl='https://img.freepik.com/free-vector/isolated-delicious-hamburger-cartoon_1308-134032.jpg?w=900&t=st=1706730666~exp=1706731266~hmac=2a9a97306e15501e1c05a7be09e39581275d4ce15cee4d134e6542d75d8776ef'
        title='Burger'
      />
      <CardCategory 
        imgUrl='https://img.freepik.com/free-vector/isolated-delicious-hamburger-cartoon_1308-134032.jpg?w=900&t=st=1706730666~exp=1706731266~hmac=2a9a97306e15501e1c05a7be09e39581275d4ce15cee4d134e6542d75d8776ef'
        title='Burger'
      />
    </ScrollView>
  )
}

export default SliderCategories;
