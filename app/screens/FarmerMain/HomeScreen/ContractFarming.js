import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

const contracts = [
  {
    id: '1',
    crop: 'Wheat',
    buyer: 'Aditi Chaturvedi',
    location: 'Mohali',
    price: 'Rs.2500/ton',
    icon: 'wheat',
    contact: '+123456789',
  },
  {
    id: '2',
    crop: 'Corn',
    buyer: 'Tarun Dixit',
    location: 'Kharar',
    price: 'Rs.1500/ton',
    icon: 'map-marker-alt',
    contact: '+987654321',
  },
  {
    id: '3',
    crop: 'Soybeans',
    buyer: 'Tushar Oli',
    location: 'Morinda',
    price: 'Rs.2200/ton',
    icon: 'seedling',
    contact: '+192837465',
  },
  {
    id: '4',
    crop: 'Rice',
    buyer: 'Pratik Kumar',
    location: 'Agra',
    price: 'Rs.2200/ton',
    icon: 'cart-arrow-down',
    contact: '+5647382910',
  },
  {
    id: '5',
    crop: 'Barley',
    buyer: 'Ashish',
    location: 'Nagpur',
    price: 'Rs.1800/ton',
    icon: 'calendar-alt',
    contact: '+1029384756',
  },
];

export default function ContractOpportunities() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCropType, setSelectedCropType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedContractType, setSelectedContractType] = useState('');

  const filteredContracts = contracts.filter(contract => 
    contract.crop.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCropType ? contract.crop === selectedCropType : true) &&
    (selectedLocation ? contract.location === selectedLocation : true)
  );

  const handleContactPress = (contact) => {
    Linking.openURL(`tel:${contact}`);
  };

  return (
    <View className='bg-gray-100 p-4'>
      {/* Search Bar */}
      <View className='bg-white flex-row items-center px-3 py-2 rounded-lg mb-4'>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          className='ml-2 flex-1'
          placeholder="Search for contracts"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filters */}
      <View className='flex-row justify-between mb-4'>
        {/* Crop Type Picker */}
        <View className='flex-1 mr-2'>
          <Picker
            selectedValue={selectedCropType}
            onValueChange={(itemValue) => setSelectedCropType(itemValue)}
          >
            <Picker.Item label="Crop Type" value="" />
            <Picker.Item label="Wheat" value="Wheat" />
            <Picker.Item label="Corn" value="Corn" />
            <Picker.Item label="Soybeans" value="Soybeans" />
            <Picker.Item label="Rice" value="Rice" />
            <Picker.Item label="Barley" value="Barley" />
          </Picker>
        </View>

        {/* Location Picker */}
        <View className='flex-1 mx-2'>
          <Picker
            selectedValue={selectedLocation}
            onValueChange={(itemValue) => setSelectedLocation(itemValue)}
          >
            <Picker.Item label="Location" value="" />
            <Picker.Item label="Kansas" value="Kansas" />
            <Picker.Item label="Iowa" value="Iowa" />
            <Picker.Item label="Illinois" value="Illinois" />
            <Picker.Item label="Arkansas" value="Arkansas" />
            <Picker.Item label="Nebraska" value="Nebraska" />
          </Picker>
        </View>

        {/* Contract Type Picker */}
        {/* <View className='flex-1 ml-2'>
          <Picker
            selectedValue={selectedContractType}
            onValueChange={(itemValue) => setSelectedContractType(itemValue)}
          >
            <Picker.Item label="Contract Type" value="" />
            <Picker.Item label="Spot" value="Spot" />
            <Picker.Item label="Forward" value="Forward" />
          </Picker>
        </View> */}
      </View>

      {/* Contract List */}
      <Text className='text-xl font-semibold mb-4'>Contract Opportunities</Text>
      <FlatList
        data={filteredContracts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='flex-row items-center bg-white p-4 mb-3 rounded-lg'>
            {/* Icon */}
            <View className='mr-4'>
              {item.icon === 'wheat' && <FontAwesome5 name="seedling" size={24} color="green" />}
              {item.icon === 'map-marker-alt' && <FontAwesome5 name="map-marker-alt" size={24} color="red" />}
              {item.icon === 'seedling' && <FontAwesome5 name="seedling" size={24} color="green" />}
              {item.icon === 'cart-arrow-down' && <FontAwesome5 name="cart-arrow-down" size={24} color="blue" />}
              {item.icon === 'calendar-alt' && <FontAwesome5 name="calendar-alt" size={24} color="orange" />}
            </View>

            {/* Contract Details */}
            <View className='flex-1'>
              <Text className='text-lg font-bold'>{item.crop}</Text>
              <Text className='text-sm text-gray-600'>Buyer: {item.buyer}, Location: {item.location}, Price: {item.price}</Text>
              <TouchableOpacity onPress={() => handleContactPress(item.contact)}>
                <Text className='text-blue-500 mt-2'>Contact: {item.contact}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
