import React from 'react';
import { View, Button, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Bem-vindo ao BarberJet</Text>
      <Button title="Agendar" onPress={() => navigation.navigate('Agendamentos')} />
      <Button title="Conheça os Profissionais" onPress={() => navigation.navigate('Profissionais')} />
      <Button title="Ver Mapa" onPress={() => navigation.navigate('Mapa')} />
    </View>
  );
};
export default HomeScreen;