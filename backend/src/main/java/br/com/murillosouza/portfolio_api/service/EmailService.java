package br.com.murillosouza.portfolio_api.service;

import br.com.murillosouza.portfolio_api.dto.ContactDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${portfolio.mail.to}")
    private String toEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(ContactDTO contactDTO) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("onboarding@resend.dev");

        message.setTo(toEmail);
        message.setSubject("Novo Contato do Portfólio - " + contactDTO.name());

        String body = String.format(
                "Você recebeu uma nova mensagem do seu portfólio.\n\n" +
                        "Nome: %s\n" +
                        "E-mail (Responder para): %s\n\n" +
                        "Mensagem:\n%s",
                contactDTO.name(), contactDTO.email(), contactDTO.message()
        );

        message.setText(body);

        mailSender.send(message);
    }
}