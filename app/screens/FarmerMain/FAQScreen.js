import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import Navbar from '../../../components/Navbar';

const faqData = [
  {
    id: 1,
    category: 'General',
    questions: [
      { question: 'How to sell ?', answer: 'You can sell items by...' },
      { question: 'How to change my selected sell', answer: 'To change your selected sell...' },
      { question: 'What is cost of each item ?', answer: 'The cost of each item depends on...' }
    ]
  },
  {
    id: 2,
    category: 'Contact',
    questions: [
      { question: 'What is the customer care number?', answer: 'The customer care number is...' },
      { question: 'Can I cancel the order after one week?', answer: 'Orders can be canceled within one week...' }
    ]
  }
];

const FaqScreen = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (categoryId, questionIndex) => {
    setExpandedItems((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === questionIndex ? null : questionIndex
    }));
  };

  const renderFaqItem = ({ item }) => (
    <View className="mb-4">
      <Text className="text-green-600 font-bold text-lg mb-2 ">{item.category}</Text>
      {item.questions.map((faq, index) => (
        <View className="ml-3" key={index}>
          <TouchableOpacity
            onPress={() => toggleExpand(item.id, index)}
            className="flex-row justify-between py-2"
          >
            <Text className="text-base text-black">{faq.question}</Text>
            <Text className="text-black text-xl">{expandedItems[item.id] === index ? 
            <Image
            source={require("../../../assets/images/upIcon.png")}
            className="w-4 h-2"
          />
            : 
            <Image
            source={require("../../../assets/images/downIcon.png")}
            className="w-4 h-2"
          />
            }</Text>
          </TouchableOpacity>
          {expandedItems[item.id] === index && (
            <Text className="text-gray-600 text-sm ml-4 ">{faq.answer}</Text>
          )}
          <View style={styles.separator} />
        </View>
      ))}
    </View>
  );

  return (
    <View className="flex-1 bg-white ">
      <Navbar />
      <View className="p-4">
        <Text className="text-4xl font-bold">FAQ</Text>
        <Text className="text-gray-600 mb-4 text-lg">Get answers to your questions</Text>
        <FlatList
          data={faqData}
          renderItem={renderFaqItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 14,
  },
});

export default FaqScreen;