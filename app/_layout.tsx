import { Stack } from 'expo-router';
import AppProvider from '../context/provider'

export default function RootLayout() {

  return (
    <AppProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/FarmerMain/HomeScreen/NearbyResources"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/LanguageSelect/index"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="screens/SignIn/index"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="screens/Register/index"
          options={{ title: 'Register', headerShown: false }}
        />
        <Stack.Screen
          name="screens/FarmerRegister/index"
          options={{ title: 'Register as Farmer', headerShown: false }}
        />
        <Stack.Screen
          name="screens/FarmerRegister/FarmLocation"
          options={{ title: 'Farm Location', headerShown: false }}
        />
        <Stack.Screen
          name="screens/CustomerRegister/index"
          options={{ title: 'Register as Customer', headerShown: false }}
        />
        <Stack.Screen
          name="screens/StorageWorkerRegister/index"
          options={{ title: 'Register as Storage Worker', headerShown: false }}
        />

        <Stack.Screen
          name="screens/CustomerMain/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/FarmerMain/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/StorageWorkerMain/index"
          options={{ headerShown: false }}
        />
      </Stack>
    </AppProvider>
  );
}
