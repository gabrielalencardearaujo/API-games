# API de Games - Curso Formação NodeJS - Udemy

API desenvolvida no curso de NodeJS do Victor Lima na Udemy. A aplicação possui 4 endpoint para CRUD de jogos de video game e 1 endpoint para listagem dos jogos.

## Endpoints
### GET /games

Retorna a listagem de todos os games cadastrados.

#### Parâmetros
Nenhum

#### Respostas
1. Ok! status: 200
    Retorna um objeto com a propriedade `body` com um array contendo todos os jogos, exemplos:
    ```
      {
        body: [
          {
            id: 1, 
            title: 'Minecraft', 
            year: 2009, 
            price: 34.9, 
            describe: 'Jogo mais baixado da história'
          },
          {
            id: 2, 
            title: 'Battlefield 4', 
            year: 2013, 
            price: 80, 
            describe: 'Melhor jogo da franquia'
          },
          {
            id: 3, 
            title: 'Terraria', 
            year: 2012, 
            price: 24.9, 
            describe: 'Melhor que Minecraft'
          },
        ]
      }
    ```

2. Error! status: 400
  Retorna um objeto informando que não foi possível acessar os jogos.
  ```
    {
      Error: 'Não foi possível acessar a lista de games.'
    }
  ```
