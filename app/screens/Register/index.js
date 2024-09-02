import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useProfile } from "../../../context/ProfileContext";

const SignInScreen = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { setUser, language, setLanguage } = useProfile();

  const profiles = [
    { id: 1, name: { en: 'Farmer', hi: 'किसान' }, icon: require('../../../assets/images/farmerIcon.png') },
    { id: 2, name: { en: 'Consumer', hi: 'उपभोक्ता' }, icon: require('../../../assets/images/consumerIcon.png') },
    { id: 3, name: { en: 'Storage worker', hi: 'भंडारण कार्यकर्ता' }, icon: require('../../../assets/images/workerIcon.png') }
  ];

  const textContent = {
    en: {
      greeting: 'Namaste!',
      instruction: 'Please choose one of the options from the given Profiles',
      continueButton: 'Continue',
      errorMessage: 'Please select a profile to continue.',
    },
    hi: {
      greeting: 'नमस्ते!',
      instruction: 'कृपया दिए गए प्रोफाइलों में से एक विकल्प चुनें',
      continueButton: 'जारी रखें',
      errorMessage: 'कृपया जारी रखने के लिए एक प्रोफ़ाइल का चयन करें।',
    },
  };

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId);
  };

  const handleBack = () => {
    router.push('/screens/SignIn');
  };

  const handleContinue = () => {
    setUser(selectedProfile);
    switch (selectedProfile) {
      case 1:
        setError(null);
        router.push('/screens/FarmerRegister');
        break;
      case 2:
        setError(null);
        router.push('/screens/CustomerRegister');
        break;
      case 3:
        setError(null);
        router.push('/screens/StorageWorkerRegister');
        break;
      case null:
      default:
        setError(textContent[language].errorMessage);
        break;
    }
  };

  return (
    <View className="flex-1 bg-white p-5">
      <View className="flex-row items-center gap-4">
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../../assets/images/backIcon.png')}
            className="w-8 h-4"
          />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/images/logo.png')}
          className="w-38 h-19"
        />
      </View>

      <View className="mt-10">
        <Text className="text-[44px] font-bold ml-2 mt-4">
          {textContent[language].greeting}
        </Text>
        <Text className="text-gray-500 text-lg ml-2 mt-1">
          {textContent[language].instruction}
        </Text>
      </View>

      <View className="mt-10 items-center">
        <View className="flex-row justify-around w-full">
          {profiles.slice(0, 2).map((profile) => (
            <TouchableOpacity
              key={profile.id}
              className={`items-center justify-center rounded-2xl p-3 w-36 h-36 ${
                selectedProfile === profile.id ? 'border-2 border-green-500' : 'border-2 border-gray-200'
              }`}
              onPress={() => handleProfileSelect(profile.id)}
            >
              <Image source={profile.icon} className="w-16 h-16 mb-2" resizeMode="contain" />
              <Text className="text-center text-md font-medium">
                {profile.name[language]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-center w-full mt-6">
          {profiles.slice(2, 3).map((profile) => (
            <TouchableOpacity
              key={profile.id}
              className={`items-center justify-center rounded-lg p-5 w-36 h-36 ${
                selectedProfile === profile.id ? 'border-2 border-green-500' : 'border-2 border-gray-200'
              }`}
              onPress={() => handleProfileSelect(profile.id)}
            >
              <Image source={profile.icon} className="w-14 h-14 mb-2" resizeMode="contain" />
              <Text className="text-center text-sm font-medium">
                {profile.name[language]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {error && <Text className="text-red-500 mb-4">{error}</Text>}

      <TouchableOpacity
        className="bg-green-700 rounded-md p-3 w-32 mt-10 mx-auto flex-row justify-center items-center"
        onPress={handleContinue}
      >
        <Text className="text-white text-center">{textContent[language].continueButton} ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
