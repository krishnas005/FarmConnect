import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeStack from "./HomeScreen/HomeStack.js";
import NotificationScreen from "./NotificationScren.js";
import FAQScreen from "./FAQScreen";
import ProfileScreen from "./ProfileScreen";
import { Text } from 'react-native';
import HomeScreen from "./HomeScreen/index.js";
import DashboardScreen from "./HomeScreen/Dashboard.js";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Dashboard" component={DashboardScreen} />
      </HomeStack.Navigator>
    );
  }

export default function Layout() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: { backgroundColor: 'white', borderTopWidth: 0 },
                tabBarIcon: ({ focused, color, size }) => {
                    return <Text style={{ color: focused ? 'blue' : 'gray' }}>●</Text>;
                },
            })}
        >
            <Tab.Screen
                name="homeStack"
                component={HomeStackScreen}
                options={{ headerShown: false, title: 'Home' }}
            />

            <Tab.Screen
                name="notifications"
                component={NotificationScreen}
                options={{ headerShown: false, title: 'Notification' }}
            />
            <Tab.Screen
                name="faq"
                component={FAQScreen}
                options={{ headerShown: false, title: 'FAQ' }}
            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{ headerShown: false, title: 'Profile' }}
            />
        </Tab.Navigator>
    );
}
