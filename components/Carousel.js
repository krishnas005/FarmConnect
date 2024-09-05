import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

const images = [
  require('../assets/images/farmerSlider/img1.jpg'),
  require('../assets/images/farmerSlider/img2.jpg'),
  require('../assets/images/farmerSlider/img3.jpg'),
  require('../assets/images/farmerSlider/img2.jpg'),
];

const Carousel = () => {
  return (
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
  );
};

export default Carousel;