import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import ProfissionalCard from '../components/ProfissionalCard';
import ProfissionalService from '../services/ProfissionalService';

const ProfissionaisScreen = () => {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    ProfissionalService.getProfissionais().then(setProfissionais);
  }, []);

  return (
    <ScrollView>
      {profissionais.map((profissional) => (
        <ProfissionalCard key={profissional.id} profissional={profissional} />
      ))}
    </ScrollView>
  );
};

export default ProfissionaisScreen;
