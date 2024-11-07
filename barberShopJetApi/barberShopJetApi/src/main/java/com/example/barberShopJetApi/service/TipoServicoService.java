package com.example.barberShopJetApi.service;

import com.example.barberShopJetApi.model.TipoServico;
import com.example.barberShopJetApi.repository.TipoServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipoServicoService {

    @Autowired
    private TipoServicoRepository tipoServicoRepository;

    public List<TipoServico> listarTipoServicos() {
        return tipoServicoRepository.findAll();
    }

    public TipoServico salvarTipoServico(TipoServico tipoServico) {
        return tipoServicoRepository.save(tipoServico);
    }
}

