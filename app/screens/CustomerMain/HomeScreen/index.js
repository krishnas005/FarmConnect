import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../../../../components/Navbar';
import Carousel from '../../../../components/Carousel';
import ServiceCard from '../../../../components/ServiceCard';
import OtherServices from '../../../../components/OtherServices';

const services = [
  {
    title: 'My Dashboard',
    description: ' ',
    image: require('../../../../assets/images/servicesIcon.png'),
    color: '#90EE90',
    link: 'Dashboard' 
  },
  {
    title: 'Nearby Storage',
    description: ' ',
    image: require('../../../../assets/images/servicesIcon3.png'),
    color: '#E8F7FC',
    link: 'NearbyResources' 
  },
  {
    title: 'Buy From Farmers',
    description: ' ',
    image: require('../../../../assets/images/servicesIcon2.png'),
    color: '#90EE90',
    link: 'BuyFromFarmers' 
  },
  {
    title: 'Schemes for me',
    description: ' ',
    image: require('../../../../assets/images/servicesIcon4.png'),
    color: '#90EE90',
    link: 'Schemes' 
  },
  {
    title: 'Contract Farming',
    description: ' ',
    image: require('../../../../assets/images/servicesIcon5.png'),
    color: '#E8F7FC',
    link: 'ContractOpportunity' 
  },
  {
    title: 'AI Rate Prediction',
    description: ' ',
    image: require('../../../../assets/images/servicesIcon6.png'),
    color: '#90EE90',
    link: 'RatePrediction' 
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <Carousel />
        <View style={styles.serviceContainer}>
          {services.map((service, index) => (
            <View style={styles.serviceWrapper} key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                bgColor={service.color}
                link={service.link}
                navigation={navigation} 
              />
            </View>
          ))}
        </View>

        {/* <TouchableOpacity 
          style={styles.nearbyCard} 
          onPress={() => navigation.navigate('Dashboard')} 
        >
          <Image 
            source={require('../../../../assets/images/NearbyServices.png')} 
            style={styles.nearbyImage} 
          />
          <Text style={styles.nearbyTitle}>Find Nearby Services</Text>
          <Text style={styles.nearbyDescription}>
            Search for services around you and get directions!
          </Text>
        </TouchableOpacity> */}

      
        <TouchableOpacity 
          style={styles.nearbyCard} 
          onPress={() => navigation.navigate('Schemes')} 
        >
          <Image 
            source={require('../../../../assets/images/farmerSlider/img3.jpg')} 
            style={styles.nearbyImage} 
          />
          <Text style={styles.nearbyTitle}>Explore Government Schemes</Text>
          <Text style={styles.nearbyDescription}>
            Search for the best government schemes!
          </Text>
        </TouchableOpacity>

        <OtherServices navigation={navigation} />

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