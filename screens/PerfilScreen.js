/* eslint-disable no-undef */
import React from 'react';
import { View, Button, Text } from 'react-native';

const PerfilScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Perfil</Text>
      <Button title="Meus Dados" onPress={() => navigation.navigate('MeusDados')} />
      <Button title="Endereço" onPress={() => navigation.navigate('Endereco')} />
      <Button title="Histórico de Atividades" onPress={() => navigation.navigate('Historico')} />
      <Button title="Avaliar" onPress={() => Linking.openURL('https://play.google.com/store')} />
    </View>
  );
};

export default PerfilScreen;
