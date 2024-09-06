import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useProfile } from "../../../context/ProfileContext";
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const {phoneNumber, farmerProfile} = useProfile();
  const router = useRouter();
  return (
    <View className="flex-1 bg-white p-6">
      {/* Profile Header */}
      <View className="items-center ">
        <TouchableOpacity className="absolute right-0 bg-white  rounded-full shadow-sm">
          <Text>✏️</Text>
        </TouchableOpacity>
        <View className="relative mt-6">
          <Image
            source={require("../../../assets/images/farmerIcon.png")}
            className="w-24 h-24 rounded-full"
          />
        </View>
        <Text className="mt-4 text-xl font-bold">{farmerProfile.name}</Text>
        <Text className="text-gray-500">Phone No: {phoneNumber}</Text>
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
            {/* <Text className="text-gray-400">➔</Text> */}
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Options */}
      <View className="mt-8">
        <TouchableOpacity onPress={() => router.push('/screens/Register')}>
          <Text className="text-gray-600">Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/screens/Register')} className="mt-4">
          <Text className="text-red-600">Delete account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
