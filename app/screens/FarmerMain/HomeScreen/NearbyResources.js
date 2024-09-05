import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';

const shops = [
  {
    id: '1',
    name: 'Green Thumb Supplies',
    category: 'Seeds, Fertilizers',
    contact: 'John Smith, 555-1234',
    image: require('../../../../assets/images/resources1.jpg'),
  },
  {
    id: '2',
    name: 'AgriWorld',
    category: 'Tools, Seeds',
    contact: 'Emily Johnson, 555-5678',
    image: require('../../../../assets/images/resources2.jpg'),
  },
  {
    id: '3',
    name: 'Farmers’ Haven',
    category: 'Fertilizers, Tools',
    contact: 'Michael Brown, 555-8765',
    image: require('../../../../assets/images/resources3.jpg'),
  },
  {
    id: '4',
    name: 'GrowMore',
    category: 'Seeds, Tools',
    contact: 'Sarah Davis, 555-4321',
    image: require('../../../../assets/images/resources4.jpg'),
  },
  {
    id: '5',
    name: 'Harvest Hub',
    category: 'Fertilizers, Seeds',
    contact: 'David Wilson, 555-6789',
    image: require('../../../../assets/images/resources5.jpg'),
  },
  {
    id: '6',
    name: 'EcoAgri Store',
    category: 'Tools, Fertilizers',
    contact: 'Emma Thompson, 555-3456',
    image: require('../../../../assets/images/resources6.jpg'),
  },
];

const ShopsList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="flex-row items-center p-4 mb-2 bg-white rounded-lg shadow-sm"
      onPress={() => navigation.navigate('ShopDetails', { shopId: item.id })}
    >
      <Image source={item.image} className="w-12 h-12 rounded-full mr-4" />
      <View className="flex-1">
        <Text className="text-gray-900 font-bold">{item.name}</Text>
        <Text className="text-gray-600 text-sm">{item.category}</Text>
        <Text className="text-gray-500 text-xs">{item.contact}</Text>
      </View>
      <View>
        <Image source={require('../../../../assets/images/farmerIcon.png')} className="w-4 h-4" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100">
      <View className="p-4">
      <View className="flex-row items-center">
          {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require("../../../../assets/images/backIcon.png")}
              className="w-8 h-4"
            />
          </TouchableOpacity> */}
          <Text className="text-gray-900 text-2xl font-bold ">Find Nearby Subsidy Resources</Text>
        </View>
        <Text className="text-gray-600 text-sm mt-1">
          Browse through our list of trusted suppliers to find the resources you need to support your farming business.
        </Text>
      </View>
      <View className="p-4">
        <TextInput
          placeholder="Search for resources..."
          className="bg-gray-200 p-3 rounded-full text-sm"
        />
      </View>
      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

export default ShopsList;