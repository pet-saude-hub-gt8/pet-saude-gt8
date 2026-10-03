# PET-Saúde: Inovação Digital no SUS — GT 8

<p align="center">
  <img src="docs/assets/img/logo_pet.jpg" alt="Logo PET-Saúde" width="120" style="border-radius: 12px; margin: 0 10px;" />
  <img src="docs/assets/img/logo_unb_hub.jpg" alt="Logo UnB HUB EBSERH" width="220" style="border-radius: 12px; margin: 0 10px;" />
</p>

<p align="center">
  <strong>Ambulatório de Saúde Integral no Hospital Universitário de Brasília (HUB - UnB / EBSERH)</strong><br>
  <em>Qualificação da contrarreferência, triagem ambulatorial e integração entre a Atenção Primária e a Atenção Especializada do SUS.</em>
</p>

<p align="center">
  <a href="https://pet-saude-hub-gt8.github.io/pet-saude-gt8/"><img src="https://img.shields.io/badge/🌐_Portal_Online-Acessar_Documentação-0284c7?style=for-the-badge" alt="Portal Online" /></a>
  <a href="https://github.com/pet-saude-hub-gt8/pet-saude-gt8/actions/workflows/deploy.yml"><img src="https://img.shields.io/github/actions/workflow/status/pet-saude-hub-gt8/pet-saude-gt8/deploy.yml?branch=main&label=Deploy%20Pages&style=for-the-badge&logo=githubactions&logoColor=white" alt="Deploy Status" /></a>
  <img src="https://img.shields.io/badge/Python-3.11-3776ab?style=for-the-badge&logo=python&logoColor=white" alt="Python 3.11" />
  <img src="https://img.shields.io/badge/MkDocs-Material-526cfe?style=for-the-badge&logo=materialformkdocs&logoColor=white" alt="MkDocs Material" />
  <img src="https://img.shields.io/badge/Licen%C3%A7a-MIT-green?style=for-the-badge" alt="Licença MIT" />
