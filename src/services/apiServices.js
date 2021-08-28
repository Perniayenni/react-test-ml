import axios from "axios";

const BASEURL = "http://localhost:4000/api";

function createService(plural) {
  return {
    index(params) {
      return axios
        .get(`${BASEURL}/${plural}`, {
          params,
        })
        .then((response) => new Promise((resolve) => resolve(response.data)))
        .catch((error) => {
          return { error };
        });
    },
    show(id, params = {}) {
      return axios
        .get(`${BASEURL}/${plural}/${id}`, {
          params,
        })
        .then((response) => new Promise((resolve) => resolve(response.data)))
        .catch((error) => {
          return { error };
        });
    },
  };
}

const itemsService = createService("items");

export { itemsService };
