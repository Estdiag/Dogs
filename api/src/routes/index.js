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
  try {
    if (name) {
      let dog = totalDogs.filter((d) =>
        d.name.toUpperCase().includes(name.toUpperCase())
      );
      if (dog.length > 0) res.json(dog);
      else res.json(totalDogs);
    } else {
      res.status(200).send(totalDogs);
    }
  } catch (err) {
    return err;
  }
});

router.get(`${DOGS}/temperament`, async (req, res) => {
  const { temperament } = req.query;
  const totalDogs = await getAllInfo();
  try {
    if (temperament) {
      let dog = totalDogs.filter((d) =>
        d.temperament.toUpperCase().includes(temperament.toUpperCase())
      );
      if (dog.length > 0) res.json(dog);
    } else {
      res.status(200).send(totalDogs);
    }
  } catch (err) {
    return err;
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
    res.status(404).json([]);
  }
});

router.get(TEMPERAMENT, async (req, res) => {
  const data = await temperApi();

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
    });

    newDog.addTemperament(
      await Temperament.findAll({
        where: { name: temperament },
      })
    );
    res.status(202).send("Perrito creado exitosamente");
  } catch (err) {
    console.log(err);
    res.status(404).send(`No se pudo guardar la informaci??n, ${err}`);
  }
});
module.exports = router;
