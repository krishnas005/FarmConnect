import { Stack } from 'expo-router';
import { useAuth } from '../context/auth-context';

export default function RootLayout() {
  // const { userRole } = useAuth();

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      
      <Stack.Screen 
        name="screens/SignIn/index" 
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="screens/Register/index" 
        options={{ title: 'Register', headerShown: true }} 
      />
      <Stack.Screen 
        name="screens/FarmerRegister/index" 
        options={{ title: 'Register as Farmer', headerShown: true }} 
      />
      <Stack.Screen 
        name="screens/CustomerRegister/index" 
        options={{ title: 'Register as Customer', headerShown: true }} 
      />
      <Stack.Screen 
        name="screens/StorageWorkerRegister/index" 
        options={{ title: 'Register as Storage Worker', headerShown: true }} 
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
  );
}
