import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const OtherServices = ({ navigation }) => {
  const img1 = require('../assets/images/farmerIcon.png');
  const img2 = require('../assets/images/farmerIcon.png'); 
  const img3 = require('../assets/images/farmerIcon.png');
  const img4 = require('../assets/images/farmerIcon.png');
  const img5 = require('../assets/images/farmerIcon.png');

  return (
    <View>
      <Text className="text-xl font-bold mt-4 ml-4">Other Services</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="p-4" contentContainerStyle={{ paddingHorizontal: 6 }}>
      <View className="flex-row items-center space-x-6">
        
        <TouchableOpacity className="flex-col items-center space-y-2" onPress={() => navigation.navigate('NearbyServices')}>
          <View className="bg-green-100 w-24 h-24 rounded-full justify-center items-center relative">
            <Image source={img1} className="w-12 h-12" />
            <View className="absolute top-2 right-2 bg-green-500 rounded-full px-2 py-1">
              <Text className="text-white text-xs font-bold">New</Text>
            </View>
          </View>
          <Text className="text-center text-gray-800 font-medium">Nearby Resources</Text>
        </TouchableOpacity> 

        <TouchableOpacity
          className="flex-col items-center space-y-2"
          onPress={() => navigation.navigate('NearbyServices')}
        >
          <View className="bg-blue-100 w-24 h-24 rounded-full justify-center items-center">
            <Image source={img2} className="w-12 h-12" />
          </View>
          <Text className="text-center text-gray-800 font-medium">Weather Info</Text>
        </TouchableOpacity>
 
        <TouchableOpacity
          className="flex-col items-center space-y-2"
          onPress={() => navigation.navigate('NearbyResources')}
        >
          <View className="bg-purple-100 w-24 h-24 rounded-full justify-center items-center">
            <Image source={img3} className="w-12 h-12" />
          </View>
          <Text className="text-center text-gray-800 font-medium">Learning Hub</Text>
        </TouchableOpacity>
 
        <TouchableOpacity
          className="flex-col items-center space-y-2"
          onPress={() => navigation.navigate('NearbyResources')}
        >
          <View className="bg-yellow-100 w-24 h-24 rounded-full justify-center items-center">
            <Image source={img4} className="w-12 h-12" />
          </View>
          <Text className="text-center text-gray-800 font-medium">Crop Prediction</Text>
        </TouchableOpacity>
 
        <TouchableOpacity
          className="flex-col items-center space-y-2"
          onPress={() => navigation.navigate('NearbyResources')}
        >
          <View className="bg-red-100 w-24 h-24 rounded-full justify-center items-center">
            <Image source={img5} className="w-12 h-12" />
          </View>
          <Text className="text-center text-gray-800 font-medium">Service 2</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

export default OtherServices;
