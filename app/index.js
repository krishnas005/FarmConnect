import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/screens/SignIn');
    }, 100);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
        {/* <Link href="/screens/SignIn">Continue</Link>
        <Text className="text-3xl font-bold">Welcome Screen</Text> */}
      </View>
  );
}