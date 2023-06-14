# Projeto de Aprendizado em ReactJS

Este projeto foi desenvolvido em ReactJS e utiliza requisições HTTP com a biblioteca Axios para consumir a API do TMDB (The Movie Database). O objetivo é exibir os filmes mais recentes em cartaz.

## Funcionalidades

- A página inicial exibe uma lista dos 10 filmes mais recentes em cartaz.
- Cada filme é exibido com seu título, imagem do pôster e um link para acessar mais informações sobre o filme.

## Pré-requisitos

Antes de executar o projeto, verifique se você tem os seguintes requisitos:

- Node.js instalado (versão 12 ou superior)
- NPM (Node Package Manager) instalado

## Como executar o projeto

1. Clone este repositório em sua máquina:

   ```shell
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   ```

2. Acesse a pasta do projeto ou acesse o Link do Projeto em Produção 
  [Prime Flix](https://jlms-flix.netlify.app/):

   ```shell
   cd nome-do-projeto
   ```

3. Instale as dependências do projeto:

   ```shell
   npm install
   ```

4. Execute o projeto:

   ```shell
   npm start
   ```

5. O projeto estará disponível em `http://localhost:3000`.

## Estrutura do projeto

A estrutura do projeto é a seguinte:

- `src/`
  - `components/` - Pasta contendo os componentes reutilizáveis.
    - `Loader.js` - Componente de carregamento exibido enquanto os dados são buscados na API.
  - `pages/` - Pasta contendo as páginas do projeto.
    - `Home.js` - Página inicial que exibe a lista de filmes recentes em cartaz.
  - `services/` - Pasta contendo a configuração da API.
    - `api.js` - Configuração do Axios para fazer as requisições HTTP.
  - `App.js` - Componente principal que define as rotas do projeto.
  - `index.js` - Arquivo de entrada do projeto.

## API do TMDB

Este projeto utiliza a API do TMDB (The Movie Database) para obter os dados dos filmes mais recentes. É necessário possuir uma chave de API para fazer as requisições. A chave de API utilizada neste projeto é `dbb3cfe4abf34e041d60ee088811235f`.

Caso você queira utilizar sua própria chave de API, modifique o parâmetro `api_key` na chamada da API em `Home.js`.

```javascript
const response = await api.get('movie/now_playing', {
    params: {
        api_key: 'sua-chave-de-api',
        language: 'pt-BR',
        page: 1
    }
});
```

Certifique-se de substituir `'sua-chave-de-api'` pela sua própria chave.

## Contribuição

Contribuições são bem-vindas! Caso queira contribuir para este projeto, sinta-se à vontade para abrir um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
