const { Router } = require("express");
const router = Router();
const { getAllInfo } = require("../functions/getAll.js");
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
  temperApi();
  const allTemperament = await Temperament.findAll();
  res.send(allTemperament);
});

router.post(DOGS, async (req, res) => {
  const {
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    life_span,
    img,
    temperament,
  } = req.body;
  try {
    let newDog = await Dog.create({
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      life_span,
      img,
    });

    newDog.addTemperament(
      await Temperament.findAll({
        where: { name: temperament },
      })
    );
    res.status(202).send("Perrito creado exitosamente");
  } catch (err) {
    res.send(`No se pudo guardar la información, ${err}`);
  }
});
module.exports = router;
