
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Navbar = ({ toggleDrawer }) => {
  const navigation = useNavigation();

  const logo = require('../assets/images/logo.png')
  const profileIcon = require('../assets/images/farmerIcon.png')

  return (
    <SafeAreaView className="bg-white shadow-md">
      <View className="flex-row justify-between  items-center px-4 ">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={toggleDrawer}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>

          <Image
            source={logo}
            className="w-36 ml-4"
            resizeMode="contain"
          />
        </View>

        <View className="">
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
            source={profileIcon}
            className="w-9 mr-1"
            resizeMode="contain"
          />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
