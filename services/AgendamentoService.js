import api from './ApiService';

const AgendamentoService = {
  getAgendamentos: () => api.get('/agendamentos').then(response => response.data),

  agendar: (agendamento) => api.post('/agendamentos', agendamento),
};

export default AgendamentoService;
