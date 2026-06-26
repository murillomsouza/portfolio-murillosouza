# Portfólio Pessoal - Murillo Souza

Este repositório contém o código-fonte do meu portfólio pessoal, projetado para apresentar meus projetos, habilidades e experiências como Desenvolvedor focado em Backend, Arquitetura de Software e Sistemas Embarcados.

A aplicação foi estruturada em um ambiente containerizado completo, separando as camadas de Frontend e Backend para garantir escalabilidade e padronização.

## Arquitetura do Projeto

O projeto adota uma arquitetura em camadas (separação de responsabilidades), orquestrada via Docker Compose.

* **Frontend:** Aplicação Single Page (SPA) desenvolvida com React e Vite.
* **Backend:** API REST desenvolvida em Java com Spring Boot (Em desenvolvimento).
* **Infraestrutura:** Docker e Docker Compose para padronização do ambiente de desenvolvimento e deploy.

## Tecnologias Utilizadas

### Frontend
* React.js (Vite)
* Tailwind CSS v4 (Estilização utilitária)
* Lucide React (Ícones vetoriais SVG)
* React Simple Typewriter (Animações de digitação)

### Backend
* Java
* Spring Boot
* Maven

### Infraestrutura & Ferramentas
* Docker & Docker Compose
* Git & GitHub

## Como rodar o projeto localmente

Pré-requisitos: Você precisa ter o **Docker** e o **Docker Compose** instalados na sua máquina.

1. Clone o repositório:
```bash
git clone [https://github.com/murillomsouza/meu-portfolio.git](https://github.com/murillomsouza/meu-portfolio.git)
```

2. Acesse a pasta do projeto:
```bash
cd meu-portfolio
```

3. Suba os containers em segundo plano:
```bash
docker compose up -d --build
```

4. Acesse a aplicação:
* O frontend estará disponível em: http://localhost:5173
* O backend (API) estará disponível em: http://localhost:8080 (Em breve)

## Estrutura de Pastas

```text
/
├── frontend/             # Aplicação React/Vite
│   ├── src/              # Componentes, estilos e lógicas do UI
│   ├── public/           # Assets estáticos
│   └── Dockerfile        # Containerização do front
├── backend/              # Aplicação Java/Spring Boot
│   └── Dockerfile        # Containerização do back
├── docker-compose.yml    # Orquestração dos containers
└── README.md             # Documentação do projeto
```

## Contato

* **E-mail:** murillosouza997@gmail.com
* **LinkedIn:** [linkedin.com/in/murillo-de-souza](https://linkedin.com/in/murillo-de-souza)
* **GitHub:** [github.com/murillomsouza](https://github.com/murillomsouza)

---
*Desenvolvido por Murillo Souza.*