import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfissionalCard = ({ profissional }) => (
  <View style={styles.card}>
    <Text>{profissional.nome}</Text>
    <Text>{profissional.especialidade}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});

export default ProfissionalCard;
