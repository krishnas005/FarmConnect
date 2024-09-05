import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const LearningHubScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Text className="text-black text-2xl">{'←'}</Text>
          </TouchableOpacity>
          <Text className="text-black text-2xl font-bold ml-2">Learning Hub</Text>
        </View>

        <Text className="text-gray-600 mt-2">Kuch toh haiii</Text>

        <View className="mt-4">
          {[1, 2].map((_, index) => (
            <View key={index} className="mb-4 bg-red-900 rounded-lg p-4">
              <View className="flex-row justify-center mb-2">
                <View className="bg-green-500 rounded-full px-4 py-1">
                  <Text className="text-white text-sm text-center">
                    Government Scheme
                  </Text>
                </View>
              </View>
              <Text className="text-black text-lg font-semibold">
                New Jan Dhan Scheme
              </Text>
              <Text className="text-gray-600 text-sm">
                Friday, May 11, 2021
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default LearningHubScreen;