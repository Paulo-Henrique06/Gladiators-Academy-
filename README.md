<h1 align="center">Gladiators</h1>

![JS Badge](https://img.shields.io/badge/Javascript-black?style=for-the-badge&logo=javascript&logoColor=medium-blue)
![HTML Badge](https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5&logoColor=white)
![CSS Badge](https://img.shields.io/badge/CSS-00008B?style=for-the-badge&logo=css3&logoColor=lightblue)
![PHP Badge](https://img.shields.io/badge/PHP-gray?style=for-the-badge&logo=php&logoColor=white)
![MySQL Badge](https://img.shields.io/badge/MySQL-lightblue?style=for-the-badge&logo=mysql&logoColor=darkblue)
![Apache Badge](https://img.shields.io/badge/Apache-CA2136?logo=apache&logoColor=white&style=for-the-badge)

Este projeto tem como objetivo a criação de um site com tema de academia, utilizando as seguintes tecnologias:

HTML para estruturar o conteúdo da página;
CSS para a estilização e design responsivo;
JavaScript (JS) para a interatividade e funcionalidades dinâmicas;
PHP para a lógica de servidor e interação com o banco de dados.
Além disso, o site é integrado a um banco de dados, sendo utilizado o MySQL para armazenar informações dos usuários, como dados de cadastro e planos de academia

## 📑 Índice
- [📑 Índice](#-índice)
- [📈 Status do Projeto](#-status-do-projeto)
- [🧠 Como Utilizar (Sem Banco de Dados)](#-como-utilizar-(sem-banco-de-dados))
- [⚙️ Como Utilizar (Com Banco de Dados)](#-como-utilizar-(com-banco-de-dados))
- [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📂 Estrutura de Diretórios](#-estrutura-de-diretórios)
- [👥 Desenvolvedores](#-desenvolvedores)

## 📈 Status do Projeto

```FINALIZADO```

## 🧠 Como Utilizar (Sem Banco de Dados)

1. **Clone o repositório:** Comece clonando os arquivos do projeto para sua máquina local;

2. **Abra o Live Server:** Para visualizar as páginas HTML, abra a pasta public no seu editor de código e utilize uma extensão de Live Server (como no VS Code) para rodar as páginas. Isso irá iniciar um servidor local e você poderá visualizar o projeto diretamente em seu navegador;

3. **VS Code:** Se estiver usando o VS Code, basta clicar com o botão direito em um arquivo HTML dentro da pasta public e escolher a opção "Open with Live Server";

4. **Pronto para Usar:** Após iniciar o servidor local, as páginas HTML presentes na pasta public serão carregadas no seu navegador. Você pode interagir com o site, menos enviar o cadastro do formulário, pois irá dar o erro "HTTP ERROR 405".

## ⚙️ Como Utilizar (Com Banco de Dados)

Para rodar este projeto com banco de dados local, siga as etapas abaixo para configurar o MySQL e o servidor web usando o XAMPP.

## 1. Instalar o MySQL e XAMPP
- **Baixe e instale o MySQL**: Caso ainda não tenha o MySQL, baixe e instale o MySQL a partir do [site oficial](https://dev.mysql.com/downloads/installer/).
- **Baixe e instale o XAMPP**: O XAMPP é um pacote que inclui Apache, MySQL, PHP, entre outros. Baixe e instale o XAMPP a partir do [site oficial](https://www.apachefriends.org/index.html).

## 2. Configuração do XAMPP
- Após a instalação do XAMPP, abra o painel de controle do XAMPP.
- Ative o **Apache** e o **MySQL** clicando em "Start" para cada um. Isso iniciará o servidor web e o banco de dados local.

## 3. Mover o Projeto para o XAMPP
- Localize o diretório onde o XAMPP foi instalado (geralmente em **`C:/xampp`**).
- Dentro do diretório `xampp`, navegue até a pasta **`htdocs`**, que é onde os projetos web devem ser colocados.
- Mova ou copie a pasta do projeto (por exemplo, **`Gladiators`**) para a pasta **`htdocs`**.

O caminho do seu projeto no XAMPP será algo como:

```bash
C:/xampp/htdocs/Gladiators
```


## 4. Acessando o Projeto no Navegador
- Para acessar as páginas do seu site, abra seu navegador e entre nas seguintes URLs:
  - **Menu**: [http://localhost:80/Gladiators/src/public/menu.html](http://localhost:80/Gladiators/src/public/menu.html)
  - **Plano**: [http://localhost:80/Gladiators/src/public/plano.html](http://localhost:80/Gladiators/src/public/plano.html)
  - **Matrícula**: [http://localhost:80/Gladiators/src/public/formulario.html](http://localhost:80/Gladiators/src/public/formulario.html)

## 5. Configuração do Banco de Dados MySQL
- No painel de controle do XAMPP, clique no botão **"Admin"** ao lado do MySQL. Isso abrirá o **phpMyAdmin**, que é uma interface gráfica para gerenciar o MySQL.
- No phpMyAdmin, crie um novo banco de dados com o nome **`gladiators_clientes`**.

## 6. Importando a Tabela SQL
- Dentro do phpMyAdmin, selecione o banco de dados **`gladiators_clientes`**.
- Clique na aba **"Importar"** e selecione o arquivo **`matricula_clientes.sql`** que está localizado na pasta **`database`** do seu projeto.
- Clique em **"Executar"** para importar a tabela para o banco de dados.

## 7. Testando o Formulário
- O projeto já vem com um **usuário de teste** na tabela do banco de dados para que você possa verificar o funcionamento. O formulário de matrícula que você acessa em [formulario.html](http://localhost:80/Gladiators/src/public/formulario.html) deve agora salvar os dados no banco **`gladiators_clientes`**.

## 8. Conclusão
- Após seguir esses passos, seu projeto estará configurado para rodar localmente, com o banco de dados funcionando corretamente.
- Caso queira testar o formulário, preencha os campos no site e clique para enviar. Os dados serão armazenados no banco de dados MySQL e podem ser visualizados diretamente pelo phpMyAdmin.

## 💻 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **HTML5**: Para a estruturação e conteúdo das páginas.

- **CSS3**: Para a estilização e layout do site.

- **JavaScript (JS)**: Para a interatividade e funcionalidades dinâmicas.

- **PHP**: Para a lógica do lado do servidor e integração com o banco de dados.

- **MySQL**: Para o armazenamento e gerenciamento de dados.

- **XAMPP**: Para o ambiente de desenvolvimento local, incluindo o servidor Apache e o banco de dados MySQL.

## 📂 Estrutura de Diretórios

A estrutura de diretórios do projeto é organizada da seguinte forma:

```plaintext
GLADIATORS
├── images/               # Imagens usadas no projeto
├── src/                  # Diretório principal dos arquivos de código-fonte
│   ├── database/         # Scripts relacionados ao banco de dados
│   │   ├── config.php    # Configuração de conexão com o banco de dados
│   │   ├── matricula_clientes.sql  # Arquivo SQL para importar no banco
│   │   └── processo.php  # Lógica de processamento do formulário
│   ├── public/           # Arquivos HTML públicos
│   │   ├── formulario.html  # Página de formulário
│   │   ├── menu.html        # Página principal do menu
│   │   └── plano.html       # Página de planos
│   ├── scripts/          # Scripts JavaScript
│   │   ├── form.js       # Lógica do formulário
│   │   └── main.js       # Scripts gerais do projeto
│   └── style/            # Arquivos CSS para estilização
│       ├── formulario.css  # Estilos da página de formulário
│       ├── menu.css        # Estilos da página principal
│       └── plano.css       # Estilos da página de planos
├── videos/               # Pasta para armazenar vídeos do projeto
└── README.md             # Documentação do projeto
```

## 👥 Desenvolvedores

- Paulo Henrique de Oliveira Carvalho
- Matheus de Oliveira Eustáquio
- João Pedro Marques de Oliveira