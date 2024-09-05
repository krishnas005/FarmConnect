import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import HomeScreen from "./HomeScreen/index.js";
import NearbyServices from "./HomeScreen/NearbyResources.js"
import DashboardScreen from "./HomeScreen/Dashboard.js";
import NearbyResources from "./HomeScreen/NearbyStorage.js";
import GovernmentSchemes from "./HomeScreen/Schemes.js";
import PredictedRateScreen from "./HomeScreen/RatePrediction.js";
import ContractOpportunities from "./HomeScreen/ContractFarming.js";
import CropListing from "./HomeScreen/SellProduce.js";

import NotificationScreen from "./NotificationScren.js";
import FAQScreen from "./FAQScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Dashboard" component={DashboardScreen} />
      <HomeStack.Screen name="NearbyServices" component={NearbyServices} />
      <HomeStack.Screen name="NearbyResources" component={NearbyResources} />
      <HomeStack.Screen name="Schemes" component={GovernmentSchemes} />
      <HomeStack.Screen name="ContractOpportunity" component={ContractOpportunities} />
      <HomeStack.Screen name="CropListing" component={CropListing} />
      <HomeStack.Screen name="RatePrediction" component={PredictedRateScreen} />
    </HomeStack.Navigator>
  );
}

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: 'white', borderTopWidth: 0 },
        tabBarIcon: ({ focused, color, size }) => {
          return <Text style={{ color: focused ? 'blue' : 'gray' }}>●</Text>;
        },
        headerShown: false
      })}
    >
      <Tab.Screen
        name="homeStack"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="notifications"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="faq"
        component={FAQScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}