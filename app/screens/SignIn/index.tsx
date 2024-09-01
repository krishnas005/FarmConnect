import React from 'react';
import { useRouter } from 'expo-router';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function SignInScreen() {
  const router = useRouter();

  const handleRegister = () => {
    router.push('/screens/Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
      <Text>Sign In Screen</Text>
      <Button title="Register" onPress={handleRegister} />
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});