import api from './ApiService';

const TipoServicoService = {
  getServicos: () => api.get('/servicos').then(response => response.data),
};

export default TipoServicoService;
