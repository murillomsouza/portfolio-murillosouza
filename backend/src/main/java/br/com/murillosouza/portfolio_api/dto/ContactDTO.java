package br.com.murillosouza.portfolio_api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ContactDTO(
        @NotBlank(message = "O nome é obrigatório")
        String name,

        @NotBlank(message = "O e-mail é obrigatório")
        @Email(message = "Formato de e-mail inválido")
        String email,

        @NotBlank(message = "A mensagem não pode estar vazia")
        String message
) {}