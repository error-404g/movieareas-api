export const movieIndex = (req, res) => {
  res.send('Get all movie list');
};

export const movieCreate = (req, res) => {
  // id, title, description

  console.log(req.body);
  // create the movie info.

  return res.json(req.body);
};

export const movieUpdate = (req, res) => {
  res.send('update a movie');
};

export const movieDelete =  (req, res) => {
  res.send('delete a movie');
};