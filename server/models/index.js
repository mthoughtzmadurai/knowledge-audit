const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");
const config    = require('../config/config');

let sequelize = new Sequelize(config.dbSettings.database,
  config.dbSettings.username,
  config.dbSettings.password,
  config.dbSettings.options);

let db = {};

// if(process.env.NODE_ENV==='test'){
//   console.log('THIS IS A TEST - SEQUELIZE MOCKED')
// }

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
