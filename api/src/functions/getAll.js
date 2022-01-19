// const { Dog } = require("../models/Dog.js");
// const { Temperament } = require("../models/Temperament.js");
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { api_key } = process.env;

const infoApi = async () => {
  try {
    const apiUrl = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${api_key}`
    );
    const apiInfo = await apiUrl.data.map((dog) => {
      return {
        Id: dog.id,
        name: dog.name,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span: dog.life_span,
        temperament: dog.temperament,
      };
    });

    return apiInfo;
  } catch (error) {
    console.log(error);
  }
};

const infoDb = async () => {
  const dbInfo = await Dog.findAll({
    include: [
      {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return dbInfo;
};

async function getAllInfo() {
  const dbInfom = await infoDb();
  const apiInfom = await infoApi();

  return dbInfom.concat(apiInfom);
}

module.exports = {
  getAllInfo,
};
