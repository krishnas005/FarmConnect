import React from 'react';
import { View, Text, Image } from 'react-native';



const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <View className="bg-white p-4 rounded-lg shadow-md mb-4 w-44">
      <Image source={{ uri: imageUrl }} className="w-full h-24 rounded-md" />
      <Text className="mt-2 text-lg font-bold">{title}</Text>
      <Text className="text-sm text-gray-600">{description}</Text>
    </View>
  );
};

export default ServiceCard;
