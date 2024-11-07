package com.example.barberShopJetApi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Profissional profissional;

    @ManyToOne
    private TipoServico tipoServico;
    private LocalDateTime dataHora;
    private String clienteNome;
    private String clienteEmail;
}
