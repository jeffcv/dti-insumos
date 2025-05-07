# Sistema de Gestão de Insumos do DTI – Hospital

Bem-vindo ao **Sistema de Gestão de Insumos do DTI – Hospital**! Este é um sistema desenvolvido para gerenciar o estoque de resmas de sulfite utilizadas pelos setores de um hospital, permitindo o cadastro de setores, controle de retiradas e geração de relatórios com gráficos. O projeto foi construído com foco em simplicidade, segurança e eficiência.

## Índice
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Descrição
O **Sistema de Gestão de Insumos do DTI – Hospital** é uma aplicação web que facilita a administração do estoque de resmas de sulfite em um hospital. Ele permite que os setores sejam cadastrados, que novas resmas sejam adicionadas ao estoque e que retiradas sejam registradas, vinculando-as aos setores correspondentes. Além disso, oferece relatórios visuais com gráficos para análise do consumo por setor.

## Funcionalidades
- **Gestão de Setores**:
  - Cadastro de setores autorizados a retirar cotas de resmas de sulfite.
- **Gestão de Estoque**:
  - Interface para adicionar novas resmas de sulfite ao estoque (somente quantidade).
  - Registro de retiradas, associando cada retirada a um setor específico.
- **Relatórios e Gráficos**:
  - Tela com gráficos que exibem a quantidade de resmas de sulfite retiradas por cada setor, facilitando a análise de consumo.

## Tecnologias Utilizadas
- **Backend**: Node.js + Express
- **Frontend**: Handlebars (para templates) + Bootstrap 5 (para estilização)
- **Banco de Dados**: MySQL
- **Autenticação**: Express Session para controle de usuários logados
- **Segurança**: Senhas criptografadas com Bcrypt (nunca armazenadas em texto plano)
- **Configuração**: Variáveis sensíveis armazenadas em `.env` usando Dotenv

## Pré-requisitos
Antes de executar o projeto, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [MySQL](https://www.mysql.com/) (versão 8 ou superior)
- [Git](https://git-scm.com/) (para clonar o repositório)
- Um editor de texto, como [Visual Studio Code](https://code.visualstudio.com/)

## Instalação
Siga estas etapas para configurar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/sistema-gestao-insumos-dti.git