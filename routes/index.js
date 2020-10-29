const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allTheMoviesFromDB => {
      res.render('movies', { movies: allTheMoviesFromDB });
    })
    .catch(err => console.log('Error while getting the books from the DB: ', err));
});

/* GET movie's details page */
router.get('/movies/:movieId', (req, res, next) => {
  const { movieId } = req.params;

  Movie.findOne({_id: movieId})
    .then(movie => res.render('movie-details', movie))
    .catch(err => console.log('Error while retrieving book details: ', err));
});

module.exports = router;
