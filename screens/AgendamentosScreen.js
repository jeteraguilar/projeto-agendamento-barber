import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AgendamentoService from '../services/AgendamentoService';

const AgendamentosScreen = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    AgendamentoService.getAgendamentos().then(setAgendamentos);
  }, []);

  return (
    <View>
      {agendamentos.map(agendamento => (
        <View key={agendamento.id}>
          <Text>{agendamento.tipoServico.nome} - {agendamento.profissional.nome}</Text>
          <Text>{agendamento.dataHora}</Text>
        </View>
      ))}
    </View>
  );
};

export default AgendamentosScreen;
