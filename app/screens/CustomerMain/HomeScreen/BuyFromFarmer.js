import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const products = [
  { id: '1', name: 'Fresh Cherry Tomatoes', price: '100/kg', quantity: '10 kg', distance: 5, image: require('../../../../assets/images/buyFood.png'), category: 'Vegetables', organic: true },
  { id: '2', name: 'Organic Spinach', price: '80/bunch', quantity: '15 bunches', distance: 12, image: require('../../../../assets/images/buyFood1.png'), category: 'Vegetables', organic: true },
  { id: '3', name: 'Golden Apples', price: '150/kg', quantity: '20 kg', distance: 7, image: require('../../../../assets/images/buyFood2.png'), category: 'Fruits', organic: false },
  { id: '4', name: 'Whole Wheat Flour', price: '60/kg', quantity: '50 kg', distance: 25, image: require('../../../../assets/images/buyFood4.png'), category: 'Grains', organic: false },
  { id: '5', name: 'Organic Carrots', price: '120/kg', quantity: '8 kg', distance: 4, image: require('../../../../assets/images/buyFood2.png'), category: 'Vegetables', organic: true },
  { id: '6', name: 'Bananas', price: '90/dozen', quantity: '30 dozen', distance: 9, image: require('../../../../assets/images/buyFood2.png'), category: 'Fruits', organic: false },
  { id: '7', name: 'Brown Rice', price: '180/kg', quantity: '100 kg', distance: 15, image: require('../../../../assets/images/buyFood2.png'), category: 'Grains', organic: true },
  { id: '8', name: 'Sweet Potatoes', price: '110/kg', quantity: '25 kg', distance: 10, image: require('../../../../assets/images/buyFood2.png'), category: 'Vegetables', organic: true },
  { id: '9', name: 'Lettuce', price: '50/bunch', quantity: '40 bunches', distance: 20, image: require('../../../../assets/images/buyFood2.png'), category: 'Vegetables', organic: false },
];

// Enhanced filter component to handle both category and distance
const Filter = ({ filter, setFilter, maxDistance, setMaxDistance }) => (
  <View className="flex-col p-2">
    <View className="flex-row justify-around">
      <TouchableOpacity onPress={() => setFilter('All')} className={filter === 'All' ? 'bg-green-400 p-2 rounded' : 'bg-gray-200 p-2 rounded'}>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('Vegetables')} className={filter === 'Vegetables' ? 'bg-green-400 p-2 rounded' : 'bg-gray-200 p-2 rounded'}>
        <Text>Vegetables</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('Fruits')} className={filter === 'Fruits' ? 'bg-green-400 p-2 rounded' : 'bg-gray-200 p-2 rounded'}>
        <Text>Fruits</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('Grains')} className={filter === 'Grains' ? 'bg-green-400 p-2 rounded' : 'bg-gray-200 p-2 rounded'}>
        <Text>Grains</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('Organic')} className={filter === 'Organic' ? 'bg-green-400 p-2 rounded' : 'bg-gray-200 p-2 rounded'}>
        <Text>Organic</Text>
      </TouchableOpacity>
    </View>

    <View className="flex-row justify-around mt-4">
      <Text>Max Distance (km):</Text>
      <TextInput
        placeholder="Enter distance"
        keyboardType="numeric"
        className="border p-2 rounded bg-gray-100 w-20"
        onChangeText={setMaxDistance}
        value={String(maxDistance)}
      />
    </View>
  </View>
);

const ProductItem = ({ product }) => (
  <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
    <Image source={product.image} className="w-16 h-16 rounded" />
    <View className="flex-1 ml-4">
      <Text className="text-lg font-semibold">{product.name}</Text>
      <Text className="text-gray-500">{product.price}</Text>
      <Text className="text-green-600">{product.quantity}</Text>
      <Text className="text-blue-600">{product.distance} km away</Text>
    </View>
    <TouchableOpacity className="bg-green-500 px-4 py-2 rounded">
      <Text className="text-white">Call</Text>
    </TouchableOpacity>
  </View>
);

export default function BuyFromFarmers() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [maxDistance, setMaxDistance] = useState('');

  const filteredProducts = products.filter((product) => {
    if (filter === 'Organic' && !product.organic) return false;
    if (filter !== 'All' && filter !== 'Organic' && product.category !== filter) return false;
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (maxDistance && product.distance > parseFloat(maxDistance)) return false;
    return true;
  });

  return (
    <View className="flex-1 bg-white">
      <TextInput
        placeholder="Search for fresh produce..."
        className="border p-2 m-2 rounded bg-gray-100"
        onChangeText={setSearch}
        value={search}
      />
      <Filter filter={filter} setFilter={setFilter} maxDistance={maxDistance} setMaxDistance={setMaxDistance} />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
}
