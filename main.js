import express from "express";
import movieRoutes from "./routes/movies_routes.js"

const app = express();

const port = 6969;

app.get('/', (req, res)=>{
  res.json({ msg : "Hello Everyone!!!" });
});

app.use('/movies', movieRoutes); 

app.listen(port, ()=>{
  console.log(`The server is running at http://localhost:${port}`);
})