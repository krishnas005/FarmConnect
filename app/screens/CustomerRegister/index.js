import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Provider as PaperProvider } from "react-native-paper";
import { useRouter } from "expo-router";
import { useProfile } from "../../../context/ProfileContext";

export default function CustomerRegister() {
  const logo = require('../../../assets/images/logo.png');
  const farmerIcon = require('../../../assets/images/consumerIcon.png');

  const { farmerProfile, setFarmerProfile, phoneNumber, language } = useProfile();
  const [error, setError] = useState(false);
  const router = useRouter();

  const textContent = {
    en: {
      completeProfile: 'Complete Profile',
      instructions: 'Please fill the necessary details below for a better onboarding experience',
      farmer: 'Customer',
      fullName: 'Full Name',
      enterName: 'Enter your name',
      mobileNumber: 'Mobile Number',
      email: 'Email',
      enterEmail: 'Enter your email',
      continue: 'Continue ➔',
      errorMessage: 'Enter all the required fields',
    },
    hi: {
      completeProfile: 'पूर्ण प्रोफ़ाइल',
      instructions: 'बेहतर ऑनबोर्डिंग अनुभव के लिए कृपया नीचे दिए गए आवश्यक विवरण भरें',
      farmer: 'ग्राहक',
      fullName: 'पूरा नाम',
      enterName: 'अपना नाम दर्ज करें',
      mobileNumber: 'मोबाइल नंबर',
      email: 'ईमेल',
      enterEmail: 'अपना ईमेल दर्ज करें',
      continue: 'जारी रखें ➔',
      errorMessage: 'सभी आवश्यक फ़ील्ड्स भरें',
    },
  };

  const handleContinue = () => {
    if (farmerProfile.name === '' || farmerProfile.email === '') {
      setError(true);
    } else {
      setError(false);
      router.push('/screens/CustomerRegister/CustomerLocation');
    }
  };

  const handleBack = () => {
    router.push('/screens/Register');
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
            label={textContent[language].email}
            value={farmerProfile.email}
            placeholder={textContent[language].enterEmail}
            onChangeText={(text) => setFarmerProfile({ ...farmerProfile, email: text })}
            mode="outlined"
            className="mb-4"
          />
        </View>

        {error ? <Text className="text-red-800">{textContent[language].errorMessage}</Text> : null}

        <TouchableOpacity
          className="bg-green-700 rounded-md p-3 w-32 mt-10 mx-auto flex-row justify-center items-center"
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