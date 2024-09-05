// components/Sidebar.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Sidebar = ({ toggleSidebar, navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const logo = require('../assets/images/logo.png')

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: screenWidth * 0.7,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        padding: 20,
      }}
    >
      <TouchableOpacity onPress={toggleSidebar} className="mb-6">
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>

      <View className="flex-row items-center mb-6">
        <Ionicons name="apps" size={32} color="blue" />
        <Image
          source={logo}
          className="w-44 ml-4"
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity onPress={() => {
        toggleSidebar();
        navigation.navigate('profile');
      }} className="flex-row items-center mb-4">
        <Ionicons name="person" size={24} color="black" />
        <Text className="ml-2 text-base">Profile</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Sidebar;
