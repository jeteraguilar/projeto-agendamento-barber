package com.example.barberShopJetApi.controller;

import com.example.barberShopJetApi.model.TipoServico;
import com.example.barberShopJetApi.service.TipoServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/servicos")
public class TipoServicoController {

    @Autowired
    private TipoServicoService tipoServicoService;

    @GetMapping
    public List<TipoServico> listarTipoServicos() {
        return tipoServicoService.listarTipoServicos();
    }

    @PostMapping
    public TipoServico criarTipoServico(@RequestBody TipoServico tipoServico) {
        return tipoServicoService.salvarTipoServico(tipoServico);
    }
}

