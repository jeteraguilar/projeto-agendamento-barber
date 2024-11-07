import api from './ApiService';

const ProfissionalService = {
  getProfissionais: () => api.get('/profissionais').then(response => response.data),
};

export default ProfissionalService;
