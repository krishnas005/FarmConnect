import React from 'react';
import { useRouter } from 'expo-router';
import {View, Text, Button} from 'react-native'
export default function FarmerRegisterScreen() {
  const router = useRouter();

  const handleRegister = () => {
    router.push('/screens/StorageWorkerMain');
  };

  return (
    <View>
      <Text>Storage Worker Register Screen</Text>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}