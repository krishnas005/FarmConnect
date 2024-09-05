import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './index';
import NearbyResources from './NearbyResources'; 

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeMain" component={Home} options={{ title: 'Home' }} />
            <Stack.Screen name="Services" component={NearbyResources} options={{ title: 'Services' }} />
            {/* <Stack.Screen name="Other" component={OtherScreen} options={{ title: 'Other' }} /> */}
        </Stack.Navigator>
    );
}
