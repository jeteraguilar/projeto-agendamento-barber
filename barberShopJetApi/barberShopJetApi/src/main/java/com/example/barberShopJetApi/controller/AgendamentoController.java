package com.example.barberShopJetApi.controller;

import com.example.barberShopJetApi.model.Agendamento;
import com.example.barberShopJetApi.service.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/agendamentos")
public class AgendamentoController {

    @Autowired
    private AgendamentoService agendamentoService;

    @GetMapping
    public List<Agendamento> listarAgendamentos(@RequestParam("inicio") String inicio, @RequestParam("fim") String fim) {
        return agendamentoService.obterAgendamentos(LocalDateTime.parse(inicio), LocalDateTime.parse(fim));
    }

    @PostMapping
    public Agendamento criarAgendamento(@RequestBody Agendamento agendamento) {
        return agendamentoService.criarAgendamento(agendamento);
    }
}