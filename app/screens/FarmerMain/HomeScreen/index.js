import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../../../../components/Navbar';
import Carousel from '../../../../components/Carousel';
import ServiceCard from '../../../../components/ServiceCard'; 

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <Carousel />
        <View style={styles.serviceContainer}>
          {[1, 2, 3, 4, 5, 6].map((service) => (
            <View style={styles.serviceWrapper} key={service}>
              <ServiceCard
                title={`Service ${service}`}
                description={`Description for service ${service}`}
                imageUrl={`https://via.placeholder.com/150`}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.nearbyCard} 
          onPress={() => navigation.navigate('Dashboard')} 
        >
          <Image 
            source={{ uri: 'https://via.placeholder.com/300x150' }} 
            style={styles.nearbyImage} 
          />
          <Text style={styles.nearbyTitle}>Find Nearby Services</Text>
          <Text style={styles.nearbyDescription}>
            Search for services around you and get directions!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  serviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  serviceWrapper: {
    width: '30%', 
    marginBottom: 16,
  },
  nearbyCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  nearbyImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  nearbyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
  },
  nearbyDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;
