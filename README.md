# Alimente

## Visão Geral

O **Alimente** é uma aplicação web voltada para conectar doadores a instituições, facilitando o gerenciamento e acompanhamento de doações. O projeto está em fase inicial, com foco atual na estruturação do frontend e preparação do ambiente backend.

---

## Estrutura do Projeto

```
alimente/
├── backend/        # Ambiente preparado para o Django (ainda não inicializado)
│   ├── venv/       # Ambiente virtual Python
│   ├── apps/       # Estrutura reservada para apps do Django
│   └── requirements.txt
│
├── frontend/       # Interface web (HTML, CSS, JS)
│   ├── pages/      # Páginas HTML
│   └── assets/     # CSS, JS e imagens
│
├── docs/           # Documentação do projeto
│
├── README.md
├── .gitignore
└── .gitattributes
```

---

## Stack Atual

### Back-end (planejado)

* Python 3.10+
* Django
* Django Rest Framework
* PostgreSQL + PostGIS

### Front-end

* HTML5
* CSS3
* JavaScript

---

## Setup do Ambiente (Backend)

### 1. Criar e ativar ambiente virtual

**Linux:**

```
cd backend
python3 -m venv venv
source venv/bin/activate
```

**Windows (PowerShell):**

```
cd backend
python -m venv venv
venv\Scripts\Activate
```

---

### 2. Instalar dependências Python

```
pip install -r requirements.txt
```

---

### 3. Dependências de sistema (Linux)

Necessárias para suporte a geolocalização:

```
sudo apt update
sudo apt install python3-venv gdal-bin libgdal-dev
```

---

## Observações Importantes

* O backend ainda **não foi inicializado** (sem `startproject` e apps).
* Essa decisão foi deixada para os próximos passos.
* O frontend atualmente é estático e será integrado via API REST futuramente.
* Dependências como GDAL são obrigatórias para as funcionalidades de geolocalização.

---

## Próximos Passos

* Inicializar projeto Django
* Criar apps principais (usuários, doações, instituições, mapas)
* Configurar PostgreSQL com PostGIS
* Integrar frontend com API REST

---

## Objetivo deste Commit

* Estrutura inicial do projeto
* Organização do frontend
* Ambiente base para backend
* Padronização para trabalho em equipe