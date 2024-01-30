import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FlipView from 'react-native-flipper';

const YourComponent = () => {
  return (
    <View style={styles.container}>
      <FlipView
        style={styles.flipCard}
        front={
          <TouchableOpacity activeOpacity={1} style={[styles.card, styles.frontCard]}>
            <Text style={styles.cardText}>Front Content</Text>
          </TouchableOpacity>
        }
        back={
          <TouchableOpacity activeOpacity={1} style={[styles.card, styles.backCard]}>
            <Text style={styles.cardText}>Back Content</Text>
          </TouchableOpacity>
        }
        isFlipped={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipCard: {
    width: 200,
    height: 300,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  frontCard: {
    backgroundColor: '#3498db',
  },
  backCard: {
    backgroundColor: '#2ecc71',
  },
  cardText: {
    color: 'white',
    fontSize: 18,
  },
});

export default YourComponent;
