import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';

import HomeScreen from "./HomeScreen/index.js";

import NotificationScreen from "./NotificationScreen.js";
import FAQScreen from "./FAQScreen";
import ProfileScreen from "./ProfileScreen";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

// const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10
        },
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Image source={require('../../../assets/images/bottomTabs/homeIcon.png')} style={{ width: 24, height: 24, tintColor: focused ? 'blue' : 'gray' }} />;
            case 'Notifications':
              return <Image source={require('../../../assets/images/bottomTabs/notificationIcon.png')} style={{ width: 24, height: 24, tintColor: focused ? 'blue' : 'gray' }} />;
            case 'FAQ':
              return <Image source={require('../../../assets/images/bottomTabs/faqIcon.png')} style={{ width: 24, height: 24, tintColor: focused ? 'blue' : 'gray' }} />;
            case 'Profile':
              return <Image source={require('../../../assets/images/bottomTabs/profileIcon.png')} style={{ width: 24, height: 24, tintColor: focused ? 'blue' : 'gray' }} />;
            default:
              return null;
          }
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5
        },
        headerShown: false
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}