import axios from "axios";
import { Api } from "./Api"

export const GetAllPokemons = () => {

  try {
    const response = Api.get('/pokemon?offset=20&limit=20');
    return response;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return error.response;
      }
    }
  }
};