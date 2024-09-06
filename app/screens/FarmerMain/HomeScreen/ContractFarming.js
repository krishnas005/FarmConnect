import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Button, Linking, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const contracts = [
  {
    id: '1',
    crop: 'Wheat',
    companyName: 'Agro Corp',
    contractType: 'Forward',
    contractDuration: '6 months',
    guaranteedPrice: 'Rs.2500/ton',
    minQuantity: '100 tons',
    additionalBenefits: 'Free transportation',
    paymentTerms: 'Net 30 days',
    location: 'Mohali',
    contractStatus: 'Active',
    contact: '+123456789',
  },
  {
    id: '2',
    crop: 'Corn',
    companyName: 'Green Harvest',
    contractType: 'Spot',
    contractDuration: '3 months',
    guaranteedPrice: 'Rs.1500/ton',
    minQuantity: '50 tons',
    additionalBenefits: 'Discount on fertilizer',
    paymentTerms: 'Net 15 days',
    location: 'Nagpur',
    contractStatus: 'Active',
    contact: '+987654321',
  },
  {
    id: '3',
    crop: 'Soybeans',
    companyName: 'Soy World Ltd',
    contractType: 'Forward',
    contractDuration: '12 months',
    guaranteedPrice: 'Rs.2200/ton',
    minQuantity: '200 tons',
    additionalBenefits: 'Warehouse storage',
    paymentTerms: 'Net 45 days',
    location: 'Morinda',
    contractStatus: 'Active',
    contact: '+192837465',
  },
  {
    id: '4',
    crop: 'Rice',
    companyName: 'Rice Masters',
    contractType: 'Forward',
    contractDuration: '9 months',
    guaranteedPrice: 'Rs.2700/ton',
    minQuantity: '120 tons',
    additionalBenefits: 'Free quality inspection',
    paymentTerms: 'Net 30 days',
    location: 'Agra',
    contractStatus: 'Pending',
    contact: '+5647382910',
  },
  {
    id: '5',
    crop: 'Barley',
    companyName: 'Grain Solutions',
    contractType: 'Spot',
    contractDuration: '4 months',
    guaranteedPrice: 'Rs.1800/ton',
    minQuantity: '75 tons',
    additionalBenefits: 'Flexible delivery',
    paymentTerms: 'Immediate',
    location: 'Nagpur',
    contractStatus: 'Completed',
    contact: '+1029384756',
  },
  {
    id: '6',
    crop: 'Millet',
    companyName: 'Farm Fresh',
    contractType: 'Forward',
    contractDuration: '8 months',
    guaranteedPrice: 'Rs.2100/ton',
    minQuantity: '90 tons',
    additionalBenefits: 'Insurance included',
    paymentTerms: 'Net 30 days',
    location: 'Bangalore',
    contractStatus: 'Active',
    contact: '+5678912345',
  },
  {
    id: '7',
    crop: 'Sugarcane',
    companyName: 'Sweet Harvest',
    contractType: 'Spot',
    contractDuration: '5 months',
    guaranteedPrice: 'Rs.2400/ton',
    minQuantity: '150 tons',
    additionalBenefits: 'On-site storage',
    paymentTerms: 'Net 20 days',
    location: 'Chandigarh',
    contractStatus: 'Active',
    contact: '+6574839201',
  },
  {
    id: '8',
    crop: 'Cotton',
    companyName: 'Fiber Fields',
    contractType: 'Forward',
    contractDuration: '10 months',
    guaranteedPrice: 'Rs.3500/ton',
    minQuantity: '200 tons',
    additionalBenefits: 'Transportation subsidy',
    paymentTerms: 'Net 60 days',
    location: 'Pune',
    contractStatus: 'Pending',
    contact: '+8791234567',
  }
];


export default function ContractOpportunities() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);

  const handleContactPress = (contact) => {
    Linking.openURL(`tel:${contact}`);
  };

  const openModal = (contract) => {
    setSelectedContract(contract);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contract Opportunities</Text>
      <FlatList
        data={contracts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)} style={styles.contractItem}>
            {/* Icon */}
            <View style={styles.iconContainer}>
              <FontAwesome5 name="seedling" size={24} color="green" />
            </View>

            {/* Contract Details */}
            <View style={styles.detailsContainer}>
              <Text style={styles.cropName}>{item.crop}</Text>
              <Text style={styles.contractDetails}>Buyer: {item.companyName}, Location: {item.location}</Text>
              <Text style={styles.price}>{item.guaranteedPrice}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Modal for contract details */}
      {selectedContract && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Contract Details</Text>
              <Text style={styles.modalText}>Company Name: {selectedContract.companyName}</Text>
              <Text style={styles.modalText}>Contract Type: {selectedContract.contractType}</Text>
              <Text style={styles.modalText}>Contract Duration: {selectedContract.contractDuration}</Text>
              <Text style={styles.modalText}>Guaranteed Price: {selectedContract.guaranteedPrice}</Text>
              <Text style={styles.modalText}>Minimum Quantity: {selectedContract.minQuantity}</Text>
              <Text style={styles.modalText}>Additional Benefits: {selectedContract.additionalBenefits}</Text>
              <Text style={styles.modalText}>Payment Terms: {selectedContract.paymentTerms}</Text>
              <Text style={styles.modalText}>Location: {selectedContract.location}</Text>
              <Text style={styles.modalText}>Contract Status: {selectedContract.contractStatus}</Text>
              <View className="flex-row justify-around mt-4">
                <Button
                  title="Contact Contractor"
                  onPress={() => handleContactPress(selectedContract.contact)}
                />
                <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contractItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  cropName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contractDetails: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#009688',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
