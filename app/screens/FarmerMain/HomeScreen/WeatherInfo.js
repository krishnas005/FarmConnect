// WeatherScreen.js
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
// import { TailwindProvider } from 'tailwindcss-react-native';

const WeatherScreen = () => {
  return (
    // <TailwindProvider>
      <View className="flex-1 bg-white p-6">
        {/* Header */}
        <View className="flex-row items-center">
          <Text className="text-3xl font-bold ">Weather</Text>
        </View>
        <Text className="text-gray-500 mt-1 ml-1">Get weather info</Text>

        {/* Search Bar */}
        <View className="mt-6 bg-gray-100 flex-row items-center p-3 rounded-full shadow-sm">
          <TextInput
            placeholder="Search Location"
            className="flex-1 text-gray-600"
          />
          <TouchableOpacity>
            <Text className="text-gray-500">🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Weather Info */}
        <View className="mt-8 items-center">
          <View className="flex-row space-x-2 mb-4">
            <Text className="w-2 h-2 bg-gray-300 rounded-full"></Text>
            <Text className="w-2 h-2 bg-gray-800 rounded-full"></Text>
            <Text className="w-2 h-2 bg-gray-300 rounded-full"></Text>
          </View>
          <Image
            source={require("../../../../assets/images/sun.webp")}
            className="w-20 h-20"
          />
          <Text className="text-3xl font-bold mt-4">Kharar</Text>
          <Text className="text-2xl mt-2">31°</Text>
        </View>

        {/* Additional Weather Details */}
        <View className="mt-8 flex-row justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
          {[
            { title: 'TIME', value: '11:25 AM' },
            { title: 'UV', value: '4' },
            { title: '% RAIN', value: '58%' },
            { title: 'AQ', value: '22' },
          ].map((item, index) => (
            <View key={index} className="items-center">
              <Text className="text-xs text-gray-500">{item.title}</Text>
              <Text className="font-bold text-lg">{item.value}</Text>
            </View>
          ))}
        </View>
      </View>
    // </TailwindProvider>
  );
};

export default WeatherScreen;
