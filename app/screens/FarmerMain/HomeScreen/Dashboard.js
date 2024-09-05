import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';

const DashboardScreen = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;

  const pieChartData = [
    { name: 'Sales', population: 30, color: '#FF6384', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Laptops', population: 35.6, color: '#36A2EB', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Bags', population: 19, color: '#FFCE56', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Crockery', population: 20, color: '#4BC0C0', legendFontColor: '#333', legendFontSize: 12 },
  ];

  const barChartData = {
    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        data: [3000, 4500, 4000, 5000, 12500, 7000],
      },
    ],
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <View className="flex-row items-center ml-2">
          {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require("../../../../assets/images/backIcon.png")}
              className="w-8 h-4"
            />
          </TouchableOpacity> */}
          <Text className="text-black text-3xl font-bold ">Dashboard</Text>
        </View>

        <Text className="text-gray-600 text-lg ml-2">Manage all the information in one place!</Text>

        {/* Balance and Income Summary */}
        <View className="mt-4 flex-row flex-wrap justify-between">
          <View className="w-1/2 p-2">
            <View className="bg-yellow-100 p-4 rounded-lg flex items-center">
              <Text className="text-yellow-600 font-semibold">My Balance</Text>
              <Text className="text-xl font-bold mt-2">₹12,750</Text>
            </View>
          </View>
          <View className="w-1/2 p-2">
            <View className="bg-green-100 p-4 rounded-lg flex items-center">
              <Text className="text-green-600 font-semibold">Income</Text>
              <Text className="text-xl font-bold mt-2">₹5,600</Text>
            </View>
          </View>
          <View className="w-1/2 p-2">
            <View className="bg-red-100 p-4 rounded-lg flex items-center">
              <Text className="text-red-600 font-semibold">Expenses</Text>
              <Text className="text-xl font-bold mt-2">₹3,460</Text>
            </View>
          </View>
          <View className="w-1/2 p-2">
            <View className="bg-blue-100 p-4 rounded-lg flex items-center">
              <Text className="text-blue-600 font-semibold">Total Saving</Text>
              <Text className="text-xl font-bold mt-2">₹7,920</Text>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
        <View className="mt-6">
          <Text className="text-lg font-semibold">Recent Transactions</Text>
          <View className="mt-4 p-4 bg-white border rounded-lg shadow-sm">
            {[
              { name: 'Krishna Sharma', date: '23 January 2021', amount: '-₹950', color: 'text-red-500' },
              { name: 'Tushar Oli', date: '25 January 2021', amount: '+₹1,500', color: 'text-green-500' },
              { name: 'Aditi', date: '31 January 2021', amount: '+₹1,400', color: 'text-green-500' },
            ].map((transaction, index) => (
              <View key={index} className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                  <View className="bg-gray-200 w-8 h-8 rounded-full mr-4"></View>
                  <View>
                    <Text className="font-semibold">{transaction.name}</Text>
                    <Text className="text-gray-500">{transaction.date}</Text>
                  </View>
                </View>
                <Text className={`${transaction.color} font-semibold`}>{transaction.amount}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Best Sellers (Pie Chart) */}
        <View className="mt-6">
          <Text className="text-lg font-semibold">Best Sellers</Text>
          <View className="mt-4 p-4 bg-white border rounded-lg shadow-sm">
            <PieChart
              data={pieChartData}
              width={screenWidth - 32} 
              height={220}
              chartConfig={{
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>
        </View>

        {/* My Expenses (Bar Chart) */}
        <View className="mt-6">
          <Text className="text-lg font-semibold">My Expenses</Text>
          <View className="mt-4 p-4 bg-white border rounded-lg shadow-sm">
            <BarChart
              data={barChartData}
              width={screenWidth - 32}
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              verticalLabelRotation={30}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
