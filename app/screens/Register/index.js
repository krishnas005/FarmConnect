import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const SignInScreen = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const profiles = [
    { id: 1, name: 'Farmer', icon: require('../../../assets/images/farmerIcon.png') },
    { id: 2, name: 'Consumer', icon: require('../../../assets/images/consumerIcon.png') },
    { id: 3, name: 'Storage worker', icon: require('../../../assets/images/workerIcon.png') }
  ];

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId);
  };

  const handleBack = () => {
    router.push('/screens/SignIn');
  };

  const handleContinue = () => {
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
        setError('Please select a profile to continue.');
        break;
    }
  };


  return (
    <View className="flex-1 bg-white p-5">
      <View className="flex-row items-center gap-4">
        <TouchableOpacity
          onPress={handleBack}
        >
          <Image
            source={require('../../../assets/images/backIcon.png')}
            className="w-8 h-4"
          />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/images/logo.png')}
          className="w-30 h-10"
        />
      </View>

      <View className="mt-10">
        <Text className="text-[44px] font-bold ml-2 mt-4">Namaste!</Text>
        <Text className="text-gray-500 text-lg ml-2 mt-1">
          Please choose one or options from the given Profiles
        </Text>
      </View>

      <View className="mt-10 items-center">
        <View className="flex-row justify-around w-full">
          {profiles.slice(0, 2).map((profile) => (
            <TouchableOpacity
              key={profile.id}
              className={`items-center justify-center rounded-2xl p-3 w-36 h-36 ${selectedProfile === profile.id ? 'border-2 border-green-500' : 'border-2 border-gray-200'
                }`}
              onPress={() => handleProfileSelect(profile.id)}
            >
              <Image
                source={profile.icon}
                className="w-16 h-16 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-md font-medium">
                {profile.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-center w-full mt-6">
          {profiles.slice(2, 3).map((profile) => (
            <TouchableOpacity
              key={profile.id}
              className={`items-center justify-center rounded-lg p-5 w-36 h-36 ${selectedProfile === profile.id ? 'border-2 border-green-500' : 'border-2 border-gray-200'
                }`}
              onPress={() => handleProfileSelect(profile.id)}
            >
              <Image
                source={profile.icon}
                className="w-14 h-14 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm font-medium">
                {profile.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {error && (
        <Text className="text-red-500 mb-4">{error}</Text>
      )}

      <TouchableOpacity
        className="bg-gray-600 rounded-md p-3 w-32 mt-10 mx-auto flex-row justify-center items-center"
        onPress={handleContinue}
      >
        <Text className="text-white text-center">Continue ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
