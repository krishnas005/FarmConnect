import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import notifications from './notification.json';
import { useRouter } from 'expo-router';
import Navbar from '../../../components/Navbar';

const icons = {
  reminder: require('../../../assets/images/notificationIcon1.png'),
  message: require('../../../assets/images/notificationIcon1.png'),
  order: require('../../../assets/images/notificationIcon1.png'),
  scheme: require('../../../assets/images/notificationIcon1.png')
};


const NotificationItem = ({ item }) => {

  return (
    <View className={`flex-row items-center p-4 ${item.bgColor} border-1 border-gray-200 rounded-2xl mb-2`}>
      <Image source={icons[item.icon]} className=" p-4 w-6 h-6 mr-4 mb-4" />
      <View className="flex-1">
        <Text className="text-lg font-semibold text-black">{item.title}</Text>
        <Text className="text-sm text-gray-600">{item.description}</Text>
      </View>
      <Text className="text-xs text-gray-500">{item.time}</Text>
    </View>
  );
};

const NotificationsScreen = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/screens/FarmerMain");
  };
  return (
    <View className="flex-1 bg-white ">
      {/* <TouchableOpacity onPress={handleBack}>
        <Image
          source={require("../../../assets/images/backIcon.png")}
          className="w-8 h-4 mt-2"
        />
      </TouchableOpacity> */}
      <Navbar />
      <View className="p-4">
        <Text className="text-4xl font-bold">Notifications</Text>
        <Text className="mb-5 text-gray-600 text-lg">See all the important notifications</Text>
        <FlatList
          data={notifications}
          renderItem={({ item }) => <NotificationItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default NotificationsScreen;