import React from 'react';
import { useRouter } from 'expo-router';
import {View, Text, Button} from 'react-native'

export default function FarmerRegisterScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Farmer Register Screen</Text>
      <Button 
      title="Register as Farmer" 
      onPress={() => router.push('/screens/FarmerMain')} 
      />
    </View>
  );
}