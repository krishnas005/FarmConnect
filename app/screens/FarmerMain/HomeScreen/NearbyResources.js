import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const sampleData = {
  mandi: [
    { id: 1, name: 'Krishna Nagar Mandi', date: 'Friday, May 11, 2021', location: { latitude: 28.688, longitude: 77.288 }, area: 'Krishna Nagar' },
    { id: 2, name: 'Rohini Mandi', date: 'Saturday, May 12, 2021', location: { latitude: 28.567, longitude: 77.344 }, area: 'Rohini' },
  ],
  transport: [
    { id: 1, name: 'Krishna Nagar Transport Hub', date: 'Friday, May 11, 2021', location: { latitude: 28.688, longitude: 77.288 }, area: 'Krishna Nagar' },
    { id: 2, name: 'Rohini Transport', date: 'Saturday, May 12, 2021', location: { latitude: 28.567, longitude: 77.344 }, area: 'Rohini' },
  ]
};

const App = () => {
  const [selectedOption, setSelectedOption] = useState('mandi');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Header */}
        <Text style={styles.headerText}>Nearby Resources</Text>
        <Text style={styles.subHeaderText}>Find nearest {selectedOption}</Text>
        
        {/* Options */}
        <View style={styles.optionContainer}>
          {['mandi', 'transport', 'option3'].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                selectedOption === option ? styles.selectedOptionButton : styles.unselectedOptionButton
              ]}
              onPress={() => setSelectedOption(option)}
            >
              <Text style={selectedOption === option ? styles.selectedOptionText : styles.unselectedOptionText}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* List of Resources */}
        <ScrollView style={styles.scrollView}>
          {sampleData[selectedOption]?.map((item) => (
            <View key={item.id} style={styles.card}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: item.location.latitude,
                  longitude: item.location.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker coordinate={item.location} title={item.name} />
              </MapView>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
              <Text style={styles.cardArea}>{item.area}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeaderText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  selectedOptionButton: {
    backgroundColor: 'green',
  },
  unselectedOptionButton: {
    backgroundColor: 'lightgray',
  },
  selectedOptionText: {
    color: 'white',
  },
  unselectedOptionText: {
    color: 'black',
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  map: {
    height: 200, // Make sure to define height for the MapView
    width: '100%',
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardDate: {
    color: 'gray',
  },
  cardArea: {
    color: 'green',
  },
});

export default App;
