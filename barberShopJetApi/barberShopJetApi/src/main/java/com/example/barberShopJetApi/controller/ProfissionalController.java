package com.example.barberShopJetApi.controller;

import com.example.barberShopJetApi.model.Profissional;
import com.example.barberShopJetApi.service.ProfissionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profissionais")
public class ProfissionalController {

    @Autowired
    private ProfissionalService profissionalService;

    @GetMapping
    public List<Profissional> listarProfissionais() {
        return profissionalService.listarProfissionais();
    }

    @PostMapping
    public Profissional criarProfissional(@RequestBody Profissional profissional) {
        return profissionalService.salvarProfissional(profissional);
    }
}

