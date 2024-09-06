import { Stack } from 'expo-router';
import AppProvider from '../context/provider';

const defaultScreenOptions = {
  headerShown: false, // Hides the header for all screens
};

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="index" options={defaultScreenOptions} />
        <Stack.Screen
          name="screens/LanguageSelect/index"
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name="screens/SignIn/index"
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name="screens/Register/index"
          options={{ title: 'Register', ...defaultScreenOptions }}
        />
        <Stack.Screen
          name="screens/FarmerRegister/index"
          options={{ title: 'Register as Farmer', ...defaultScreenOptions }}
        />
        <Stack.Screen
          name="screens/FarmerRegister/FarmLocation"
          options={{ title: 'Farm Location', ...defaultScreenOptions }}
        />
        <Stack.Screen
          name="screens/CustomerRegister/CustomerLocation"
          options={{ title: 'Customer Location', ...defaultScreenOptions }}
        />
        <Stack.Screen
          name="screens/StorageWorkerRegister/WorkerLocation"
          options={{ title: 'Worker Location', ...defaultScreenOptions }}
        />
        <Stack.Screen
          name="screens/CustomerRegister/index"
          options={{ title: 'Register as Customer', ...defaultScreenOptions }}
        />
        <Stack.Screen
          name="screens/StorageWorkerRegister/index"
          options={{ title: 'Register as Storage Worker', ...defaultScreenOptions }}
        />

        {/* Screens with no back navigation and no header */}
        <Stack.Screen
          name="screens/FarmerMain/index"
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name="screens/CustomerMain/index"
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name="screens/StorageWorkerMain/index"
          options={defaultScreenOptions}
        />
      </Stack>
    </AppProvider>
  );
}
