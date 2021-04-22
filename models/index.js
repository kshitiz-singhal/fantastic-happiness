const dbConfig = require("../config.json");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.dburl;
db.category = require("./model.category")(mongoose);
db.product = require("./model.product")(mongoose);

module.exports = db;