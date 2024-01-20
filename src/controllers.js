const GamesModel = require('@src/models/GamesModel.js');

const Controllers = {
  allGames(req, res) {
    GamesModel.findAll().then(games => {
      res.json({
        body: games,
      })
    })
      .catch(err => {
        res.status(400);
        res.json({
          Error: 'Não foi possível acessar a lista de games.'
        })
      })
  },

  oneGame(req, res) {
    const { id } = req.params;

    if (isNaN(id)) {
      res.json({
        statusCode: 400,
        body: undefined,
      })
    } else {

      GamesModel.findOne({
        where: { id }
      })
        .then((game) => {

          if (game) {
            res.json({
              statusCode: 200,
              body: game
            })

          } else {

            res.json({
              statusCode: 404,
              body: undefined,
            })

          }
        })
        .catch(err => {
          res.json({
            statusCode: 500,
            body: undefined,
          })
        })

    }
  },

  createGame(req, res) {
    const { title, price, year, describe } = req.body;
    console.log('Title', typeof title);
    console.log('Price', typeof price);
    console.log('Year', typeof year);
    console.log('Describe', typeof describe);
    if (
      typeof title === 'string' &&
      typeof Number(price) === 'number' &&
      typeof Number(year) === 'number' &&
      (describe === undefined || describe === null || typeof describe === 'string')
    ) {

      GamesModel.create({
        title,
        price,
        year,
        describe,
      })
        .then(() => {
          res.json({
            statusCode: 200,
          })
        })
        .catch(err => {
          res.json({
            statusCode: 500,
            body: undefined,
          })
        })
    } else {
      res.json({
        statusCode: 400
      })
    }
  },

  deleteGame(req, res) {
    const { id } = req.params;

    if (isNaN(id)) {
      res.json({
        statusCode: 400,
        body: undefined,
      })
    } else {

      GamesModel.destroy({
        where: { id }
      })
        .then((game) => {
          res.json({
            statusCode: 200,
          })
        })
        .catch(err => {
          res.json({
            statusCode: 500
          })
        })
    }
  },

  updateGame(req, res) {
    const { id, title, price, year, describe } = req.body;

    if (isNaN(id)) {
      res.json({
        statusCode: 400,
        msg: 'erro no id'
      })
    } else if (
      typeof title != 'string' ||
      typeof price != 'number' ||
      typeof year != 'number' ||
      (describe != undefined && describe != null && typeof describe != 'string')
    ) {
      res.json({
        statusCode: 400,
      })

    } else {

      GamesModel.findOne({
        where: {id}
      })
        .then(game => {
          if (game) {

            GamesModel.update({
              title,
              price,
              year,
              describe,
            }, {
              where: {id}
            }).then(() => {
              res.json({
                statusCode: 200
              })
            })
          }
        })
        .catch(err => {
          res.json({
            statusCode: 500
          })
        })
    }
  }
}

module.exports = Controllers;
