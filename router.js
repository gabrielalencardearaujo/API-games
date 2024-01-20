const router = require('express').Router();
const Controllers = require('@src/controllers.js');

//Retorna os jogos.
router.get('/games', Controllers.allGames);
router.get('/game/:id', Controllers.oneGame);

// Adicionar um jogo:
router.post('/game', Controllers.createGame);

// Deletar um game:
router.delete('/game/:id', Controllers.deleteGame);

// Atualizar dados:
router.put('/game/:id', Controllers.updateGame)

module.exports = router;