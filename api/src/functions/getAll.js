const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { api_key } = process.env;

const infoApi = async () => {
  try {
    const apiUrl = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${api_key}`
    );

    const apiInfo = await apiUrl.data.map((dog) => {
      const weight1 = dog.weight.metric
        ?.replace(/\s+/g, "")
        .replace(/nan/i, "0")
        .split("-");
      const height1 = dog.height.metric?.replace(/\s+/g, "").split("-");
      const lifeSpan = dog.life_span?.split("-");

      return {
        Id: dog.id,
        img: dog.image.url,
        name: dog.name,
        weightMin: weight1[0] ? parseInt(weight1[0]) : 0,
        weightMax: weight1[1] ? parseInt(weight1[1]) : 0,
        heightMin: height1[0],
        heightMax: height1[1],
        lifeSpanMin: lifeSpan[0],
        lifeSpanMax: lifeSpan[1],
        temperament: dog.temperament
          ? dog.temperament
          : "no tiene temperamentos registrados",
      };
    });

    return apiInfo;
  } catch (error) {
    return error;
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
  let dog = [];

  dbInfo?.map((d) =>
    dog.push({
      Id: d.Id,
      img: d.img,
      name: d.name,
      weightMin: d.weightMin,
      weightMax: d.weightMax,
      heightMin: d.heightMin,
      heightMax: d.heightMax,
      lifeSpanMin: d.lifeSpanMin,
      lifeSpanMax: d.lifeSpanMax,
      temperament: d.temperaments.map((t) => ` ${t.name}`).toString(),
      createdDb: d.createdDb,
    })
  );
  return dog;
};

async function getAllInfo() {
  const dbInfom = await infoDb();
  const apiInfom = await infoApi();
  return dbInfom.concat(apiInfom);
}

module.exports = {
  getAllInfo,
  infoApi,
  infoDb,
};
