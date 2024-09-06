 import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
      <View className="flex-1 bg-white p-6">
        {/* Profile Header */}
        <View className="items-center mt-6">
          <View className="relative">
            <Image
              source={require("../../../assets/images/farmerIcon.png")} 
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-sm">
              <Text>✏️</Text>
            </TouchableOpacity>
          </View>
          <Text className="mt-4 text-xl font-bold">Jagdish Prasad</Text>
          <Text className="text-gray-500">Phone No: 768XXXX89</Text>
        </View>

        {/* Profile Options */}
        <View className="mt-8 space-y-4">
          {[
            { title: 'Profile Settings', icon: '🏆' },
            { title: 'My Post', icon: '📝' },
            { title: 'Agri Shop', icon: '🛒' },
            { title: 'My Store', icon: '🏬' },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between bg-gray-100 p-4 rounded-lg"
            >
              <View className="flex-row items-center">
                <Text className="text-xl mr-4">{item.icon}</Text>
                <Text className="font-medium text-gray-700">{item.title}</Text>
              </View>
              <Text className="text-gray-400">➔</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer Options */}
        <View className="mt-8">
          <TouchableOpacity>
            <Text className="text-gray-600">Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mt-4">
            <Text className="text-red-600">Delete account</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default ProfileScreen;
