## Tecnologias Utilizadas:

 # Front-End
- **React:** Framework para desenvolvimento de aplicações web.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática opcional ao código. Isso ajuda a evitar erros durante o desenvolvimento, fornecendo uma maneira mais robusta de definir tipos e interfaces.
- **Context Api:** Controle de estados globais.
- **React Hook Form:** Biblioteca para gerenciar formulários em React.

 # Back-End
- **Node.js:** Plataforma de tempo de execução JavaScript usada para construir servidores e aplicativos web escaláveis.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática opcional ao código. Isso ajuda a evitar erros durante o desenvolvimento, fornecendo uma maneira mais robusta de definir tipos e interfaces.**Typescript:** Controle de estados globais.
- **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional poderoso e de código aberto.

## DDL do Banco de Dados:

CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telephone VARCHAR(20) NOT NULL,
    coordX INTEGER NOT NULL,
    coordY INTEGER NOT NULL
);


## 💡 Como usar

1. Clone este repositório:

```bash
git clone https://github.com/luixgabriel/desafio-facilita-juridico
```

2. Acesse o diretório do Back-End:

```bash
cd backend
```

3. Rode os Containers com o docker compose:

```bash
docker compose up -d
```

4. Em outro terminal acesse o diretório do Front-End:

```bash
cd frontend
```

5. Rode a aplicação:

```bash
npm run dev
```

## 💡 Video da Aplicação

https://github.com/luixgabriel/desafio-facilita-juridico/assets/70019908/4b24604e-7559-46b6-be95-89499c444f71

Desenvolvido por [Luis Gabriel](https://github.com/luixgabriel).


[Meu Linkedin.](https://www.linkedin.com/in/luis-gabriel-a447081b2/)
