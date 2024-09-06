
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const storageData = [
  {
    id: '1',
    name: 'Harish Nagar Cold Storage',
    location: 'Krishna Nagar',
    distance: '2 km',
    image: require('../../../../assets/images/map.png'),
  },
  {
    id: '2',
    name: 'Jhansi Ki Rani Cold Storage',
    location: 'Sector 5',
    distance: '5 km',
    image: require('../../../../assets/images/map.png'),
  },
  {
    id: '3',
    name: 'New Mandi Cold Storage',
    location: 'Laxmi Nagar',
    distance: '8 km',
    image: require('../../../../assets/images/map.png'),
  },
  {
    id: '4',
    name: 'Bhagomajra Cold Storage',
    location: 'Preet Vihar',
    distance: '12 km',
    image: require('../../../../assets/images/map.png'),
  },
  {
    id: '5',
    name: 'Kharar Cold Storage',
    location: 'Dwarka',
    distance: '15 km',
    image: require('../../../../assets/images/map.png'),
  },
];

const NearbyResources = ({ navigation }) => {
  const [selectedDistance, setSelectedDistance] = useState('All');

  const filteredData =
    selectedDistance === 'All'
      ? storageData
      : storageData.filter((item) => {
          const distance = parseInt(item.distance);
          if (selectedDistance === '5 km') return distance <= 5;
          if (selectedDistance === '10 km') return distance <= 10;
          if (selectedDistance === '15 km') return distance <= 15;
        });

  const renderStorageItem = ({ item }) => (
    <TouchableOpacity
      className="bg-white rounded-lg p-4 mb-4 shadow-md"
      onPress={() => navigation.navigate('StorageDetails', { storageId: item.id })}
    >
      <Image source={item.image} className="w-full h-32 rounded-lg mb-2" />
      <Text className="font-bold text-lg text-gray-900">{item.name}</Text>
      <Text className="text-gray-600">{item.location}</Text>
      <Text className="text-gray-500">{item.distance} away</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <View className="mb-4">
        <Text className="text-2xl font-bold text-black">Nearby Storage Hubs</Text>
        <Text className="text-gray-600">Find the nearest cold storage</Text>
      </View>

      {/* Distance Filters */}
      <View className="flex-row justify-start space-x-2 mb-4">
        {['All', '5 km', '10 km', '15 km'].map((distance) => (
          <TouchableOpacity
            key={distance}
            className={`px-4 py-2 rounded-full ${
              selectedDistance === distance ? 'bg-green-500' : 'border border-green-500'
            }`}
            onPress={() => setSelectedDistance(distance)}
          >
            <Text
              className={`text-sm ${
                selectedDistance === distance ? 'text-white' : 'text-green-500'
              }`}
            >
              {distance}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Storage List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderStorageItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NearbyResources;
