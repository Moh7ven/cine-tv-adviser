import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
  //Static pour que la fonction ne soit pas instanciée
  static async fetchPopular() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return response.data.results;
  }

  static async fetchRecommendations(tvAdviser) {
    // Fonction pour récupérer les recommandations d'un tv-adviser
    const response = await axios.get(
      `${BASE_URL}tv/${tvAdviser}/recommendations${API_KEY_PARAM}`
    );
    return response.data.results;
  }

  static async fetchByTitle(title) {
    // Fonction pour récupérer un tv-adviser par son titre
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}
