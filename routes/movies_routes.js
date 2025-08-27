import express from "express"
import { movieCreate, movieDelete, movieIndex, movieUpdate, movieDetail} from "../controllers/movie_controllers.js";

const router = express.Router()

//CRUD functionality of movies

// R - For reading movies
router.get('/', movieIndex);

router.get('/:id', movieDetail);
// C - For creating movies
router.post('/', movieCreate);

// U - For updating movie
router.put('/:id', movieUpdate);

// D - For deleting movies
router.delete('/:id', movieDelete);

export default router;