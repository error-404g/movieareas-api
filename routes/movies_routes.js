import express from "express"

const router = express.Router()

//CRUD functionality of movies

// R - For reading movies
router.get('/', (req, res) => {
  res.send('Get all movie list')
});

// C - For creating movies
router.post('/', (req, res) => {
  res.send('Create a movie')
});

// U - For updating movie
router.put('/:id', (req, res) => {
  res.send('update a movie')
});

// D - For deleting movies
router.delete('/:id', (req, res) => {
  res.send('delete a movie')
});

export default router;