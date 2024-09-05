import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ServiceCard = ({ title, description, image, bgColor, link, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(link)}>
      <View style={{
        backgroundColor: bgColor,
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 16,
        flex: 1, 
        maxWidth: 180, 
        alignItems: 'center',  
      }}>
        <Image source={image} style={{
          width: 50,   
          height: 50,  
          borderRadius: 8,
        }} />
        <Text style={{
          textAlign: 'center', 
          marginTop: 8,
          fontSize: 14,
          flexWrap: 'wrap',
          fontWeight: 'bold'
        }}>{title}</Text>
        {/* <Text style={{
          fontSize: 14,
          color: '#666',
        }}>{description}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
