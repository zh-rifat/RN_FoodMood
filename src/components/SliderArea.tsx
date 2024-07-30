import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CardCategory from './CardCategory';
import CardArea from './CardArea';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { colors } from '../utils/theme';

const SliderArea = () => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg text-txt">Explore Restaurants by Location</Text>
        <ArrowRightIcon color={colors.icon} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}>
        <CardArea
          imgUrl="https://i.pinimg.com/736x/c2/ae/70/c2ae70577c8daad644f58e17116463fe.jpg"
          title="KUET Pocket Gate"
        />
        <CardArea
          imgUrl="https://i.pinimg.com/736x/c2/ae/70/c2ae70577c8daad644f58e17116463fe.jpg"
          title="Main Gate"
        />
        <CardArea
          imgUrl="https://i.pinimg.com/736x/c2/ae/70/c2ae70577c8daad644f58e17116463fe.jpg"
          title="Fulbari Gate"
        />
      </ScrollView>
    </View>
  );
};

export default SliderArea;
