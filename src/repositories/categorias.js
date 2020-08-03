import config from '../config';

const URL_CATEGORIAS = `${config.URL_API}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIAS}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllCategoriasVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (respServ) => {
      if (respServ.ok) {
        const resposta = await respServ.json();
        return resposta;
      }

      throw new Error('Não possivel pegar os dados');
    });
}

export default {
  getAllCategoriasVideos,
  getAll,
};
