import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import * as Location from "expo-location";
import { Provider as PaperProvider } from "react-native-paper";
import { useRouter } from "expo-router";

export default function LocationAccessScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const logo = require('../../../assets/images/logo.png');
  const locationLogo = require('../../../assets/images/locationIcon.png');
  const router = useRouter();

  const handleBack = () => {
    router.push('/screens/FarmerRegister');
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleDetectLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      Alert.alert("Location Detected", `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`);
    } catch (error) {
      Alert.alert("Error", "Unable to detect location. Please try again.");
    }
  };

  return (
    <PaperProvider>
      <SafeAreaView className="flex-1 bg-white px-6 py-4">
        <View className="flex-row gap-3">
          <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../../assets/images/backIcon.png')}
            className="w-8 h-4 mt-2"
          />
          </TouchableOpacity>
          <Text className="flex-grow text-2xl font-semibold">Complete Profile</Text>
        </View>

        <Text className="text-gray-500 mt-4 ml-2">
          Please grant us the location access or manually add your location
        </Text>

        <View className="mt-8 items-center">
          <Image
            source={locationLogo} 
            className="w-24 h-24"
          />
        </View>

        <TouchableOpacity onPress={handleDetectLocation} className="bg-green-500 py-3 rounded-full mt-6">
          <Text className="text-white text-center font-semibold">Automatically Detect My Location</Text>
        </TouchableOpacity>

        {location && (
          <View className="mt-4">
            <Text className="text-center text-sm text-gray-700">
              Latitude: {location.coords.latitude}
            </Text>
            <Text className="text-center text-sm text-gray-700">
              Longitude: {location.coords.longitude}
            </Text>
          </View>
        )}

        <View className="flex-1 justify-end items-center mt-8">
          <Image
            source={logo}
            className="w-40 h-10"
          />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
