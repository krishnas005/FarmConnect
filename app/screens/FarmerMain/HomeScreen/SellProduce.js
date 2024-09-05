import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

export default function CropListing() {
  const [category, setCategory] = useState('Crops');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [availableFrom, setAvailableFrom] = useState(new Date());
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [village, setVillage] = useState('');
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || availableFrom;
    setShowDatePicker(false);
    setAvailableFrom(currentDate);
  };

  return (
    <ScrollView className='bg-gray-100 p-4'>
      <Text className='text-3xl font-bold mb-4 text-center py-2'>List your produce</Text>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Category*</Text>
        <View className='bg-white rounded-md'>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Crops" value="Crops" />
            <Picker.Item label="Fruits" value="Fruits" />
            <Picker.Item label="Vegetables" value="Vegetables" />
          </Picker>
        </View>
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Enter Title*</Text>
        <TextInput
          className='bg-white p-3 rounded-md'
          placeholder="Enter Title"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Enter Description*</Text>
        <TextInput
          className='bg-white p-3 rounded-md'
          placeholder="Enter Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Item Quantity*</Text>
        <TextInput
          className='bg-white p-3 rounded-md'
          placeholder="Quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />
        <View className='flex-row mt-2'>
          <TouchableOpacity className='mr-2'>
            <Text className='p-2 bg-gray-200 rounded-md'>20kg</Text>
          </TouchableOpacity>
          <TouchableOpacity className='mr-2'>
            <Text className='p-2 bg-gray-200 rounded-md'>Ton</Text>
          </TouchableOpacity>
          <TouchableOpacity className='mr-2'>
            <Text className='p-2 bg-gray-200 rounded-md'>Kg</Text>
          </TouchableOpacity>
          <TouchableOpacity className='mr-2'>
            <Text className='p-2 bg-gray-200 rounded-md'>Gram</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Expected Price*</Text>
        <TextInput
          className='bg-white p-3 rounded-md'
          placeholder="₹"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <View className='flex-row mt-2'>
          <TouchableOpacity className='mr-2'>
            <Text className='p-2 bg-gray-200 rounded-md'>Per 20kg</Text>
          </TouchableOpacity>
          <TouchableOpacity className='mr-2'>
            <Text className='p-2 bg-gray-200 rounded-md'>Per Ton</Text>
          </TouchableOpacity>
          <TouchableOpacity className='mr-2'>
            <Text className='p-2 bg-gray-200 rounded-md'>Per Kg</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Available From*</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} className='bg-white p-3 rounded-md'>
          <Text>{availableFrom.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={availableFrom}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Enter Mobile No*</Text>
        <TextInput
          className='bg-white p-3 rounded-md'
          placeholder="+91"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Enter Address*</Text>
        <TextInput
          className='bg-white p-3 rounded-md'
          placeholder="Enter Address"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Select State*</Text>
        <Picker selectedValue={state} onValueChange={(itemValue) => setState(itemValue)} className='bg-white rounded-md'>
          <Picker.Item label="Select State" value="" />
          <Picker.Item label="Maharashtra" value="Maharashtra" />
          <Picker.Item label="Punjab" value="Punjab" />
        </Picker>
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Select District*</Text>
        <Picker selectedValue={district} onValueChange={(itemValue) => setDistrict(itemValue)} className='bg-white rounded-md'>
          <Picker.Item label="Select District" value="" />
        </Picker>
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Select Sub District*</Text>
        <Picker selectedValue={subDistrict} onValueChange={(itemValue) => setSubDistrict(itemValue)} className='bg-white rounded-md'>
          <Picker.Item label="Select Sub District" value="" />
        </Picker>
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Select Village*</Text>
        <Picker selectedValue={village} onValueChange={(itemValue) => setVillage(itemValue)} className='bg-white rounded-md'>
          <Picker.Item label="Select Village" value="" />
        </Picker>
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-medium mb-2'>Upload Image*</Text>
        <TouchableOpacity onPress={pickImage} className='bg-white p-3 rounded-md border-dashed border-2 border-gray-300 justify-center items-center'>
          {image ? (
            <Image source={{ uri: image }} className='h-20 w-20' />
          ) : (
            <Text className='text-gray-500'>+ Add Image</Text>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity className='bg-green-500 p-4 rounded-md'>
        <Text className='text-white text-center text-lg font-bold'>SAVE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
