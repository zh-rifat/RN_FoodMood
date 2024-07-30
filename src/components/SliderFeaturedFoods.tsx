import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { colors } from '../utils/theme';
import CardRestaurants from './CardRestaurants';
import CardFood from './CardFood';
import { useSelector } from 'react-redux';
import { RootState } from '@/utils/redux/store';

interface props{
  title:string;
  description:string;
}

const SliderFeaturedFoods = ({title,description}:props) => {



  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg text-txt'>{title}</Text>
        <ArrowRightIcon color={colors.icon}/>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>


      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal:15,
          paddingTop:10
        }}
      >
      <CardFood
        id={1}
        title='Biriyani'
        imgUrl='https://www.kannammacooks.com/wp-content/uploads/chettinadu-chicken-biriyani-1-3.jpg'
        location='KUET'
        restaurant='FoodMood'
        description='Famous Restaurant in KUET'
        genre='Rice and Snacks'
        rating={4.7}
        price={55.00}
      />
      <CardFood
        id={2}
        title='Rice and Meat'
        imgUrl='https://www.kannammacooks.com/wp-content/uploads/chettinadu-chicken-biriyani-1-3.jpg'
        location='KUET'
        restaurant='FoodMood'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        genre='Rice and Snacks'
        rating={4.5}
        price={55.00}

      />
      <CardFood
        id={3}
        title='Foodmood'
        imgUrl='https://miro.medium.com/v2/resize:fit:640/format:webp/1*cDZdB_kwHJHGt_eA9qLoaw.png'
        location='KUET'
        restaurant='FoodMood'
        description='Famous Restaurant in KUET'
        genre='Rice and Snacks'
        rating={4.5}
        price={55.00}

      />
      <CardFood
        id={4}
        title='Foodmood'
        imgUrl='https://miro.medium.com/v2/resize:fit:1100/1*9_0P2HpaeSfxXUQ3uw8kbA.jpeg'
        location='KUET'
        restaurant='FoodMood'
        description='Famous Restaurant in KUET'
        genre='Rice and Snacks'
        rating={4.5}
        price={55.00}

      />
        
      </ScrollView>
      
    </View>
  )
}

export default SliderFeaturedFoods
