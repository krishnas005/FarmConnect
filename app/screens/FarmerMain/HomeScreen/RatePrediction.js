import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get("window").width;

const produceData = [
    { label: "Wheat", value: "Wheat" },
    { label: "Maize", value: "Maize" },
    { label: "Soybeans", value: "Soybeans" },
    { label: "Rice", value: "Rice" },
    { label: "Barley", value: "Barley" },
];

const locationData = [
    { label: "Mumbai", value: "Mumbai" },
    { label: "Delhi", value: "Delhi" },
    { label: "Bengaluru", value: "Bengaluru" },
    { label: "Chennai", value: "Chennai" },
    { label: "Kolkata", value: "Kolkata" },
];

const defaultData = {
    Mumbai: {
        Wheat: [400, 420, 450, 430, 440],
        Maize: [380, 400, 420, 410, 430],
        Soybeans: [390, 410, 440, 430, 450],
        Rice: [420, 430, 450, 460, 470],
        Barley: [410, 420, 430, 440, 450],
    },
    Delhi: {
        Wheat: [420, 440, 460, 450, 470],
        Maize: [400, 410, 420, 430, 440],
        Soybeans: [410, 420, 430, 440, 450],
        Rice: [430, 440, 450, 460, 470],
        Barley: [420, 430, 440, 450, 460],
    },
    Bengaluru: {
        Wheat: [410, 420, 430, 440, 450],
        Maize: [390, 400, 420, 430, 440],
        Soybeans: [400, 420, 430, 440, 450],
        Rice: [420, 430, 440, 450, 460],
        Barley: [410, 420, 430, 440, 450],
    },
    Chennai: {
        Wheat: [400, 420, 440, 450, 460],
        Maize: [380, 400, 420, 430, 440],
        Soybeans: [390, 410, 430, 440, 450],
        Rice: [410, 430, 440, 450, 460],
        Barley: [400, 410, 420, 430, 440],
    },
    Kolkata: {
        Wheat: [430, 440, 450, 460, 470],
        Maize: [400, 410, 420, 430, 440],
        Soybeans: [410, 420, 430, 440, 450],
        Rice: [420, 430, 440, 450, 460],
        Barley: [410, 420, 430, 440, 450],
    },
};

const fallbackData = [400, 410, 420, 430, 440];

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
        borderRadius: 16,
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#007BFF",
    },
};

export default function PredictedRateScreen() {
    const [selectedProduce, setSelectedProduce] = useState("Wheat");
    const [selectedLocation, setSelectedLocation] = useState("Mumbai");
    const [data, setData] = useState({
        labels: ["09/01", "09/08", "09/15", "09/22", "09/29"],
        datasets: [
            {
                data: defaultData["Mumbai"]["Wheat"],
                strokeWidth: 2,
            },
        ],
    });

    const handleProduceChange = (itemValue) => {
        setSelectedProduce(itemValue);
        updateChartData(selectedLocation, itemValue);
    };

    const handleLocationChange = (itemValue) => {
        setSelectedLocation(itemValue);
        updateChartData(itemValue, selectedProduce);
    };

    const updateChartData = (location, produce) => {
        const locationData = defaultData[location];
        const produceData = locationData ? locationData[produce] : undefined;

        setData({
            labels: ["09/01", "09/08", "09/15", "09/22", "09/29"],
            datasets: [
                {
                    data: produceData || fallbackData,
                    strokeWidth: 2,
                },
            ],
        });
    };

    return (
        <ScrollView className='bg-gray-100 p-4'>
            {/* Header */}
            <View className='flex-row justify-between items-center mb-4'>
                <Text className='text-3xl font-semibold'>Predict Crop Rates</Text>
                <TouchableOpacity>
                    <Text className='text-lg'>⚙️</Text>
                </TouchableOpacity>
            </View>

            {/* Select Produce */}
            <View className='mb-4'>
                <Text className='text-lg font-medium mb-2'>Select Produce</Text>
                <View className='bg-gray-200 rounded-md'>
                    <Picker
                        selectedValue={selectedProduce}
                        onValueChange={handleProduceChange}
                    >
                        {produceData.map((item) => (
                            <Picker.Item label={item.label} value={item.value} key={item.value} />
                        ))}
                    </Picker>
                </View>
            </View>

            {/* Select Location */}
            <View className='mb-4'>
                <Text className='text-lg font-medium mb-2'>Select Location</Text>
                <View className='bg-gray-200 rounded-md'>
                    <Picker
                        selectedValue={selectedLocation}
                        onValueChange={handleLocationChange}
                    >
                        {locationData.map((item) => (
                            <Picker.Item label={item.label} value={item.value} key={item.value} />
                        ))}
                    </Picker>
                </View>
            </View>

            {/* Button */}
            <TouchableOpacity className='bg-blue-500 py-3 rounded-md mb-6'>
                <Text className='text-center text-white font-semibold'>Get Predicted Rate</Text>
            </TouchableOpacity>

            {/* Rate Trend */}
            <View className='bg-white rounded-lg p-4'>
                <Text className='text-lg font-medium mb-1'>Rate Trend</Text>
                <Text className='text-2xl font-bold'>$450 per ton</Text>
                <Text className='text-sm text-gray-500'>Last 30 days <Text className='text-green-500'>+5%</Text></Text>

                {/* Chart */}
                <LineChart
                    data={data}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    className='mt-4'
                />
            </View>
        </ScrollView>
    );
}
