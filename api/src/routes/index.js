const { Router } = require("express");
const router = Router();
const { getAllInfo, infoApi, infoDb } = require("../functions/getAll.js");
const { temperApi } = require("../functions/getTemp");
const { Temperament } = require("../db");
const { Dog } = require("../db");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
let DOGS = "/dogs";
let TEMPERAMENT = "/temperament";

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get(DOGS, async (req, res) => {
  const { name } = req.query;

  const totalDogs = await getAllInfo();
  if (name) {
    let dog = totalDogs.filter((d) =>
      d.name.toUpperCase().includes(name.toUpperCase())
    );
    if (dog.length > 0) res.json(dog);
    else {
      return res.status(404).json("No pudimos encontrar el perrito que buscas");
    }
  } else {
    res.status(200).send(totalDogs);
  }
});

router.get(`${DOGS}/temperament`, async (req, res) => {
  const { temperament } = req.query;
  const totalDogs = await getAllInfo();
  if (temperament) {
    let dog = totalDogs.filter((d) =>
      d.temperament.toUpperCase().includes(temperament.toUpperCase())
    );
    if (dog.length > 0) res.json(dog);
    else {
      return res.status(404).json("sin resultado");
    }
  } else {
    res.status(200).send(totalDogs);
  }
});

router.get(`${DOGS}/api`, async (req, res) => {
  try {
    const dogsApi = await infoApi();
    res.status(202).send(dogsApi);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.get(`${DOGS}/db`, async (req, res) => {
  try {
    const dogsdDb = await infoDb();
    res.status(202).send(dogsdDb);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.get(`${DOGS}/:id`, async (req, res) => {
  const { id } = req.params;
  const totalDogs = await getAllInfo();
  const dog = totalDogs.find((d) => d.Id == id);

  if (dog) {
    res.json(dog);
  } else {
    res
      .status(404)
      .json("No pudimos encontrar el perrito por el Id que buscas ");
  }
});

router.get(TEMPERAMENT, async (req, res) => {
  const data = await temperApi();
  const unique = [...new Set(data)];

  data.forEach((e) => {
    if (e) {
      Temperament.findOrCreate({
        where: { name: e },
      });
    }
  });

  const allTemperament = await Temperament.findAll();
  res.send(allTemperament);
});

router.post(DOGS, async (req, res) => {
  const {
    name,
    weightMin,
    weightMax,
    heightMin,
    heightMax,
    lifeSpanMin,
    lifeSpanMax,
    img,
    temperament,
  } = req.body;
  try {
    let newDog = await Dog.create({
      name,
      weightMin,
      weightMax,
      heightMin,
      heightMax,
      lifeSpanMin,
      lifeSpanMax,
      img,
      temperament,
    });
    console.log(newDog);
    newDog.addTemperament(
      await Temperament.findAll({
        where: { name: temperament },
      })
    );
    res.status(202).send("Perrito creado exitosamente");
  } catch (err) {
    res.status(404).send(`No se pudo guardar la información, ${err}`);
  }
});
module.exports = router;
