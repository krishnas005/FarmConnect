import { Link, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>Sorry! Wrong page</Text>
      </View>
    </>
  );
}
