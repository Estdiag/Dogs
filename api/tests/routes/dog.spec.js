/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dog, conn } = require("../../src/db.js");

const agent = session(app);
const dog = {
  name: "Pug",
  weightMin: "5",
  weightMax: "6",
  heightMin: "20",
  heightMax: "30",
  lifeSpanMin: "5",
  lifeSpanMax: "8",
  img: "https://soyunperro.com/wp-content/uploads/2019/08/perro-pug-en-el-jardin.jpg",
  temperament: ["Loving", "Protective", "Trainable"],
};

describe("dogs routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Dog.sync({ force: true }).then(() => Dog.create(dog)));
  describe("GET /dogs", () => {
    it("should get 200", () => agent.get("/dogs").expect(200));
  });
});

describe("POST /dogs", () => {
  it("responds with 404", () =>
    agent.post("/dogs").send({ name: "chanda" }).expect(404));
});
