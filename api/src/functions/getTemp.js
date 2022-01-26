const axios = require("axios");
const { Temperament } = require("../db");
const { api_key } = process.env;

const temperApi = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${api_key}`
  );

  const apiTemp = apiUrl.data.map((t) => t.temperament?.replace(/\s+/g, ""));

  const tempeEach = apiTemp.map((element) => {
    const array = [];
    if (element) {
      let w = element.split(",");
      for (let i = 0; i < w.length; i++) array.push(w[i]);
    }
    return array;
  });

  return tempeEach.flat();
};
module.exports = {
  temperApi,
};
