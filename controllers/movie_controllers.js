import Movie from '../models/movie_model.js';

export const movieIndex = (req, res) => {
  res.send('Get all movie list');
};

export const movieCreate = async (req, res) => {
  // id, title, description
  // create the movie info.

  // Validate your data.  
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc
  });
  

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error){
    return res.status(400).json({message: error.message});
  }
};

export const movieUpdate = (req, res) => {
  res.send('update a movie');
};

export const movieDelete =  (req, res) => {
  res.send('delete a movie');
};