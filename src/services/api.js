import axios from "axios";

// URL DE FILMES EM CARTAZ
// https://api.themoviedb.org/3/ --> Essa URL nunca muda

// movie/now_playing --> Rota

//?api_key=448f2a37c797cfad4088adaf1981c819&language=pt-BR&page=1

export const key = "448f2a37c797cfad4088adaf1981c819";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
