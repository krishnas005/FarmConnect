import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button 
        title="Register as Farmer" 
        onPress={() => router.push('/screens/FarmerRegister')} 
      />
      <Button 
        title="Register as Customer" 
        onPress={() => router.push('/screens/CustomerRegister')} 
      />
      <Button 
        title="Register as Storage Worker" 
        onPress={() => router.push('/screens/StorageWorkerRegister')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
