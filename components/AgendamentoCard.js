import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AgendamentoCard = ({ agendamento }) => (
  <View style={styles.card}>
    <Text>Serviço: {agendamento.tipoServico.nome}</Text>
    <Text>Profissional: {agendamento.profissional.nome}</Text>
    <Text>Data/Hora: {agendamento.dataHora}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
  },
});

export default AgendamentoCard;
