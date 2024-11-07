package com.example.barberShopJetApi.service;

import com.example.barberShopJetApi.model.Profissional;
import com.example.barberShopJetApi.repository.ProfissionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfissionalService {

    @Autowired
    private ProfissionalRepository profissionalRepository;

    public List<Profissional> listarProfissionais() {
        return profissionalRepository.findAll();
    }

    public Profissional salvarProfissional(Profissional profissional) {
        return profissionalRepository.save(profissional);
    }
}

