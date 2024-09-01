import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FarmerMainScreen() {
  return (
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <Text>Farmer Main Screen</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    centeredContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });