import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [location, setLocation] = useState('Hyderabad');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (query) => {
    setLoading(true);
    try {
      const API_KEY = '2cc70233c1661502fccf3f281273d223';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex-row items-center space-x-2 mb-4">
        <TouchableOpacity onPress={() => alert('Back pressed')}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Weather</Text>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-200 rounded-full p-3 mb-6">
        <TextInput
          placeholder="Search Location"
          className="flex-1"
          onChangeText={setLocation}
          onSubmitEditing={() => fetchWeather(location)}
        />
        <FontAwesome name="search" size={20} color="gray" />
      </View>

      {/* Weather Information */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Image
            source={{ uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` }}
            className="w-24 h-24 self-center mb-4"
          />
          <Text className="text-2xl font-bold text-center mb-2">{weatherData.name}</Text>
          <Text className="text-6xl text-center font-semibold mb-4">{Math.round(weatherData.main.temp)}°</Text>

          {/* Additional Info */}
          <View className="flex-row justify-around items-center bg-gray-100 rounded-lg p-4 mt-6">
            <View className="items-center">
              <Text className="text-xs">TIME</Text>
              <Text>{new Date().toLocaleTimeString()}</Text>
            </View>
            <View className="items-center">
              <Text className="text-xs">UV</Text>
              <Text>{Math.round(weatherData.main.temp - 20)}</Text>
            </View>
            <View className="items-center">
              <Text className="text-xs">% RAIN</Text>
              <Text>{weatherData.rain ? `${weatherData.rain['1h']}%` : '0%'}</Text>
            </View>
            <View className="items-center">
              <Text className="text-xs">AQ</Text>
              <Text>{weatherData.main.humidity}</Text>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}