import express from "express";

const app = express();

const port = 6969;

app.get('/', (req, res)=>{
  res.json({ msg : "Hello Everyone!" });
});

//CRUD functionality of movies

// R - For reading movies
app.get('/movies', () => {
  
});

// C - For creating movies
app.post('/movies', () => {
  
});

// U - For updating movie
app.put('/movies/:id', () => {
  
});

// D - For deleting movies
app.delete('/movies/:id', () => {
  
});

app.listen(port, ()=>{
  console.log(`The server is running at http://localhost:${port}`);
})