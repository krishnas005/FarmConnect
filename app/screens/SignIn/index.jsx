import React, { useState } from 'react';
import { View, Text, TextInput, Platform, TouchableOpacity, Image, StatusBar, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import PhoneInput from 'react-native-phone-number-input';
import { useRouter } from 'expo-router';
import { useProfile } from "../../../context/ProfileContext";

const SignInScreen = () => {
  const { phoneNumber, setNumber, language, setLanguage } = useProfile();
  const [error, setError] = useState(null);
  const router = useRouter();
  const logo = require('../../../assets/images/logo.png');

  const textContent = {
    en: {
      greeting: 'Namaste!',
      instruction: 'Enter your Mobile Number to get started.',
      phoneNumberPlaceholder: 'Phone number',
      continueButton: 'Continue',
    },
    hi: {
      greeting: 'नमस्ते!',
      instruction: 'शुरू करने के लिए अपना मोबाइल नंबर दर्ज करें।',
      phoneNumberPlaceholder: 'फ़ोन नंबर',
      continueButton: 'जारी रखें',
    },
  };

  const handleContinue = () => {
    if (phoneNumber) {
      setError(null);
      router.push('/screens/Register');
    } else {
      setError('Please enter your phone number.');
    }
  };

  return (
    <View className="flex-1 p-5 bg-white">
      <StatusBar hidden={true} />

      {/* <View className="absolute top-[70px] right-5 flex-row items-center">
        <Text className="mr-2">Select Language:</Text>
        <RNPickerSelect
          onValueChange={(value) => setLanguage(value)}
          items={[
            { label: 'English', value: 'en' },
            { label: 'हिन्दी', value: 'hi' },
          ]}
          value={language}
          placeholder={{}}
          style={{
            inputAndroid: {
              borderColor: '#D1D5DB',
              borderWidth: 1,
              borderRadius: 4,
              padding: 8,
              width: 100,
              backgroundColor: '#F3F4F6',
              color: 'black',
            },
            iconContainer: {
              top: 5,
              right: 10,
            },
          }}
          useNativeAndroidPickerStyle={false}
        />
      </View> */}

      <View className="absolute top-6 left-4 flex-row items-center">
        <Image
          source={logo}
          className="w-44 ml-4"
          resizeMode="contain"
        />
      </View>

      <Text className="text-[44px] font-bold mb-2 mt-[50%] ml-2">{textContent[language].greeting}</Text>
      <Text className="text-gray-500 mb-10 ml-2">{textContent[language].instruction}</Text>

      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        onChangeText={(text) => setNumber(text)}
        placeholder={textContent[language].phoneNumberPlaceholder}
        containerStyle={{ width: '100%', borderColor: '#D1D5DB', borderWidth: 1, borderRadius: 4, padding: 8, marginBottom: 10, maxWidth: 380 }}
        textContainerStyle={{ paddingVertical: 0 }}
      />

      {error && (
        <Text className="text-red-500 mb-4">{error}</Text>
      )}

      <TouchableOpacity
        className="bg-green-700 hover:bg-green-500 rounded-md p-3 w-40 mt-4 flex-row justify-center items-center mx-auto"
        onPress={handleContinue}
      >
        <Text className="text-white text-center">{textContent[language].continueButton} ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
