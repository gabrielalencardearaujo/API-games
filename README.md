# API de Games - Curso Formação NodeJS - Udemy

API desenvolvida no curso de NodeJS do Victor Lima na Udemy. A aplicação possui 4 endpoint para CRUD de jogos de video game e 1 endpoint para listagem dos jogos.

## Endpoints

Em todos os casos, a rota retorna um objeto com o statusCode da requisição e um body, podendo conter os dados da requisição ou undefined.

### GET -> /games

Retorna a listagem de todos os games cadastrados.

#### Parâmetros

Nenhum

#### Respostas

1. Ok! status: 200
  Retorna um objeto com a propriedade `body` com um array contendo todos os jogos, exemplos:
  ```
    {
      statusCode: 200,
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
        ...
      ]
    }
  ```

2. Error! status: 400
  Retorna um objeto informando que não foi possível acessar os jogos:
  ```
    {
      statusCode: 400,
      Error: 'Não foi possível acessar a lista de games.'
    }
  ```

### GET -> /game/:id

Retorna o game com mesmo id do parâmetro informado na URL.

#### Parâmetros

Nenhum

#### Respostas

1. Id Incorreto! status: 400;
  Retorna um json:
  ```
    {
      statusCode: 400,
      body: undefined,
    }
  ```

2. Ok! status: 200
  Retorna um json:
  ```
    {
      statusCode: 200,
      body: {
        id: 1,
        title: 'Minecraft',
        year: 2009,
        price: 34.9,
        describe: 'Jogo mais baixado da história'
      }
    }
  ```

3. Não encontrado! status: 404.
   Retorna um json:
  ```
  {
    statusCode: 404,
    body: undefined,
  }
  ```

### POST -> /game

  Deve enviar um objeto json com as propriedades do jogo: __title__, __year__, __price__, __describe__.

#### Parâmetros
  Deve ser enviado um objeto com os seguintes parâmetros e tipos:
  ```
    {
      title: string,
      price: number,
      year: number,
      describe: string,
    }
  ```

#### Respostas

1. Ok! status: 200;
  Retorna um json:
  ```
    {
    statusCode: 200,
    body: 'Jogo Criado'
    }
  ```

2. Problema com Servidor! status: 500
  Retorna um json:
  ```
    {
      statusCode: 500,
      body: 'Problemas com servidor',
    }
  ```

3. Requisição Incorreta! status: 400.
  Retorna um json:
  ```
    {
      statusCode: 400,
      body: 'Requisição incorreta.'
    }
  ```


### PUT -> /game/:id

  Deve enviar um objeto json com as propriedades do jogo: __id__,__title__, __year__, __price__, __describe__.

#### Parâmetros
  Deve ser enviado um objeto com os seguintes parâmetros e tipos:
  ```
    {
      id: number
      title: string,
      price: number,
      year: number,
      describe: string,
    }
  ```

#### Respostas

1. Ok! status: 200;
  Retorna um json:
  ```
    {
      statusCode: 200,
      body: 'Jogo Atualizado'
    }
  ```

2. Id Inválido! status: 400;
  Retorna um json:
  ```
    {
      statusCode: 400,
      body: 'Id Inválido'
    }
  ```

3. Requisição Incorreta! status: 400.
  Retorna um json:
  ```
    {
      statusCode: 400,
      body: 'Requisição incorreta'
    }
  ```

4. Problemas com Servidor! status: 500;
  Retorna um json:
  ```
    {
      statusCode: 500,
      body: 'Problemas com servidor',
    }
  ```

### DELETE -> /game/:id

  Deve enviar o id do jogo que será deletado, na URL da requisição.

#### Parâmetros
 
  Id do jogo na URL da requisição.

#### Respostas

1. Ok! status: 200;
  Retorna um json:
  ```
    {
      statusCode: 200,
      body: 'Jogo Deletado'
    }
  ```
2. Id Inválido! status: 400;
  Retorna um json:
  ```
    {
      statusCode: 400,
      body: 'Id Inválido'
    }
  ```
3. Problemas com Servidor! status: 500;
  Retorna um json:
  ```
    {
      statusCode: 500,
      body: 'Problemas com servidor',
    }
  ```