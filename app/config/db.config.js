module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "divya6793",
  DB: "tutorials",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
