import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as Location from 'expo-location';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useProfile } from '../../../context/ProfileContext';

export default function CustomerLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [addressLine, setAddressLine] = useState("");
  const [pincode, setPincode] = useState("");
  const [addressDetails, setAddressDetails] = useState({
    village: "",
    city: "",
    state: ""
  });

  const { language } = useProfile();
  const logo = require("../../../assets/images/logo.png");
  const locationLogo = require("../../../assets/images/locationIcon.png");
  const router = useRouter();

  const handleBack = () => {
    router.push("/screens/FarmerRegister");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const handleDetectLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        let { district, city, region, postalCode } = reverseGeocode[0];
        setAddressDetails({
          village: district || "",
          city: city || "",
          state: region || "",
        });
        setPincode(postalCode || "");
      }

    } catch (error) {
      Alert.alert("Error", "Unable to detect location. Please try again.");
    }
  };

  const handlePincodeChange = async (pin) => {
    setPincode(pin);

    if (pin.length) {
      try {
        // const fetchedDetails = await fetchAddressDetailsByPincode(pin);
        if (fetchedDetails) {
          setAddressDetails({
            village: Gharuan,
            city: Mohali,
            state: Punjab
          });
        }
      } catch (error) {
        Alert.alert("Error", "Failed to fetch location details. Check your pincode.");
      }
    }
  };

  const handleContinue = () => {
    router.push('/screens/StorageWorkerMain');
  };

  // const fetchAddressDetailsByPincode = async (pincode) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({
  //         village: "Gharuan",
  //         city: "Mohali",
  //         state: "Punjab"
  //       });
  //     }, 1000);
  //   });
  // };

  const getText = (key) => {
    const translations = {
      en: {
        completeProfile: "Complete Profile",
        grantLocationAccess: "Please grant us the location access or manually add your location",
        autoDetect: "Automatically Detect My Location",
        or: "or",
        pincode: "Pincode",
        village: "Village",
        addressLine: 'Primary Address',
        city: "City",
        state: "State",
        continue: "Continue ➔"
      },
      hi: {
        completeProfile: "पूरा प्रोफाइल",
        grantLocationAccess: "कृपया हमें स्थान एक्सेस दें या मैन्युअल रूप से अपना स्थान जोड़ें",
        autoDetect: "स्वतः मेरी स्थिति पहचानें",
        or: "या",
        pincode: "पिनकोड",
        addressLine: 'पता',
        village: "गांव",
        city: "शहर",
        state: "राज्य",
        continue: "जारी रखें ➔"
      }
    };
    return translations[language][key] || key;
  };

  return (
    <PaperProvider>
      <SafeAreaView className="flex-1 bg-white px-6 py-4">
        <View className="flex-row gap-3">
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require("../../../assets/images/backIcon.png")}
              className="w-8 h-4 mt-2"
            />
          </TouchableOpacity>
          <Text className="flex-grow text-2xl font-semibold">{getText('completeProfile')}</Text>
        </View>

        <Text className="text-gray-500 mt-4 ml-2">
          {getText('grantLocationAccess')}
        </Text>

        <View className="mt-8 items-center">
          <Image source={locationLogo} className="w-34 h-34" />
        </View>

        <TouchableOpacity onPress={handleDetectLocation} className="bg-green-500 py-3 rounded-full mt-6">
          <Text className="text-white text-center font-semibold">
            {getText('autoDetect')}
          </Text>
        </TouchableOpacity>

        <Text className="text-center text-xl text-green-700 mt-2">{getText('or')}</Text>

        {location && (
          <View className="ml-4 mt-2">
            <Text className=" text-sm text-green-700">
              <Text className="text-green-800 font-bold">{getText('pincode')}:</Text> 140413
            </Text>
            <Text className=" text-sm text-green-700">
              <Text className="text-green-800 font-bold">{getText('village')}:</Text> Gharuan
            </Text>
            <Text className=" text-sm text-green-700">
              <Text className="text-green-800 font-bold">{getText('city')}:</Text> Mohali
            </Text>
            <Text className=" text-sm text-green-700">
              <Text className="text-green-800 font-bold">{getText('state')}:</Text> Punjab
            </Text>
          </View>
        )}

        <View className="mt-6">
          <TextInput
            label={getText('addressLine')}
            onChangeText={setAddressLine}
            mode="outlined"
            className="mb-2"
          />
          <TextInput
            label={getText('pincode')}
            onChangeText={handlePincodeChange}
            mode="outlined"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          className="bg-green-700 rounded-md p-3 w-32 mt-6 mx-auto flex-row justify-center items-center"
          onPress={handleContinue}
        >
          <Text className="text-white text-center">{getText('continue')}</Text>
        </TouchableOpacity>

        <View className="flex-1 justify-end items-center mt-8">
          <Image source={logo} className="w-40 h-10" />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
