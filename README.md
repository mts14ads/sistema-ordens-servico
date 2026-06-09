Sistema de Ordens de Serviço

1.  Introdução

Este projeto consiste no desenvolvimento de um aplicativo mobile para
gerenciamento de ordens de serviço em instituições escolares. A
aplicação foi desenvolvida utilizando React Native com Expo e integrada
ao Firebase para autenticação de usuários e armazenamento de dados.

O sistema permite o cadastro, visualização e gerenciamento de ordens de
serviço.

2.  Objetivos

2.1 Objetivo Geral

Desenvolver uma aplicação mobile capaz de gerenciar ordens de serviço de
forma eficiente, utilizando tecnologias modernas de desenvolvimento.

2.2 Objetivos Específicos

-   Implementar autenticação de usuários
-   Permitir o cadastro de novas ordens de serviço
-   Exibir uma lista com todas as ordens cadastradas
-   Possibilitar a edição e exclusão de registros
-   Integrar a aplicação com o Firebase

3.  Tecnologias Utilizadas

-   React Native (Expo)
-   JavaScript
-   React Navigation
-   React Native Paper
-   Firebase Authentication
-   Firebase Realtime Database
-   expo-sharing

4.  Funcionalidades do Sistema

4.1 Autenticação

-   Criação de conta
-   Login no sistema
-   Acesso restrito a usuários autenticados

4.2 Cadastro de Ordens de Serviço

-   Escola
-   Equipamento
-   Local
-   Quantidade
-   Número de série
-   Defeito
-   Gravidade
-   Data

4.3 Listagem e Gerenciamento

-   Visualização
-   Edição
-   Exclusão

5.  Estrutura do Projeto

components 
- ├── EditarOS.js 
- ├── EmitirOS.js 
- ├── HistoricoEquipamento.js
- ├── HomeScreen.js 
- ├── ListaOS.js 
- ├── Login.js 
- ├── Logout.js 
- ├── MapaOS.js 
- ├── Navegacao.js 
- ├── NovaConta.js

config 
- ├── Firebase.js 
- ├── Context.js

App.js

6.  Regras de Negócio

-   Campos obrigatórios
-   Senha mínima de 8 caracteres
-   Sem e-mails duplicados
-   Acesso apenas autenticado

7.  Execução

- npm install 
- expo start

8.  Firebase

Inserir credenciais no arquivo Firebase.js

9.  Considerações Finais

Projeto desenvolvido para fins acadêmicos com foco em desenvolvimento
mobile e integração com banco de dados.

10. Autor

- Nome: Matheus Henrique Caminoto Souza Costa
- Curso: Análise e desenvolvimento de sistemas
- Disciplina: Desenvolvimento de Aplicativos Móveis 
- Professor: Me. Vanessa dos Anjos Borges
- Instituição: Toledo Prudente - Centro Universitário
