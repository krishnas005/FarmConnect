
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Linking } from 'react-native';

const schemesData = [
  {
    id: '1',
    title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    intro: 'Financial assistance for farmers with up to Rs. 6,000 per year.',
    link: 'https://www.india.gov.in/spotlight/pradhan-mantri-kisan-samman-nidhi',
    image: require('../../../../assets/images/schemes2.jpg'),  
  },
  {
    id: '2',
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    intro: 'Insurance coverage and financial support to farmers in the event of crop loss.',
    link: 'https://pmfby.gov.in/',
    image: require('../../../../assets/images/scheme5.jpg'),
  },
  {
    id: '3',
    title: 'Soil Health Card Scheme',
    intro: 'Provides soil quality assessment to improve productivity.',
    link: 'https://soilhealth.dac.gov.in/',
    image: require('../../../../assets/images/scheme7.jpg'),
  },
  {
    id: '4',
    title: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
    intro: 'Aims at providing end-to-end irrigation solutions to farmers.',
    link: 'https://pmksy.gov.in/',
    image: require('../../../../assets/images/resources1.jpg'),
  },
  {
    id: '5',
    title: 'National Agriculture Market (eNAM)',
    intro: 'Online trading platform for agricultural commodities.',
    link: 'https://enam.gov.in/',
    image: require('../../../../assets/images/scheme4.jpg'),
  },
];

const GovernmentSchemes = ({ navigation }) => {
  const renderSchemeItem = ({ item }) => (
    <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
      <Image source={item.image} className="w-full h-32 rounded-lg mb-2" />
      <Text className="font-bold text-lg text-gray-900 mb-1">{item.title}</Text>
      <Text className="text-gray-600 mb-2">{item.intro}</Text>
      <TouchableOpacity
        className="bg-green-500 py-2 px-4 rounded-full"
        onPress={() => Linking.openURL(item.link)}
      >
        <Text className="text-white text-center">Read More</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <View className="mb-4">
        <Text className="text-2xl font-bold text-black">Government Schemes</Text>
        <Text className="text-gray-600">Explore schemes available for farmers</Text>
      </View>

      {/* Schemes List */}
      <FlatList
        data={schemesData}
        keyExtractor={(item) => item.id}
        renderItem={renderSchemeItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default GovernmentSchemes;
