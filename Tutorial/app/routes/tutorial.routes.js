module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller");

  var router = require("express").Router();

  //create a new tutorial
  router.post("/", tutorials.create);

  //   //retrive all tutorials
  router.get("/", tutorials.findAll);

  //  //retrive all published  tutorials
  router.get("/", tutorials.findAllPublished);

  //   //retrive a single tutorial with id
  router.get("/", tutorials.findOne);

  //  //update a tutorial with id
  router.put("/", tutorials.update);

  //   //delete a tutorial with id
  router.delete("/", tutorials.delete);

  // //delete all tutorials
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
