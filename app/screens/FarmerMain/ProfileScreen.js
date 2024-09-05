
import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '../../../components/Navbar';

const ServiceScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <Navbar />
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Service Screen</Text>
      </View>
    </View>
  );
};

export default ServiceScreen;
