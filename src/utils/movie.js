// Gerar uma lista de filmes do tamanho desejado

export function getListMovies(size, movies) {
  let popularMovies = [];

  for (let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}

// Gerar um número aleatório com base na lista de filmes que eu passar
export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length);
}
