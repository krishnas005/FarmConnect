import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/screens/SignIn');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Link href="/screens/SignIn">Continue</Link>
        <Text>Welcome Screen</Text>
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