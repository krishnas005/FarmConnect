import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Provider as PaperProvider } from "react-native-paper";
import { useRouter } from "expo-router";

export default function FarmerRegister() {
  const logo = require('../../../assets/images/logo.png');
  const farmerIcon = require('../../../assets/images/farmerIcon.png')
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [uniqueId, setUniqueId] = React.useState('');
  const [error, setError] = React.useState(false)
  const router = useRouter();

  const handleContinue = () => {
    if(name == '' || !age == '' || uniqueId == '') {
      setError(true);
    }
    else router.push('/screens/FarmerRegister/FarmLocation');
  };

  const handleBack = () => {
    router.push('/screens/Register');
  };

  return (
    <PaperProvider>
      <SafeAreaView className="flex-1 bg-white px-6 py-4">

        <View className="flex-row items-center gap-4">
        <TouchableOpacity
          onPress={handleBack}
        >
          <Image
            source={require('../../../assets/images/backIcon.png')}
            className="w-8 h-4"
          />
        </TouchableOpacity>
          <Text className="flex-grow text-2xl font-semibold">Complete Profile</Text>
        </View>

        <Text className="text-gray-500 mt-5 ml-3">
          Please fill the necessary details below for a better onboarding experience
        </Text>

        <View className="mt-8 items-center">
          <View className="rounded-full">
            <Image
              source={farmerIcon}
              className="w-16 h-16"
            />
          </View>
          <Text className="text-lg font-semibold ">Farmer</Text>
        </View>

        <View className="mt-8">
          <TextInput
            label="Full Name"
            value={name}
            placeholder="Enter your name"
            mode="outlined"
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          />
          <TextInput
            label="Mobile Number"
            value="2133213213213"
            mode="outlined"
            keyboardType="phone-pad"
            disabled={true}
            className="mb-4"
          />
          <TextInput
            label="Age"
            value={age}
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
            mode="outlined"
            className="mb-4"
          />
          <TextInput
            label="Unique Farmer ID (PM Kisan Yojana)"
            value={uniqueId}
            placeholder="Enter your unique ID"
            onChange={(e) => setUniqueId(e.target.value)}
            mode="outlined"
            className="mb-4"
          />
        </View>
        {error ? (
          <Text className="text-red-800">Enter all the required fields</Text>
        ) : null}

        <TouchableOpacity
        className="bg-gray-600 rounded-md p-3 w-32 mt-10 mx-auto flex-row justify-center items-center"
        onPress={handleContinue}
      >
        <Text className="text-white text-center">Continue ➔</Text>
      </TouchableOpacity>

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