</p>

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [O Problema e a Justificativa](#-o-problema-e-a-justificativa)
- [Estrutura da Plataforma](#-estrutura-da-plataforma)
- [Diferenciais de Design e Acessibilidade](#-diferenciais-de-design-e-acessibilidade)
- [Cenários de Prática](#-cenários-de-prática)
- [Como Executar Localmente](#-como-executar-localmente)
- [Pipeline de CI/CD e Deploy](#-pipeline-de-cicd-e-deploy)
- [Estrutura de Diretórios](#-estrutura-de-diretórios)
- [Instituições e Parcerias](#-instituições-e-parcerias)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **PET-Saúde: Inovação Digital no SUS — GT 8** é uma iniciativa interprofissional e intersetorial vinculada à **Universidade de Brasília (UnB)**, ao **Hospital Universitário de Brasília (HUB-Ebserh)**, à **Secretaria de Saúde do DF (SES-DF)** e ao **Ministério da Saúde**.

O objetivo central do Grupo de Trabalho 8 (GT 8) é **substituir o preenchimento em papel de parecer manual e lacônico por ferramentas digitais estruturadas, orientadas por critérios clínicos e integradas à linha de cuidado**. Com isso, busca-se acelerar a regulação técnica, evitar desfechos P3 (devoluções por falta de informação) e estreitar a interlocução entre o nível terciário e a Atenção Primária à Saúde (APS).

🔗 **Acesse o portal publicado:** [https://pet-saude-hub-gt8.github.io/pet-saude-gt8/](https://pet-saude-hub-gt8.github.io/pet-saude-gt8/)

---

## 🩺 O Problema e a Justificativa

* **Gargalo das Devoluções (P3):** No fluxo tradicional, cerca de **80% dos encaminhamentos e contrarreferências** retornam sem atendimento por ausência de dados clínicos objetivos ou por preenchimento em folhas físicas avulsas.
* **Falta de Padronização:** Informações essenciais (como exames prévios, tempo de evolução e estratificação de risco) frequentemente não constam no papel de parecer.
* **A Solução do GT 8:** Digitalizar o ponto de cuidado através de um **formulário didático e interativo**, capaz de guiar o profissional com checklists objetivos, validação em tempo real e geração automática de laudos padronizados para o prontuário.

---

## 📚 Estrutura da Plataforma

A documentação do projeto está dividida em páginas modulares:

| Seção | Descrição |
|---|---|
| **[Início](https://pet-saude-hub-gt8.github.io/pet-saude-gt8/)** | Visão geral do projeto, atalhos de navegação e visualizador interativo embutido da apresentação oficial de slides em PDF. |
| **[Objetivos](https://pet-saude-hub-gt8.github.io/pet-saude-gt8/objetivos/)** | Matriz de objetivos gerais e específicos, metas divididas por fases (Etapa 1: Diagnóstico; Etapa 2: Intervenção; Etapa 3: Avaliação) e diagnóstico situacional. |
| **[Equipe](https://pet-saude-hub-gt8.github.io/pet-saude-gt8/equipe/)** | Cards detalhados da composição interprofissional: tutores acadêmicos, preceptores de serviço e estudantes bolsistas/voluntários. |
| **[Encaminhamentos](https://pet-saude-hub-gt8.github.io/pet-saude-gt8/encaminhamentos/)** | Mapeamento das rotas assistenciais, matriz de prioridades regulatórias (Vermelho, Amarelo, Verde, Azul) e repositório de formulários institucionais. |
| **[Protótipo Digital](https://pet-saude-hub-gt8.github.io/pet-saude-gt8/prototipo/)** | Demonstração do protótipo digital do formulário didático guiado por protocolo clínico para contrarreferência no HUB. |

---

## ✨ Diferenciais de Design e Acessibilidade

O projeto conta com um **Design System customizado**, desenvolvido especificamente para refletir as identidades visuais da **UnB** (verde institucional) e do **PET-Saúde** (laranja vibrante):

* 🌓 **Modo Claro & Modo Escuro nativos:** Paleta harmonizada para leitura confortável em qualquer ambiente.
* 👁️ **Modo Alto Contraste:** Botão dedicado na barra superior em conformidade com as diretrizes e-MAG / WCAG.
* 🔠 **Ajuste Dinâmico de Tipografia:** Controles `A+` / `A-` para redimensionamento de fonte sem quebra de layout.
* 📊 **Apresentação de Slides Integrada:** Visualizador de PDF embutido diretamente no card da página inicial com botões para tela cheia e download.

---

## 🏥 Cenários de Prática

O projeto atua em cenários de prática integrados:

1. **Atenção Terciária Especializada:**
   * **Ambulatório de Saúde Integral do HUB (UnB / EBSERH)** — Centro de regulação e contrarreferência especializada.
2. **Atenção Primária à Saúde (APS / UBSs parceiras):**
   * **UBS 1 Asa Sul** *(Região Central)*
   * **UBS 17 Ceilândia** *(Região Oeste)*
   * **UBS 1 Itapoã** *(Região Leste)*
   * **UBS 1 Santa Maria** *(Região Sul)*

---

## 💻 Como Executar Localmente

### Pré-requisitos
* **Python 3.10+** (ou ambiente WSL com Ubuntu no Windows)
* **Git**

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/pet-saude-hub-gt8/pet-saude-gt8.git
   cd pet-saude-gt8
   ```

2. **Criar e ativar o ambiente virtual:**
   * No Linux / macOS / WSL:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
   * No Windows (PowerShell):
     ```powershell
     python -m venv venv
     .\venv\Scripts\Activate.ps1
     ```

3. **Instalar as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Iniciar o servidor de desenvolvimento:**
   ```bash
   mkdocs serve
   ```
   Acesse no seu navegador: **`http://127.0.0.1:8000`** *(com hot-reload automático a cada alteração)*.

5. **Compilar para produção:**
   ```bash
   mkdocs build
   ```
   Os arquivos finais serão gerados no diretório `site/`.

---

## 🚀 Pipeline de CI/CD e Deploy

O deploy é gerenciado automaticamente pelo **GitHub Actions** em [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

* A cada `push` na branch `main`:
  1. O workflow inicializa o ambiente Python 3.11.
  2. Compila a documentação com `mkdocs build`.
  3. Gera o artefato zip da pasta `site`.
  4. Publica diretamente nos servidores do **GitHub Pages** sem criar commits de bot na árvore Git.

---

## 📁 Estrutura de Diretórios

```text
pet-saude-gt8/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de CI/CD do GitHub Pages
├── docs/
│   ├── assets/
│   │   ├── img/                # Logotipos institucionais (PET, UnB, HUB)
│   │   └── pdf/                # Slides e apresentações em PDF
│   ├── javascripts/
│   │   └── extra.js            # Lógicas de acessibilidade (Alto Contraste, Fontes A+/A-)
│   ├── stylesheets/
│   │   └── extra.css           # Design System completo (Light, Dark, High-Contrast)
│   ├── encaminhamentos.md      # Fluxos de referência e regulação
│   ├── equipe.md               # Composição e tutoria do GT 8
│   ├── index.md                # Página inicial e apresentação interativa
│   ├── objetivos.md            # Metas por fases e diagnóstico situacional
│   └── prototipo.md            # Protótipo do formulário digital
├── overrides/                  # Sobrescritas do tema MkDocs Material
├── mkdocs.yml                  # Configurações do site e navegação
├── requirements.txt            # Dependências Python (mkdocs, material, etc.)
└── README.md                   # Documentação geral do repositório
```

---

## 🤝 Instituições e Parcerias

* **UnB** — Universidade de Brasília
* **HUB / EBSERH** — Hospital Universitário de Brasília / Empresa Brasileira de Serviços Hospitalares
* **SES-DF** — Secretaria de Estado de Saúde do Distrito Federal
* **Ministério da Saúde** — Secretaria de Gestão do Trabalho e da Educação na Saúde (SGTES)

---

## 📄 Licença

Este projeto está licenciado sob os termos da licença **MIT** — consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
