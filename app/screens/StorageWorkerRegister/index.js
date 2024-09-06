import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { TextInput, Provider as PaperProvider } from "react-native-paper";
import { useRouter } from "expo-router";
import { useProfile } from "../../../context/ProfileContext";

export default function WorkerRegister() {
  const logo = require('../../../assets/images/logo.png');
  const farmerIcon = require('../../../assets/images/workerIcon.png');

  const { farmerProfile, setFarmerProfile, phoneNumber, language } = useProfile();
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const router = useRouter();

  const textContent = {
    en: {
      completeProfile: 'Complete Profile',
      instructions: 'Please fill the necessary details below for a better onboarding experience',
      farmer: 'Worker',
      fullName: 'Full Name',
      enterName: 'Enter your name',
      mobileNumber: 'Mobile Number',
      age: 'Age',
      enterAge: 'Enter your age',
      uniqueId: 'Unique Worker ID',
      enterUniqueId: 'Enter your unique ID',
      verify: 'Verify',
      verified: 'Verified ✓',
      continue: 'Continue ➔',
    },
    hi: {
      completeProfile: 'पूर्ण प्रोफ़ाइल',
      instructions: 'बेहतर ऑनबोर्डिंग अनुभव के लिए कृपया नीचे दिए गए आवश्यक विवरण भरें',
      farmer: 'कर्मी',
      fullName: 'पूरा नाम',
      enterName: 'अपना नाम दर्ज करें',
      mobileNumber: 'मोबाइल नंबर',
      age: 'उम्र',
      enterAge: 'अपनी उम्र दर्ज करें',
      uniqueId: 'अनूठा कर्मी आईडी',
      enterUniqueId: 'अपनी अनूठी आईडी दर्ज करें',
      verify: 'सत्यापित करें',
      verified: 'सत्यापित ✓',
      continue: 'जारी रखें ➔',
    },
  };

  const handleContinue = () => {
    router.push('/screens/StorageWorkerRegister/WorkerLocation');
  };

  const handleBack = () => {
    router.push('/screens/Register');
  };

  const handleVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
    }, 1000);
  };

  return (
    <PaperProvider>
      <SafeAreaView className="flex-1 bg-white px-6 py-4">

        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={handleBack}>
            <Image source={require('../../../assets/images/backIcon.png')} className="w-8 h-4" />
          </TouchableOpacity>
          <Text className="flex-grow text-2xl font-semibold">
            {textContent[language].completeProfile}
          </Text>
        </View>

        <Text className="text-gray-500 mt-5 ml-3">
          {textContent[language].instructions}
        </Text>

        <View className="mt-8 items-center">
          <View className="rounded-full">
            <Image source={farmerIcon} className="w-16 h-16" />
          </View>
          <Text className="text-lg font-semibold">
            {textContent[language].farmer}
          </Text>
        </View>

        <View className="mt-8">
          <TextInput
            label={textContent[language].fullName}
            value={farmerProfile.name}
            placeholder={textContent[language].enterName}
            mode="outlined"
            onChangeText={(text) => setFarmerProfile({ ...farmerProfile, name: text })}
            className="mb-4"
          />
          <TextInput
            label={textContent[language].mobileNumber}
            value={phoneNumber}
            mode="outlined"
            keyboardType="phone-pad"
            disabled={true}
            className="mb-4"
          />
          <TextInput
            label={textContent[language].age}
            value={farmerProfile.age}
            placeholder={textContent[language].enterAge}
            onChangeText={(text) => setFarmerProfile({ ...farmerProfile, age: text })}
            mode="outlined"
            className="mb-4"
          />
          <View className="flex-row items-center">
            <TextInput
              label={textContent[language].uniqueId}
              value={farmerProfile.workerId}
              placeholder={textContent[language].enterUniqueId}
              onChangeText={(text) => setFarmerProfile({ ...farmerProfile, workerId: text })}
              mode="outlined"
              className="flex-grow mb-4"
            />
            <TouchableOpacity
              onPress={handleVerify}
              className="bg-blue-600 rounded-md p-2 ml-2"
              disabled={verifying || verified}
            >
              {verifying ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : verified ? (
                <Text className="text-white">{textContent[language].verified}</Text>
              ) : (
                <Text className="text-white">{textContent[language].verify}</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          disabled={!verified}
          className="bg-green-700 disabled:bg-gray-600 rounded-md p-3 w-32 mt-10 mx-auto flex-row justify-center items-center"
          onPress={handleContinue}
        >
          <Text className="text-white text-center">{textContent[language].continue}</Text>
        </TouchableOpacity>

        <View className="flex-1 justify-end items-center mt-8">
          <Image source={logo} className="w-40 h-10" />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
