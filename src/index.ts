import express, { Request, Response } from 'express';
import cors from 'cors'
import CategoriasBD, { DescriptionsMovies } from './bd';

const app = express();
const port = process.env.PORT || 3000 

app.use(cors());

app.get('/movies/:categoria', (req: Request, res: Response) => {
  const categoria = req.params.categoria.toLowerCase();
  const pelis =  CategoriasBD[categoria]
  if (pelis) {
    res.json({movies: CategoriasBD[categoria]});
  } else {
    res.status(404).json({ mensaje: 'Categoría no encontrada' });
  }
});
app.get('/movies/:categoria/:movieID', (req: Request, res: Response) => {
  const categoria = req.params.categoria.toLowerCase();
  const movieID = req.params.movieID.toLowerCase();
  const pelis =  DescriptionsMovies[categoria]
  const movie = pelis.find(peli => peli.path === movieID)
  if (movie) {
    res.json({movie: movie});
  } else {
    res.status(404).json({ mensaje: 'Pelicula no encontrada' });
  }
});

app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});
