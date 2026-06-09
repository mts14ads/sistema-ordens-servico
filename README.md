
SISTEMA DE ORDENS DE SERVIÇO

1. INTRODUÇÃO

O Sistema de Ordens de Serviço é uma aplicação mobile desenvolvida para auxiliar instituições escolares no gerenciamento de solicitações de manutenção e suporte técnico. O aplicativo permite o cadastro, acompanhamento, edição e exclusão de ordens de serviço, proporcionando maior organização e controle das atividades realizadas.

A aplicação foi desenvolvida utilizando React Native com Expo e integrada ao Firebase para autenticação de usuários e armazenamento de dados em nuvem.

==================================================

2. OBJETIVOS

2.1 Objetivo Geral

Desenvolver uma aplicação mobile capaz de gerenciar ordens de serviço de forma eficiente, utilizando tecnologias modernas de desenvolvimento mobile e banco de dados em nuvem.

2.2 Objetivos Específicos

- Implementar autenticação de usuários;
- Permitir o cadastro de novas ordens de serviço;
- Exibir uma lista com todas as ordens cadastradas;
- Possibilitar a edição e exclusão de registros;
- Integrar a aplicação ao Firebase;
- Garantir acesso seguro aos dados cadastrados.

==================================================

3. AMBIENTE DE DESENVOLVIMENTO

Hardware:
- Computador com processador Intel ou AMD;
- Mínimo de 4 GB de memória RAM;
- Conexão com internet para acesso ao Firebase.

Software:
- Windows 10/11, Linux ou macOS;
- Node.js versão 18 ou superior;
- NPM (Node Package Manager);
- Expo CLI;
- Visual Studio Code;
- Git.

==================================================

4. TECNOLOGIAS UTILIZADAS

Linguagem de Programação:
- JavaScript (ES6+)

Frameworks e Bibliotecas:
- React Native;
- Expo;
- React Navigation;
- React Native Paper;
- Firebase SDK;
- Expo Sharing.

Banco de Dados:
- Firebase Realtime Database.

Autenticação:
- Firebase Authentication.

==================================================

5. FUNCIONALIDADES DO SISTEMA

5.1 Autenticação

- Cadastro de novos usuários;
- Login no sistema;
- Controle de acesso por autenticação;
- Logout da aplicação.

5.2 Cadastro de Ordens de Serviço

Campos disponíveis:
- Escola;
- Equipamento;
- Local;
- Quantidade;
- Número de Série;
- Defeito;
- Gravidade;
- Data.

5.3 Gerenciamento

- Visualização das ordens cadastradas;
- Edição de registros;
- Exclusão de registros;
- Histórico de equipamentos;
- Mapeamento das ordens de serviço.

==================================================

6. ESTRUTURA DO PROJETO

components
├── EditarOS.js
├── EmitirOS.js
├── HistoricoEquipamento.js
├── HomeScreen.js
├── ListaOS.js
├── Login.js
├── Logout.js
├── MapaOS.js
├── Navegacao.js
└── NovaConta.js

config
├── Firebase.js
└── Context.js

App.js

==================================================

7. REGRAS DE NEGÓCIO

- Todos os campos obrigatórios devem ser preenchidos;
- Senha com mínimo de 8 caracteres;
- Não permitir cadastro de e-mails duplicados;
- Somente usuários autenticados podem acessar as funcionalidades do sistema;
- Os dados são armazenados em tempo real no Firebase.

==================================================

8. REQUISITOS DO SISTEMA

Requisitos mínimos:
- Node.js 18 ou superior;
- NPM 9 ou superior;
- Expo CLI instalado globalmente;
- Conta Firebase ativa;
- Emulador Android ou dispositivo físico com Expo Go.

Requisitos recomendados:
- 8 GB de memória RAM;
- Processador Intel Core i5 ou superior;
- Conexão estável com internet.

==================================================

9. INSTALAÇÃO E EXECUÇÃO

Clonar o repositório:

git clone https://github.com/mts14ads/sistema-ordens-servico.git

Acessar a pasta:

cd sistema-ordens-servico

Instalar dependências:

npm install

Configurar Firebase:

Inserir as credenciais no arquivo:
config/Firebase.js

Executar a aplicação:

expo start

Após a execução:
- Escanear QR Code pelo Expo Go;
- Executar em emulador Android;
- Executar em simulador iOS.

==================================================

10. PRÁTICAS DE CÓDIGO LIMPO

Durante o desenvolvimento foram adotadas práticas de Clean Code:

- Organização modular dos componentes;
- Separação das configurações em diretório próprio;
- Nomenclatura clara para variáveis e funções;
- Reutilização de componentes;
- Baixo acoplamento entre telas;
- Comentários apenas quando necessários;
- Estrutura de pastas padronizada;
- Responsabilidade única por componente.

==================================================

11. TESTES AUTOMATIZADOS

Ferramentas recomendadas:

- Jest;
- React Native Testing Library.

Possíveis testes:
- Testes de autenticação;
- Testes de cadastro de ordens de serviço;
- Testes de validação dos formulários;
- Testes de navegação entre telas;
- Testes dos componentes visuais.

==================================================

12. PADRÃO DE PROJETO UTILIZADO

O projeto utiliza características do padrão Context API.

Arquivo:
config/Context.js

Benefícios:
- Redução de prop drilling;
- Centralização do estado global;
- Melhor organização do código;
- Facilidade de manutenção.

==================================================

13. CONTRIBUIÇÃO

1. Faça um Fork do projeto:
https://github.com/mts14ads/sistema-ordens-servico

2. Crie uma branch:

git checkout -b minha-feature

3. Realize as alterações;

4. Faça o commit:

git commit -m "Minha nova funcionalidade"

5. Envie as alterações:

git push origin minha-feature

6. Abra um Pull Request.

==================================================

14. REPOSITÓRIO OFICIAL

GitHub:
https://github.com/mts14ads/sistema-ordens-servico

==================================================

15. FIREBASE

Serviços utilizados:

- Firebase Authentication;
- Firebase Realtime Database.

As credenciais devem ser configuradas antes da execução da aplicação.

==================================================

16. CONSIDERAÇÕES FINAIS

O Sistema de Ordens de Serviço foi desenvolvido com foco acadêmico para aplicar conceitos de desenvolvimento mobile, integração com banco de dados em nuvem, autenticação de usuários e boas práticas de programação.

==================================================

17. AUTOR

Nome: Matheus Henrique Caminoto Souza Costa
GitHub: https://github.com/mts14ads
Curso: Análise e Desenvolvimento de Sistemas
Instituição: Toledo Prudente – Centro Universitário
