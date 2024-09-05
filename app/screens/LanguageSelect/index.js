import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import {useProfile} from '../../../context/ProfileContext';

const LanguageSelectorPage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const router = useRouter();
    const {language, setLanguage} = useProfile();

    const handleContinue = () => {
        router.push('/screens/SignIn');
      };

      const handleChoose = (l) => {
        setSelectedLanguage(l);
        if(l == 'Hindi') setLanguage('hi')
        else setLanguage('en')
      }

    return (
        <View className="flex-1">
            <StatusBar hidden={true} />
            <View className="absolute top-4 left-4">
                <Image
                    source={require('../../../assets/images/logo.png')}
                    className="w-38 h-19"
                />
            </View>

            <View className="mt-[140px] ml-8">
                <Text className="text-[44px] font-bold  mt-4">
                    Namaste!
                </Text>
                <Text className="text-gray-500 text-lg mb-6">
                    Choose a language to get started
                </Text>
            </View>

            <View className="flex-col w-full mb-8 px-8">
                {['Hindi', 'English'].map((languages) => (
                    <TouchableOpacity
                        key={languages}
                        className={`border-2 rounded-xl mb-1 p-4 ${selectedLanguage === languages ? 'border-green-800' : 'border-gray-300'
                            }`}
                        onPress={() => handleChoose(languages)}
                    >
                        <Text className="text-center text-lg font-bold">{languages} ➔</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                className="bg-green-700 rounded-md p-3 w-32 mt-6 mx-auto flex-row justify-center items-center"
            onPress={handleContinue}
            >
                <Text className="text-white text-center">Continue ➔</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LanguageSelectorPage;
