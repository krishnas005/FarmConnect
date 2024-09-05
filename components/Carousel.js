import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

const images = [
  require('../assets/images/scheme0.jpg'),
  require('../assets/images/farmerSlider/img0.jpg'),
  require('../assets/images/farmerSlider/img2.jpg'),
  require('../assets/images/farmerSlider/img3.jpg'),
  
];

const Carousel = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row p-4">
        {[1, 2, 3, 4].map((item) => (
          <View key={item} className="mr-4">
            <Image 
              source={images[item - 1]}
              className="w-56 h-36 rounded-lg"
            />
          </View>
        ))}
      </ScrollView>
      <View className="flex-row justify-center mb-4">
        {[1, 2, 3, 4].map((item) => (
          <View key={item} className="mx-2">
            <Text
              style={{
                fontSize: 12,
                color: item === 1 ? '#333' : '#999',
              }}
            >
              &#8226;
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Carousel;