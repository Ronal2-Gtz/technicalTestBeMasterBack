import pelisDisney, { disneyDescriptionMovies } from './disney';
import pelisMarvel, { marvelDescriptionMovies } from './marvel';
import pelisNatGeo, { natGeoDescriptionMovies } from './natgeo';
import pelisPixar, { pixarDescriptionMovies } from './pixar';
import pelisStarWars, { starwarsDescriptionMovies } from './starwars';

const CategoriasBD = {
  disney: pelisDisney,
  pixar: pelisPixar,
  marvel: pelisMarvel,
  starwars: pelisStarWars,
  natgeo: pelisNatGeo
}
export const DescriptionsMovies = {
  disney: disneyDescriptionMovies,
  pixar: pixarDescriptionMovies,
  marvel: marvelDescriptionMovies,
  starwars: starwarsDescriptionMovies,
  natgeo: natGeoDescriptionMovies
}



export default CategoriasBD;

